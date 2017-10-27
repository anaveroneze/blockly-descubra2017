// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Maze.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Maze.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">ileri git</span><span id="Maze_turnLeft">sola dön</span><span id="Maze_turnRight">sağa dön</span><span id="Maze_doCode">yap</span><span id="Maze_elseCode">değilse</span><span id="Maze_helpIfElse">Eğer-değilse ifadeleri ya bir şeyi ya da diğerini yapar.</span><span id="Maze_pathAhead">eğer önde yol varsa</span><span id="Maze_pathLeft">eğer solda yol varsa</span><span id="Maze_pathRight">eğer sağda yol varsa</span><span id="Maze_repeatUntil">kadar tekrar et</span><span id="Maze_moveForwardTooltip">Oyuncuyu bir boşluk ileri götürür.</span><span id="Maze_turnTooltip">Oyuncuyu sola veya sağa döndürür.</span><span id="Maze_ifTooltip">Eğer belirtilen yönde yol varsa, \\nbelirtilen hareketleri yap. </span><span id="Maze_ifelseTooltip">Eğer belirtilen yönde yol varsa, \\nbelirtilen hareketlerin ilk bloğunu \\nyap, yoksa ikinci bloğu yap. </span><span id="Maze_whileTooltip">Bitiş noktasına ulaşana kadar kapsanan \\nhareketleri yap. </span><span id="Maze_capacity0">%0 adet bloğun kaldı.</span><span id="Maze_capacity1">%1 adet bloğun kaldı.</span><span id="Maze_capacity2">%2 adet bloğun kaldı.</span></div>';
};


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Maze.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Labirent'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: '&skin=' + soy.$$escapeHtml(opt_ijData.skin)}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Blokları ve bağlantı adresini kaydet."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="media/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Oyuncuya bloklar ne diyorsa onu yaptırır."><img src="media/1x1.gif" class="run icon21"> Programı Çalıştır</button><button id="resetButton" class="primary" style="display: none" title="Oyuncuyu labirentin başlangıcına geri koy."><img src="media/1x1.gif" class="stop icon21"> Tekrar</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Bir kaç \'ileri git\' bloğunu bir araya getirerek beni hedefe ulaştır.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Bu bölümde beyaz çalışma alanındaki bütün blokları bir araya getirmelisin.<iframe id="iframeOneTopBlock" style="height: 80px; width: 100%; border: none;" src=""></iframe></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Ne olacağını görmek için programınızı çalıştırın.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Programınız labirenti çözemedi. \'Tekrar\' butonuna basın ve yeniden deneyin.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Sadece iki blok kullanarak bu yolun sonuna ulaşın. Bir bloğu birden fazla çalıştırmak için \'tekrar\' kullanın.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 4) ? '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Bu seviye için tüm blokları kullandınız. Yeni bir blok oluşturmak için, öncelikle varolan bir bloğu silmeniz gerekir.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\'tekrar\' bloğunun içerisine birden fazla blok yerleştirebilirsiniz.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>Favori oyuncunu bu menüden seç.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Bir \'eğer\' bloğu sadece koşul doğru olduğunda birşeyler yapar. Sola dönmeyi eğer sola bir yol varsa deneyin.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">\'Eğer\' blokunun durumunu değiştirmek için %1 ikonuna tıkla.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Eğer-değilse ifadeleri ya bir şeyi ya da diğerini yapar.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Bu karışık labirenti çözebilir misin? Sol taraftaki duvarı izlemeyi deneyin. Sadece gelişmiş programcılar!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
};


Maze.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};


Maze.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Maze.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};