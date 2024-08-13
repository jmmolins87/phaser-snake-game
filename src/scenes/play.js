
import Snake from './../gameobjects/Snake.js';
import Comida from './../gameobjects/Food.js';

class Play extends Phaser.Scene {
    constructor() {
        super('Play');
    }

    preload() {
        console.log('Escena Play');
        this.snake = new Snake(this);
        this.comida = new Comida(this);
    }

    create() {

        this.scene.launch('UI');
        const sceneUI = this.scene.get('UI')

        this.input.keyboard.on('keydown-RIGHT', () => {
            this.snake.changeMov('derecha');
        });
        this.input.keyboard.on('keydown-LEFT', () => {
            this.snake.changeMov('izquierda');
        });
        this.input.keyboard.on('keydown-UP', () => {
            this.snake.changeMov('arriba');
        });
        this.input.keyboard.on('keydown-DOWN', () => {
            this.snake.changeMov('abajo');
        });

        // Colisones de cabeza con comida
        this.physics.add.collider(this.snake.cuerpo[0], this.comida.comida, () => {
            this.comida.createFood();
            this.snake.grows();
            sceneUI.addPoint();
        });
    }
    
    update(time) {
        this.snake.update(time);
    }
}

export default Play;