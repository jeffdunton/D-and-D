// initialize player/sound variables
const warrior = "Warrior<br>HP: 1000<br>Base Damage: 75<br>Regen: 25";
const knight = "Knight<br>HP: 1250<br>Base Damage: 50<br>Regen: 10";
const wizard = "Wizard<br>HP: 750<br>Base Damage: 25<br>Regen: 75";
const dragon = "Dragon<br>HP: 1350<br>Base Damage: 25<br>Regen: 25";
const ogre = "Ogre<br>HP: 1500<br>Base Damage: 50<br>Regen: 0";
const princess = "Princess<br>HP: 500<br>Base Damage: 10<br>Regen: 100";
var player1 = null;
var player2 = null;
var dude1 = {
  "type": "Player",
  "class": null,
  "health": null,
  "base_damage": null,
  "regen": null
}
var dude2 = {
  "type": "Computer",
  "class": null,
  "health": null,
  "base_damage": null,
  "regen": null
}
var attackColor = "red";
var healColor = "green";
var critHitColor = "yellow";
var poisonColor = "purple";
var freezeColor = "blue";
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
var monsterSound = document.getElementById("monsterSound");
var princessSound = document.getElementById("princessSound");
var readySound = document.getElementById("readySound");
var poisonSound = document.getElementById("poisonSound");
var critHitSound = document.getElementById("critHitSound");
var freezeSound = document.getElementById("freezeSound");
var battleThemeSound = document.getElementById("battleThemeSound");
battleThemeSound.volume = 0.3;
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
var outerBackground = document.getElementById("outerBackground");
var element = document.getElementById("error");
var error = document.getElementById("error");
var buttons = document.getElementById("buttons");
var enable = document.getElementById("enable");
var toolTips = document.getElementById("toolTips");
var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");
var radio1 = document.getElementsByName('player1');
var radio2 = document.getElementsByName('player2');
var attackUI1 = document.getElementById("attackUI1");
var attackUI2 = document.getElementById("attackUI2");
var player1Choices = document.getElementById("Player1Choices");
var player2Choices = document.getElementById("Player2Choices");
var heading1 = document.getElementById('heading1');
var heading2 = document.getElementById('heading2');
var overlay = document.getElementById('overlay');
// fade the background onto the screen
function overlayFade() {
  overlay.style.backgroundColor = "transparent";
}
// disable start button
calculate.disabled = true;
// store active timers so that they can be stopped when needed
var timeouts = [];
// disable all attack buttons
function disableButtons() {
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
}
function disable1Enable2() {
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
function disable2Enable1() {
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
// on character icon click, display player selections
function player1Type(player1) {
  result1.innerHTML = player1;
  window.player1 = result1.innerHTML;
  if (player1 === warrior) {
      warriorSound.play();
  } else if (player1 === knight) {
      knightSound.play();
  } else if (player1 === wizard) {
      wizardSound.play();
  } else if (player1 === dragon) {
      dragonSound.play();
  } else if (player1 === ogre) {
      monsterSound.play();
  } else if (player1 === princess) {
      princessSound.play();
  }
}
function player2Type(player2) {
  result2.innerHTML = player2;
  window.player2 = result2.innerHTML;
  if (player2 === warrior) {
      warriorSound.play();
  } else if (player2 === knight) {
      knightSound.play();
  } else if (player2 === wizard) {
      wizardSound.play();
  } else if (player2 === dragon) {
      dragonSound.play();
  } else if (player2 === ogre) {
      monsterSound.play();
  } else if (player2 === princess) {
      princessSound.play();
  }
}
// set dude1 and dude2 values
function validatePlayer(player,dudeNumber) {
  if (player === warrior) {
    dudeNumber.class = "Warrior";
    dudeNumber.health = 1000;
    dudeNumber.base_damage = 75;
    dudeNumber.regen = 25;
  } else if (player === knight) {
    dudeNumber.class = "Knight";
    dudeNumber.health = 1250;
    dudeNumber.base_damage = 50;
    dudeNumber.regen = 10;
  } else if (player === wizard) {
    dudeNumber.class = "Wizard";
    dudeNumber.health = 750;
    dudeNumber.base_damage = 25;
    dudeNumber.regen = 75;
  } else if (player === dragon) {
    dudeNumber.class = "Dragon";
    dudeNumber.health = 1350;
    dudeNumber.base_damage = 25;
    dudeNumber.regen = 25;
  } else if (player === ogre) {
    dudeNumber.class = "Ogre";
    dudeNumber.health = 1500;
    dudeNumber.base_damage = 50;
    dudeNumber.regen = 0;
  } else if (player === princess) {
    dudeNumber.class = "Princess";
    dudeNumber.health = 500;
    dudeNumber.base_damage = 10;
    dudeNumber.regen = 100;
  }
}
// validate players and enable start button
function enableStart() {
  if ((player1 != null) && (player2 != null)) {
    validatePlayer(player1,dude1);
    validatePlayer(player2,dude2);
    calculate.disabled = false;
    calculate.style.opacity = "1.0";
    calculate.style.cursor = "pointer";
    enable.disabled = true;
    enable.style.opacity = "0.2";
    enable.style.cursor = "not-allowed";
    document.getElementById("error").innerHTML = ""
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }
    readySound.play();
  } else if ((player1 === null) && (player2 != null)) {
    error.innerHTML = "You need to choose a character for the Player!";
    errorSound.play();
  } else if ((player1 != null) && (player2 === null)) {
    error.innerHTML = "You need to choose a character for the Computer!";
    errorSound.play();
  } else if ((player1 === null) && (player2 === null)) {
    error.innerHTML = "You need to choose your characters!";
    errorSound.play();
  }
}
function animation(typeSound,typeIconNumber) {
  typeSound.play();
  typeIconNumber.style.transform = "rotate(360deg)";
  typeIconNumber.style.opacity = "1.0";
  setTimeout(animationFade, 1000, typeIconNumber);
}
function animationFade(typeIconNumber) {
  typeIconNumber.style.transform = "rotate(-360deg)";
  typeIconNumber.style.opacity = "0.2";
}
function colorChange(section,color) {
  section.style.color = color;
  outerBackground.style.backgroundColor = color;
  setTimeout(colorChangeBack, 1000, section);
}
function colorChangeBack(section) {
  section.style.color = "#ffffff"
  outerBackground.style.backgroundColor = "#888888"
}
// play start sound and wait 3 seconds to enable start game button
function countdown() {
  fightSound.play();
  setTimeout(startGame, 3000)
}
// hide buttons and enable attack screen buttons
function startGame() {
  battleThemeSound.play();
  result1.innerHTML = dude1.class + "<br />" + dude1.health;
  result2.innerHTML = dude2.class + "<br />" + dude2.health;
  buttons.style.width = "39px";
  buttons.style.padding.left = "0px";
  buttons.style.padding.right = "0px";
  enable.style.display = "none";
  calculate.style.display = "none";
  toolTips.style.display = "block";
  attackUI1.style.display = "block";
  attackUI2.style.display = "block";
  attackUI1.style.width = "50%";
  attackUI2.style.width = "50%";
  player1Choices.style.opacity = "0.2";
  player2Choices.style.opacity = "0.2";
  heading1.style.opacity = "0.2";
  heading2.style.opacity = "0.2";
  disable2Enable1();
}
// attack functions
function attacker1(player, enemy) {
  animation(attackSound,attackIcon1);
  var player_attack = attack_roll(player.base_damage);
  enemy.health = enemy.health - player_attack;
  element.innerHTML = ("<p>" + player.class + " did " + player_attack + " damage and " + enemy.class + " has " + enemy.health + " health. </p>");
  result1.innerHTML = player.class + "<br />" + player.health;
  result2.innerHTML = enemy.class + "<br />" + enemy.health;
  colorChange(result2,attackColor);
  disable1Enable2();
  if (enemy.health <= 0) {
    disableButtons();
    battleThemeSound.pause();
    error.innerHTML = player.class + " Wins - GAME OVER";
    gameOverSound.play();
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  } else {
    setTimeout(player2Move, 3000);
  }
}
function attacker2(player, enemy) {
  animation(attackSound,attackIcon2);
  var enemy_attack = attack_roll(enemy.base_damage);
  player.health = player.health - enemy_attack;
  element.innerHTML = ("<p>" + enemy.class + " did " + enemy_attack + " damage and " + player.class +  " has " + player.health + " health. </p>");
  result1.innerHTML = player.class + "<br />" + player.health;
  result2.innerHTML = enemy.class + "<br />" + enemy.health;
  colorChange(result1,attackColor);
  disable2Enable1();
  if (player.health <= 0) {
    disableButtons();
    battleThemeSound.pause();
    error.innerHTML = enemy.class + " Wins - GAME OVER";
    gameOverSound.play();
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  }
}
// heal functions
function healer1(player) {
  animation(healSound,healIcon1);
  var player_heal = heal_roll(player.regen);
  player.health = player.health + player_heal;
  element.innerHTML = ("<p>" + player.class + " regained " + player_heal + " health and now has " + player.health + " health. </p>");
  result1.innerHTML =  player.class + "<br />" + player.health;
  colorChange(result1,healColor);
  setTimeout(player2Move, 3000);
  disable1Enable2();
}
function healer2(enemy) {
  animation(healSound,healIcon2);
  var enemy_heal = heal_roll(enemy.regen);
  enemy.health = enemy.health + enemy_heal;
  element.innerHTML = ("<p>" + enemy.class + " regained " + enemy_heal + " health and now has " + enemy.health + " health. </p>");
  result2.innerHTML = enemy.class + "<br />" + enemy.health;
  colorChange(result2,healColor);
  disable2Enable1();
}
// crit hit functions
function critHitter1(player, enemy) {
  animation(critHitSound,critHitIcon1);
  var player_attack = critHit_roll(player.base_damage);
  enemy.health = enemy.health - player_attack;
  player.health = player.health - 50;
  element.innerHTML = ("<p> Critical Hit! " + player.class + " did " + player_attack + " damage and " + enemy.class + " has " + enemy.health + " health. " + player.class + " lost 50 health and now has " + player.health + "</p>");
  result1.innerHTML = player.class + "<br />" + player.health;
  result2.innerHTML = enemy.class + "<br />" + enemy.health;
  colorChange(result1,attackColor);
  colorChange(result2,critHitColor);
  disable1Enable2();
  if (enemy.health <= 0) {
    disableButtons();
    battleThemeSound.pause();
    error.innerHTML = player.class + " Wins - GAME OVER";
    gameOverSound.play();
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  } else if (player.health <= 0) {
    disableButtons();
    battleThemeSound.pause();
    error.innerHTML = enemy.class + " Wins - GAME OVER";
    gameOverSound.play();
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  }
  else {
    setTimeout(player2Move, 3000);
  }
}
function critHitter2(player, enemy) {
  animation(critHitSound,critHitIcon2);
  var enemy_attack = critHit_roll(enemy.base_damage);
  player.health = player.health - enemy_attack;
  enemy.health = enemy.health - 50;
  element.innerHTML = ("<p> Critical Hit! " + enemy.class + " did " + enemy_attack + " damage and " + player.class +  " has " + player.health + " health. " +  enemy.class + " lost 50 health and now has " + enemy.health + "</p>");
  result1.innerHTML = player.class + "<br />" + player.health;
  result2.innerHTML = enemy.class + "<br />" + enemy.health;
  colorChange(result2,attackColor);
  colorChange(result1,critHitColor);
  disable2Enable1();
  if (player.health <= 0) {
    disableButtons();
    battleThemeSound.pause();
    error.innerHTML = enemy.class + " Wins - GAME OVER";
    gameOverSound.play();
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  } else if (enemy.health <= 0) {
    disableButtons();
    battleThemeSound.pause();
    error.innerHTML = player.class + " Wins - GAME OVER";
    gameOverSound.play();
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  }
}
function poisoner1(player,enemy) {
  animation(poisonSound,poisonIcon1);
  enemy.health = enemy.health - 25;
  player.health = player.health - 75;
  element.innerHTML = ("<p>" + player.class + " poisoned " + enemy.class + ". " + enemy.class + " now has " + enemy.health + " health. " + player.class + " lost 75 health and now has " + player.health + " health.</p>");
  result1.innerHTML = player.class + "<br />" + player.health;
  result2.innerHTML = enemy.class + "<br />" + enemy.health;
  colorChange(result1,poisonColor);
  colorChange(result2,poisonColor);
  timeouts.push(setTimeout(playerPoison, 3000, enemy));
  timeouts.push(setTimeout(playerPoison, 6000, enemy));
  timeouts.push(setTimeout(playerPoison, 9000, enemy));
  timeouts.push(setTimeout(playerPoison, 12000, enemy));
  timeouts.push(setTimeout(playerPoison, 15000, enemy));
  disable1Enable2();
  if (enemy.health <= 0) {
    disableButtons();
    battleThemeSound.pause();
    error.innerHTML = player.class + " Wins - GAME OVER";
    gameOverSound.play();
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  } else if (player.health <= 0) {
    disableButtons();
    battleThemeSound.pause();
    error.innerHTML = enemy.class + " Wins - GAME OVER";
    gameOverSound.play();
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  } else {
    setTimeout(player2Move, 3000);
  }
}
function poisoner2(player,enemy) {
  animation(poisonSound,poisonIcon2);
  enemy.health = enemy.health - 75;
  player.health = player.health - 25;
  element.innerHTML = ("<p>" + enemy.class + " poisoned " + player.class + ". " + player.class + " now has " + player.health + " health. " + enemy.class + " lost 75 health and now has " + enemy.health + " health.</p>");
  result1.innerHTML = player.class + "<br />" + player.health;
  result2.innerHTML = enemy.class + "<br />" + enemy.health;
  colorChange(result1,poisonColor);
  colorChange(result2,poisonColor);
  timeouts.push(setTimeout(enemyPoison, 3000, player));
  timeouts.push(setTimeout(enemyPoison, 6000, player));
  timeouts.push(setTimeout(enemyPoison, 9000, player));
  timeouts.push(setTimeout(enemyPoison, 12000, player));
  timeouts.push(setTimeout(enemyPoison, 15000, player));
  disable2Enable1();
  if (player.health <= 0) {
    disableButtons();
    battleThemeSound.pause();
    error.innerHTML = enemy.class + " Wins - GAME OVER";
    gameOverSound.play();
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  } else if (enemy.health <= 0) {
    disableButtons();
    battleThemeSound.pause();
    error.innerHTML = player.class + " Wins - GAME OVER";
    gameOverSound.play();
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  }
}
function freezer1A(player,enemy) {
  var freeze;
  animation(freezeSound,freezeIcon1);
  var roll = randomNumber(4);
  if (roll === 3) {
    animation(attackSound,attackIcon1);
    disableButtons();
    var player_attack = attack_roll(player.base_damage);
    enemy.health = enemy.health - player_attack;
    element.innerHTML = ("<p>Freeze successful! " + player.class + " did " + player_attack + " damage and " + enemy.class + " has " + enemy.health + " health. </p>");
    result1.innerHTML = player.class + "<br />" + player.health;
    result2.innerHTML = enemy.class + "<br />" + enemy.health;
     colorChange(result2,freezeColor);
    if (enemy.health <= 0) {
      disableButtons();
      battleThemeSound.pause();
      error.innerHTML = player.class + " Wins - GAME OVER";
      gameOverSound.play();
      for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
      }
    } else {
      setTimeout(freezer1B, 3000, dude1, dude2);
    }
  } else {
    player.health = player.health - 100;
    colorChange(result1,freezeColor);
    result1.innerHTML = player.class + "<br />" + player.health;
    element.innerHTML = ("<p>Freeze failed! " + player.class + " lost 100 health and now has " + player.health + " health.</p>");
    if (player.health <= 0) {
      disableButtons();
      battleThemeSound.pause();
      error.innerHTML = enemy.class + " Wins - GAME OVER";
      gameOverSound.play();
      for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
      }
    } else {
      disable1Enable2();
      setTimeout(player2Move, 3000);
    }
  }
}
function freezer1B(player,enemy) {
  var freeze;
  animation(freezeSound,freezeIcon1);
  var roll = randomNumber(4);
  animation(attackSound,attackIcon1);
  colorChange(result2,attackColor);
  disableButtons();
  var player_attack = attack_roll(player.base_damage);
  enemy.health = enemy.health - player_attack;
  element.innerHTML = ("<p>" + player.class + " did " + player_attack + " damage and " + enemy.class + " has " + enemy.health + " health. </p>");
  result1.innerHTML = player.class + "<br />" + player.health;
  result2.innerHTML = enemy.class + "<br />" + enemy.health;
  if (enemy.health <= 0) {
    disableButtons();
    battleThemeSound.pause();
    error.innerHTML = player.class + " Wins - GAME OVER";
    gameOverSound.play();
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  } else {
    setTimeout(attacker1, 3000, dude1, dude2);
  }
}
function freezer2A(player,enemy) {
  var freeze;
  animation(freezeSound,freezeIcon2);
  var roll = randomNumber(4);
  if (roll === 3) {
    animation(attackSound,attackIcon2);
    disableButtons();
    var enemy_attack = attack_roll(enemy.base_damage);
    player.health = player.health - enemy_attack;
    element.innerHTML = ("<p>Freeze successful! " + enemy.class + " did " + enemy_attack + " damage and " + player.class + " has " + player.health + " health. </p>");
    result1.innerHTML = player.class + "<br />" + player.health;
    result2.innerHTML = enemy.class + "<br />" + enemy.health;
    colorChange(result1,freezeColor);
    if (player.health <= 0) {
      disableButtons();
      battleThemeSound.pause();
      error.innerHTML = enemy.class + " Wins - GAME OVER";
      gameOverSound.play();
      for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
      }
    } else {
      setTimeout(freezer2B, 3000, dude1, dude2);
    }
  } else {
    enemy.health = enemy.health - 100;
    colorChange(result2,freezeColor);
    result2.innerHTML = enemy.class + "<br />" + enemy.health;
    element.innerHTML = ("<p>Freeze failed! " + enemy.class + " lost 100 health and now has " + enemy.health + " health.</p>");
    if (enemy.health <= 0) {
      disableButtons();
      battleThemeSound.pause();
      error.innerHTML = player.class + " Wins - GAME OVER";
      gameOverSound.play();
      for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
      }
    } else {
      disable2Enable1();
    }
  }
}
function freezer2B(player,enemy) {
  var freeze;
  animation(freezeSound,freezeIcon2);
  disableButtons();
  var roll = randomNumber(4);
  animation(attackSound,attackIcon2);
  colorChange(result2,attackColor);
  var enemy_attack = attack_roll(enemy.base_damage);
  player.health = player.health - enemy_attack;
  element.innerHTML = ("<p>" + enemy.class + " did " + enemy_attack + " damage and " + player.class + " has " + player.health + " health. </p>");
  result1.innerHTML = player.class + "<br />" + player.health;
  result2.innerHTML = enemy.class + "<br />" + enemy.health;
  if (player.health <= 0) {
    disableButtons();
    battleThemeSound.pause();
    error.innerHTML = player.class + " Wins - GAME OVER";
    gameOverSound.play();
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  } else {
    setTimeout(autoAttack, 3000);
  }
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
  poisoner2(dude1,dude2);
}
function autoFreeze() {
  freezer2A(dude1,dude2);
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
function heal_roll(regen) {
  return Math.floor(Math.random() * 100) + regen;
}
function critHit_roll(base_damage) {
  return Math.floor(Math.random() * 250) + base_damage;
}
function playerPoison(enemy) {
  var poisonAmount = Math.floor(Math.random() * 25);
  colorChange(result2,poisonColor);
  enemy.health = enemy.health - poisonAmount;
  element.innerHTML = ("<p>" + enemy.class + " lost " + poisonAmount + " health due to poison and now has " + enemy.health + ".</p>");
  result2.innerHTML = enemy.class + "<br />" + enemy.health;
  if (enemy.health <= 0) {
    disableButtons();
    battleThemeSound.pause();
    error.innerHTML = "Poisoned to death! - GAME OVER";
    gameOverSound.play();
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  }
}
function enemyPoison(enemy) {
  var poisonAmount = Math.floor(Math.random() * 25);
  colorChange(result1,poisonColor);
  enemy.health = enemy.health - poisonAmount;
  element.innerHTML = ("<p>" + enemy.class + " lost " + poisonAmount + " health due to poison and now has " + enemy.health + ".</p>");
  result1.innerHTML = enemy.class + "<br />" + enemy.health;
  if (enemy.health <= 0) {
    disableButtons();
    battleThemeSound.pause();
    error.innerHTML = "Poisoned to death! - GAME OVER";
    gameOverSound.play();
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  }
}
// clear all data
function resetGame() {
  swipeSound.play();
  battleThemeSound.pause();
  result1.innerHTML = "?";
  result2.innerHTML = "?";
  calculate.disabled = true;
  calculate.style.opacity = "0.4";
  calculate.style.cursor = "not-allowed";
  calculate.style.display = "inline-block";
  buttons.style.width = "100%";
  buttons.style.padding.left = "20px";
  buttons.style.padding.right = "20px";
  buttons.style.display = "block";
  enable.style.display = "inline-block";
  enable.disabled = false;
  enable.style.opacity = "1.0";
  enable.style.cursor = "pointer";
  toolTips.style.display = "none";
  var ele = document.getElementsByName("player1");
  for(var i=0;i<ele.length;i++)
    ele[i].checked = false;
  var ele = document.getElementsByName("player2");
  for(var i=0;i<ele.length;i++)
    ele[i].checked = false;
  window.player1 = null;
  window.player2 = null;
  attackUI1.style.display = "none";
  attackUI2.style.display = "none";
  player1Choices.style.opacity = "1.0";
  player2Choices.style.opacity = "1.0";
  heading1.style.opacity = "1.0";
  heading2.style.opacity = "1.0";
  error.innerHTML = "";
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
  }
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  timeouts = [];
}