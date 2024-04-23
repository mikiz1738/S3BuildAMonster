class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY-20;

        this.browX = this.bodyX;
        this.browY = this.bodyY-50;

        this.fangX = this.bodyX;
        this.fangY = this.bodyY+30;
        
        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY+30;

        this.rightHornX = this.bodyX+50;
        this.rightHornY = this.bodyY-75;

        this.leftHornX = this.bodyX-50;
        this.leftHornY = this.bodyY-75;
        
        this.leftHandX = this.bodyX-100;
        this.leftHandY = this.bodyY-50;

        this.rightHandX = this.bodyX+100;
        this.rightHandY = this.bodyY-50;

        this.leftLegX = this.bodyX-80;
        this.leftLegY = this.bodyY+110;

        this.rightLegX = this.bodyX+80;
        this.rightLegY = this.bodyY+110;

        this.sKey = null;
        this.fKey = null;
        this.aKey = null;
        this.dKey = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_yellow.png");
        
        my.sprite.brow = this.add.sprite(this.browX, this.browY, "monsterParts", "mouth_closed_teeth.png");
        
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fang = this.add.sprite(this.fangX, this.fangY, "monsterParts", "mouthF.png")
        my.sprite.fang.visible = false;

        my.sprite.leftHorn = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_red_horn_large.png");
        my.sprite.leftHorn.flipX = true;

        my.sprite.rightHorn = this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_red_horn_large.png");
        my.sprite.leftHand = this.add.sprite(this.leftHandX, this.leftHandY, "monsterParts", "arm_redA.png");
        my.sprite.leftHand.flipX = true;
        my.sprite.leftHand.flipY = true;
        
        my.sprite.rightHand = this.add.sprite(this.rightHandX, this.rightHandY, "monsterParts", "arm_redA.png");
        my.sprite.rightHand.flipY = true;
        
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_redC.png");
        my.sprite.leftLeg.flipX = true;
        
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_redC.png");
        
        // this.input.keyboard.on("keydown", function (event){
        //     console.log(event.code);
        //     if ( event.code == "KeyD"){
        //         console.log("D!")
        //     }
        // })

        this.input.keyboard.on("keydown", function (event){
            //console.log(event.code);
            if ( event.code == "KeyA"){
                for(let prop in my.sprite){
                    my.sprite[prop].x-=10
                }
            }
        })

        this.input.keyboard.on("keydown", function (event){
            //console.log(event.code);
            if ( event.code == "KeyD"){
                for(let prop in my.sprite){
                    my.sprite[prop].x+=10;
                }
            }
        })
        
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        //console.log("lefthand x coord: "+ my.sprite.leftHand.x);
        if(this.sKey.isDown){
            my.sprite.fang.visible = false;
            my.sprite.mouth.visible = true;
        }
        //my.sprite.leftHand.x + 200;
        if(this.fKey.isDown){
            my.sprite.mouth.visible = false;
             my.sprite.fang.visible = true;
        }
        
       
    }

}