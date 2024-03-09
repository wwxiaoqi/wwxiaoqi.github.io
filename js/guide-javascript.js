const common_url_data = [
    {
        href: "https://sspai.com",
        src: "../images/sspai.svg",
        title: "少数派",
        desc: "探索数字生活"
    },
    {
        href: "https://www.notion.so",
        src: "../images/notion.svg",
        title: "Notion",
        desc: "知识管理工具"
    },
    {
        href: "https://github.com",
        src: "../images/github.svg",
        title: "github",
        desc: "代码托管平台"
    },
    {
        href: "https://excalidraw.com",
        src: "../images/excalidraw.svg",
        title: "excalidraw",
        desc: "风格绘图应用"
    },
    {
        href: "https://mail.google.com",
        src: "../images/gmail.svg",
        title: "Gmail",
        desc: "便捷高效沟通"
    },
    {
        href: "https://weread.qq.com",
        src: "../images/weread.svg",
        title: "微信阅读",
        desc: "畅想阅读之美"
    },
    {
        href: "https://mubu.com",
        src: "../images/mubu.svg",
        title: "幕布",
        desc: "知识大纲笔记"
    },
    {
        href: "https://juejin.cn",
        src: "../images/juejin.svg",
        title: "掘金",
        desc: "发现优质项目"
    },
    {
        href: "https://snapdrop.net",
        src: "../images/snapdrop.svg",
        title: "snapdrop",
        desc: "便捷快速分享"
    },
    {
        href: "https://www.figma.com",
        src: "../images/figma.svg",
        title: "figma",
        desc: "界面设计工具"
    },
    {
        href: "https://wwxiaoqi.lanzoui.com/b0205n26j",
        src: "../images/download.svg",
        title: "工具",
        desc: "工具下载地址"
    },
];

function setWelcome() {
    if (window.orientation == 90 || window.orientation == -90) {
        document.getElementById('plugin-greetings').innerHTML = '月出惊山鸟，时鸣春涧中。';
    } else if (window.orientation == 0 || window.orientation == 180) {
        document.getElementById('plugin-greetings').innerHTML = '欢迎。';
    }
}

function setCommonUrl() {
    const appContainer = document.querySelector('.apps-container');
    common_url_data.forEach(item => {
        const appContainerInner = document.createElement('div');
        appContainerInner.className = 'app-container';
        appContainerInner.dataset.id = item.title;

        const appItem = document.createElement('a');
        appItem.href = item.href;
        appItem.rel = 'noopener';
        appItem.target = '_blank';
        appItem.className = 'app-item';
        appItem.title = item.title;
    
        const appIcon = document.createElement('div');
        appIcon.className = 'app-icon';
        const appIconImg = document.createElement('img');
        appIconImg.src = item.src;
        appIconImg.width = 68;
        appIconImg.height = 68;
        appIcon.appendChild(appIconImg);
    
        const appText = document.createElement('div');
        appText.className = 'app-text';
    
        const appTitle = document.createElement('p');
        appTitle.className = 'app-title';
        appTitle.textContent = item.title;
    
        const appDesc = document.createElement('p');
        appDesc.className = 'app-desc';
        appDesc.textContent = item.desc;
    
        appText.appendChild(appTitle);
        appText.appendChild(appDesc);
        appItem.appendChild(appIcon);
        appItem.appendChild(appText);
    
        appContainerInner.appendChild(appItem);
        appContainer.appendChild(appContainerInner);
    });
}

function setClock() {
    var time = new Date();
    var week;
    switch (time.getDay()) {
        case 1: week = "星期一"; break;
        case 2: week = "星期二"; break;
        case 3: week = "星期三"; break;
        case 4: week = "星期四"; break;
        case 5: week = "星期五"; break;
        case 6: week = "星期六"; break;
        default: week = "星期天";
    }
    var year = time.getFullYear();
    var month = time.getMonth();
    month = month + 1;
    month = month < 10 ? '0' + month : month;
    var date = time.getDate();
    var hour = time.getHours();
    hour = hour < 10 ? '0' + hour : hour;
    var minute = time.getMinutes();
    minute = minute < 10 ? '0' + minute : minute;
    var seconds = time.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var str1 = "<span>" + year + " 年 " + month + " 月 " + date + " 日&nbsp;" + "</span>";
    var str2 = "<span>" + week + "</span>";
    var str3 = "&nbsp;<span>" + hour + ':' + minute + ':' + seconds + "</span>";
    document.getElementById('datetime').innerHTML = str1 + str2 + str3;
}

window.onload = function () {
    setWelcome();
    setCommonUrl();
}

setInterval(setClock, 1000);