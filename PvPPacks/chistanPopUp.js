const keyframeStyle = `
  <style>
    @keyframes rainbowMove {
      0% { background-position: 0% 0%; }
      100% { background-position: 300% 0%; }
    }
    
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateX(-50%) translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    .ad-container {
      animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }
    
    .ad-container:hover {
      transform: translateX(-50%) translateY(-4px) !important;
      box-shadow: 0 16px 50px rgba(0, 0, 0, 0.3) !important;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .ad-container:hover .ad-rainbow {
      animation-duration: 2s !important;
    }
    
    .ad-container:hover .ad-button {
      background: #e94560 !important;
      transform: scale(1.05);
    }
  </style>
`;

document.body.insertAdjacentHTML('beforeend', keyframeStyle);

const AdPopUp1 = `
  <a target="_blank" style="
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    width: 92%;
    max-width: 500px;
    background: linear-gradient(145deg, #ffffff, #f8f9fa);
    border-radius: 20px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18), 0 4px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    z-index: 9999;
    direction: ltr;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 0;
  " 
  class="ad-container"
  href="https://stabad.ir" 
  target="_blank">
    
    <div class="ad-rainbow" style="
      height: 5px;
      width: 100%;
      background: linear-gradient(90deg, #ff006e, #ff7f00, #ffd700, #00d4ff, #7b2ffc, #ff006e);
      background-size: 300% 100%;
      animation: rainbowMove 3s linear infinite;
      position: relative;
    "></div>

    <div style="
      position: absolute;
      top: 12px;
      right: 12px;
      width: 28px;
      height: 28px;
      background: rgba(0,0,0,0.05);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      color: #999;
      transition: all 0.3s ease;
      cursor: pointer;
      z-index: 10;
    " 
    onclick="event.preventDefault(); this.closest('a').style.display='none';">
      ✕
    </div>

    <div style="
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 18px 20px 20px 20px;
      background: rgba(255,255,255,0.7);
      backdrop-filter: blur(5px);
    ">
      <div style="
        flex-shrink: 0;
        width: 85px;
        height: 85px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      ">
        <img src="https://rskyer.github.io/PvPPacks/image/stabad.server.logo.png" alt="Stabad Logo" style="
          width: 75px;
          height: 75px;
          object-fit: contain;
          border-radius: 12px;
          padding: 4px;
          background: white;
        " />
      </div>

      <div style="flex: 1; min-width: 0;">
        <div style="
          font-size: 1.05rem;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 6px;
          line-height: 1.3;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        ">
          <span style="
            background: linear-gradient(135deg, #e94560, #c23152);
            color: white;
            padding: 2px 14px;
            border-radius: 20px;
            font-size: 0.85rem;
            letter-spacing: 0.5px;
            box-shadow: 0 2px 8px rgba(233, 69, 96, 0.3);
          ">
            ✦ اس‌تی آباد
          </span>
          <span style="
            font-size: 0.85rem;
            color: #6c757d;
            font-weight: 400;
          ">
            سرور ماینکرفت
          </span>
        </div>
        
        <div style="
          font-size: 0.92rem;
          color: #495057;
          line-height: 1.5;
          margin-bottom: 10px;
          font-weight: 500;
        ">
          ✨ یه سرور ماینکرافت که فرق داره!
        </div>

        <div class="ad-button" style="
          display: inline-block;
          background: linear-gradient(135deg, #e94560, #d63851);
          color: white;
          padding: 6px 20px;
          border-radius: 25px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          box-shadow: 0 4px 15px rgba(233, 69, 96, 0.35);
          transition: all 0.3s ease;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.1);
        ">
          بزن بریم 🚀
        </div>
      </div>
    </div>
  </a>
`;

setTimeout(function() {
  document.body.insertAdjacentHTML('beforeend', AdPopUp1);
}, 2000);