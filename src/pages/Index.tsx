import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import heroVideo from "@/assets/hero-video.mp4";
import visionVideo from "@/assets/vision-scan.mp4.asset.json";
import crawlerVideo from "@/assets/vorgehensweise-crawler.mp4.asset.json";
import ctaImage from "@/assets/couple-ring.jpg";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header transparent />

        {/* Hero */}
        <section className="relative h-screen flex items-start justify-center pt-[18vh] overflow-hidden">
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <source src={heroVideo} type="video/mp4" />
          </motion.video>
          <div className="absolute inset-0 bg-black/30" />
        </section>

        {/* Vision & Vorgehensweise */}
        <section className="bg-secondary py-32 md:py-44 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Vision */}
            <ScrollReveal direction="left">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-[65%] overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700">
                    <source src={crawlerVideo.url} type="video/mp4" />
                  </video>
                </div>
                <div className="text-center w-full md:w-[35%]">
                  <h2 className="font-serif text-6xl md:text-7xl font-light mb-5 text-primary">Vision</h2>
                  <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                    Kali macht manipulative Dark-Pattern-Designs auf Webseiten sichtbar und rechtlich einordenbar, damit Verbraucherzentralen und Aufsichtsbehörden systematisch und gerichtsfest gegen sie vorgehen können.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Vorgehen */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-[65%] overflow-hidden md:order-last">
                  <video autoPlay muted loop playsInline className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700">
                    <source src={visionVideo.url} type="video/mp4" />
                  </video>
                </div>
                <div className="text-center w-full md:w-[35%]">
                  <h2 className="font-serif text-6xl md:text-7xl font-light mb-5 text-primary">Vorgehen</h2>
                  <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                    Ein automatisierter Crawler durchsucht Zielseiten headless, erkennt Dark Patterns über eine Kombination aus visuellen Heuristiken und KI-Textklassifikation, ordnet jeden Fund der einschlägigen Rechtsnorm und bietet einen Report.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA - Our Story */}
        <ScrollReveal>
          <section className="py-20 md:py-28 text-center px-6">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">Genaue Beschreibung</h2>
            <a
              href="https://github.com/Alextum207/Kali/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-foreground text-background px-10 py-3 text-sm font-sans tracking-widest uppercase hover:bg-foreground/80 hover:scale-105 transition-all duration-300"
            >
              Read Me
            </a>
          </section>
        </ScrollReveal>

        {/* Full-width CTA Image */}
        <ScrollReveal direction="none" duration={0.8}>
          <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
            <motion.img
              src={ctaImage}
              alt="Couple in outdoor setting with mountain landscape"
              className="absolute inset-0 w-full h-full object-cover"
              whileInView={{ scale: 1 }}
              initial={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </section>
        </ScrollReveal>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
