// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Pond.Advanced.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');
goog.require('Pond.soy');


Pond.Advanced.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.soy.messages(null, null, opt_ijData) + '<div style="display: none"></div>';
};


Pond.Advanced.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.Advanced.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'JS池'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="保存模块并生成链接。"><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">帮助</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="editor"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Use the \'cannon\' command to hit the target. The first parameter is the angle, the second parameter is the range. Find the right combination.<pre>cannon(0, 70);</pre>' : (opt_ijData.level == 2) ? 'This target needs to be hit many times. Use a \'while (true)\' loop to do something indefinitely.<pre>while (true) {\n  ...\n}</pre>' : (opt_ijData.level == 3) ? '此对手来回移动，使其很难被攻击。“scan”表达式返回特定位置具体范围内的对手。<pre>scan(0, 5)</pre>This range is exactly what the \'cannon\' command needs to fire accurately.' : (opt_ijData.level == 4) ? 'This opponent is too far away to use the cannon (which has a limit of 70 meters). Instead, use the \'swim\' command to start swimming towards the opponent and crash into it.<pre>swim(0, 50);</pre>' : (opt_ijData.level == 5) ? 'This opponent is also too far away to use the cannon. But you are too weak to survive a collision. Swim towards the opponent while your horizontal location is less than than 50. Then \'stop\' and use the cannon.<pre>loc_x() &lt; 50</pre><pre>stop();</pre>' : (opt_ijData.level == 6) ? 'This opponent will move away when it is hit. Swim towards it if it is out of range (70 meters).' : (opt_ijData.level == 7) ? '兔子随便的跑了。你能打它么？' : (opt_ijData.level == 8) ? 'Rook反击了！但它只能看南北东西。' : (opt_ijData.level == 9) ? 'Counter looks in all directions. Can you handle two opponents at once?' : (opt_ijData.level == 10) ? 'Sniper hides in a corner looking for targets. Good luck. Seriously.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
