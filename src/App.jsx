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
    { src: "public/i/images/FIO_1514.jpg", label: "主人與毛孩互動" },
    { src: "public/i/images/FIO_5695.jpg", label: "毛孩自然肖像" },
    { src: "public/i/images/FIO_0616.jpg", label: "一家人合照" },
    { src: "public/i/images/FIO_3629.jpg", label: "動態奔跑感" },
    { src: "public/i/images/FIO_5267.jpg", label: "展現兩隻寵物" },
    { src: "public/i/images/FIO_5627.jpg", label: "戶外生活感" },
    { src: "public/i/images/FIO_8867.jpg", label: "城市散步感" },
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
            寵物展限定優惠，為你同毛孩安排一小時戶外拍攝。由自然互動到溫柔合照，將日常陪伴變成一輯可以珍藏嘅家庭照片。
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
            毛孩唔需要乖乖坐定定，拍攝會以牠們最自然嘅狀態進行，透過互動、散步同玩樂，捕捉你哋之間真實又溫柔嘅瞬間。
          </InfoCard>
        </div>
      </section>

      <section className="container section gallery-grid">
        <div>
          <p className="eyebrow">Gallery</p>
          <h2>自然、乾淨、有陪伴感</h2>
          <p className="section-text">
            以你同毛孩之間最自然嘅相處為主角，從輕鬆互動、溫柔肖像，到戶外散步同奔跑瞬間，記錄一輯真正屬於你哋嘅家庭照片。
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
          <h2>為你同毛孩，留低一輯有溫度嘅家庭照</h2>
          <p>
            毛孩陪住我哋嘅時間，比想像中短。趁住今次寵物展限定優惠，為你哋之間最自然、最親密嘅日常，留下一份可以一直翻睇嘅回憶。
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
