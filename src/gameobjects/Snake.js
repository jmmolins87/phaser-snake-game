

class Snake {
    constructor(scene) {
        this.scene = scene;
        this.cuerpo = [];
        this.dir = 'izquierda';
        this.timmer = 0;
        this.oldDir = 'derecha';

        // Cuerpo de la serpiente al incializarse
        let itemsBodySnake = 2;
        // Genera el cuerpo de la serpiente
        for( let i = 0; i < itemsBodySnake; i++ ) {
            this.cuerpo.push(this.scene.physics.add.image(100 + i * 10, 100, 'cuerpo').setOrigin(0));
        }

        // Código para cuándo la serpiente se come a sí misma. Genera colisiones
        for( let i = 1; i < itemsBodySnake; i++ ) {
            this.scene.physics.add.collider(this.cuerpo[0], this.cuerpo[i], () => this.crash());
        }
    }

    grows() {
        const obj = this.cuerpo[this.cuerpo.length - 1];
        const newObj = this.scene.physics.add.image(obj.x, obj.y, 'cuerpo').setOrigin(0);
        this.cuerpo.push(newObj);
        this.scene.physics.add.collider(this.cuerpo[0], newObj, () => this.crash());
    }

    crash() {
        this.scene.scene.start('Gameover');
    }

    changeMov(dir) {
        // No dejamos que gire sobre si mismo
        if(this.oldDir != dir) {
            this.dir = dir;
        }
    }

    update(time) {
        if(time > this.timmer) {

            for( let i = this.cuerpo.length -1; i > 0; i--) {
                this.cuerpo[i].x = this.cuerpo[i - 1].x;
                this.cuerpo[i].y = this.cuerpo[i - 1].y;
                // La serpiente vuelve a entrar en el lienza por los lados
                this.cuerpo[this.cuerpo.length - 1 - i].x = Phaser.Math.Wrap(
                    this.cuerpo[this.cuerpo.length - 1 - i].x, 0, this.scene.sys.game.config.width
                );
                // La serpiente vuelve a entrar en el lienza por arriba y abajo
                this.cuerpo[this.cuerpo.length - 1 - i].y = Phaser.Math.Wrap(
                    this.cuerpo[this.cuerpo.length - 1 - i].y, 20, this.scene.sys.game.config.height
                );
            }

            switch(this.dir) {
                case 'derecha':
                    this.cuerpo[0].x += 10;
                    this.oldDir = 'izquierda';
                break;
                case 'izquierda':
                    this.cuerpo[0].x -= 10;
                    this.oldDir = 'derecha';
                break;
                case 'arriba':
                    this.cuerpo[0].y -= 10;
                    this.oldDir = 'abajo';
                break;
                case 'abajo':
                    this.cuerpo[0].y += 10;
                    this.oldDir = 'arriba';
                break;
            }
            this.timmer = time + 150;
        }
    }
}

export default Snake;