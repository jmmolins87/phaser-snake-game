

class Gameover extends Phaser.Scene {
    constructor() {
        super('Gameover');
    }

    create() {
        this.scene.stop('UI');
        this.add.dynamicBitmapText(
            this.sys.game.config.width / 2, 
            this.sys.game.config.height / 2 - 30, 
            'pixel', 'GAME OVER', 20
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
        this.event = setTimeout(() => {
            this.leaveScene();
        }, 5000)
        this.input.keyboard.on('keydown-ENTER', () => this.leaveScene());
        this.input.on('pointerdown', () => this.leaveScene());
    }

    leaveScene() {
        clearTimeout(this.event);
        this.scene.start('Menu');
    }
}

export default Gameover;