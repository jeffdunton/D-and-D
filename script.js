// disable/hide buttons and initilize player/sound variables
document.getElementById("calculate").disabled = true;
document.getElementById("selectButton1").style.display = "none";
document.getElementById("selectButton2").style.display = "none";
var element = document.getElementById('error');
var player1 = null;
var player2 = null;
var dude1 = {
  "type": "Player 1",
  "class": null,
  "health": null,
  "base_damage": null,
  "regen": null  
}
var dude2 = {
  "type": "Player 2",
  "class": null,
  "health": null,
  "base_damage": null,
  "regen": null
}
var attackSound = document.getElementById("attackSound");
var healSound = document.getElementById("healSound");
var selectSound = document.getElementById("selectSound"); 
var swipeSound = document.getElementById("swipeSound");
var fightSound = document.getElementById("fightSound");
var karateSound = document.getElementById("karateSound");
var gameOverSound = document.getElementById("gameOverSound");
var errorSound = document.getElementById("errorSound");
var wizardSound = document.getElementById("wizardSound");
var dragonSound = document.getElementById("dragonSound");
var warriorSound = document.getElementById("warriorSound");
var knightSound = document.getElementById("knightSound");
var readySound = document.getElementById("readySound");

// on character icon click, display player selections and Select buttons
function player1Type(player1) {
  karateSound.play(); 
  document.getElementById("player1choice").innerHTML = player1;
  document.getElementById("selectButton1").style.display = "inline-block";
}
function player2Type(player2) {
  karateSound.play(); 
  document.getElementById("player2choice").innerHTML = player2;
  document.getElementById("selectButton2").style.display = "inline-block";
}

// on select button click display player selections above Start Game button
function displayRadioValue1() { 
  var ele = document.getElementsByName('player1'); 
  for(i = 0; i < ele.length; i++) { 
    if(ele[i].checked) {
      var player1 = ele[i].value;
      window.player1 = ele[i].value;
      document.getElementById("result1").innerHTML = player1;
      if (player1 === "Warrior<br>HP: 1000<br>Base Damage: 10<br>Regen: 5") {
      warriorSound.play(); 
      } else if (player1 === "Knight<br>HP: 1250<br>Base Damage: 8<br>Regen: 2") {
      knightSound.play(); 
      } else if (player1 === "Wizard<br>HP: 850<br>Base Damage: 6<br>Regen: 50") {
      wizardSound.play(); 
      } else if (player1 === "Dragon<br>HP: 1400<br>Base Damage: 3<br>Regen: 10") {
      dragonSound.play(); 
      }
    }
  }
} 
function displayRadioValue2() { 
  var ele = document.getElementsByName('player2'); 
  for(i = 0; i < ele.length; i++) { 
    if(ele[i].checked) {
      var player2 = ele[i].value;
      window.player2 = ele[i].value;
      document.getElementById("result2").innerHTML = player2;
      if (player2 === "Warrior<br>HP: 1000<br>Base Damage: 10<br>Regen: 5") {
      warriorSound.play(); 
      } else if (player2 === "Knight<br>HP: 1250<br>Base Damage: 8<br>Regen: 2") {
      knightSound.play(); 
      } else if (player2 === "Wizard<br>HP: 850<br>Base Damage: 6<br>Regen: 50") {
      wizardSound.play(); 
      } else if (player2 === "Dragon<br>HP: 1400<br>Base Damage: 3<br>Regen: 10") {
      dragonSound.play(); 
      }
    }
  }
} 

// set dude1 and dude2 values
function validatePlayer1(player) {
  if (player === "Warrior<br>HP: 1000<br>Base Damage: 10<br>Regen: 5") {
    dude1.class = "Warrior";
    dude1.health = 1000;
    dude1.base_damage = 10;
    dude1.regen = 5;
  } else if (player === "Knight<br>HP: 1250<br>Base Damage: 8<br>Regen: 2") {
    dude1.class = "Knight";
    dude1.health = 1250;
    dude1.base_damage = 8;
    dude1.regen = 2;
  } else if (player === "Wizard<br>HP: 850<br>Base Damage: 6<br>Regen: 50") {
    dude1.class = "Wizard";
    dude1.health = 850;
    dude1.base_damage = 6;
    dude1.regen = 25;
  } else if (player === "Dragon<br>HP: 1400<br>Base Damage: 3<br>Regen: 10") {
    dude1.class = "Dragon";
    dude1.health = 1400;
    dude1.base_damage = 3;
    dude1.regen = 10;
  }
}

function validatePlayer2(player) {
  if (player === "Warrior<br>HP: 1000<br>Base Damage: 10<br>Regen: 5") {
    dude2.class = "Warrior";
    dude2.health = 1000;
    dude2.base_damage = 10;
    dude2.regen = 5;
  } else if (player === "Knight<br>HP: 1250<br>Base Damage: 8<br>Regen: 2") {
    dude2.class = "Knight";
    dude2.health = 1250;
    dude2.base_damage = 8;
    dude2.regen = 2;
  } else if (player === "Wizard<br>HP: 850<br>Base Damage: 6<br>Regen: 50") {
    dude2.class = "Wizard";
    dude2.health = 850;
    dude2.base_damage = 6;
    dude2.regen = 50;
  } else if (player === "Dragon<br>HP: 1400<br>Base Damage: 3<br>Regen: 10") {
    dude2.class = "Dragon";
    dude2.health = 1400;
    dude2.base_damage = 3;
    dude2.regen = 10;
  }
}

// validate players and enable start button
function enable() {
  if ((player1 != null) && (player2 != null)) {
    validatePlayer1(player1);
    validatePlayer2(player2);
    document.getElementById("calculate").disabled = false;
    document.getElementById("calculate").style.opacity = "1.0";
    document.getElementById("calculate").style.color = "#ffffff";
    document.getElementById("calculate").style.background = "green";
    document.getElementById("calculate").style.cursor = "pointer";
    document.getElementById("enable").disabled = true;
    document.getElementById("enable").style.opacity = "0.2";
    document.getElementById("enable").style.cursor = "not-allowed";
    document.getElementById("error").innerHTML = ""
    readySound.play();
  } else if ((player1 === null) && (player2 != null)) {
    document.getElementById("error").innerHTML = "You need to choose a character for player 1!";
    errorSound.play();
  } else if ((player1 != null) && (player2 === null)) {
    document.getElementById("error").innerHTML = "You need to choose a character for player 2!";
    errorSound.play();
  } else if ((player1 === null) && (player2 === null)) {
    document.getElementById("error").innerHTML = "You need to choose your characters!";
    errorSound.play();
  }
}

function attackAnimation1() {
attackSound.play();
document.getElementById("character1").style.transform = "rotate(360deg)";
document.getElementById("character1").style.opacity = "1.0";
setTimeout(attackAnimationFade1, 1000) 
}

function attackAnimationFade1() {
document.getElementById("character1").style.transform = "rotate(-360deg)";
document.getElementById("character1").style.opacity = "0.2";
}

function attackAnimation2() {
attackSound.play();
document.getElementById("character2").style.transform = "rotate(360deg)";
document.getElementById("character2").style.opacity = "1.0";
setTimeout(attackAnimationFade2, 1000) 
}

function attackAnimationFade2() {
document.getElementById("character2").style.transform = "rotate(-360deg)";
document.getElementById("character2").style.opacity = "0.2";
}

function healAnimation1() {
healSound.play();
document.getElementById("character1A").style.transform = "rotate(360deg)";
document.getElementById("character1A").style.opacity = "1.0";
setTimeout(healAnimationFade1, 1000) 
}

function healAnimationFade1() {
document.getElementById("character1A").style.transform = "rotate(-360deg)";
document.getElementById("character1A").style.opacity = "0.2";
}

function healAnimation2() {
healSound.play();
document.getElementById("character2A").style.transform = "rotate(360deg)";
document.getElementById("character2A").style.opacity = "1.0";
setTimeout(healAnimationFade2, 1000) 
}

function healAnimationFade2() {
document.getElementById("character2A").style.transform = "rotate(-360deg)";
document.getElementById("character2A").style.opacity = "0.2";
}

// play start sound and wait 3 seconds to enable start game button
function countdown() {
fightSound.play();
setTimeout(startGame, 3000) 
}

// hide buttons and enable attack screen buttons
function startGame() {
  document.getElementById("buttons").style.width = "39px";
  document.getElementById("buttons").style.padding.left = "0px";
  document.getElementById("buttons").style.padding.right = "0px";
  document.getElementById("enable").style.display = "none";
  document.getElementById("calculate").style.display = "none";
  document.getElementById("attackUI1").style.display = "block";
  document.getElementById("attackUI2").style.display = "block";
  document.getElementById("attackUI1").style.width = "50%";
  document.getElementById("attackUI2").style.width = "50%";
  document.getElementById("Player1Choices").style.opacity = "0.2";
  document.getElementById("Player2Choices").style.opacity = "0.2";
  document.getElementById("selectButton1").disabled = true;
  document.getElementById("selectButton2").disabled = true;
  var inputs = document.getElementsByTagName("input"); 
    for (var i = 0; i < inputs.length; i++) { 
      inputs[i].disabled = true;
  }
  document.getElementById("attack1").disabled = false;
  document.getElementById("attack1").style.opacity = "1.0";
  document.getElementById("attack1").style.cursor = "pointer";
  document.getElementById("heal1").disabled = false;
  document.getElementById("heal1").style.opacity = "1.0";
  document.getElementById("heal1").style.cursor = "pointer";
  document.getElementById("attack2").disabled = true;
  document.getElementById("attack2").style.opacity = "0.2";
  document.getElementById("attack2").style.cursor = "not-allowed";
  document.getElementById("heal2").disabled = true;
  document.getElementById("heal2").style.opacity = "0.2";
  document.getElementById("heal2").style.cursor = "not-allowed";
}

// attack functions
function attack1(player, enemy) {
  attackAnimation1();
  var loser = enemy.class + " has been defeated. " + "The winner is " + player.class;
  var player_attack = attack_roll(player.base_damage);
  enemy.health = enemy.health - player_attack;
  element.innerHTML = ("<p>" + player.class + " did " + player_attack + " damage and " + enemy.class + " has " + enemy.health + " health. </p>");
  document.getElementById("attack2").disabled = false;
  document.getElementById("attack2").style.opacity = "1.0";
  document.getElementById("attack2").style.cursor = "pointer";
  document.getElementById("heal2").disabled = false;
  document.getElementById("heal2").style.opacity = "1.0";
  document.getElementById("heal2").style.cursor = "pointer";
  document.getElementById("attack1").disabled = true;
  document.getElementById("attack1").style.opacity = "0.2";
  document.getElementById("attack1").style.cursor = "not-allowed";
  document.getElementById("heal1").disabled = true;
  document.getElementById("heal1").style.opacity = "0.2";
  document.getElementById("heal1").style.cursor = "not-allowed";
  if (enemy.health <= 0) {
    element.innerHTML += loser;
    document.getElementById("attack1").disabled = true;
    document.getElementById("attack2").disabled = true;
    document.getElementById("heal1").disabled = true;
    document.getElementById("heal2").disabled = true;
    document.getElementById("attack1").style.opacity = "0.2";
    document.getElementById("attack2").style.opacity = "0.2";
    document.getElementById("heal1").style.opacity = "0.2";
    document.getElementById("heal2").style.opacity = "0.2";
    document.getElementById("attack1").style.cursor = "not-allowed";
    document.getElementById("attack2").style.cursor = "not-allowed";
    document.getElementById("heal1").style.cursor = "not-allowed";
    document.getElementById("heal2").style.cursor = "not-allowed";
    document.getElementById("error").innerHTML = player.class + " Wins - GAME OVER";
    gameOverSound.play();
  } else {
    setTimeout(player2Move, 3000);
  }
}
function attack2(player, enemy) {
  attackAnimation2();
  var loser = player.class + " has been defeated. " + "The winner is " + enemy.class;
  var enemy_attack = attack_roll(enemy.base_damage);
  player.health = player.health - enemy_attack;
  element.innerHTML = ("<p>" + enemy.class + " did " + enemy_attack + " damage and " + player.class +  " has " + player.health + " health. </p>");
  document.getElementById("attack1").disabled = false;
  document.getElementById("attack1").style.opacity = "1.0";
  document.getElementById("attack1").style.cursor = "pointer";
  document.getElementById("heal1").disabled = false;
  document.getElementById("heal1").style.opacity = "1.0";
  document.getElementById("heal1").style.cursor = "pointer";
  document.getElementById("attack2").disabled = true;
  document.getElementById("attack2").style.opacity = "0.2";
  document.getElementById("attack2").style.cursor = "not-allowed";
  document.getElementById("heal2").disabled = true;
  document.getElementById("heal2").style.opacity = "0.2";
  document.getElementById("heal2").style.cursor = "not-allowed";
  if (player.health <= 0) {
    element.innerHTML += loser;
    document.getElementById("attack1").disabled = true;
    document.getElementById("attack2").disabled = true;
    document.getElementById("heal1").disabled = true;
    document.getElementById("heal2").disabled = true;
    document.getElementById("attack1").style.opacity = "0.2";
    document.getElementById("attack2").style.opacity = "0.2";
    document.getElementById("heal1").style.opacity = "0.2";
    document.getElementById("heal2").style.opacity = "0.2";
    document.getElementById("attack1").style.cursor = "not-allowed";
    document.getElementById("attack2").style.cursor = "not-allowed";
    document.getElementById("heal1").style.cursor = "not-allowed";
    document.getElementById("heal2").style.cursor = "not-allowed";
    document.getElementById("error").innerHTML = enemy.class + " Wins - GAME OVER";
    gameOverSound.play();
  }
}

// heal functions
function heal1(player) {
  healAnimation1(); 
  var player_heal = heal_roll(player.regen);
  player.health = player.health + player_heal;
  element.innerHTML = ("<p>" + player.class + " regained " + player_heal + " health and now has " + player.health + " health. </p>");
  setTimeout(autoAttack, 3000);
  document.getElementById("attack2").disabled = false;
  document.getElementById("attack2").style.opacity = "1.0";
  document.getElementById("attack2").style.cursor = "pointer";
  document.getElementById("heal2").disabled = false;
  document.getElementById("heal2").style.opacity = "1.0";
  document.getElementById("heal2").style.cursor = "pointer";
  document.getElementById("attack1").disabled = true;
  document.getElementById("attack1").style.opacity = "0.2";
  document.getElementById("attack1").style.cursor = "not-allowed";
  document.getElementById("heal1").disabled = true;
  document.getElementById("heal1").style.opacity = "0.2";
  document.getElementById("heal1").style.cursor = "not-allowed";
}
function heal2(enemy) {
  healAnimation2(); 
  var enemy_heal = heal_roll(enemy.regen);
  enemy.health = enemy.health + enemy_heal;
  element.innerHTML = ("<p>" + enemy.class + " regained " + enemy_heal + " health and now has " + enemy.health + " health. </p>");
  document.getElementById("attack1").disabled = false;
  document.getElementById("attack1").style.opacity = "1.0";
  document.getElementById("attack1").style.cursor = "pointer";
  document.getElementById("heal1").disabled = false;
  document.getElementById("heal1").style.opacity = "1.0";
  document.getElementById("heal1").style.cursor = "pointer";
  document.getElementById("attack2").disabled = true;
  document.getElementById("attack2").style.opacity = "0.2";
  document.getElementById("attack2").style.cursor = "not-allowed";
  document.getElementById("heal2").disabled = true;
  document.getElementById("heal2").style.opacity = "0.2";
  document.getElementById("heal2").style.cursor = "not-allowed";
}

// auto attacks
function autoAttack() {
  attack2(dude1, dude2);
}
function autoHeal() {
  heal2(dude2);
}
var autoTurn = [autoAttack, autoHeal];
function randomNumber(x) {
	return Math.floor( Math.random() * x );
}
function player2Move() {
autoTurn[ randomNumber(autoTurn.length) ]();
}

// random attack and heal generation
function attack_roll(base_damage) {
  return Math.floor(Math.random() * 100) + base_damage;
}
function heal_roll(regen) {
  return Math.floor(Math.random() * 100) + regen;
}

// clear all data
function resetGame() {
swipeSound.play(); 
document.getElementById("player1choice").innerHTML = null;
document.getElementById("player2choice").innerHTML = null;
document.getElementById("result1").innerHTML = "?";
document.getElementById("result2").innerHTML = "?";
document.getElementById("calculate").disabled = true;
document.getElementById("calculate").style.opacity = "0.4";
document.getElementById("calculate").style.color = "#ffffff";
document.getElementById("calculate").style.background = "green";
document.getElementById("calculate").style.cursor = "not-allowed";
document.getElementById("buttons").style.width = "100%";
document.getElementById("buttons").style.padding.left = "20px";
document.getElementById("buttons").style.padding.right = "20px";
document.getElementById("enable").style.display = "inline-block";
document.getElementById("enable").disabled = false;
document.getElementById("enable").style.opacity = "1.0";
document.getElementById("enable").style.cursor = "pointer";
document.getElementById("calculate").style.display = "inline-block";
var ele = document.getElementsByName("player1");
  for(var i=0;i<ele.length;i++)
    ele[i].checked = false;
    var ele = document.getElementsByName("player2");
  for(var i=0;i<ele.length;i++)
    ele[i].checked = false;
window.player1 = null;
window.player2 = null;
document.getElementById("buttons").style.display = "block";
document.getElementById("attackUI1").style.display = "none";
document.getElementById("attackUI2").style.display = "none";
document.getElementById("Player1Choices").style.opacity = "1.0";
document.getElementById("Player2Choices").style.opacity = "1.0";
document.getElementById("selectButton1").disabled = false;
document.getElementById("selectButton2").disabled = false;
document.getElementById("selectButton1").style.display = "none";
document.getElementById("selectButton2").style.display = "none";
document.getElementById("attack1").disabled = false;
document.getElementById("attack2").disabled = false;
document.getElementById("heal1").disabled = false;
document.getElementById("heal2").disabled = false;
document.getElementById("attack1").style.opacity = "1.0";
document.getElementById("attack2").style.opacity = "1.0";
document.getElementById("heal1").style.opacity = "1.0";
document.getElementById("heal2").style.opacity = "1.0";
document.getElementById("attack1").style.cursor = "pointer";
document.getElementById("attack2").style.cursor = "pointer";
document.getElementById("heal1").style.cursor = "pointer";
document.getElementById("heal2").style.cursor = "pointer";
document.getElementById("error").innerHTML = "";
var inputs = document.getElementsByTagName("input"); 
  for (var i = 0; i < inputs.length; i++) { 
    inputs[i].disabled = false;
  } 
}