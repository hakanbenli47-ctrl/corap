"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  MapPin,
  ArrowRight,
  Factory,
  Truck,
  ShieldCheck,
  Sparkles,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Quote,
} from "lucide-react";

const phoneDisplay = "+90 530 465 66 65";
const phoneHref = "+905304656665";

const whatsappUrl =
  "https://wa.me/905304656665?text=Merhaba%2C%20Tarz%20%C3%87orap%20web%20sitesinden%20ula%C5%9F%C4%B1yorum.%20Toptan%20%C3%A7orap%20imalat%C4%B1%20ve%20sipari%C5%9F%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

const commentWhatsappUrl =
  "https://wa.me/905304656665?text=Merhaba%2C%20Tarz%20%C3%87orap%20web%20sitesindeki%20yorum%20alan%C4%B1%20i%C3%A7in%20ileti%C5%9Fime%20ge%C3%A7iyorum.";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Sancaktepe%2C%2034100%20Ba%C4%9Fc%C4%B1lar%2F%C4%B0stanbul%2C%20T%C3%BCrkiye";

const navItems = [
  { label: "Üretim", href: "#uretim" },
  { label: "Ürünler", href: "#urunler" },
  { label: "Yorumlar", href: "#yorumlar" },
  { label: "Süreç", href: "#surec" },
  { label: "İletişim", href: "#iletisim" },
];

const slides = [
  {
    title: "Toptan çorap üretimi.",
    text: "Mağaza, butik, pazar ve e-ticaret satıcıları için üretimden direkt çorap tedariği.",
    image:
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=1800&auto=format&fit=crop",
  },
  {
    title: "Her modele uygun imalat.",
    text: "Erkek, kadın, çocuk, soket, patik, spor, bambu, desenli ve özel seri çorap üretimi.",
    image:
      "https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=1800&auto=format&fit=crop",
  },
  {
    title: "Toptan satış için hızlı teklif.",
    text: "Ürün grubu, adet ve model bilgisini gönderin; size uygun fiyat bilgisi paylaşılsın.",
    image:
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=1800&auto=format&fit=crop",
  },
];

const products = [
  "Erkek çorabı",
  "Kadın çorabı",
  "Çocuk çorabı",
  "Soket çorap",
  "Patik çorap",
  "Spor çorap",
  "Bambu çorap",
  "Desenli çorap",
  "Düz renk çorap",
  "Promosyon çorabı",
  "Özel model",
  "Toptan seri",
];

const comments = [
  {
    name: "Mağaza müşterisi",
    text: "Toptan ürün grupları konusunda hızlı dönüş aldık. Model ve adet bilgisine göre net yönlendirme yaptılar.",
  },
  {
    name: "Butik satıcısı",
    text: "Ürün çeşitleri sade ve anlaşılır. WhatsApp üzerinden hızlı iletişim kurmak bizim için kolay oldu.",
  },
  {
    name: "E-ticaret satıcısı",
    text: "Çorap gruplarını satış kanalımıza göre değerlendirdik. Tedarik süreci açık şekilde anlatıldı.",
  },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[slide];

  return (
    <main className="min-h-screen bg-[#f3eadc] text-[#111]">
      <header className="fixed left-0 top-0 z-50 w-full bg-[#f3eadc]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between px-5 md:px-10 lg:h-[102px]">
          <a
            href="#"
            className="relative h-[58px] w-[180px] shrink-0 sm:h-[66px] sm:w-[220px] lg:h-[84px] lg:w-[310px]"
          >
            <Image
              src="/tarz-corap-logo.png"
              alt="Tarz Çorap"
              fill
              priority
              sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 310px"
              className="object-contain object-left"
            />
          </a>

          <nav className="hidden items-center gap-10 text-sm font-black uppercase tracking-[0.18em] text-black/65 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-black">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-black text-white"
            >
              <Phone size={17} />
              Ara
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-[#16a34a] px-6 py-3 text-sm font-black text-white"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white lg:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="bg-[#f3eadc] px-5 pb-6 pt-3 lg:hidden">
            <div className="flex flex-col gap-5 text-lg font-black">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-black/10 pb-4"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={`tel:${phoneHref}`}
                className="rounded-full bg-black px-6 py-4 text-center text-white"
              >
                Hemen Ara
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                className="rounded-full bg-[#16a34a] px-6 py-4 text-center text-white"
              >
                WhatsApp’tan Yaz
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative min-h-screen overflow-hidden pt-[102px]">
        <div className="absolute inset-0">
          <Image
            key={activeSlide.image}
            src={activeSlide.image}
            alt="Tarz Çorap slayt görseli"
            fill
            priority
            sizes="100vw"
            className="object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f3eadc] via-[#f3eadc]/88 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f3eadc] via-transparent to-[#f3eadc]/40" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-102px)] max-w-[1500px] items-center px-5 py-16 md:px-10">
          <motion.div
            key={slide}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl"
          >
            <p className="mb-6 text-sm font-black uppercase tracking-[0.35em] text-black/55">
              İstanbul / Bağcılar — Çorap İmalatı
            </p>

            <h1 className="text-[13vw] font-black leading-[0.82] tracking-[-0.09em] md:text-[7.5vw] lg:text-[6.5vw]">
              {activeSlide.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/65 md:text-xl">
              {activeSlide.text}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#16a34a] px-8 py-5 text-base font-black text-white"
              >
                Toptan Fiyat Al
                <ArrowRight size={19} />
              </a>

              <a
                href={`tel:${phoneHref}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-5 text-base font-black text-white"
              >
                Hemen Ara
                <Phone size={18} />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <button
                onClick={() =>
                  setSlide((prev) => (prev - 1 + slides.length) % slides.length)
                }
                className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() => setSlide((prev) => (prev + 1) % slides.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white"
              >
                <ChevronRight size={20} />
              </button>

              <div className="ml-2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      slide === index ? "w-10 bg-black" : "w-2.5 bg-black/25"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#111] py-6 text-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-6 px-5 text-sm font-black uppercase tracking-[0.15em] md:grid-cols-4 md:px-10">
          <div className="flex items-center gap-3">
            <Factory size={20} /> İmalat
          </div>
          <div className="flex items-center gap-3">
            <Truck size={20} /> Toptan Satış
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck size={20} /> Güvenilir Tedarik
          </div>
          <div className="flex items-center gap-3">
            <Sparkles size={20} /> Özel Üretim
          </div>
        </div>
      </section>

      <section id="uretim" className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-16 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-black/45">
              Ziyaretçiye Göre Net Akış
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Siteye giren kişi hızlıca ne alacağını görür.
            </h2>
          </div>

          <div className="grid gap-10 text-lg leading-8 text-black/65 md:grid-cols-2">
            {[
              ["Toptancı için", "Ürün grubu, adet ve fiyat bilgisine hızlıca ulaşır."],
              ["Mağaza için", "Satılabilir çorap çeşitlerini sade şekilde görür."],
              ["E-ticaret için", "Stok ve ürün grubu planlaması için iletişime geçer."],
              ["Özel üretim için", "Desen, renk ve model talebini WhatsApp’tan iletir."],
            ].map(([title, text]) => (
              <div key={title} className="border-t border-black/15 pt-7">
                <h3 className="mb-4 text-2xl font-black text-black">{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[75vh] min-h-[560px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=1800&auto=format&fit=crop"
          alt="Toptan çorap modelleri"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-[1500px] items-end px-5 pb-16 md:px-10">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-white/60">
              Ürün Grupları
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Her satış noktasına uygun çorap çeşitleri.
            </h2>
          </div>
        </div>
      </section>

      <section id="urunler" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => (
              <a
                key={item}
                href={whatsappUrl}
                target="_blank"
                className="group flex items-center justify-between border-b border-black/15 py-7 text-2xl font-black tracking-[-0.04em] transition hover:pl-4 md:text-3xl"
              >
                {item}
                <ArrowRight
                  size={24}
                  className="opacity-30 transition group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="yorumlar" className="bg-[#111] py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-white/45">
                Yorumlar
              </p>

              <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
                Alıcıların güvenle karar vermesi için.
              </h2>

              <a
                href={commentWhatsappUrl}
                target="_blank"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#16a34a] px-8 py-5 font-black text-white"
              >
                Siz de yorum yapmak için iletişime geçin
                <MessageCircle size={18} />
              </a>
            </div>

            <div>
              {comments.map((comment) => (
                <div key={comment.name} className="border-b border-white/15 py-8">
                  <div className="mb-5 flex items-center justify-between">
                    <Quote className="text-[#f59e0b]" />
                    <div className="flex gap-1 text-[#f59e0b]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xl leading-8 text-white/75">
                    “{comment.text}”
                  </p>

                  <p className="mt-5 text-sm font-black uppercase tracking-[0.25em] text-white/40">
                    {comment.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="surec" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-black/45">
              Sipariş Süreci
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Karmaşık değil, doğrudan teklif odaklı.
            </h2>
          </div>

          <div className="mt-16 grid gap-0 lg:grid-cols-4">
            {[
              ["01", "Ürün grubu seçilir"],
              ["02", "Adet ve model bilgisi alınır"],
              ["03", "Fiyat ve süreç paylaşılır"],
              ["04", "Sipariş için iletişim sürdürülür"],
            ].map(([no, text]) => (
              <div
                key={no}
                className="border-t border-black/15 py-8 lg:border-r lg:pr-8"
              >
                <span className="text-sm font-black text-black/35">{no}</span>
                <h3 className="mt-5 text-3xl font-black tracking-[-0.05em]">
                  {text}
                </h3>
                <CheckCircle2 className="mt-8 text-[#16a34a]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1800&auto=format&fit=crop"
          alt="Çorap toptan satış"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-[1500px] items-end px-5 pb-16 md:px-10">
          <div className="max-w-4xl text-white">
            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Üretimden satışa güçlü çorap tedariği.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Tarz Çorap, siteye giren müşteriyi ürün seçmeye, fiyat almaya ve
              doğrudan iletişime geçmeye yönlendirir.
            </p>
          </div>
        </div>
      </section>

      <section id="iletisim" className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-16 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-black/45">
              İletişim
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Toptan çorap için hemen ulaşın.
            </h2>
          </div>

          <div className="text-xl font-black md:text-2xl">
            <a
              href={`tel:${phoneHref}`}
              className="flex items-center justify-between border-b border-black/15 py-7"
            >
              <span>{phoneDisplay}</span>
              <Phone />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              className="flex items-center justify-between border-b border-black/15 py-7"
            >
              <span>WhatsApp’tan fiyat bilgisi alın</span>
              <MessageCircle />
            </a>

            <a
              href={commentWhatsappUrl}
              target="_blank"
              className="flex items-center justify-between border-b border-black/15 py-7"
            >
              <span>Siz de yorum yapmak için iletişime geçin</span>
              <Star />
            </a>

            <a
              href={mapUrl}
              target="_blank"
              className="flex items-center justify-between border-b border-black/15 py-7"
            >
              <span>Sancaktepe, 34100 Bağcılar/İstanbul</span>
              <MapPin />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black px-5 py-10 text-white md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="relative h-[68px] w-[230px] lg:h-[86px] lg:w-[320px]">
            <Image
              src="/tarz-corap-logo.png"
              alt="Tarz Çorap"
              fill
              sizes="(max-width: 1024px) 230px, 320px"
              className="object-contain object-left"
            />
          </div>

          <p className="max-w-md text-sm leading-6 text-white/55">
            Tarz Çorap — Çorap imalatı, toptan satış ve özel üretim.
          </p>

          <div className="flex gap-3">
            <a
              href={`tel:${phoneHref}`}
              className="rounded-full bg-white px-6 py-3 text-sm font-black text-black"
            >
              Ara
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              className="rounded-full bg-[#16a34a] px-6 py-3 text-sm font-black text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#16a34a] text-white shadow-2xl lg:hidden"
      >
        <MessageCircle size={27} />
      </a>
    </main>
  );
}