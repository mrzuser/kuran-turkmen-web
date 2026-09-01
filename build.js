const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const WORK_DIR = __dirname;
const DIST_DIR = path.join(WORK_DIR, 'dist');

if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

function getBase64(file) {
  const p = path.join(WORK_DIR, file);
  if (!fs.existsSync(p)) return '';
  const data = fs.readFileSync(p);
  return 'data:image/jpeg;base64,' + data.toString('base64');
}

const img1 = getBase64('Screenshot_2026-08-22-11-43-02-489_com.kuranturkmen.app.jpg');
const img2 = getBase64('Screenshot_2026-08-22-11-43-06-570_com.kuranturkmen.app.jpg');
const img3 = getBase64('Screenshot_2026-08-22-11-43-09-942_com.kuranturkmen.app.jpg');
const img4 = getBase64('Screenshot_2026-08-22-11-43-14-478_com.kuranturkmen.app.jpg');
const img5 = getBase64('Screenshot_2026-08-22-11-43-32-437_com.kuranturkmen.app.jpg');
const img6 = getBase64('Screenshot_2026-08-22-11-44-55-649_com.kuranturkmen.app.jpg');
const img7 = getBase64('Screenshot_2026-08-22-11-45-19-890_com.kuranturkmen.app.jpg');
const img8 = getBase64('Screenshot_2026-08-22-11-45-37-762_com.kuranturkmen.app.jpg');

const commonStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  :root {
    --gold-grad: linear-gradient(135deg, #FFFBEB 0%, #FDE047 30%, #EAB308 70%, #CA8A04 100%);
    --gold-border: linear-gradient(135deg, #FDE047, #CA8A04);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    margin: 0;
    padding: 0;
    width: 1080px;
    height: 2400px;
    background: radial-gradient(circle at 50% 10%, #0D4E35 0%, #06281B 40%, #02120C 100%);
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #FFFFFF;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Islamic Geometry Background Pattern */
  .pattern-grid {
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(rgba(245, 208, 97, 0.13) 1.5px, transparent 1.5px),
      radial-gradient(rgba(245, 208, 97, 0.08) 1.5px, transparent 1.5px);
    background-size: 44px 44px;
    background-position: 0 0, 22px 22px;
  }

  .islamic-crescent-bg {
    position: absolute;
    top: 50px;
    right: -50px;
    width: 480px;
    height: 480px;
    opacity: 0.07;
    pointer-events: none;
  }

  .ambient-glow {
    position: absolute;
    width: 950px;
    height: 750px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(234, 179, 8, 0.25) 0%, rgba(13, 78, 53, 0.35) 50%, transparent 75%);
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    filter: blur(60px);
  }

  .ambient-bottom-glow {
    position: absolute;
    width: 850px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%);
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    filter: blur(50px);
  }

  /* Header Section */
  .header-box {
    width: 960px;
    margin-top: 140px;
    margin-bottom: 65px;
    text-align: center;
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tag-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 11px 32px;
    border-radius: 40px;
    background: rgba(234, 179, 8, 0.14);
    border: 1.5px solid rgba(253, 224, 71, 0.5);
    color: #FEF08A;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 24px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.5);
    backdrop-filter: blur(16px);
  }

  .headline {
    font-size: 66px;
    font-weight: 800;
    line-height: 1.15;
    background: var(--gold-grad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
    filter: drop-shadow(0 6px 25px rgba(0,0,0,0.7));
    max-width: 940px;
  }

  .description {
    font-size: 31px;
    font-weight: 500;
    color: #D1FAE5;
    line-height: 1.38;
    max-width: 880px;
    text-shadow: 0 2px 10px rgba(0,0,0,0.8);
  }

  /* Phone Mockup Case (Ultra Premium Clean Bezel) */
  .phone-container {
    position: relative;
    width: 820px;
    height: 1760px;
    background: #0A0F0C;
    border-radius: 64px;
    padding: 14px;
    box-shadow: 
      0 0 0 2px #264E3D,
      0 0 0 6px #0C1A14,
      0 0 0 9px rgba(253, 224, 71, 0.55),
      0 50px 120px rgba(0,0,0,0.95),
      0 0 90px rgba(16, 185, 129, 0.35);
    z-index: 5;
  }

  .phone-screen {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    overflow: hidden;
    background: #000;
    position: relative;
  }

  .phone-screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  .screen-glare {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 40%);
    pointer-events: none;
  }
`;

function generateScreenshotHtml(badge, title, desc, imgData) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>${commonStyles}</style>
</head>
<body>
  <div class="pattern-grid"></div>
  <div class="ambient-glow"></div>
  <div class="ambient-bottom-glow"></div>

  <svg class="islamic-crescent-bg" viewBox="0 0 100 100" fill="#FDE047">
    <path d="M50 10 A40 40 0 1 0 90 50 A32 32 0 1 1 50 10 Z"/>
  </svg>

  <div class="header-box">
    <div class="tag-badge">✦ ${badge} ✦</div>
    <h1 class="headline">${title}</h1>
    <p class="description">${desc}</p>
  </div>

  <div class="phone-container">
    <div class="phone-screen">
      <img src="${imgData}" />
      <div class="screen-glare"></div>
    </div>
  </div>
</body>
</html>`;
}

const screenshots = [
  {
    filename: '01_Bas_Sahypa_1080x2400.png',
    badge: 'YSLAM DÜNYÄSİ',
    title: 'Kuran-y Kerim &<br>Ruhy Ýolbelet',
    desc: 'Gündelik aýat, doga, hadyslar we möhüm yslam maslahatlary',
    img: img1
  },
  {
    filename: '02_Kuran_Okamak_1080x2400.png',
    badge: 'TÜRKMEN TERJİMESİ',
    title: 'Mukaddes Kurany<br>Okaň we Öwreniň',
    desc: 'Arapça teksti, terjimesi we latyn elipbiýi bilen',
    img: img2
  },
  {
    filename: '03_Namaz_Wagtary_1080x2400.png',
    badge: 'TAKYK SENENAMA',
    title: 'Takyk Namaz<br>Wagtary & Azan',
    desc: 'Şäheriňize görä takyk wagtlar we indiki namaza çenli wagt',
    img: img3
  },
  {
    filename: '04_Dini_Bolumler_1080x2400.png',
    badge: 'DİNİ BÖLÜMLER',
    title: 'Doga, Tesbih,<br>99 Ady we Hadyslar',
    desc: 'Namaz öwrenmek, hatym etmek we ylmyhal maglumatlary',
    img: img4
  },
  {
    filename: '05_Hijri_Kalendar_1080x2400.png',
    badge: 'HİJRİ SENENAMA',
    title: 'Yslam Kalendary &<br>Mukaddes Gijeler',
    desc: 'Dini baýramlar, möhüm seneler we sene konwerteri',
    img: img5
  },
  {
    filename: '06_Meshur_Karylar_1080x2400.png',
    badge: 'OWADAN SESLER',
    title: 'Dünýä Meşhur<br>Karylaryň Tilaweti',
    desc: 'Mishary Alafasy, Al-Husary, As-Sudais we beýlekiler',
    img: img6
  },
  {
    filename: '07_Ayat_Okalys_1080x2400.png',
    badge: 'RAHAT OKALYŞ',
    title: 'Aýat-Aýat Sesli<br>we Reňkli Okalyş',
    desc: 'Aňsat diňleme, düşnükli düşündiriş we ýokary hilli arapça hat',
    img: img7
  },
  {
    filename: '08_Sazlamalar_1080x2400.png',
    badge: 'ŞAHSY SAZLAMALAR',
    title: 'Doly Şahsy<br>Sazlamalar & Görkezme',
    desc: 'Arapça, terjime, okalyş we ses parametrlerini aňsat dolandyryň',
    img: img8
  }
];

function generateFeatureGraphicHtml() {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
<style>
  :root {
    --gold-grad: linear-gradient(135deg, #FFFBEB 0%, #FDE047 35%, #EAB308 70%, #CA8A04 100%);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1024px;
    height: 500px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: radial-gradient(circle at 75% 30%, #0E4F36 0%, #06281B 45%, #02120C 100%);
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #FFF;
    display: flex;
    align-items: center;
    position: relative;
  }

  .pattern {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(253, 224, 71, 0.11) 1.5px, transparent 1.5px);
    background-size: 32px 32px;
  }

  .glow {
    position: absolute;
    width: 550px;
    height: 550px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(234, 179, 8, 0.22) 0%, rgba(13, 79, 54, 0.25) 50%, transparent 70%);
    right: 50px;
    top: -60px;
    filter: blur(45px);
  }

  .mosque-svg {
    position: absolute;
    right: -10px;
    bottom: -15px;
    height: 420px;
    opacity: 0.11;
    pointer-events: none;
  }

  .left-side {
    position: relative;
    z-index: 10;
    padding-left: 50px;
    max-width: 440px;
  }

  .top-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 30px;
    background: rgba(234, 179, 8, 0.16);
    border: 1px solid rgba(253, 224, 71, 0.5);
    color: #FEF08A;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 12px;
    backdrop-filter: blur(10px);
  }

  .brand-title {
    font-family: 'Cinzel', serif;
    font-size: 40px;
    font-weight: 900;
    line-height: 1.1;
    background: var(--gold-grad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
    filter: drop-shadow(0 4px 15px rgba(0,0,0,0.7));
  }

  .brand-desc {
    font-size: 15px;
    line-height: 1.45;
    color: #D1FAE5;
    margin-bottom: 22px;
    font-weight: 500;
  }

  .feature-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .pill-item {
    background: rgba(3, 24, 16, 0.9);
    border: 1px solid rgba(253, 224, 71, 0.4);
    padding: 7px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    color: #FFFFFF;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  }

  .right-side {
    position: absolute;
    right: 25px;
    bottom: -115px;
    display: flex;
    gap: 16px;
    align-items: flex-end;
    z-index: 5;
  }

  .mockup-back {
    width: 200px;
    height: 450px;
    background: #09120E;
    border-radius: 32px;
    padding: 6px;
    box-shadow: 0 25px 60px rgba(0,0,0,0.85), 0 0 25px rgba(234, 179, 8, 0.25);
    border: 2px solid rgba(253, 224, 71, 0.5);
    transform: rotate(-6deg) translateY(-20px);
    overflow: hidden;
  }

  .mockup-front {
    width: 215px;
    height: 480px;
    background: #09120E;
    border-radius: 34px;
    padding: 7px;
    box-shadow: 0 35px 80px rgba(0,0,0,0.95), 0 0 40px rgba(16, 185, 129, 0.45);
    border: 2.5px solid rgba(253, 224, 71, 0.8);
    transform: rotate(4deg);
    overflow: hidden;
  }

  .mockup-inner {
    width: 100%;
    height: 100%;
    border-radius: 26px;
    overflow: hidden;
  }

  .mockup-inner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
</head>
<body>
  <div class="pattern"></div>
  <div class="glow"></div>

  <svg class="mosque-svg" viewBox="0 0 500 300" fill="#FDE047">
    <path d="M250 50 C230 120 180 140 180 200 L320 200 C320 140 270 120 250 50 Z M250 20 L250 50 M245 20 L255 20 M120 100 L140 100 L140 250 L120 250 Z M120 80 L130 60 L140 80 Z M360 100 L380 100 L380 250 L360 250 Z M360 80 L370 60 L380 80 Z M50 180 C50 150 80 140 90 130 C100 140 130 150 130 180 L130 250 L50 250 Z M370 180 C370 150 400 140 410 130 C420 140 450 150 450 180 L450 250 L370 250 Z M0 250 L500 250 L500 300 L0 300 Z" />
  </svg>

  <div class="left-side">
    <div class="top-tag">✦ MUKADDES ÝOLBELET ✦</div>
    <h1 class="brand-title">KURAN TÜRKMEN</h1>
    <p class="brand-desc">Mukaddes Kurany Kerim terjimesi, takyk namaz wagtary we dünýä belli karylaryň owazy.</p>
    <div class="feature-pills">
      <div class="pill-item">📖 Kuran Terjimesi</div>
      <div class="pill-item">🕌 Takyk Azan</div>
      <div class="pill-item">🎧 Sesli Yzarlama</div>
      <div class="pill-item">📿 Doga & Tesbih</div>
    </div>
  </div>

  <div class="right-side">
    <div class="mockup-back">
      <div class="mockup-inner">
        <img src="${img3}" alt="Namaz">
      </div>
    </div>
    <div class="mockup-front">
      <div class="mockup-inner">
        <img src="${img1}" alt="Baş Sahypa">
      </div>
    </div>
  </div>
</body>
</html>`;
}

console.log('Generating updated HTML templates...');

const featureHtmlPath = path.join(WORK_DIR, 'temp_feature.html');
fs.writeFileSync(featureHtmlPath, generateFeatureGraphicHtml(), 'utf-8');

const htmlFiles = [];
screenshots.forEach((s, idx) => {
  const hPath = path.join(WORK_DIR, `temp_ss_${idx + 1}.html`);
  const html = generateScreenshotHtml(s.badge, s.title, s.desc, s.img);
  fs.writeFileSync(hPath, html, 'utf-8');
  htmlFiles.push({ path: hPath, outfile: path.join(DIST_DIR, s.filename) });
});

console.log('Re-rendering high-res images...');
const featureOut = path.join(DIST_DIR, '00_Feature_Graphic_1024x500.png');
execSync(`"${CHROME_PATH}" --headless --disable-gpu --screenshot="${featureOut}" --window-size=1024,500 "file:///${featureHtmlPath.replace(/\\/g, '/')}"`);

htmlFiles.forEach((f, idx) => {
  console.log(`Re-rendering Screenshot ${idx + 1}/8: ${path.basename(f.outfile)}...`);
  execSync(`"${CHROME_PATH}" --headless --disable-gpu --screenshot="${f.outfile}" --window-size=1080,2400 "file:///${f.path.replace(/\\/g, '/')}"`);
});

fs.unlinkSync(featureHtmlPath);
htmlFiles.forEach(f => {
  if (fs.existsSync(f.path)) fs.unlinkSync(f.path);
});

console.log('🎉 CLEAN RENDER FINISHED PERFECTLY!');
