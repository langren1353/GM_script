// ==UserScript==
// @name AC-baidu： 啊猫-操作面板
// @description     用于快速操作和显示的一个面板
// @author          AC
// @create          2024-12-12
// @lastmodified    2024-03-07
// @version         1.0
// @include         https://zhibo2.90dao.com/
// @namespace       gm.com
// @copyright       2024, AC
// @note            2024.12.12-V1.0 初始化第一版
// @run-at          document-end
// @grant           GM_setClipboard
// @require         https://update.greasyfork.org/scripts/503097/1424938/VueEntry.js
// ==/UserScript==

~(function(){
	const insertId = 'custom-ac-app'
	document.body.insertAdjacentHTML('beforeend', `
<!-------------START----------HTML的模版插入到这里------------------START-------------->
<div id='${insertId}'>
	{{ state.message }}
	<button @click="fire">点击</button>
	<div>显示数据：{{ state.count }}</div>
</div>
<!-------------END-----------HTML的模版插入到这里--------------------END--------------->
`);

	const { reactive, createApp } = VueEntry
	const app = createApp({
		setup () {
			const state = reactive({
				message: 'hello',
				count: 0,
			})
			function fire() {
				state.count += 1
			}
			
			return {
				state,
				fire
			}
		},
	})
	app.mount(`#${insertId}`)
})()
