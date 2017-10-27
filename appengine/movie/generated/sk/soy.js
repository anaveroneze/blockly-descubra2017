// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Movie.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Movie.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">štart x</span><span id="Movie_y1">štart y</span><span id="Movie_x2">cieľ x</span><span id="Movie_y2">cieľ y</span><span id="Movie_radius">polomer</span><span id="Movie_width">hrúbka</span><span id="Movie_height">výška</span><span id="Movie_circleTooltip">Nakreslí kružnicu na zadaných súradniciach s \\ndaným polomerom. </span><span id="Movie_circleDraw">kružnica</span><span id="Movie_rectTooltip">Nakreslí obdĺžnik na zadaných súradniciach s \\ndanou výškou a šírkou. </span><span id="Movie_rectDraw">obdĺžnik</span><span id="Movie_lineTooltip">Nakreslí čiaru danej hrúbky z jedného bodu do \\ndruhého. </span><span id="Movie_lineDraw">čiara</span><span id="Movie_timeTooltip">Vráti aktuálny čas v animácii (0-100).</span><span id="Movie_colourTooltip">Zmení farbu pera.</span><span id="Movie_setColour">nastav farbu na</span><span id="Movie_submitDisabled">Tvoj film sa zatiaľ nehýbe. Urob si z dielikov niečo zaujímavé. Potom nám svoj film môžeš vyzdieľať do galérie.</span></div>';
};


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Movie.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Film'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Uložiť a zdieľať odkaz na tento program."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Pomoc</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="https://www.reddit.com/r/BlocklyGames/" target="gallery"><button type="submit" title="Otvoriť galériu filmov v službe Reddit."><img src="media/1x1.gif" class="reddit icon21"> Zobraziť galériu</button></form></td><td style="text-align: center;"><button id="submitButton" title="Zdieľať do služby Reddit."><img src="media/1x1.gif" class="camera icon21"> Poslať do galérie</button><canvas id="thumbnail" width="100" height="100" style="display: none"></canvas><form id="t2r_form" action="movie-reddit" method="POST" target="_blank" style="display: none"><input id="t2r_thumb" type="hidden" name="thumb"><input id="t2r_xml" type="hidden" name="xml"></form></td></tr>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Nakresli postavu jenoduchými tvarmi' : (opt_ijData.level == 2) ? 'V tejto úrovni tvoríš film. Chceš, aby červená lopta prešla krížom cez obrazovku. Tlačidlom Prehrať spustíš náhľad.<iframe style="height: 50px; width: 100%; border: none;" src="readonly.html?app=movie&lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&xml=%3Cblock+type%3D%22movie_time%22+x%3D%2215%22+y%3D%2210%22%3E%3C%2Fblock%3E"></iframe>Počas prehrávania filmu sa hodnota bloku \'čas\' mení od 0 do 100. Pretože chceš meniť vodorovnú polohu od 0 do 100, malo to by byť jednoduché.' : (opt_ijData.level == 3) ? 'Blok \'čas\' počíta od 0 do 100. Tentoraz chceš, aby vodorovná poloha červnej lopty začala na 100 a išla k 0. Nájdi matematický vzorec, ktorý otočí smer pohybu.' : (opt_ijData.level == 4) ? 'Použi vedomosti z predošlej úrovne a rozpohybuj 4 zelené lopty v štyroch rôznych smeroch.' : (opt_ijData.level == 5) ? 'Rozpohybovať myšiu hlavu je ľahké. Podľa akého vzorca sa však hýbu myšie uši?' : (opt_ijData.level == 6) ? 'Dve jednoduché čiary. Zisti, čo robia konce čiar.' : (opt_ijData.level == 7) ? 'Vzorec pre túto padajúcu loptu je zložitý. Tu je odpoveď:<br><br><code style="font-size: 150%; margin: 0 1em;">y = 100 - (((time - 50) &divide; 5) ^ 2)</code>' : (opt_ijData.level == 8) ? 'Použi dielik \'ak\' a nakresli červenú a modrú loptu do prvej polovice filmu. Potom nakresli zelenú loptu do druhej polovice filmu.' : (opt_ijData.level == 9) ? 'Vytvor loptu, ktorá nasleduje drôt. Drôt sme už nareslili. Ak spravíš toto, tak už dokážeš urobiť čokoľvek.' : (opt_ijData.level == 10) ? 'Urob si film podľa vlastnej fantázie. Na preskúmanie tu máš veľký počet nových dielikov. Príjemnú zábavu!' + ((! opt_ijData.html) ? '<br><br>Tlačidlom "Galéria" si prezri filmy iných ľudí. Ak sa ti podarí zaujímavý film, zverejníš ho tlačidlo "Zdieľať do galérie".' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Film"><block type="movie_circle">' + ((opt_ijData.level != 2) ? '<value name="X"><block type="math_number"><field name="NUM">50</field></block></value>' : '') + '<value name="Y"><block type="math_number"><field name="NUM">50</field></block></value><value name="RADIUS"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="movie_rect"><value name="X"><block type="math_number"><field name="NUM">50</field></block></value><value name="Y"><block type="math_number"><field name="NUM">50</field></block></value><value name="WIDTH"><block type="math_number"><field name="NUM">10</field></block></value><value name="HEIGHT"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="movie_line"><value name="X1"><block type="math_number"><field name="NUM">40</field></block></value><value name="Y1"><block type="math_number"><field name="NUM">40</field></block></value><value name="X2"><block type="math_number"><field name="NUM">60</field></block></value><value name="Y2"><block type="math_number"><field name="NUM">60</field></block></value><value name="WIDTH"><block type="math_number"><field name="NUM">1</field></block></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="Farba"><block type="movie_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block>' + ((opt_ijData.level == 10) ? '<block type="colour_rgb"><value name="RED"><block type="math_number"><field name="NUM">100</field></block></value><value name="GREEN"><block type="math_number"><field name="NUM">50</field></block></value><value name="BLUE"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="colour_blend"><value name="COLOUR1"><block type="colour_picker"><field name="COLOUR">#ff0000</field></block></value><value name="COLOUR2"><block type="colour_picker"><field name="COLOUR">#3333ff</field></block></value><value name="RATIO"><block type="math_number"><field name="NUM">0.5</field></block></value></block>' : '') + '</category>' + ((opt_ijData.level > 7) ? '<category name="Logické"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Slučky"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_flow_statements"></block></category>' : '') + '<category name="Matematika"><block type="math_number"></block><block type="math_arithmetic"></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block>' : '') + '</category>' + ((opt_ijData.level == 10) ? '<category name="Premenné" custom="VARIABLE"></category><category name="Funkcie" custom="PROCEDURE"></category>' : '') + '</xml>';
};


Movie.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Movie.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
