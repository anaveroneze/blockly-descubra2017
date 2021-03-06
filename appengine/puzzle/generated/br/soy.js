// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Puzzle.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Puzzle.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Puzzle_animal1">Houad</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Pluñv</span><span id="Puzzle_animal1Trait2">Beg</span><span id="Puzzle_animal1HelpUrl">https://br.wikipedia.org/wiki/Houad</span><span id="Puzzle_animal2">Kazh</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Mourroù</span><span id="Puzzle_animal2Trait2">Feur</span><span id="Puzzle_animal2HelpUrl">https://br.wikipedia.org/wiki/Kazh</span><span id="Puzzle_animal3">Gwenanenn</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Mel</span><span id="Puzzle_animal3Trait2">Flemm</span><span id="Puzzle_animal3HelpUrl">https://br.wikipedia.org/wiki/Gwenanenn</span><span id="Puzzle_animal4">Maligorn</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Krogenn</span><span id="Puzzle_animal4Trait2">Babouz</span><span id="Puzzle_animal4HelpUrl">https://br.wikipedia.org/wiki/Maligorn</span><span id="Puzzle_picture">Skeudenn :</span><span id="Puzzle_legs">Pavioù :</span><span id="Puzzle_legsChoose">dibab...</span><span id="Puzzle_traits">perzhioù :</span><span id="Puzzle_error0">Dispar !\nReizh eo an/ar %1 bloc\'h.</span><span id="Puzzle_error1">Tost ! Chom a ra ur bloc\'h direizh.</span><span id="Puzzle_error2">%1 bloc\'h zo direizh.</span><span id="Puzzle_tryAgain">Direizh eo ar bloc\'h usskedet.\nKendalc\'hit da bleustriñ.</span></div>';
};


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Puzzle.soy.messages(null, null, opt_ijData) + '<table id="header" width="100%"><tr><td valign="bottom"><h1>' + BlocklyGames.soy.titleSpan({appName: 'Miltamm'}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="helpButton">Skoazell</button>&nbsp;<button id="checkButton" class="primary">Gwiriañ ar respontoù</button></td></tr></table><div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Evit kement loen(e gwer), stagañ he skeudenn, dibab pet pav zo dezhañ, ha berniañ he ferzhioù.</div><iframe style="height: 200px; width: 100%; border: none;" src="readonly.html?app=puzzle&lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&xml=%3Cblock+type%3D%22animal%22+x%3D%225%22+y%3D%225%22%3E%3Cmutation+animal%3D%221%22%3E%3C%2Fmutation%3E%3Ctitle+name%3D%22LEGS%22%3E1%3C%2Ftitle%3E%3Cvalue+name%3D%22PIC%22%3E%3Cblock+type%3D%22picture%22%3E%3Cmutation+animal%3D%221%22%3E%3C%2Fmutation%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cstatement+name%3D%22TRAITS%22%3E%3Cblock+type%3D%22trait%22%3E%3Cmutation+animal%3D%221%22+trait%3D%222%22%3E%3C%2Fmutation%3E%3Cnext%3E%3Cblock+type%3D%22trait%22%3E%3Cmutation+animal%3D%221%22+trait%3D%221%22%3E%3C%2Fmutation%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3C%2Fblock%3E"></iframe>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


Puzzle.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Puzzle.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
