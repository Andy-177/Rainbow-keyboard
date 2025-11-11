(function() {
    // 创建样式
    const style = document.createElement('style');
    style.textContent = `
        /* 通用顶部和底部小按钮样式 */
        .control-group {
            position: fixed;
            z-index: 999999;
            pointer-events: auto;
            display: flex;
            gap: 8px;
        }
        .control-btn {
            width: 48px;
            height: 48px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        /* 左上角按钮组位置 */
        .top-left-controls {
            top: 15px;
            left: 15px;
        }

        /* 右下角按钮组位置 */
        .bottom-right-controls {
            bottom: 15px;
            right: 15px;
        }

        /* 右上角菜单按钮位置 */
        .top-right-controls {
            top: 15px;
            right: 15px;
        }

        /* 左上角按钮颜色 */
        .pause-btn { background: rgba(60, 60, 60, 0.9); color: #ffffff; }
        .pause-btn:hover { background: rgba(80, 80, 80, 0.95); }
        .camera-btn { background: rgba(160, 160, 160, 0.9); color: #ffffff; }
        .camera-btn:hover { background: rgba(180, 180, 180, 0.95); }
        .tool-btn { background: rgba(255, 180, 90, 0.9); color: #ffffff; }
        .tool-btn:hover { background: rgba(255, 190, 100, 0.95); }
        .video-btn { background: rgba(90, 190, 255, 0.9); color: #ffffff; }
        .video-btn:hover { background: rgba(100, 200, 255, 0.95); }
        .chat-btn { background: rgba(120, 120, 120, 0.9); color: #ffffff; }
        .chat-btn:hover { background: rgba(140, 140, 140, 0.95); }

        /* 右下角按钮颜色 */
        .q-btn { background: rgba(128, 0, 128, 0.8); color: white; }
        .q-btn:hover { background: rgba(148, 20, 148, 0.9); }
        .e-btn { background: rgba(234, 179, 8, 0.8); color: white; }
        .e-btn:hover { background: rgba(244, 190, 20, 0.9); }
        .e-icon { width: 24px; height: 24px; fill: white; }
        .c-btn { background: rgba(60, 179, 113, 0.8); color: white; }
        .c-btn:hover { background: rgba(70, 190, 123, 0.9); }

        /* 右上角菜单按钮（独特颜色） */
        .menu-btn { 
            background: rgba(220, 50, 50, 0.9); /* 红色系，与其他按钮区分 */
            color: white; 
            z-index: 1000000; /* 确保在最上层 */
        }
        .menu-btn:hover { background: rgba(240, 70, 70, 0.95); }

        /* 原有控制区样式 */
        .direction-controls {
            position: fixed;
            bottom: 30px;
            left: 30px;
            z-index: 999999;
            pointer-events: auto;
        }
        .right-controls {
            position: fixed;
            bottom: 160px;
            right: 95px;
            z-index: 999999;
            pointer-events: auto;
        }
        .sword-vertical {
            display: flex;
            flex-direction: column;
            gap: 15px;
            position: relative;
            left: -25px;
        }
        .right-vertical {
            display: flex;
            flex-direction: column;
            gap: 15px;
            position: absolute;
            left: 60px;
            top: 40px;
        }
        .direction-pad {
            width: 240px;
            height: 240px;
            position: relative;
        }
        .dir-btn, .shift-btn, .sword-btn, .plus-btn, .ctrl-btn {
            width: 70px;
            height: 70px;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            font-weight: bold;
        }
        .dir-btn {
            position: absolute;
            background: rgba(30, 50, 80, 0.75);
        }
        .dir-btn:hover { background: rgba(50, 70, 120, 0.85); }
        .dir-btn:active { background: rgba(40, 60, 110, 0.95); }
        .shift-btn, .ctrl-btn { background: rgba(180, 90, 30, 0.75); color: white; }
        .shift-btn:hover, .ctrl-btn:hover { background: rgba(200, 100, 40, 0.85); }
        .shift-btn:active, .ctrl-btn:active { background: rgba(190, 95, 35, 0.95); }
        .sword-btn, .plus-btn { background: rgba(30, 120, 70, 0.75); color: white; }
        .sword-btn:hover, .plus-btn:hover { background: rgba(50, 140, 90, 0.85); }
        .sword-btn:active, .plus-btn:active { background: rgba(40, 130, 80, 0.95); }
        .plus-btn { font-size: 30px; }
        .ctrl-icon { font-size: 32px; }
        .sword-icon { 
            width: 36px;
            height: 36px;
            fill: white;
        }
        .up { top: 0; left: 85px; }
        .down { bottom: 0; left: 85px; }
        .left { top: 85px; left: 0; }
        .right { top: 85px; right: 0; }
        .jump { top: 85px; left: 85px; background: rgba(180, 90, 30, 0.75); }
        .jump:hover { background: rgba(200, 100, 40, 0.85); }
        .jump:active { background: rgba(190, 95, 35, 0.95); }
        .triangle { width: 0; height: 0; border-style: solid; }
        .triangle-up { border-width: 0 15px 25px 15px; border-color: transparent transparent rgba(230, 240, 255, 0.9) transparent; }
        .triangle-down { border-width: 25px 15px 0 15px; border-color: rgba(230, 240, 255, 0.9) transparent transparent transparent; }
        .triangle-left { border-width: 15px 25px 15px 0; border-color: transparent rgba(230, 240, 255, 0.9) transparent transparent; }
        .triangle-right { border-width: 15px 0 15px 25px; border-color: transparent transparent transparent rgba(230, 240, 255, 0.9); }
        .square { width: 30px; height: 30px; border: 4px solid rgba(250, 230, 200, 0.9); }
        .solid-square { width: 30px; height: 30px; background: rgba(250, 230, 200, 0.9); }

        /* 隐藏控制元素的样式 */
        .controls-hidden {
            display: none !important;
        }
    `;
    document.head.appendChild(style);

    // 创建左上角按钮组
    const topLeftContainer = document.createElement('div');
    topLeftContainer.className = 'control-group top-left-controls';
    topLeftContainer.innerHTML = `
        <button class="control-btn pause-btn" data-key="\`">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 42 42">
                <path fill="currentColor" fill-rule="evenodd" d="M27.066 1L7 21.068l19.568 19.569l4.934-4.933l-14.637-14.636L32 5.933z"></path>
            </svg>
        </button>
        <button class="control-btn camera-btn" data-key="F2">📷</button>
        <button class="control-btn tool-btn" data-key="F3">🛠</button>
        <button class="control-btn video-btn" data-key="F5">🎥</button>
        <button class="control-btn chat-btn" data-key="t">💬</button>
    `;
    document.body.appendChild(topLeftContainer);

    // 创建右下角按钮组
    const bottomRightContainer = document.createElement('div');
    bottomRightContainer.className = 'control-group bottom-right-controls';
    bottomRightContainer.innerHTML = `
        <button class="control-btn q-btn" data-key="q">🔶</button>
        <button class="control-btn e-btn" data-key="e">
            <svg class="e-icon" viewBox="0 0 448 480">
                <path d="M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z"/>
            </svg>
        </button>
        <button class="control-btn c-btn" data-key="c">🔍</button>
    `;
    document.body.appendChild(bottomRightContainer);

    // 创建右上角菜单按钮
    const topRightContainer = document.createElement('div');
    topRightContainer.className = 'control-group top-right-controls';
    topRightContainer.innerHTML = `
        <button class="control-btn menu-btn" data-action="toggle-controls">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
                <path fill="currentColor" fill-rule="evenodd" d="M14 5H2V3h12zm0 4H2V7h12zM2 13h12v-2H2z" clip-rule="evenodd"></path>
            </svg>
        </button>
    `;
    document.body.appendChild(topRightContainer);

    // 创建左侧方向控制键 - 这里将原跳跃键替换为Shift键
    const leftContainer = document.createElement('div');
    leftContainer.className = 'direction-controls';
    leftContainer.innerHTML = `
        <div class="direction-pad">
            <button class="dir-btn up" data-key="w">
                <div class="triangle triangle-up"></div>
            </button>
            <button class="dir-btn down" data-key="s">
                <div class="triangle triangle-down"></div>
            </button>
            <button class="dir-btn left" data-key="a">
                <div class="triangle triangle-left"></div>
            </button>
            <button class="dir-btn right" data-key="d">
                <div class="triangle triangle-right"></div>
            </button>
            <!-- 原跳跃键位置现在放置Shift键 -->
            <button class="dir-btn jump shift-btn" data-key="Shift">
                <div class="solid-square"></div>
            </button>
        </div>
    `;
    document.body.appendChild(leftContainer);

    // 创建右侧功能键 - 这里将原Shift键位置替换为跳跃键（空格键）
    const rightContainer = document.createElement('div');
    rightContainer.className = 'right-controls';
    rightContainer.innerHTML = `
        <div class="sword-vertical">
            <button class="ctrl-btn" data-key="Control">
                <div class="ctrl-icon">⏩</div>
            </button>
            <button class="sword-btn" data-action="left-click">
                <svg class="sword-icon" viewBox="0 0 24 24">
                    <path d="M6.92 5H5l9 9l1-.94m4.96 6.06l-.84.84a.996.996 0 0 1-1.41 0l-3.12-3.12l-2.68 2.66l-1.41-1.41l1.42-1.42L3 7.75V3h4.75l8.92 8.92l1.42-1.42l1.41 1.41l-2.67 2.67l3.12 3.12c.4.4.4 1.03.01 1.42"/>
                </svg>
            </button>
        </div>
        <div class="right-vertical">
            <!-- 原Shift键位置现在放置跳跃键（空格键） -->
            <button class="shift-btn jump" data-key=" ">
                <div class="square"></div>
            </button>
            <button class="plus-btn" data-action="right-click">+</button>
        </div>
    `;
    document.body.appendChild(rightContainer);

    // 模拟键盘事件
    function simulateKey(key, type) {
        let code, keyCode;
        
        switch(key) {
            case '`':
                code = 'Backquote';
                keyCode = 192;
                break;
            case ' ':
                code = 'Space';
                keyCode = 32;
                break;
            case 'Shift':
                code = 'ShiftLeft';
                keyCode = 16;
                break;
            case 'Control':
                code = 'ControlLeft';
                keyCode = 17;
                break;
            case 'F2':
                code = 'F2';
                keyCode = 113;
                break;
            case 'F3':
                code = 'F3';
                keyCode = 114;
                break;
            case 'F5':
                code = 'F5';
                keyCode = 116;
                break;
            case 't':
                code = 'KeyT';
                keyCode = 84;
                break;
            case 'q':
                code = 'KeyQ';
                keyCode = 81;
                break;
            case 'e':
                code = 'KeyE';
                keyCode = 69;
                break;
            case 'c':
                code = 'KeyC';
                keyCode = 67;
                break;
            default:
                code = `Key${key.toUpperCase()}`;
                keyCode = key.toUpperCase().charCodeAt(0);
        }

        const event = new KeyboardEvent(type, {
            key: key,
            code: code,
            keyCode: keyCode,
            which: keyCode,
            shiftKey: key === 'Shift' && type === 'keydown',
            ctrlKey: key === 'Control' && type === 'keydown',
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(event);
    }

    // 模拟鼠标事件
    function simulateMouseClick(type, isLeft = true) {
        const event = new MouseEvent(type, {
            button: isLeft ? 0 : 2,
            buttons: type === 'mousedown' ? (isLeft ? 1 : 2) : 0,
            bubbles: true,
            cancelable: true,
            view: window
        });
        document.dispatchEvent(event);
    }

    // 切换控制按钮显示/隐藏
    function toggleControls() {
        const allControls = document.querySelectorAll(
            '.top-left-controls, .bottom-right-controls, .direction-controls, .right-controls'
        );
        allControls.forEach(control => {
            control.classList.toggle('controls-hidden');
        });
    }

    // 绑定所有按钮事件
    const allButtons = document.querySelectorAll(
        '.dir-btn, .shift-btn, .sword-btn, .plus-btn, .ctrl-btn, .control-btn'
    );
    allButtons.forEach(button => {
        if (button.dataset.key) {
            const key = button.dataset.key;
            button.addEventListener('mousedown', () => simulateKey(key, 'keydown'));
            button.addEventListener('mouseup', () => simulateKey(key, 'keyup'));
            button.addEventListener('mouseleave', () => simulateKey(key, 'keyup'));

            button.addEventListener('touchstart', (e) => {
                e.preventDefault();
                simulateKey(key, 'keydown');
            });
            button.addEventListener('touchend', (e) => {
                e.preventDefault();
                simulateKey(key, 'keyup');
            });
        } else if (button.dataset.action === 'left-click') {
            button.addEventListener('mousedown', () => simulateMouseClick('mousedown', true));
            button.addEventListener('mouseup', () => simulateMouseClick('mouseup', true));
            button.addEventListener('mouseleave', () => simulateMouseClick('mouseup', true));

            button.addEventListener('touchstart', (e) => {
                e.preventDefault();
                simulateMouseClick('mousedown', true);
            });
            button.addEventListener('touchend', (e) => {
                e.preventDefault();
                simulateMouseClick('mouseup', true);
            });
        } else if (button.dataset.action === 'right-click') {
            button.addEventListener('mousedown', () => simulateMouseClick('mousedown', false));
            button.addEventListener('mouseup', () => simulateMouseClick('mouseup', false));
            button.addEventListener('mouseleave', () => simulateMouseClick('mouseup', false));

            button.addEventListener('touchstart', (e) => {
                e.preventDefault();
                simulateMouseClick('mousedown', false);
            });
            button.addEventListener('touchend', (e) => {
                e.preventDefault();
                simulateMouseClick('mouseup', false);
            });
        } else if (button.dataset.action === 'toggle-controls') {
            button.addEventListener('click', toggleControls);
            button.addEventListener('touchstart', (e) => {
                e.preventDefault();
                toggleControls();
            });
        }
    });

    console.log('控制插件已加载(version1.8.8)');
})();
