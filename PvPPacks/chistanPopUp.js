const keyframeStyle = `
  <style>
    @keyframes rainbowMove {
      0% { background-position: 0% 0%; }
      100% { background-position: 300% 0%; }
    }
    
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateX(-50%) translateY(40px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateX(-50%) translateY(0) scale(1);
      }
    }
    
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    
    .ad-container {
      animation: slideUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }
    
    .ad-container:hover {
      transform: translateX(-50%) translateY(-6px) scale(1.02) !important;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35), 0 0 80px rgba(233, 69, 96, 0.15) !important;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .ad-container:hover .ad-rainbow {
      animation-duration: 1.5s !important;
      height: 6px !important;
    }
    
    .ad-container:hover .ad-glow {
      opacity: 1 !important;
    }
    
    .ad-container:hover .ad-cta {
      background: linear-gradient(135deg, #ff6b81, #e94560) !important;
      transform: scale(1.08) !important;
      box-shadow: 0 6px 25px rgba(233, 69, 96, 0.6) !important;
    }
    
    .ad-container:hover .ad-logo {
      transform: rotate(-5deg) scale(1.05) !important;
    }
    
    .ad-glow {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle at 30% 50%, rgba(233, 69, 96, 0.08), transparent 70%);
      opacity: 0;
      transition: opacity 0.6s ease;
      pointer-events: none;
      z-index: 0;
    }
    
    .ad-text-fa {
      font-family: 'Vazir', 'IRANSans', 'Tahoma', 'Arial', sans-serif !important;
    }
  </style>
`;

document.body.insertAdjacentHTML('beforeend', keyframeStyle);

const AdPopUp1 = `
  <a target="_blank" style="
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 520px;
    background: linear-gradient(145deg, #ffffff, #fafbfc);
    border-radius: 24px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15), 0 5px 20px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    z-index: 9999;
    direction: rtl;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(20px);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 0;
    position: relative;
  " 
  class="ad-container"
  href="https://stabad.ir" 
  target="_blank">
    
    <div class="ad-glow"></div>
    
    <div class="ad-rainbow" style="
      height: 5px;
      width: 100%;
      background: linear-gradient(90deg, #ff006e, #ff7f00, #ffd700, #00ff88, #00d4ff, #7b2ffc, #ff006e);
      background-size: 300% 100%;
      animation: rainbowMove 3s linear infinite;
      position: relative;
      z-index: 1;
    "></div>

    <div style="
      display: flex;
      align-items: center;
      gap: 18px;
      padding: 22px 24px 24px 24px;
      background: rgba(255,255,255,0.6);
      backdrop-filter: blur(10px);
      position: relative;
      z-index: 1;
    ">
      <div class="ad-logo" style="
        flex-shrink: 0;
        width: 90px;
        height: 90px;
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: linear-gradient(135deg, #f8f9fa, #e9ecef);
        box-shadow: 0 6px 20px rgba(0,0,0,0.06);
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        border: 2px solid rgba(255,255,255,0.5);
      ">
        <img src="https://rskyer.github.io/PvPPacks/image/stabad.server.logo.png" alt="اس‌تی آباد" style="
          width: 78px;
          height: 78px;
          object-fit: contain;
          border-radius: 14px;
          padding: 6px;
          background: white;
          transition: all 0.4s ease;
        " />
      </div>

      <div style="flex: 1; min-width: 0;">
        <div class="ad-text-fa" style="
          font-size: 1.1rem;
          font-weight: 800;
          color: #1a1a2e;
          margin-bottom: 8px;
          line-height: 1.4;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        ">
          <span style="
            background: linear-gradient(135deg, #e94560, #c23152);
            color: white;
            padding: 4px 16px;
            border-radius: 25px;
            font-size: 0.9rem;
            letter-spacing: 0.3px;
            box-shadow: 0 3px 12px rgba(233, 69, 96, 0.35);
            display: inline-block;
          ">
            ✦ اس‌تی آباد
          </span>
          <span style="
            font-size: 0.8rem;
            color: #868e96;
            font-weight: 500;
            background: #f1f3f5;
            padding: 3px 12px;
            border-radius: 15px;
          ">
            سرور ماینکرفت
          </span>
        </div>
        
        <div class="ad-text-fa" style="
          font-size: 0.95rem;
          color: #495057;
          line-height: 1.6;
          margin-bottom: 14px;
          font-weight: 500;
          background: linear-gradient(90deg, #e94560, #ff6b81);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        ">
          یه سرور ماینکرافت که فرق داره!
        </div>

        <div class="ad-cta" style="
          display: inline-block;
          background: linear-gradient(135deg, #e94560, #d63851);
          color: white;
          padding: 8px 28px;
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 20px rgba(233, 69, 96, 0.4);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.15);
          font-family: 'Vazir', 'IRANSans', 'Tahoma', 'Arial', sans-serif;
          text-align: center;
        ">
          بریم ماینکرافت!
        </div>
      </div>
    </div>
  </a>
`;

setTimeout(function() {
  document.body.insertAdjacentHTML('beforeend', AdPopUp1);
}, 2000);