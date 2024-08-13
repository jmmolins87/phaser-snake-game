

class Comida {
    constructor(scene) {
        this.scene = scene;
        this.comida = this.scene.physics.add.group({
            key: 'comida',
            repeat: 0,
            setXY: { x: 30, y: 30, stepX: 10 }
        })
        this.comida.getChildren()[0].setOrigin(0).setDepth(-1);
    }

    createFood() {
        let x = Phaser.Math.Between(30, this.scene.sys.game.config.width - 30);
        let y = Phaser.Math.Between(20, this.scene.sys.game.config.height - 20);

        x = Phaser.Math.Snap.To(x, 10);
        y = Phaser.Math.Snap.To(y, 10);

        this.comida.getChildren()[0].destroy();
        this.comida.create(x, y, 'comida');
        this.comida.getChildren()[0].setOrigin(0).setDepth(-1);
    }
}

export default Comida;