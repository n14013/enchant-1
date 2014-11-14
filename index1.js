'use strict';

enchant();

var CHARA_IMAGE = "///home/n14013/enchant-1/chara2.gif";
var game;

var Boar = Class.create(Sprite,{
  initialize:function(){
    Sprite.call(this,32,32);
    this.x = random(game.width - this.width);
    this.y = random(game.height - this.height);
    this.image = game.assets[CHARA_IMAGE];
    game.currentScene.addChild(this);

    function random (num){
      return ~~(Math.random() * num);
    }
  },
  hits:function(){
    this.parentNode.removeChild(this);
  },
  ontouchstart:function(){
    this.tits();
  }
});
  var Boars = Class.create({
    initialize:function(){
      this.max = 50;
      this.boars = []; 
      this.createBoars();
    },
    createBoars:function() {
      var random = ~~(Math.random() * this.max + 1);
      for (var i = 0; i < random; i++){
        this.boars.push(new Boar);
      };
    }
  });


window.onload = function() {
  game = new Game();
  game.preload(CHARA_IMAGE);  //画像を読み込み	
  game.hits = 0;

  var scene = game.rootScene; 
  scene.backgroundColor = "black"; //背景色

  game.onload = function(){ 
    var boars = new Boars; 
   
    scene.addEventListener('enterframe',function(){
    if (isEnd()){
      game.end();
    }
      
      function isEnd(){
        return (game.hits === boars.boars.length)
    });   

  };
  game.start();


};
/*  game.onload = function() {

    var scene = game.rootScene; 
    scene.backgroundColor = "black"; //背景色

    var touchFunc = function() {


    };

    //猪を生成
//    var x  = Math.floor(Math.random() * 50);

//    for (var i=1; i<x; ++i) {     

      var boar = new Sprite(32, 32);
      boar.moveTo(Math.random()*(320-32), Math.random()*(320-32)); //ランダムな位置に
      boar.image = game.assets[CHARA_IMAGE]; //画像をセット
      boar.ontouchstart = function(){
        this.parentNode.removeChild(this); //タッチして消す
      } 
      scene.addChild(boar); 

    }  

    scene.onenterframe = function() {

      if (scene.childNodes.length === 0) { 

        alert("Game Clear!!"); 
        scene.onenterframe = null;

      }

    };

*/ 
