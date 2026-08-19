  const keyframeStyle = `
  <style>
    @keyframes rainbowMove {
      0% { background-position: 0% 0%; }
      100% { background-position: 300% 0%; }
    }
  </style>
`;

document.body.insertAdjacentHTML('beforeend', keyframeStyle);
  const AdPopUp1 = `
    <a style="
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        max-width: 480px;
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        z-index: 9999;
        direction: ltr;
        text-decoration: none;
        font-family: sans-serif;
        cursor: pointer;
    " href="https://rskyer.github.io/PvPPacks/play/chistan" target="_blank">
       
        <div style="
            height: 6px;
            width: 100%;
            background: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff);
            background-size: 300% 100%;
            animation: rainbowMove 4s linear infinite;
        "></div>

        <div style="
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 14px 16px 16px 16px;
        ">
            <div style="
                flex-shrink: 0;
                width: 90px;
                height: 90px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            ">
                <img src="https://rskyer.github.io/PvPPacks/image/chistanLOGO.png" alt="Chistan Logo" style="
                    width: 80px;
                    height: 80px;
                    object-fit: contain;
                    border-radius: 8px;
                    padding: 4px;
                " />
            </div>

            <div style="flex: 1; min-width: 0;">
                <div style="font-size: 1.15rem; font-weight: 700; color: #1a1a2e; margin-bottom: 4px; line-height: 1.3;">
                    <strong style="color: #e94560;">
  بازی چیستان
  </strong> 
  ۴۰ مرحله+
                </div>
                <div style="font-size: 0.9rem; color: #555; line-height: 1.4; word-break: break-word;">
               کلیک کنید و بازیو شروع کنید!
                </div>
            </div>
        </div>
    </a>
  `;

  setTimeout(function() {
    document.body.insertAdjacentHTML('beforeend', AdPopUp1);
  }, 2000);
  </script>
</body>
</html>