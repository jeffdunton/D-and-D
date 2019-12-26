// initilize player/sound variables
const warrior = "Warrior<br>HP: 1000<br>Base Damage: 10<br>Regen: 5";
const knight = "Knight<br>HP: 1250<br>Base Damage: 8<br>Regen: 2";
const wizard = "Wizard<br>HP: 850<br>Base Damage: 6<br>Regen: 50";
const dragon = "Dragon<br>HP: 1400<br>Base Damage: 3<br>Regen: 10";

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
var poisonSound = document.getElementById("poisonSound");
var critHitSound = document.getElementById("critHitSound");
var freezeSound = document.getElementById("freezeSound");

var attackIcon1 = document.getElementById("attackIcon1");
var attackIcon2 = document.getElementById("attackIcon2");
var healIcon1 = document.getElementById("healIcon1");
var healIcon2 = document.getElementById("healIcon2");
var critHitIcon1 = document.getElementById("critHitIcon1");
var critHitIcon2 = document.getElementById("critHitIcon2");
var poisonIcon1 = document.getElementById("poisonIcon1");
var poisonIcon2 = document.getElementById("poisonIcon2");

var attack1 = document.getElementById("attack1");
var attack2 = document.getElementById("attack2");
var heal1 = document.getElementById("heal1");
var heal2 = document.getElementById("heal2");
var critHit1 = document.getElementById("critHit1");
var critHit2 = document.getElementById("critHit2");
var poison1 = document.getElementById("poison1");
var poison2 = document.getElementById("poison2");
var freeze1 = document.getElementById("freeze1");
var freeze2 = document.getElementById("freeze2");

var calculate = document.getElementById("calculate");
var selectButton1 = document.getElementById("selectButton1");
var selectButton2 = document.getElementById("selectButton2");

var element = document.getElementById("error");
var buttons = document.getElementById("buttons");
var enable = document.getElementById("enable");
var error = document.getElementById("error");

// disable/hide buttons 
calculate.disabled = true;
selectButton1.style.display = "none";
selectButton2.style.display = "none";

// on character icon click, display player selections and Select buttons
function player1Type(player1) {
  karateSound.play(); 
  document.getElementById("player1choice").innerHTML = player1;
  selectButton1.style.display = "inline-block";
}
function player2Type(player2) {
  karateSound.play(); 
  document.getElementById("player2choice").innerHTML = player2;
  selectButton2.style.display = "inline-block";
}

// on select button click display player selections above Start Game button
function displayRadioValue1() { 
  var ele = document.getElementsByName('player1'); 
  for(i = 0; i < ele.length; i++) { 
    if(ele[i].checked) {
      var player1 = ele[i].value;
      window.player1 = ele[i].value;
      document.getElementById("result1").innerHTML = player1;
      if (player1 === warrior) {
      warriorSound.play(); 
      } else if (player1 === knight) {
      knightSound.play(); 
      } else if (player1 === wizard) {
      wizardSound.play(); 
      } else if (player1 === dragon) {
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
      if (player2 === warrior) {
      warriorSound.play(); 
      } else if (player2 === knight) {
      knightSound.play(); 
      } else if (player2 === wizard) {
      wizardSound.play(); 
      } else if (player2 === dragon) {
      dragonSound.play(); 
      }
    }
  }
} 

// set dude1 and dude2 values
function validatePlayer(player,dudeNumber) {
  if (player === warrior) {
    dudeNumber.class = "Warrior";
    dudeNumber.health = 1000;
    dudeNumber.base_damage = 10;
    dudeNumber.regen = 5;
  } else if (player === knight) {
    dudeNumber.class = "Knight";
    dudeNumber.health = 1250;
    dudeNumber.base_damage = 8;
    dudeNumber.regen = 2;
  } else if (player === wizard) {
    dudeNumber.class = "Wizard";
    dudeNumber.health = 850;
    dudeNumber.base_damage = 6;
    dudeNumber.regen = 25;
  } else if (player === dragon) {
    dudeNumber.class = "Dragon";
    dudeNumber.health = 1400;
    dudeNumber.base_damage = 3;
    dudeNumber.regen = 10;
  }
}

// validate players and enable start button
function enableStart() {
  if ((player1 != null) && (player2 != null)) {
    validatePlayer(player1,dude1);
    validatePlayer(player2,dude2);
    calculate.disabled = false;
    calculate.style.opacity = "1.0";
    calculate.style.color = "#ffffff";
    calculate.style.background = "green";
    calculate.style.cursor = "pointer";
    enable.disabled = true;
    enable.style.opacity = "0.2";
    enable.style.cursor = "not-allowed";
    document.getElementById("error").innerHTML = ""
    readySound.play();
  } else if ((player1 === null) && (player2 != null)) {
    error.innerHTML = "You need to choose a character for player 1!";
    errorSound.play();
  } else if ((player1 != null) && (player2 === null)) {
    error.innerHTML = "You need to choose a character for player 2!";
    errorSound.play();
  } else if ((player1 === null) && (player2 === null)) {
    error.innerHTML = "You need to choose your characters!";
    errorSound.play();
  }
}

function attackAnimation(attackIconNumber) {
attackSound.play();
attackIconNumber.style.transform = "rotate(360deg)";
attackIconNumber.style.opacity = "1.0";
setTimeout(attackAnimationFade, 1000, attackIconNumber); 
}

function attackAnimationFade(attackIconNumber) {
attackIconNumber.style.transform = "rotate(-360deg)";
attackIconNumber.style.opacity = "0.2";
}

function healAnimation(healIconNumber) {
healSound.play();
healIconNumber.style.transform = "rotate(360deg)";
healIconNumber.style.opacity = "1.0";
setTimeout(healAnimationFade, 1000, healIconNumber);
}

function healAnimationFade(healIconNumber) {
healIconNumber.style.transform = "rotate(-360deg)";
healIconNumber.style.opacity = "0.2";
}

function critHitAnimation(critHitIconNumber) {
critHitSound.play();
critHitIconNumber.style.transform = "rotate(360deg)";
critHitIconNumber.style.opacity = "1.0";
setTimeout(critHitAnimationFade, 1000, critHitIconNumber);
}

function critHitAnimationFade(critHitIconNumber) {
critHitIconNumber.style.transform = "rotate(-360deg)";
critHitIconNumber.style.opacity = "0.2";
}

function poisonAnimation(poisonIconNumber) {
poisonSound.play();
poisonIconNumber.style.transform = "rotate(360deg)";
poisonIconNumber.style.opacity = "1.0";
setTimeout(poisonAnimationFade, 1000, poisonIconNumber); 
}

function poisonAnimationFade(poisonIconNumber) {
poisonIconNumber.style.transform = "rotate(-360deg)";
poisonIconNumber.style.opacity = "0.2";
}

function freezeAnimation(freezeIconNumber) {
freezeSound.play();
freezeIconNumber.style.transform = "rotate(360deg)";
freezeIconNumber.style.opacity = "1.0";
setTimeout(freezeAnimationFade, 1000, freezeIconNumber);
}

function freezeAnimationFade(freezeIconNumber) {
freezeIconNumber.style.transform = "rotate(-360deg)";
freezeIconNumber.style.opacity = "0.2";
}

// play start sound and wait 3 seconds to enable start game button
function countdown() {
fightSound.play();
setTimeout(startGame, 3000) 
}

// hide buttons and enable attack screen buttons
function startGame() {
  buttons.style.width = "39px";
  buttons.style.padding.left = "0px";
  buttons.style.padding.right = "0px";
  enable.style.display = "none";
  calculate.style.display = "none";
  document.getElementById("attackUI1").style.display = "block";
  document.getElementById("attackUI2").style.display = "block";
  document.getElementById("attackUI1").style.width = "50%";
  document.getElementById("attackUI2").style.width = "50%";
  document.getElementById("Player1Choices").style.opacity = "0.2";
  document.getElementById("Player2Choices").style.opacity = "0.2";
  selectButton1.disabled = true;
  selectButton2.disabled = true;
  var inputs = document.getElementsByTagName("input"); 
    for (var i = 0; i < inputs.length; i++) { 
      inputs[i].disabled = true;
  }
  attack1.disabled = false;
  attack1.style.opacity = "1.0";
  attack1.style.cursor = "pointer";
  heal1.disabled = false;
  heal1.style.opacity = "1.0";
  heal1.style.cursor = "pointer";
  critHit1.disabled = false;
  critHit1.style.opacity = "1.0";
  critHit1.style.cursor = "pointer";
  poison1.disabled = false;
  poison1.style.opacity = "1.0";
  poison1.style.cursor = "pointer";
  freeze1.disabled = false;
  freeze1.style.opacity = "1.0";
  freeze1.style.cursor = "pointer";
  attack2.disabled = true;
  attack2.style.opacity = "0.2";
  attack2.style.cursor = "not-allowed";
  heal2.disabled = true;
  heal2.style.opacity = "0.2";
  critHit2.disabled = true;
  critHit2.style.opacity = "0.2";
  critHit2.style.cursor = "not-allowed";
  poison2.disabled = true;
  poison2.style.opacity = "0.2";
  poison2.style.cursor = "not-allowed";
  freeze2.disabled = true;
  freeze2.style.opacity = "0.2";
  freeze2.style.cursor = "not-allowed";
}

// attack functions
function attacker1(player, enemy) {
  attackAnimation(attackIcon1);
  var loser = enemy.class + " has been defeated. " + "The winner is " + player.class;
  var player_attack = attack_roll(player.base_damage);
  enemy.health = enemy.health - player_attack;
  element.innerHTML = ("<p>" + player.class + " did " + player_attack + " damage and " + enemy.class + " has " + enemy.health + " health. </p>");
  attack2.disabled = false;
  attack2.style.opacity = "1.0";
  attack2.style.cursor = "pointer";
  heal2.disabled = false;
  heal2.style.opacity = "1.0";
  heal2.style.cursor = "pointer";
  critHit2.disabled = false;
  critHit2.style.opacity = "1.0";
  critHit2.style.cursor = "pointer";
  poison2.disabled = false;
  poison2.style.opacity = "1.0";
  poison2.style.cursor = "pointer";
  freeze2.disabled = false;
  freeze2.style.opacity = "1.0";
  freeze2.style.cursor = "pointer";
  attack1.disabled = true;
  attack1.style.opacity = "0.2";
  attack1.style.cursor = "not-allowed";
  heal1.disabled = true;
  heal1.style.opacity = "0.2";
  heal1.style.cursor = "not-allowed";
  critHit1.disabled = true;
  critHit1.style.opacity = "0.2";
  critHit1.style.cursor = "not-allowed";
  poison1.disabled = true;
  poison1.style.opacity = "0.2";
  poison1.style.cursor = "not-allowed";
  freeze1.disabled = true;
  freeze1.style.opacity = "0.2";
  freeze1.style.cursor = "not-allowed";
  if (enemy.health <= 0) {
    element.innerHTML += loser;
    attack1.disabled = true;
    attack2.disabled = true;
    heal1.disabled = true;
    heal2.disabled = true;
    critHit1.disabled = true;
    critHit2.disabled = true;
    poison1.disabled = true;
    poison2.disabled = true;
    freeze1.disabled = true;
    freeze1.disabled = true;
    attack1.style.opacity = "0.2";
    attack2.style.opacity = "0.2";
    heal1.style.opacity = "0.2";
    heal2.style.opacity = "0.2";
    critHit1.style.opacity = "0.2";
    critHit2.style.opacity = "0.2";
    poison1.style.opacity = "0.2";
    poison2.style.opacity = "0.2";
    freeze1.style.opacity = "0.2";
    freeze2.style.opacity = "0.2";
    attack1.style.cursor = "not-allowed";
    attack2.style.cursor = "not-allowed";
    heal1.style.cursor = "not-allowed";
    heal2.style.cursor = "not-allowed";
    critHit1.style.cursor = "not-allowed";
    critHit1.style.cursor = "not-allowed";
    poison1.style.cursor = "not-allowed";
    poison2.style.cursor = "not-allowed";
    freeze1.style.cursor = "not-allowed";
    freeze2.style.cursor = "not-allowed";
    error.innerHTML = player.class + " Wins - GAME OVER";
    gameOverSound.play();
  } else {
    setTimeout(player2Move, 3000);
  }
}
function attacker2(player, enemy) {
  attackAnimation(attackIcon2);
  var loser = player.class + " has been defeated. " + "The winner is " + enemy.class;
  var enemy_attack = attack_roll(enemy.base_damage);
  player.health = player.health - enemy_attack;
  element.innerHTML = ("<p>" + enemy.class + " did " + enemy_attack + " damage and " + player.class +  " has " + player.health + " health. </p>");
  attack1.disabled = false;
  attack1.style.opacity = "1.0";
  attack1.style.cursor = "pointer";
  heal1.disabled = false;
  heal1.style.opacity = "1.0";
  heal1.style.cursor = "pointer";
  critHit1.disabled = false;
  critHit1.style.opacity = "1.0";
  critHit1.style.cursor = "pointer";
  poison1.disabled = false;
  poison1.style.opacity = "1.0";
  poison1.style.cursor = "pointer";
  freeze1.disabled = false;
  freeze1.style.opacity = "1.0";
  freeze1.style.cursor = "pointer";
  attack2.disabled = true;
  attack2.style.opacity = "0.2";
  attack2.style.cursor = "not-allowed";
  heal2.disabled = true;
  heal2.style.opacity = "0.2";
  heal2.style.cursor = "not-allowed";
  critHit2.disabled = true;
  critHit2.style.opacity = "0.2";
  critHit2.style.cursor = "not-allowed";
  poison2.disabled = true;
  poison2.style.opacity = "0.2";
  poison2.style.cursor = "not-allowed";
  freeze2.disabled = true;
  freeze2.style.opacity = "0.2";
  freeze2.style.cursor = "not-allowed";
  if (player.health <= 0) {
    element.innerHTML += loser;
    attack1.disabled = true;
    attack2.disabled = true;
    heal1.disabled = true;
    heal2.disabled = true;
    critHit1.disabled = true;
    critHit2.disabled = true;
    poison1.disabled = true;
    poison2.disabled = true;
    freeze1.disabled = true;
    freeze1.disabled = true;
    attack1.style.opacity = "0.2";
    attack2.style.opacity = "0.2";
    heal1.style.opacity = "0.2";
    heal2.style.opacity = "0.2";
    critHit1.style.opacity = "0.2";
    critHit2.style.opacity = "0.2";
    poison1.style.opacity = "0.2";
    poison2.style.opacity = "0.2";
    freeze1.style.opacity = "0.2";
    freeze2.style.opacity = "0.2";
    attack1.style.cursor = "not-allowed";
    attack2.style.cursor = "not-allowed";
    heal1.style.cursor = "not-allowed";
    heal2.style.cursor = "not-allowed";
    critHit1.style.cursor = "not-allowed";
    critHit1.style.cursor = "not-allowed";
    poison1.style.cursor = "not-allowed";
    poison2.style.cursor = "not-allowed";
    freeze1.style.cursor = "not-allowed";
    freeze2.style.cursor = "not-allowed";
    error.innerHTML = enemy.class + " Wins - GAME OVER";
    gameOverSound.play();
  }
}

// heal functions
function healer1(player) {
  healAnimation(healIcon1); 
  var player_heal = heal_roll(player.regen);
  player.health = player.health + player_heal;
  element.innerHTML = ("<p>" + player.class + " regained " + player_heal + " health and now has " + player.health + " health. </p>");
  setTimeout(player2Move, 3000);
  attack2.disabled = false;
  attack2.style.opacity = "1.0";
  attack2.style.cursor = "pointer";
  heal2.disabled = false;
  heal2.style.opacity = "1.0";
  heal2.style.cursor = "pointer";
  critHit2.disabled = false;
  critHit2.style.opacity = "1.0";
  critHit2.style.cursor = "pointer";
  poison2.disabled = false;
  poison2.style.opacity = "1.0";
  poison2.style.cursor = "pointer";
  freeze2.disabled = false;
  freeze2.style.opacity = "1.0";
  freeze2.style.cursor = "pointer";
  attack1.disabled = true;
  attack1.style.opacity = "0.2";
  attack1.style.cursor = "not-allowed";
  heal1.disabled = true;
  heal1.style.opacity = "0.2";
  heal1.style.cursor = "not-allowed";
  critHit1.disabled = true;
  critHit1.style.opacity = "0.2";
  critHit1.style.cursor = "not-allowed";
  poison1.disabled = true;
  poison1.style.opacity = "0.2";
  poison1.style.cursor = "not-allowed";
  freeze1.disabled = true;
  freeze1.style.opacity = "0.2";
  freeze1.style.cursor = "not-allowed";
}
function healer2(enemy) {
  healAnimation(healIcon2); 
  var enemy_heal = heal_roll(enemy.regen);
  enemy.health = enemy.health + enemy_heal;
  element.innerHTML = ("<p>" + enemy.class + " regained " + enemy_heal + " health and now has " + enemy.health + " health. </p>");
  attack1.disabled = false;
  attack1.style.opacity = "1.0";
  attack1.style.cursor = "pointer";
  heal1.disabled = false;
  heal1.style.opacity = "1.0";
  heal1.style.cursor = "pointer";
  critHit1.disabled = false;
  critHit1.style.opacity = "1.0";
  critHit1.style.cursor = "pointer";
  poison1.disabled = false;
  poison1.style.opacity = "1.0";
  poison1.style.cursor = "pointer";
  freeze1.disabled = false;
  freeze1.style.opacity = "1.0";
  freeze1.style.cursor = "pointer";
  attack2.disabled = true;
  attack2.style.opacity = "0.2";
  attack2.style.cursor = "not-allowed";
  heal2.disabled = true;
  heal2.style.opacity = "0.2";
  heal2.style.cursor = "not-allowed";
  critHit2.disabled = true;
  critHit2.style.opacity = "0.2";
  critHit2.style.cursor = "not-allowed";
  poison2.disabled = true;
  poison2.style.opacity = "0.2";
  poison2.style.cursor = "not-allowed";
  freeze2.disabled = true;
  freeze2.style.opacity = "0.2";
  freeze2.style.cursor = "not-allowed";
}
// crit hit functions
function critHitter1(player, enemy) {
  critHitAnimation(critHitIcon1); 
  var loser = enemy.class + " has been defeated. " + "The winner is " + player.class;
  var player_attack = critHit_roll(player.base_damage);
  enemy.health = enemy.health - player_attack;
  player.health = player.health - 50;
  element.innerHTML = ("<p>" + player.class + " did " + player_attack + " damage and " + enemy.class + " has " + enemy.health + " health. " + player.class + " lost 50 health and now has " + player.health + "</p>");
  attack2.disabled = false;
  attack2.style.opacity = "1.0";
  attack2.style.cursor = "pointer";
  heal2.disabled = false;
  heal2.style.opacity = "1.0";
  heal2.style.cursor = "pointer";
  critHit2.disabled = false;
  critHit2.style.opacity = "1.0";
  critHit2.style.cursor = "pointer";
  poison2.disabled = false;
  poison2.style.opacity = "1.0";
  poison2.style.cursor = "pointer";
  freeze2.disabled = false;
  freeze2.style.opacity = "1.0";
  freeze2.style.cursor = "pointer";
  attack1.disabled = true;
  attack1.style.opacity = "0.2";
  attack1.style.cursor = "not-allowed";
  heal1.disabled = true;
  heal1.style.opacity = "0.2";
  heal1.style.cursor = "not-allowed";
  critHit1.disabled = true;
  critHit1.style.opacity = "0.2";
  critHit1.style.cursor = "not-allowed";
  poison1.disabled = true;
  poison1.style.opacity = "0.2";
  poison1.style.cursor = "not-allowed";
  freeze1.disabled = true;
  freeze1.style.opacity = "0.2";
  freeze1.style.cursor = "not-allowed";
  if (enemy.health <= 0) {
    element.innerHTML += loser;
    attack1.disabled = true;
    attack2.disabled = true;
    heal1.disabled = true;
    heal2.disabled = true;
    critHit1.disabled = true;
    critHit2.disabled = true;
    poison1.disabled = true;
    poison2.disabled = true;
    freeze1.disabled = true;
    freeze1.disabled = true;
    attack1.style.opacity = "0.2";
    attack2.style.opacity = "0.2";
    heal1.style.opacity = "0.2";
    heal2.style.opacity = "0.2";
    critHit1.style.opacity = "0.2";
    critHit2.style.opacity = "0.2";
    poison1.style.opacity = "0.2";
    poison2.style.opacity = "0.2";
    freeze1.style.opacity = "0.2";
    freeze2.style.opacity = "0.2";
    attack1.style.cursor = "not-allowed";
    attack2.style.cursor = "not-allowed";
    heal1.style.cursor = "not-allowed";
    heal2.style.cursor = "not-allowed";
    critHit1.style.cursor = "not-allowed";
    critHit1.style.cursor = "not-allowed";
    poison1.style.cursor = "not-allowed";
    poison2.style.cursor = "not-allowed";
    freeze1.style.cursor = "not-allowed";
    freeze2.style.cursor = "not-allowed";
    error.innerHTML = player.class + " Wins - GAME OVER";
    gameOverSound.play();
  } else {
    setTimeout(player2Move, 3000);
  }
}
function critHitter2(player, enemy) {
  critHitAnimation(critHitIcon1); 
  var loser = player.class + " has been defeated. " + "The winner is " + enemy.class;
  var enemy_attack = critHit_roll(enemy.base_damage);
  player.health = player.health - enemy_attack;
  enemy.health = enemy.health - 50;
  element.innerHTML = ("<p>" + enemy.class + " did " + enemy_attack + " damage and " + player.class +  " has " + player.health + " health. " +  enemy.class + " lost 50 health and now has " + enemy.health + "</p>");
  attack1.disabled = false;
  attack1.style.opacity = "1.0";
  attack1.style.cursor = "pointer";
  heal1.disabled = false;
  heal1.style.opacity = "1.0";
  heal1.style.cursor = "pointer";
  critHit1.disabled = false;
  critHit1.style.opacity = "1.0";
  critHit1.style.cursor = "pointer";
  poison1.disabled = false;
  poison1.style.opacity = "1.0";
  poison1.style.cursor = "pointer";
  freeze1.disabled = false;
  freeze1.style.opacity = "1.0";
  freeze1.style.cursor = "pointer";
  attack2.disabled = true;
  attack2.style.opacity = "0.2";
  attack2.style.cursor = "not-allowed";
  heal2.disabled = true;
  heal2.style.opacity = "0.2";
  heal2.style.cursor = "not-allowed";
  critHit2.disabled = true;
  critHit2.style.opacity = "0.2";
  critHit2.style.cursor = "not-allowed";
  poison2.disabled = true;
  poison2.style.opacity = "0.2";
  poison2.style.cursor = "not-allowed";
  freeze2.disabled = true;
  freeze2.style.opacity = "0.2";
  freeze2.style.cursor = "not-allowed";
  if (player.health <= 0) {
    element.innerHTML += loser;
    attack1.disabled = true;
    attack2.disabled = true;
    heal1.disabled = true;
    heal2.disabled = true;
    critHit1.disabled = true;
    critHit2.disabled = true;
    poison1.disabled = true;
    poison2.disabled = true;
    freeze1.disabled = true;
    freeze1.disabled = true;
    attack1.style.opacity = "0.2";
    attack2.style.opacity = "0.2";
    heal1.style.opacity = "0.2";
    heal2.style.opacity = "0.2";
    critHit1.style.opacity = "0.2";
    critHit2.style.opacity = "0.2";
    poison1.style.opacity = "0.2";
    poison2.style.opacity = "0.2";
    freeze1.style.opacity = "0.2";
    freeze2.style.opacity = "0.2";
    attack1.style.cursor = "not-allowed";
    attack2.style.cursor = "not-allowed";
    heal1.style.cursor = "not-allowed";
    heal2.style.cursor = "not-allowed";
    critHit1.style.cursor = "not-allowed";
    critHit1.style.cursor = "not-allowed";
    poison1.style.cursor = "not-allowed";
    poison2.style.cursor = "not-allowed";
    freeze1.style.cursor = "not-allowed";
    freeze2.style.cursor = "not-allowed";
    error.innerHTML = enemy.class + " Wins - GAME OVER";
    gameOverSound.play();
  }
}


function poisoner1(player) {
  poisonAnimation(poisonIcon1); 
}

function freezer1(player) {
  freezeAnimation(freezeIcon1);
}

function poisoner2(player) {
  poisonAnimation(poisonIcon2); 
}

function freezer2(player) {
  freezeAnimation(freezeIcon2); 
}

// auto attacks
function autoAttack() {
  attacker2(dude1, dude2);
}
function autoHeal() {
  healer2(dude2);
}
function autoCritHit() {
  critHitter2(dude1,dude2);
}
function autoPoison() {
  poisoner2(dude2);
}
function autoFreeze() {
  freezer2(dude2);
}

var autoTurn = [autoAttack, autoHeal, autoCritHit, autoPoison, autoFreeze];
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
function critHit_roll(base_damage) {
  return Math.floor(Math.random() * 250) + base_damage;
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
calculate.disabled = true;
calculate.style.opacity = "0.4";
calculate.style.color = "#ffffff";
calculate.style.background = "green";
calculate.style.cursor = "not-allowed";
buttons.style.width = "100%";
buttons.style.padding.left = "20px";
buttons.style.padding.right = "20px";
enable.style.display = "inline-block";
enable.disabled = false;
enable.style.opacity = "1.0";
enable.style.cursor = "pointer";
calculate.style.display = "inline-block";
var ele = document.getElementsByName("player1");
  for(var i=0;i<ele.length;i++)
    ele[i].checked = false;
    var ele = document.getElementsByName("player2");
  for(var i=0;i<ele.length;i++)
    ele[i].checked = false;
window.player1 = null;
window.player2 = null;
buttons.style.display = "block";
document.getElementById("attackUI1").style.display = "none";
document.getElementById("attackUI2").style.display = "none";
document.getElementById("Player1Choices").style.opacity = "1.0";
document.getElementById("Player2Choices").style.opacity = "1.0";
selectButton1.disabled = false;
selectButton2.disabled = false;
selectButton1.style.display = "none";
selectButton2.style.display = "none";
error.innerHTML = "";
var inputs = document.getElementsByTagName("input"); 
  for (var i = 0; i < inputs.length; i++) { 
    inputs[i].disabled = false;
  } 
}