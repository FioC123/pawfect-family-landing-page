import React from "react";
import {
  Camera,
  Clock,
  PawPrint,
  Sparkles,
  Image as ImageIcon,
  Download,
  MapPin,
  CheckCircle2,
  CalendarDays,
  MessageCircle,
  Heart,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const whatsappLink =
    "https://wa.me/85294422612?text=你好，我想查詢 Pawfect Family 寵物展限定拍攝方案。";

  const heroImage = "/images/FIO_5533.jpeg";

  const galleryImages = [
    { src: "public/i/images/FIO_1514.jpeg", label: "主人與毛孩互動" },
    { src: "public/i/images/FIO_5695.jpeg", label: "毛孩自然肖像" },
    { src: "public/i/images/FIO_0616.jpeg", label: "一家人合照" },
    { src: "public/i/images/FIO_3629.jpeg", label: "動態奔跑感" },
    { src: "public/i/images/FIO_5267.jpeg", label: "展現兩隻寵物" },
    { src: "public/i/images/FIO_5627.jpeg", label: "戶外生活感" },
    { src: "public/i/images/FIO_8867.jpeg", label: "城市散步感" },
  ];

  const packageItems = [
    { icon: Clock, text: "1 小時拍攝時間" },
    { icon: PawPrint, text: "2 位主人與寵物，最多兩隻寵物" },
    { icon: Sparkles, text: "所有相片已基本調色及光暗處理" },
    { icon: ImageIcon, text: "10 張精修相片" },
    { icon: Download, text: "數碼高清 JPG 檔案" },
  ];

  return (
    <main>
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="pill">
              <PawPrint size={16} />
              寵物展限定預約
            </div>

            <p className="eyebrow">Pawfect Memories Photography</p>
            <h1>
              Pawfect Family
              <span>寵物展限定戶外攝影方案</span>
            </h1>

            <p className="intro">
              為主人與毛孩而設的戶外家庭拍攝。自然互動、乾淨色調、保留毛孩最真實的表情與陪伴感，適合第一次拍攝，也適合想為家中寶貝留低珍貴回憶的你。
            </p>

            <div className="button-row">
              <a className="button primary" href={whatsappLink} target="_blank">
                <MessageCircle size={20} />
                WhatsApp 查詢檔期
              </a>
              <a className="button secondary" href="#package">
                查看方案內容
                <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <img src={heroImage} alt="Pawfect Family hero dog portrait" />
            <div className="price-card">
              <p>FROM</p>
              <strong>HKD 1488</strong>
              <span>per session</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="package" className="container section package-grid">
        <div>
          <p className="eyebrow">Package</p>
          <h2>展覽限定拍攝方案</h2>
          <p className="section-text">
            內容清晰、預約簡單，適合在展覽現場直接導流到 WhatsApp，減少來回查詢時間。
          </p>
        </div>

        <div className="package-card">
          <div className="package-head">
            <div>
              <h3>Pawfect Family</h3>
              <p>主人與寵物的自然家庭攝影</p>
            </div>
            <div className="price">
              <span>HKD</span>
              <strong>1488</strong>
            </div>
          </div>

          <div className="item-list">
            {packageItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="package-item" key={index}>
                  <div>
                    <Icon size={20} />
                  </div>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="note">
            <strong>額外收費項目</strong>
            <p>每一隻寵物或每一位人物加收 HKD 300。</p>
            <p>拍攝日前 7 天內取消或改期加收 HKD 300，天氣問題可任意改期。</p>
          </div>
        </div>
      </section>

      <section className="steps">
        <div className="container step-grid">
          <InfoCard icon={CalendarDays} title="01. 查詢檔期">
            透過 WhatsApp 留低姓名、毛孩種類、想拍攝月份與人寵數量。
          </InfoCard>
          <InfoCard icon={MapPin} title="02. 確認地點">
            可選西九文化區、清水灣郊野公園、獅子會自然教育中心。
          </InfoCard>
          <InfoCard icon={Heart} title="03. 輕鬆拍攝">
            不用擔心毛孩不望鏡頭，以互動和自然情緒為主。
          </InfoCard>
        </div>
      </section>

      <section className="container section gallery-grid">
        <div>
          <p className="eyebrow">Gallery</p>
          <h2>自然、乾淨、有陪伴感</h2>
          <p className="section-text">
            以主人與毛孩的互動作主軸，再加入寵物肖像、動態奔跑及戶外生活感，令客人一眼感受到拍攝效果。
          </p>

          <div className="check-list">
            {["一家人自然互動", "毛孩望鏡頭肖像", "戶外散步感生活照", "動態奔跑畫面"].map(
              (item) => (
                <p key={item}>
                  <CheckCircle2 size={20} />
                  {item}
                </p>
              )
            )}
          </div>
        </div>

        <div className="gallery">
          {galleryImages.slice(0, 4).map((image, index) => (
            <div className={`gallery-item item-${index}`} key={image.src}>
              <img src={image.src} alt={image.label} />
              <span>{image.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-wrap">
        <div className="cta">
          <p className="eyebrow light">Limited Booking</p>
          <h2>想喺展覽即場留住客人？</h2>
          <p>
            將 QR code 放在展位、海報和卡片上，連到這個頁面，再以 WhatsApp 收集查詢。整個流程要短、靚、少字，但每一步都清楚。
          </p>
          <a className="button white" href={whatsappLink} target="_blank">
            立即 WhatsApp 預約
          </a>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="info-card">
      <Icon size={32} />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
