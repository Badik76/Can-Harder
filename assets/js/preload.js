var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'assets/ressources/sky.png');
    this.load.image('ground', 'assets/ressources/platform.png');
    this.load.image('star', 'assets/ressources/star.png');
    this.load.image('bomb', 'assets/ressources/bomb.png');
    this.load.spritesheet('dude', 'assets/ressources/dude.png', { frameWidth: 32, frameHeight: 48 });
}
