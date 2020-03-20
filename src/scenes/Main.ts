import { Player, Character, GameObject } from "../core";
import { NPC_DATA, GAME_OBJECTS_DATA } from "../data";
import { tryToProvideAction } from "../utils";
import { COLISION_BLOCKS } from "../consts";
import { DataService } from "../services";

export class Main extends Phaser.Scene {
    private _collisionLayer: Phaser.Tilemaps.StaticTilemapLayer;
    private _gameMap: Phaser.Tilemaps.Tilemap;

    private _dataService = DataService.getInstance();

    constructor() {
        super('main');
    }

    public create(): void {
        this._loadEntities();
        this._loadWorldData();
        this._createNpcsAndObjects();
        this._createPlayer();
        this._actionHookes();
    }
    
    public update(): void {
        this._dataService.player.move();
        this._moveNpcs();
    }

    private _loadEntities(): void {
        this._gameMap = this.make.tilemap({ key: 'map' });
        const gameTiles = this._gameMap.addTilesetImage('tilemap2x', 'tiles');
        this._gameMap.createStaticLayer(0, gameTiles, 0, 0);
        this._collisionLayer = this._gameMap.createStaticLayer("collision", gameTiles, 0, 0);
    }

    private _loadWorldData(): void {
        this._collisionLayer.setCollisionBetween(COLISION_BLOCKS.start, COLISION_BLOCKS.stop);
        this.impact.world.setCollisionMapFromTilemapLayer(this._collisionLayer, { defaultCollidingSlope: 1 });
        this.cameras.main.setBounds(0, 0, this._gameMap.widthInPixels, this._gameMap.heightInPixels);
    }

    private _createPlayer(): void {
        this._dataService.player = new Player(this.impact, this.anims, this.input);
        this.cameras.main.startFollow(this._dataService.player.instance);
    }
    
    private _createNpcsAndObjects(): void {
        NPC_DATA.forEach(npcData => {
            this._dataService.npcs.push(new Character(this.impact, this.anims, npcData));
        });
        GAME_OBJECTS_DATA.forEach(objectData => {
            this._dataService.objects.push(new GameObject(objectData));
        });
    }

    private _moveNpcs(): void {
        this._dataService.npcs.forEach(npc => npc.move());
    }

    private _actionHookes() {
        this.input.keyboard.on('keydown', (key: Phaser.Input.Keyboard.Key) => {
            switch(key.keyCode) {
                case 32: /* Space */
                tryToProvideAction(
                    this._dataService.player,
                    this._dataService.npcs,
                    this._dataService.objects
                ); 
                break;
            }
        });
    }
}


