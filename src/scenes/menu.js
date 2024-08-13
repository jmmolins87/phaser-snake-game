

class Menu extends Phaser.Scene {
    constructor() {
        super('Menu');
    }

    preload() {
        console.log('Escena Menu preload');
    }

    create() {
        this.add.image(
            this.sys.game.config.width/2, 
            this.sys.game.config.height/2 - 50, 
            'comida'
        ).setScale(6);
        this.add.dynamicBitmapText(
            this.sys.game.config.width/2, 
            this.sys.game.config.height/2,
            'pixel', 'SNAKE', 20
        ).setOrigin(0.5);

        const pressButton = this.add.dynamicBitmapText(
            this.sys.game.config.width/2, 
            this.sys.game.config.height - 40,
            'pixel', 'PRESS ANY BUTTON', 8
        ).setOrigin(0.5);
        this.tweens.add({
            targets: pressButton,
            alpha: 0,
            duration: 500,
            ease: (x) => x < 0.5 ? 0 : 1,
            yoyo: true,
            repeat: -1
        });

        this.input.keyboard.on('keydown-RIGHT', () => {
            this.scene.start('Play');
        });
        this.input.keyboard.on('keydown-LEFT', () => {
            this.scene.start('Play');
        });
        this.input.keyboard.on('keydown-UP', () => {
            this.scene.start('Play');
        });
        this.input.keyboard.on('keydown-DOWN', () => {
            this.scene.start('Play');
        });
        this.input.keyboard.on('keydown-ENTER', () => {
            this.scene.start('Play');
        })
        this.input.on('pointerdown', () => {
            this.scene.start('Play');
        });
    }
}

export default Menu;