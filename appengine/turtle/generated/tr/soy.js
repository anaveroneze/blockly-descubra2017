// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Turtle.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Turtle.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Kaplumbağayı belirtilen miktarda öne ya da \\narkaya taşır. </span><span id="Turtle_moveForward">şu kadar ileri git</span><span id="Turtle_moveBackward">şu kadar geri git</span><span id="Turtle_turnTooltip">Kaplumbağayı belirtilen derecede sağa ya da sola \\ndöndürür. </span><span id="Turtle_turnRight">şu kadar sağa dön</span><span id="Turtle_turnLeft">şu kadar sola dön</span><span id="Turtle_widthTooltip">Kalemin genişliğini değiştirir.</span><span id="Turtle_setWidth">genişliği ayarla</span><span id="Turtle_colourTooltip">Kalemin rengini değiştirir.</span><span id="Turtle_setColour">rengi ayarla</span><span id="Turtle_penTooltip">Kalemi kaldırır ya da indirir, \\nçizimi durdurmak ya da başlatmak \\niçin. </span><span id="Turtle_penUp">kalemi kaldır</span><span id="Turtle_penDown">kalemi indir</span><span id="Turtle_turtleVisibilityTooltip">Kaplumbağayı (daire ve ok) görünür ya da \\ngörünmez yapar. </span><span id="Turtle_hideTurtle">kaplumbağayı gizle</span><span id="Turtle_showTurtle">kaplumbağayı göster</span><span id="Turtle_printHelpUrl">https://tr.wikipedia.org/wiki/Matbaac%C4%B1l%C4%B1k</span><span id="Turtle_printTooltip">Kaplumbağanın konumunda onun yönünde metin çizer.</span><span id="Turtle_print">yazdır</span><span id="Turtle_fontHelpUrl">https://tr.wikipedia.org/wiki/Tipografi</span><span id="Turtle_fontTooltip">Baskı blok tarafından kullanılan yazıtipini \\nayarlar. </span><span id="Turtle_font">yazı tipi</span><span id="Turtle_fontSize">yazı tipi boyutu</span><span id="Turtle_fontNormal">normal</span><span id="Turtle_fontBold">kalın</span><span id="Turtle_fontItalic">eğik</span><span id="Turtle_submitDisabled">Durana kadar programı çalıştır. Sonra, çizimini galeriye gönderebilirsin.</span></div>';
};


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Turtle.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Kaplumbağa'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Blokları ve bağlantı adresini kaydet."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Yardım</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="turtle/icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="turtle/icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="turtle/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Yazdığın programı çalıştır."><img src="media/1x1.gif" class="run icon21"> Programı Çalıştır</button><button id="resetButton" class="primary" style="display: none" title="Programı durdur ve seviyeyi sıfırla."><img src="media/1x1.gif" class="stop icon21"> Tekrar</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="https://www.reddit.com/r/BlocklyGames/" target="gallery"><button type="submit" title="Reddit\'teki çizim galerisini aç."><img src="media/1x1.gif" class="reddit icon21"> Galeriyi Gör</button></form></td><td style="text-align: center;"><button id="submitButton" title="Çizimini Reddit\'e gönder."><img src="media/1x1.gif" class="camera icon21"> Galeriye gönder</button><canvas id="thumbnail" width="100" height="100" style="display: none"></canvas><form id="t2r_form" action="turtle-reddit" method="POST" target="_blank" style="display: none"><input id="t2r_thumb" type="hidden" name="thumb"><input id="t2r_xml" type="hidden" name="xml"></form></td></tr>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Çözümün çalışıyor, ama sen daha iyisini yapabilirsin. ' + ((opt_ijData.level < 3) ? 'Sadece üç blok ile şekli çizin.' : 'Sadece dört blok ile yıldızı çizin.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Bir kare çizen bir program oluşturun.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? 'Programınızı bir kare yerine bir beşgen çizmek için değiştirin.' : (opt_ijData.level == 3) ? 'Rengi değiştirmene izin veren yeni bir blok var:<iframe style="height: 50px; width: 100%; border: none;" src="readonly.html?app=turtle&lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&xml=%3Cblock+type%3D%22turtle_colour_internal%22+x%3D%225%22+y%3D%2210%22%3E%3Cfield+name%3D%22COLOUR%22%3E%23ffff00%3C%2Ffield%3E%3C%2Fblock%3E"></iframe>Sarı bir yıldız çizin.' : (opt_ijData.level == 4) ? 'Hareket ettiğinde kalemi kağıttan kaldırmana izin veren yeni bit blok var:<iframe style="height: 50px; width: 100%; border: none;" src="readonly.html?app=turtle&lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&xml=%3Cblock+type%3D%22turtle_pen%22+x%3D%225%22+y%3D%2210%22%3E%3C%2Fblock%3E"></iframe>Küçük sarı bir yıldız çiz, daha sonra üzerine bir çizgi çiz.' : (opt_ijData.level == 5) ? 'Bir yıldız yerine, bir kare içinde düzenlenmiş dört yıldız çizebilir misin?' : (opt_ijData.level == 6) ? 'Üç sarı yıldız ve bir beyaz çizgi çizin.' : (opt_ijData.level == 7) ? 'Yıldızları çiz, sonra dört beyaz çizgi çiz.' : (opt_ijData.level == 8) ? '360 beyaz çizgi çizmek dolunay gibi görünür.' : (opt_ijData.level == 9) ? 'Ayın bir hilale dönüşmesi için siyah bir daire ekleyebilir misin?' : (opt_ijData.level == 10) ? 'Ne istersen çiz. Keşfedebileceğin çok sayıda yeni bloğun var. İyi eğlenceler!' + ((! opt_ijData.html) ? '<br><br>"Galeriyi Gör" düğmesini kullanarak başka insanların ne çizdiğini gör. Eğer eğlenceli bir şeyler çizersen, "Galeriye Gönder" düğmesini kullanarak yayımla.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Blokları görmek için bir kategori seç.</div>' : '');
};


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none">' + ((opt_ijData.level == 10) ? '<category name="Kaplumbağa"><block type="turtle_move"><value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="turtle_turn"><value name="VALUE"><block type="math_number"><field name="NUM">90</field></block></value></block><block type="turtle_width"><value name="WIDTH"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><block type="text"></block></value></block><block type="turtle_font"></block></category><category name="Renk"><block type="turtle_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><block type="math_number"><field name="NUM">100</field></block></value><value name="GREEN"><block type="math_number"><field name="NUM">50</field></block></value><value name="BLUE"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="colour_blend"><value name="COLOUR1"><block type="colour_picker"><field name="COLOUR">#ff0000</field></block></value><value name="COLOUR2"><block type="colour_picker"><field name="COLOUR">#3333ff</field></block></value><value name="RATIO"><block type="math_number"><field name="NUM">0.5</field></block></value></block></category><category name="Mantık"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Döngüler"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_flow_statements"></block></category><category name="Matematik"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_float"></block></category><category name="Değişkenler" custom="VARIABLE"></category><category name="İşlevler" custom="PROCEDURE"></category>' : '<category name="Kaplumbağa"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="Renk"><block type="turtle_colour_internal"></category>' : '') + '<category name="Döngüler"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};


Turtle.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Turtle.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
