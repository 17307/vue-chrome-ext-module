try {
        chrome.devtools.panels.create(
            "dev",  // dev名称
            'img/icon.png',
            "/devcontent.html"  // dev的具体页面
        );
    } catch (e) {
    }