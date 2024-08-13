

class Bootloader extends Phaser.Scene {

    constructor() {
        super('Bootloader');
    }

    preload() {
        console.log('Escena Bootloader preload');
        this.load.image('cuerpo', './../assets/img/body.png');
        this.load.image('comida', './../assets/img/food.png');
        this.load.image('tablero', './../assets/img/tablero.png');

        // Cargamos la fuente
        this.load.json('fontJSON', './../assets/font/font.json');
        this.load.image('font', './../assets/font/font.png');
        
        this.load.on('complete', () => {
            const fontJSON = this.cache.json.get('fontJSON');
            this.cache.bitmapFont.add('pixel', Phaser.GameObjects.RetroFont.Parse(this, fontJSON));
            this.scene.start('Menu');
        })
    }
}

export default Bootloader;