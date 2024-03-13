// ==UserScript==
// @name         DarkModeAg
// @name:zh-CN   激进的暗色模式
// @name:zh-TW   激進的暗色模式
// @name:en      DarkModeAg
// @version      2.0.0
// @author       Zetaloop
// @description  Ensuring the optimal dark mode experience, even if sacrificing compatibility
// @description:zh-CN  即使牺牲兼容性也要确保最佳的暗色浏览体验
// @description:zh-TW  即使犧牲相容性也要確保最佳的暗色瀏覽體驗
// @description:en  Ensuring the optimal dark mode experience, even if sacrificing compatibility
// @match        *://*/*
// @icon         data:image/png;base64,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
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_notification
// @sandbox      JavaScript
// @noframes
// @license      GPL-3.0 License
// @run-at       document-start
// @namespace    https://github.com/zetaloop/DarkModeAg
// @supportURL   https://github.com/zetaloop/DarkModeAg
// @homepageURL  https://github.com/zetaloop/DarkModeAg
// ==/UserScript==

(function () {
    'use strict';
    var menu_ALL = [
        ['menu_disable', '✅ 已启用 (点击对当前网站禁用)', '❌ 已禁用 (点击对当前网站启用)', []],
        ['menu_runDuringTheDay', '白天保持开启 (比晚上亮一点点)', '白天保持开启', true],
        ['menu_darkModeAuto', '护眼模式跟随浏览器', '护眼模式跟随浏览器', false],
        ['menu_autoRecognition', '智能排除自带暗黑模式的网页 (beta)', '智能排除自带暗黑模式的网页 (beta)', true],
        ['menu_forcedToEnable', '✅ 已强制当前网站启用护眼模式 (👆)', '❌ 未强制当前网站启用护眼模式 (👆)', []],
        ['menu_darkModeType', '点击切换模式', '点击切换模式', 2],
        ['menu_customMode', '自定义当前模式', '自定义当前模式', true], ['menu_customMode1', , , '60|50'], ['menu_customMode2', , , '60|40|50|50'], ['menu_customMode3', , , '90'], ['menu_customMode3_exclude', , , 'img, .img, video, [style*="background"][style*="url"], svg'],
        ['menu_customTime', '自定义昼夜时间', '自定义昼夜时间', '6:00|18:00'],
        ['menu_autoSwitch', '晚上自动切换模式', '晚上自动切换模式', ''],
    ], menu_ID = [];
    for (let i = 0; i < menu_ALL.length; i++) { // 如果读取到的值为 null 就写入默认值
        if (GM_getValue(menu_ALL[i][0]) == null) { GM_setValue(menu_ALL[i][0], menu_ALL[i][3]) };
    }
    registerMenuCommand();

    // 自定义昼夜时间 过渡性调整（精确到分钟），过段时间移除
    if (GM_getValue('menu_customTime', '').indexOf(':') === -1) GM_setValue('menu_customTime', GM_getValue('menu_customTime', '6|18').replace('|', ':00|') + ':00')

    if (menu_ID.length > 1) { addStyle(); }


    // 注册脚本菜单
    function registerMenuCommand() {
        if (menu_ID.length != []) {
            for (let i = 0; i < menu_ID.length; i++) {
                GM_unregisterMenuCommand(menu_ID[i]);
            }
        }
        for (let i = 0; i < menu_ALL.length; i++) { // 循环注册脚本菜单
            menu_ALL[i][3] = GM_getValue(menu_ALL[i][0]);
            if (menu_ALL[i][0] === 'menu_disable') { // 启用/禁用护眼模式 (当前网站)
                if (menu_disable('check')) { // 当前网站是否已存在禁用列表中
                    menu_ID[i] = GM_registerMenuCommand(`${menu_ALL[i][2]}`, function () { menu_disable('del') });
                    return
                } else {
                    if (GM_getValue('menu_darkModeAuto') && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        menu_ID[i] = GM_registerMenuCommand(`❌ 当前浏览器为白天模式 (点击关闭 [护眼模式跟随浏览器])`, function () { GM_setValue('menu_darkModeAuto', false); location.reload(); });
                        return
                    }
                    menu_ID[i] = GM_registerMenuCommand(`${menu_ALL[i][1]}`, function () { menu_disable('add') });
                }
            }
            else if (menu_ALL[i][0] === 'menu_darkModeType') { // 点击切换模式
                if (menu_ALL[i][3] > 3) { // 避免在减少 raw 数组后，用户储存的数据大于数组而报错
                    menu_ALL[i][3] = 1;
                    GM_setValue(menu_ALL[i][0], menu_ALL[i][3]);
                }
                let menu_newMode = getAutoSwitch();
                menu_ID[i] = GM_registerMenuCommand(`${menu_num(menu_newMode)} ${menu_ALL[i][1]}`, function () { menu_toggle(`${menu_ALL[i][3]}`, `${menu_ALL[i][0]}`) });
            }
            else if (menu_ALL[i][0] === 'menu_customMode') { // 自定义当前模式
                GM_setValue(menu_ALL[i][0], menu_ALL[i][3]);
                menu_ID[i] = GM_registerMenuCommand(`#️⃣ ${menu_ALL[i][1]}`, function () { menu_customMode() });
            }
            else if (menu_ALL[i][0] === 'menu_customTime') { // 自定义昼夜时间
                GM_setValue(menu_ALL[i][0], menu_ALL[i][3]);
                menu_ID[i] = GM_registerMenuCommand(`#️⃣ ${menu_ALL[i][1]}`, function () { menu_customTime() });
            }
            else if (menu_ALL[i][0] === 'menu_customMode1' || menu_ALL[i][0] === 'menu_customMode2' || menu_ALL[i][0] === 'menu_customMode3' || menu_ALL[i][0] === 'menu_customMode3_exclude') { // 当前模式值
                GM_setValue(menu_ALL[i][0], menu_ALL[i][3]);
            }
            else if (menu_ALL[i][0] === 'menu_autoSwitch') { // 晚上自动切换模式
                menu_ID[i] = GM_registerMenuCommand(`#️⃣ ${menu_ALL[i][1]}`, function () { menu_customAutoSwitch() });
            }
            else if (menu_ALL[i][0] === 'menu_forcedToEnable') { // 强制当前网站启用护眼模式
                if (menu_value('menu_autoRecognition')) { // 自动排除自带暗黑模式的网页 (beta)
                    if (menu_forcedToEnable('check')) { // 当前网站是否已存在列表中
                        menu_ID[i] = GM_registerMenuCommand(`${menu_ALL[i][1]}`, function () { menu_forcedToEnable('del') });
                    } else {
                        menu_ID[i] = GM_registerMenuCommand(`${menu_ALL[i][2]}`, function () { menu_forcedToEnable('add') });
                    }
                }
            }
            else {
                menu_ID[i] = GM_registerMenuCommand(`${menu_ALL[i][3] ? '✅' : '❌'} ${menu_ALL[i][1]}`, function () { menu_switch(`${menu_ALL[i][3]}`, `${menu_ALL[i][0]}`, `${menu_ALL[i][2]}`) });
            }
        }
        menu_ID[menu_ID.length] = GM_registerMenuCommand('💬 反馈 & 建议', function () { window.GM_openInTab('https://github.com/XIU2/UserScript#xiu2userscript', { active: true, insert: true, setParent: true }); window.GM_openInTab('https://greasyfork.org/zh-CN/scripts/426377/feedback', { active: true, insert: true, setParent: true }); });
    }


    // 菜单数字图标
    function menu_num(num) {
        return ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'][num]
    }


    // 晚上自动切换模式
    function menu_customAutoSwitch() {
        let newAutoSwitch = prompt('白天、晚上使用不同模式，修改后立即生效~\n格式：白天模式|晚上模式\n例如：1|3（即白天模式 1 晚上模式 3）\n默认：留空（即关闭该功能）', GM_getValue('menu_autoSwitch'));
        if (newAutoSwitch === '') {
            GM_setValue('menu_autoSwitch', '');
        } else if (newAutoSwitch != null) {
            if (newAutoSwitch.split('|').length == 2) {
                GM_setValue('menu_autoSwitch', newAutoSwitch);
            } else {
                alert(`填入内容格式错误...`);
            }
        }
        registerMenuCommand(); // 重新注册脚本菜单
        if (document.getElementById('XIU2DarkMode')) {
            document.getElementById('XIU2DarkMode').remove(); // 即时修改样式
            addStyle();
        }
    }
    // 获取当前模式
    function getAutoSwitch() {
        let darkModeType = GM_getValue('menu_darkModeType'), hours = new Date().getHours(), time = GM_getValue('menu_customTime').split('|').map(Number);
        if (GM_getValue('menu_autoSwitch') != '') { // 晚上自动切换模式
            if (isDaytime()) { // 白天
                darkModeType = GM_getValue('menu_autoSwitch').split('|')[0];
            } else { // 晚上
                darkModeType = GM_getValue('menu_autoSwitch').split('|')[1];
            }
        }
        return parseInt(darkModeType)
    }


    // 自定义当前模式
    function menu_customMode() {
        let newMods, tip, defaults, name;
        switch (getAutoSwitch()) {
            case 1:
                tip = '自定义 [模式 1]，修改后立即生效 (部分网页可能需要刷新)~\n格式：亮度 (白天)|亮度 (晚上)\n默认：60|50（均为百分比 1~100，不需要 % 符号）';
                defaults = '60|50';
                name = 'menu_customMode1';
                break;
            case 2:
                tip = '自定义 [模式 2]，修改后立即生效 (部分网页可能需要刷新)~\n格式：亮度 (白天)|暖色 (白天)|亮度 (晚上)|暖色 (晚上)\n默认：60|40|50|50（均为百分比 1~100，不需要 % 符号）';
                defaults = '60|40|50|50';
                name = 'menu_customMode2';
                break;
            case 3:
                tip = '自定义 [模式 3]，修改后立即生效 (部分网页可能需要刷新)~\n格式：反色\n默认：90（均为百分比 50~100，不需要 % 符号）';
                defaults = '90';
                name = 'menu_customMode3';
                break;
        }
        newMods = prompt(tip, GM_getValue(`${name}`));
        if (newMods === '') {
            GM_setValue(`${name}`, defaults);
            registerMenuCommand(); // 重新注册脚本菜单
        } else if (newMods != null) {
            GM_setValue(`${name}`, newMods);
            registerMenuCommand(); // 重新注册脚本菜单
        }
        if (getAutoSwitch() == 3) {
            tip = '自定义 [模式 3] 排除目标，修改后立即生效 (部分网页可能需要刷新)~\n格式：CSS 选择器 (如果不会写可以找我)\n默认：img, .img, video, [style*="background"][style*="url"], svg\n (使用英文逗号间隔，末尾不要有逗号)';
            defaults = 'img, .img, video, [style*="background"][style*="url"], svg';
            name = 'menu_customMode3_exclude';
            newMods = prompt(tip, GM_getValue(`${name}`));
            if (newMods === '') {
                GM_setValue(`${name}`, defaults);
                registerMenuCommand(); // 重新注册脚本菜单
            } else if (newMods != null) {
                GM_setValue(`${name}`, newMods);
                registerMenuCommand(); // 重新注册脚本菜单
            }
        }
        if (document.getElementById('XIU2DarkMode')) {
            document.getElementById('XIU2DarkMode').remove(); // 即时修改样式
            addStyle();
        }
    }


    // 自定义昼夜时间
    function menu_customTime() {
        let newMods = prompt('自定义脚本内和白天/晚上相关的时间，修改后刷新网页生效~\n格式：6:00|18:30 (即 6:00 ~ 18:30 之间是白天时间)\n也支持反向设置：14:00|12:00 (即 12:00 ~ 14:00 之间是夜晚时间)', GM_getValue('menu_customTime'));
        if (newMods === '') {
            GM_setValue('menu_customTime', '6:00|18:00');
            registerMenuCommand(); // 重新注册脚本菜单
        } else if (newMods != null) {
            GM_setValue('menu_customTime', newMods);
            registerMenuCommand(); // 重新注册脚本菜单
        }
    }


    // 强制当前网站启用护眼模式
    function menu_forcedToEnable(type) {
        switch (type) {
            case 'check':
                if (check()) return true
                return false
                break;
            case 'add':
                add();
                break;
            case 'del':
                del();
                break;
        }

        function check() { // 存在返回真，不存在返回假
            let websiteList = menu_value('menu_forcedToEnable'); // 读取网站列表
            if (websiteList.indexOf(location.host) === -1) return false // 不存在返回假
            return true
        }

        function add() {
            if (check()) return
            let websiteList = menu_value('menu_forcedToEnable'); // 读取网站列表
            websiteList.push(location.host); // 追加网站域名
            GM_setValue('menu_forcedToEnable', websiteList); // 写入配置
            location.reload(); // 刷新网页
        }

        function del() {
            if (!check()) return
            let websiteList = menu_value('menu_forcedToEnable'), // 读取网站列表
                index = websiteList.indexOf(location.host);
            websiteList.splice(index, 1); // 删除网站域名
            GM_setValue('menu_forcedToEnable', websiteList); // 写入配置
            location.reload(); // 刷新网页
        }
    }


    // 启用/禁用护眼模式 (当前网站)
    function menu_disable(type) {
        switch (type) {
            case 'check':
                if (check()) return true
                return false
                break;
            case 'add':
                add();
                break;
            case 'del':
                del();
                break;
        }

        function check() { // 存在返回真，不存在返回假
            let websiteList = menu_value('menu_disable'); // 读取网站列表
            if (websiteList.indexOf(location.host) === -1) return false // 不存在返回假
            return true
        }

        function add() {
            if (check()) return
            let websiteList = menu_value('menu_disable'); // 读取网站列表
            websiteList.push(location.host); // 追加网站域名
            GM_setValue('menu_disable', websiteList); // 写入配置
            location.reload(); // 刷新网页
        }

        function del() {
            if (!check()) return
            let websiteList = menu_value('menu_disable'), // 读取网站列表
                index = websiteList.indexOf(location.host);
            websiteList.splice(index, 1); // 删除网站域名
            GM_setValue('menu_disable', websiteList); // 写入配置
            location.reload(); // 刷新网页
        }
    }


    // 切换暗黑模式
    function menu_toggle(menu_status, Name) {
        menu_status = parseInt(menu_status)
        if (menu_status >= 3) {
            menu_status = 1;
        } else {
            menu_status += 1;
        }
        GM_setValue(`${Name}`, menu_status);
        registerMenuCommand(); // 重新注册脚本菜单
        if (document.getElementById('XIU2DarkMode')) {
            document.getElementById('XIU2DarkMode').remove(); // 即时修改样式
            addStyle();
        }
        //location.reload(); // 刷新网页
    };


    // 菜单开关
    function menu_switch(menu_status, Name, Tips) {
        if (menu_status == 'true') {
            GM_setValue(`${Name}`, false);
            GM_notification({ text: `已关闭 [${Tips}] 功能\n（点击刷新网页后生效）`, timeout: 3500, onclick: function () { location.reload(); } });
        } else {
            GM_setValue(`${Name}`, true);
            GM_notification({ text: `已开启 [${Tips}] 功能\n（点击刷新网页后生效）`, timeout: 3500, onclick: function () { location.reload(); } });
        }
        if (Name === 'menu_autoRecognition') {
            location.reload(); // 刷新网页
        }
        registerMenuCommand(); // 重新注册脚本菜单
    };


    // 返回菜单值
    function menu_value(menuName) {
        for (let menu of menu_ALL) {
            if (menu[0] == menuName) {
                return menu[3]
            }
        }
    }


    // 添加样式
    function addStyle() {
        let remove = false, style_Add = document.createElement('style'),
            hours = new Date().getHours(),
            style_10 = menu_value('menu_customMode1').split('|'),
            style_20 = menu_value('menu_customMode2').split('|'),
            style_30 = menu_value('menu_customMode3').split('|'),
            style = ``,
            style_00 = `html, body {background-color: #ffffff !important;}`,
            style_11 = `html {filter: brightness(${style_10[0]}%) !important;}`,
            style_11_firefox = `html {filter: brightness(${style_10[0]}%) !important; background-image: url();}`,
            style_12 = `html {filter: brightness(${style_10[1]}%) !important;}`,
            style_12_firefox = `html {filter: brightness(${style_10[1]}%) !important; background-image: url();}`,
            style_21 = `html {filter: brightness(${style_20[0]}%) sepia(${style_20[1]}%) !important;}`,
            style_21_firefox = `html {filter: brightness(${style_20[0]}%) sepia(${style_20[1]}%) !important; background-image: url();}`,
            style_22 = `html {filter: brightness(${style_20[2]}%) sepia(${style_20[3]}%) !important;}`,
            style_22_firefox = `html {filter: brightness(${style_20[2]}%) sepia(${style_20[3]}%) !important; background-image: url();}`,
            style_31 = `html {filter: invert(${style_30[0]}%) !important; text-shadow: 0 0 0 !important;}
            ${menu_value('menu_customMode3_exclude')} {filter: invert(1) !important;}
            img[alt="[公式]"] {filter: none !important;}`,
            style_31_firefox = `html {filter: invert(${style_30[0]}%) !important; background-image: url(); text-shadow: 0 0 0 !important;}
            ${menu_value('menu_customMode3_exclude')} {filter: invert(1) !important;}
            img[alt="[公式]"] {filter: none !important;}`;

        // Firefox 浏览器需要特殊对待
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            style_11 = style_11_firefox
            style_12 = style_12_firefox
            style_21 = style_21_firefox
            style_22 = style_22_firefox
            style_31 = style_31_firefox
        }

        // 白天
        if (isDaytime()) {
            if (menu_value('menu_runDuringTheDay')) {
                style_12 = style_11
                style_22 = style_21
            } else {
                style_12 = style_22 = ''
            }
        }


        let darkModeType = getAutoSwitch();

        switch (darkModeType) {
            case 1:
                style += style_12;
                break;
            case 2:
                style += style_22;
                break;
            case 3:
                style += style_31;
                if (location.hostname.indexOf('search.bilibili.com') > -1) {
                    style += `ul.video-list img, ul.video-list .video-item .img .mask-video, ul.video-list .video-item .img .van-danmu, ul.video-list .video-item .img .van-framepreview {filter: none !important;}`
                } else if (location.hostname.indexOf('.bilibili.com') > -1) {
                    style += `
.bpx-player-container[data-screen="full"] .bpx-player-video-wrap {filter: invert(1) !important;}
.bpx-player-container[data-screen="web"] {filter: invert(1) !important;}
.bpx-player-container[data-screen="web"] video {filter: none !important;}
* {font-weight: bold !important;}`
                } else if (location.hostname.indexOf('.huya.com') > -1) {
                    style += `#player-wrap[style="height: 100%;"], .player-loading, .sidebar-show, #player-ctrl-wrap {filter: invert(1) !important;}`
                }
                break;
        }
        style_Add.id = 'XIU2DarkMode';
        style_Add.type = 'text/css';
        //console.log(document,document.lastElementChild,document.querySelector('html'))
        if (document.lastElementChild) {
            document.lastElementChild.appendChild(style_Add).textContent = style;
        } else { // 发现个别网站速度太慢的话，就会出现脚本运行太早，连 html 标签都还没加载。。。
            let timer1 = setInterval(function () { // 每 5 毫秒检查一下 html 是否已存在
                if (document.lastElementChild) {
                    clearInterval(timer1); // 取消定时器
                    document.lastElementChild.appendChild(style_Add).textContent = style;
                }
            });
        }

        let websiteList = [];
        if (menu_value('menu_autoRecognition')) { // 智能排除自带暗黑模式的网页 (beta)
            websiteList = menu_value('menu_forcedToEnable'); // 强制当前网站启用护眼模式
        }

        // 为了避免 body 还没加载导致无法检查是否设置背景颜色
        let timer = setInterval(function () { // 每 5 毫秒检查一下 body 是否已存在
            if (document.body) {
                clearInterval(timer); // 取消定时器（每 5 毫秒一次的）
                setTimeout(function () { // 为了避免太快 body 的 CSS 还没加载上，先延迟 150 毫秒（缺点就是可能会出现短暂一闪而过的暗黑滤镜）
                    console.log('[护眼模式] html:', window.getComputedStyle(document.lastElementChild).backgroundColor, 'body:', window.getComputedStyle(document.body).backgroundColor)
                    setDarkScrollbarColor();
                    setDarkBackgroundColor();
                    if (window.getComputedStyle(document.body).backgroundColor === 'rgba(0, 0, 0, 0)' && window.getComputedStyle(document.lastElementChild).backgroundColor === 'rgba(0, 0, 0, 0)' && !(document.querySelector('head>meta[name="color-scheme"],head>link[href^="resource:"]') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        // 如果 body 没有 CSS 背景颜色（或是在资源页 且 浏览器为白天模式），那就需要添加一个背景颜色，否则影响滤镜效果
                        let style_Add2 = document.createElement('style');
                        style_Add2.id = 'XIU2DarkMode2';
                        document.lastElementChild.appendChild(style_Add2).textContent = style_00;

                    } else if ((document.querySelector('head>meta[name="color-scheme"],head>link[href^="resource:"]') && window.matchMedia('(prefers-color-scheme: dark)').matches) || (document.querySelector('html[class*=dark], html[data-dark-theme*=dark], html[data-theme*=dark], html[data-color-mode*=dark], body[class*=dark]')) || (window.getComputedStyle(document.body).backgroundColor === 'rgb(0, 0, 0)') || (getColorValue(document.body) > 0 && getColorValue(document.body) < 898989) || (getColorValue(document.lastElementChild) > 0 && getColorValue(document.lastElementChild) < 898989) || (window.getComputedStyle(document.body).backgroundColor === 'rgba(0, 0, 0, 0)' && window.getComputedStyle(document.lastElementChild).backgroundColor === 'rgb(0, 0, 0)')) {
                        // 如果是在资源页 且 浏览器为暗黑模式，或 html/body 元素包含 dark 标识，或底色为黑色 (等于0,0,0) 或深色 (小于 89,89,89)，就停用本脚本滤镜
                        if (menu_value('menu_autoRecognition')) { // 排除自带暗黑模式的网页 (beta)
                            for (let i = 0; i < websiteList.length; i++) { // 这些网站强制启用护眼模式滤镜
                                if (websiteList[i] === location.host) return
                            }
                            console.log('[护眼模式] 检测到当前网页自带暗黑模式，停用本脚本滤镜...')
                            document.getElementById('XIU2DarkMode').remove();
                            remove = true;
                        }
                    }
                }, 150);

                // 用来解决一些 CSS 加载缓慢的网站，可能会出现没有正确排除的问题，在没有找到更好的办法之前，先这样凑活着用
                setTimeout(function () {
                    console.log('[护眼模式] html:', window.getComputedStyle(document.lastElementChild).backgroundColor, 'body:', window.getComputedStyle(document.body).backgroundColor)
                    setDarkScrollbarColor();
                    setDarkBackgroundColor();
                    if ((document.querySelector('head>meta[name="color-scheme"],head>link[href^="resource:"]') && window.matchMedia('(prefers-color-scheme: dark)').matches) || (document.querySelector('html[class*=dark], html[data-dark-theme*=dark], html[data-theme*=dark], html[data-color-mode*=dark], body[class*=dark]')) || (window.getComputedStyle(document.body).backgroundColor === 'rgb(0, 0, 0)') || (getColorValue(document.body) > 0 && getColorValue(document.body) < 898989) || (getColorValue(document.lastElementChild) > 0 && getColorValue(document.lastElementChild) < 898989) || (window.getComputedStyle(document.body).backgroundColor === 'rgba(0, 0, 0, 0)' && window.getComputedStyle(document.lastElementChild).backgroundColor === 'rgb(0, 0, 0)')) {
                        // 如果是在资源页 且 浏览器为暗黑模式，或 html/body 元素包含 dark 标识，或底色为黑色 (等于0,0,0) 或深色 (小于 89,89,89)，就停用本脚本滤镜
                        if (menu_value('menu_autoRecognition')) { // 排除自带暗黑模式的网页 (beta)
                            for (let i = 0; i < websiteList.length; i++) { // 这些网站强制启用护眼模式滤镜
                                if (websiteList[i] === location.host) return
                            }
                            if (remove) return
                            console.log('[护眼模式] 检测到当前网页自带暗黑模式，停用本脚本滤镜....')
                            if (document.getElementById('XIU2DarkMode')) document.getElementById('XIU2DarkMode').remove();
                            if (document.getElementById('XIU2DarkMode2')) document.getElementById('XIU2DarkMode2').remove();
                        }
                    }
                }, 1500);
            }
        });

        // 解决远景论坛会清理掉前面插入的 CSS 样式的问题
        if (location.hostname === 'bbs.pcbeta.com') {
            let timer1 = setInterval(function () {
                if (!document.getElementById('XIU2DarkMode')) {
                    document.lastElementChild.appendChild(style_Add).textContent = style;
                    clearInterval(timer1);
                }
            });
        }
    }

    // 获取背景颜色值
    function getColorValue(e) {
        let rgbValueArry = window.getComputedStyle(e).backgroundColor.replace(/rgba|rgb|\(|\)| /g, '').split(',')
        return parseInt(rgbValueArry[0] + rgbValueArry[1] + rgbValueArry[2])
    }


    // 获取背景颜色数组
    function getColorArray(e) {
        let rgbValueArry = window.getComputedStyle(e).backgroundColor.replace(/rgba|rgb|\(|\)| /g, '').split(',')
        return rgbValueArry.map((item) => parseInt(item))
    }


    // 手动实现反色滤镜
    function applyInvert(rgb, factor) {
        return rgb.map(value => Math.round(value * (1 - factor) + (255 - value) * factor))
    }


    // 模式3设置暗色的滚动条，需要等待读取背景色
    function setDarkScrollbarColor() {
        let darkModeType = getAutoSwitch()
        if (darkModeType == 3) {
            let style_30 = menu_value('menu_customMode3').split('|')
            let color = getColorArray(document.body)
            color = applyInvert(color, style_30[0] * 0.01)
            document.getElementById('XIU2DarkMode').textContent += ` html {scrollbar-color: #909090d0 rgb(${color.join(" ")});}`
            document.getElementById('XIU2DarkMode').textContent += ` body {scrollbar-color: auto;}`
        }
    }


    // 模式3设置暗色的背景页，需要等待读取背景色
    function setDarkBackgroundColor() {
        let darkModeType = getAutoSwitch()
        if (darkModeType == 3) {
            let style_30 = menu_value('menu_customMode3').split('|')
            let color = getColorArray(document.body)
            //color = applyInvert(color, style_30[0] * 0.01)
            //document.getElementById('XIU2DarkMode').textContent += ` html {background-color: rgb(${color.join(" ")});}`
            document.getElementById('XIU2DarkMode').textContent += ` html::before {content:"";position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgb(${color.join(" ")});z-index:-999;}`
        }
    }


    // 判断当前是白天还是晚上
    function isDaytime() {
        let nowTime = new Date('2022-03-07 ' + new Date().getHours() + ':' + new Date().getMinutes() + ':00').getTime() / 1000, time = GM_getValue('menu_customTime').split('|');
        time[0] = new Date('2022-03-07 ' + time[0] + ':00').getTime() / 1000;
        time[1] = new Date('2022-03-07 ' + time[1] + ':00').getTime() / 1000;
        if (time[0] < time[1]) {
            if (nowTime > time[0] && nowTime < time[1]) return true
            return false
        } else {
            if (nowTime > time[0] || nowTime < time[1]) return true
            return false
        }
    }
})();