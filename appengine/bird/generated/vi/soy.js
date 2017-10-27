// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Bird.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Bird.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">không có sâu</span><span id="Bird_heading">bay đi</span><span id="Bird_noWormTooltip">Lúc chim chưa có sâu.</span><span id="Bird_headingTooltip">Di chuyển theo hướng của góc được chọn: 0 là \\nsang phải, 90 là đi thẳng đứng lên. </span><span id="Bird_positionTooltip">x và y đánh dấu vị trí của chim. \\nKhi x = 0 chim gần với mép trái, \\nkhi x = 100 nó gần với mép phải. \\nKhi y = 0 chim ở đáy trang, khi y \\n= 100 nó ở đầu trang. </span></div>';
};


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Bird.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Chim'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Lưu và lấy địa chỉ liên kết."><img src="media/1x1.gif" class="link icon21"></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Chạy chương trình bạn viết."><img src="media/1x1.gif" class="run icon21"> Chạy chương trình</button><button id="resetButton" class="primary" style="display: none" title="Dừng chương trình và thiết lập lại level."><img src="media/1x1.gif" class="stop icon21"> Làm lại</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Thay đổi hướng bay để chim lấy được sâu và tha về tổ của nó.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Sử dụng mảnh này để chim có thể bay theo một hướng nếu đã lấy được sâu, còn nếu không thì bay theo hướng khác.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' là vị trí nằm ngang hiện tại của con chim. Sử dụng mảnh này để con chim của bạn bay theo một hướng nếu \'x\' nhỏ hơn một số nào đó, hoặc nếu không thì bay theo hướng khác.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Nhấp vào kí tự này để sửa đổi mảnh \'nếu\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Cấp độ này cần cả hai mảnh \'nếu không nếu\' và \'nếu không\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Mảnh \'và\' chỉ đúng nếu cả hai điều kiện nhập vào đều đúng.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Kéo mảnh \'nếu không\' cho vào mảnh \'nếu\'.</td></tr></table></div>' : '');
};


Bird.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="bird_heading"></block>' + ((opt_ijData.level >= 2) ? '<block type="bird_noWorm"></block>' + ((opt_ijData.level >= 4) ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position"><field name="XY">X</field></block></value><value name="B"><block type="math_number"><field name="NUM">50</field></block></value></block>' + ((opt_ijData.level >= 5) ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position"><field name="XY">Y</field></block></value><value name="B"><block type="math_number"><field name="NUM">50</field></block></value></block>' + ((opt_ijData.level >= 8) ? '<block type="bird_and"></block>' : '') : '') : '') : '') + '</xml>';
};