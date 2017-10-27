// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Turtle.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Turtle.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Mengalihkan kekura ke hadapan atau ke belakang \\npada bilangan yang dinyatakan. </span><span id="Turtle_moveForward">mara ke hadapan</span><span id="Turtle_moveBackward">undur ke belakang</span><span id="Turtle_turnTooltip">Membelokkan kekura ke kiri atau kanan dengan \\nbilangan darjah yang ditetapkan. </span><span id="Turtle_turnRight">belok kanan</span><span id="Turtle_turnLeft">belok kiri</span><span id="Turtle_widthTooltip">Mengubah keluasan pena.</span><span id="Turtle_setWidth">laraskan lebarnya pada</span><span id="Turtle_colourTooltip">Mengubah warna pena.</span><span id="Turtle_setColour">gunakan warna</span><span id="Turtle_penTooltip">Mengangkat atau menurunkan pena untuk berhenti \\natau bersambung melukis. </span><span id="Turtle_penUp">angkat pen</span><span id="Turtle_penDown">turunkan pen</span><span id="Turtle_turtleVisibilityTooltip">Memperlihatkan atau menghalimunankan kekura \\n(bulatan dan anak panah). </span><span id="Turtle_hideTurtle">halimunankan kekura</span><span id="Turtle_showTurtle">perlihatkan kekura</span><span id="Turtle_printHelpUrl">https://ms.wikipedia.org/wiki/Pencetakan</span><span id="Turtle_printTooltip">Melukis teks di arah kekura pada kedudukannya.</span><span id="Turtle_print">cetak</span><span id="Turtle_fontHelpUrl">https://ms.wikipedia.org/wiki/Tipografi</span><span id="Turtle_fontTooltip">Menetapkan fon (rupa huruf) yang digunakan oleh \\nblok cetak. </span><span id="Turtle_font">fon</span><span id="Turtle_fontSize">saiz fon</span><span id="Turtle_fontNormal">biasa</span><span id="Turtle_fontBold">tebal</span><span id="Turtle_fontItalic">condong</span><span id="Turtle_submitDisabled">Jalankan atur cara anda hingga ia berhenti. Kemudian anda boleh hantarkan lukisan anda ke dalam galeri.</span></div>';
};


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Turtle.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Pepenyu'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Simpan dan pautkan kepada blok."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Bantuan</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="turtle/icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="turtle/icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="turtle/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Jalankan atur cara anda."><img src="media/1x1.gif" class="run icon21"> Jalankan Program</button><button id="resetButton" class="primary" style="display: none" title="Hentikan atur cara dan reset tahap."><img src="media/1x1.gif" class="stop icon21"> Reset</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="https://www.reddit.com/r/BlocklyGames/" target="gallery"><button type="submit" title="Buka galeri lukisan di Reddit. "><img src="media/1x1.gif" class="reddit icon21"> Lihat Galeri</button></form></td><td style="text-align: center;"><button id="submitButton" title="Hantarkan lukisan anda ke Reddit."><img src="media/1x1.gif" class="camera icon21"> Hantarkan ke Galeri</button><canvas id="thumbnail" width="100" height="100" style="display: none"></canvas><form id="t2r_form" action="turtle-reddit" method="POST" target="_blank" style="display: none"><input id="t2r_thumb" type="hidden" name="thumb"><input id="t2r_xml" type="hidden" name="xml"></form></td></tr>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Penyelesaian anda berhasil, cuma perlu diperbaiki. ' + ((opt_ijData.level < 3) ? 'Lukiskan bentuk berkenaan dengan hanya tiga blok.' : 'Lukiskan bintang dengan hanya tiga blok.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Ciptakan program yang melukis segi empat sama.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? 'Ubah atur cara anda untuk melukis segi lima daripada segi empat.' : (opt_ijData.level == 3) ? 'Terdapat blok baru untuk anda boleh menukar warna:<iframe style="height: 50px; width: 100%; border: none;" src="readonly.html?app=turtle&lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&xml=%3Cblock+type%3D%22turtle_colour_internal%22+x%3D%225%22+y%3D%2210%22%3E%3Cfield+name%3D%22COLOUR%22%3E%23ffff00%3C%2Ffield%3E%3C%2Fblock%3E"></iframe>Lukiskan bintang kuning.' : (opt_ijData.level == 4) ? 'Terdapat blok baru untuk anda boleh mengangkat pen dari kertas sewaktu bergerak:<iframe style="height: 50px; width: 100%; border: none;" src="readonly.html?app=turtle&lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&xml=%3Cblock+type%3D%22turtle_pen%22+x%3D%225%22+y%3D%2210%22%3E%3C%2Fblock%3E"></iframe>Lukiskan satu bintang kuning kecil, disusuli satu garis di atasnya.' : (opt_ijData.level == 5) ? 'Daripada hanya satu bintang, cuba lukis empat bintang yang tersusun dalam segi empat sama.' : (opt_ijData.level == 6) ? 'Lukiskan tiga bintang kuning dan satu garis putih.' : (opt_ijData.level == 7) ? 'Melukis bintang, kemudian melukis empat garis putih.' : (opt_ijData.level == 8) ? 'Lukisan 360 lorek putih akan menyerupai bulan mengambang.' : (opt_ijData.level == 9) ? 'Cuba tambah bulatan hitam supaya bulan menjadi berbentuk sabit.' : (opt_ijData.level == 10) ? 'Lukislah sesuka hati anda. Ada banyak blok baru untuk dicuba. Semoga ceria!' + ((! opt_ijData.html) ? '<br><br>Tekan butang "Lihat Galeri" untuk meninjau hasil lukisan orang lain. Jika anda ada hasil lukisan menarik, tekan "Hantarkan ke Galeri" untuk menyiarkan lukisan anda.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Pilih satu kategori untuk melihat blok.</div>' : '');
};


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none">' + ((opt_ijData.level == 10) ? '<category name="Pepenyu"><block type="turtle_move"><value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="turtle_turn"><value name="VALUE"><block type="math_number"><field name="NUM">90</field></block></value></block><block type="turtle_width"><value name="WIDTH"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><block type="text"></block></value></block><block type="turtle_font"></block></category><category name="Warna"><block type="turtle_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><block type="math_number"><field name="NUM">100</field></block></value><value name="GREEN"><block type="math_number"><field name="NUM">50</field></block></value><value name="BLUE"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="colour_blend"><value name="COLOUR1"><block type="colour_picker"><field name="COLOUR">#ff0000</field></block></value><value name="COLOUR2"><block type="colour_picker"><field name="COLOUR">#3333ff</field></block></value><value name="RATIO"><block type="math_number"><field name="NUM">0.5</field></block></value></block></category><category name="Logik"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Gelung"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_flow_statements"></block></category><category name="Matematik"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_float"></block></category><category name="Pemboleh ubah" custom="VARIABLE"></category><category name="Fungsi" custom="PROCEDURE"></category>' : '<category name="Pepenyu"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="Warna"><block type="turtle_colour_internal"></category>' : '') + '<category name="Gelung"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};


Turtle.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Turtle.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};