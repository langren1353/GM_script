function safeWait(selector, callback, time = 60, keep = false) {
  const timer = setInterval(function () {
    const target = typeof selector === 'function' ? selector() : document.querySelector(selector);
    if (target) {
      callback(target);
      if (!keep) clearInterval(timer);
    }
  }, time, true);
}

safeWait('.container .aside .aside-curtain', node => {
  const injectHTML = `
<style>
.aside-curtain{
  height: 100% !important;
  padding-left: 0 !important;
}

  /* 容器增强 */
  .inject-container {
    position: absolute;
    top: 200px;
    left: 0;
    width: 333px;
    height: 650px;
    background: linear-gradient(175deg, #F2F3F5 60%, #e3e7ed 100%);
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 5px;
    padding: 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 12px 40px rgba(0,0,0,0.06);
    overflow: hidden;
    z-index: 100;
  }
  .inject-container:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 50px rgba(59, 65, 255, 0.15);
  }

  /* 内层容器 */
  .inject-inner {
    background: white;
    height: 100%;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: inset 0 2px 8px rgba(0,0,0,0.03);
  }
  .inject-hint{
    position: absolute;
    top: 16px;
    right: 45px;
    z-index: 4;
    font-size: 12px;
  }
  /* 关闭按钮优化 */
  .inject-close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    z-index: 3;
    width: 26px;
    height: 26px;
    background: rgba(255,255,255,0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    transition: all 0.3s;
    backdrop-filter: blur(2px);
    border: 1px solid rgba(0,0,0,0.05);
  }
  .inject-close:hover {
    background: rgba(255,80,80,0.15);
    color: #ff5050;
    transform: rotate(90deg) scale(1.1);
  }

  /* 主要内容区 */
  .inject-main {
    padding: 40px 20px;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  /* 标题特效升级 */
  .inject-main .title {
    font-size: 28px;
    font-weight: 800;
    margin: 0 0 30px;
    position: relative;
    padding: 10px 24px;
    line-height: 1.1;
    background: linear-gradient(135deg, #0E6CFF 0%, #05AAFE 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 2px 4px rgba(14, 108, 255, 0.15);
  }
  .inject-main .title::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 3px;
    background: linear-gradient(90deg,
    transparent 0%,
    rgba(14, 108, 255, 0.6) 50%,
    transparent 100%);
    filter: drop-shadow(0 2px 2px rgba(14, 108, 255, 0.2));
  }

  /* 内容区增强 */
  .inject-main .content {
    font-size: 15px;
    color: #555;
    line-height: 1.7;
    margin: 30px 0;
    padding: 22px;
    background: rgba(245, 248, 255, 0.8);
    border-radius: 14px;
    position: relative;
    border: 1px solid rgba(14, 108, 255, 0.1);
    transition: all 0.3s;
  }
  .inject-main .content::before {
    content: "🚀";
    position: absolute;
    left: -8px;
    top: -18px;
    font-size: 28px;
    filter: drop-shadow(0 2px 4px rgba(14, 108, 255, 0.2));
    animation: float 3s ease-in-out infinite;
  }
  .inject-main .content:hover {
    transform: translateY(-2px);
    background: rgba(245, 248, 255, 1);
    box-shadow: 0 6px 20px rgba(14, 108, 255, 0.08);
  }

  /* 价格突出显示 */
  .inject-main .content b {
    color: #0E6CFF;
    position: relative;
    padding: 2px 6px;
    border-radius: 4px;
    background: linear-gradient(135deg,
    rgba(14, 108, 255, 0.08) 0%,
    rgba(14, 108, 255, 0.04) 100%);
  }
  .inject-main .content b::after {
    content: "↓";
    color: #ff4757;
    font-size: 0.8em;
    margin-left: 4px;
  }

  /* CTA按钮升级 */
  .cta-button {
    display: inline-flex;
    align-items: center;
    padding: 14px 38px;
    background: linear-gradient(135deg, #0E6CFF 0%, #05AAFE 100%);
    color: white !important;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 700;
    box-shadow: 0 6px 20px rgba(14, 108, 255, 0.25);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  .cta-button::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg,
    transparent 25%,
    rgba(255,255,255,0.3) 50%,
    transparent 75%);
    animation: shine 3s infinite;
  }
  .cta-button:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 30px rgba(14, 108, 255, 0.35);
  }
  .cta-button:active {
    transform: translateY(1px) scale(0.98);
  }

  /* 动画效果 */
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  @keyframes shine {
    to { transform: translateX(100%); }
  }

  /* 链接层优化 */
  .ad-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
</style>
<div class="inject-container">
  <div class="inject-hint">官方推荐</div>
  <div class="inject-close" onclick="closeMe(event)">×</div>
  <div class="inject-inner" onclick="jumpLink()">
    <div class="inject-main">
      <h1 class="title">解决Greasyfork被墙：极速节点订阅</h1>
      <div class="content">
        <b>80+ 高速直连稳定节点</b><br>
        <span style="display: inline-block; margin: 8px 0;">🌐 全球智能分流</span><br>
        🔒 加密直连技术<br>
        🎬 4K/HDR 流媒体解锁<br>
        📚 学术科研常规线路<br>
        ⏱️ 商业VIP专用线路<br>
        ⚡ 24/7 技术支持<br><br>
        <span style="color: #666; font-size: 0.9em;">
          限时特惠：<br>
          <b style="font-size:1.2em;">¥4</b>/月 
          <span style="color:#999;">|</span> 
          <b style="font-size:1.2em; color: black;">¥24</b>/年
        </span>
      </div>
      <a href="https://v.xn--4gq62f52gdss.plus/b/?code=g4WEkq4j" class="cta-button" target="_blank">
        <span style="margin-right: 8px;">🔥</span>立即加速 →
      </a>
    </div>
  </div>
</div>
  `
  if(!document.cookie.includes('ad_close') && !document.querySelector('.inject-container')) {
    node.insertAdjacentHTML('beforeend', injectHTML)
  }
  window.closeMe = (e) => {
    e.stopPropagation();
    e.target.closest('.aside-curtain').style.display = 'none';
    document.cookie = 'ad_close=true; max-age=600'
  }
  window.jumpLink = () => {
    window.open('https://v.xn--4gq62f52gdss.plus/b/?code=g4WEkq4j', '_blank')
  }
}, 200, false)

