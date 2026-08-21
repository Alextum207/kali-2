import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import heroVideo from "@/assets/hero-video.mp4";
import visionVideo from "@/assets/vision-scan.mp4.asset.json";
import crawlerVideo from "@/assets/vorgehensweise-crawler.mp4.asset.json";
import logoAsset from "@/assets/logo.jpg.asset.json";
import teamKarinia from "@/assets/team-karinia.jpeg.asset.json";
import teamIra from "@/assets/team-ira.jpeg.asset.json";
import teamAlexander from "@/assets/team-alexander.jpeg.asset.json";

const teamMembers = [
  {
    name: "Karinia Häberle Marbaniang",
    role: "Legal Studies | Ludwig Maximilian Universität München",
    image: teamKarinia.url,
    link: "https://www.linkedin.com/in/karinia-häberle-marbaniang-10b079365?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Ira Haltia",
    role: "Master of Laws | University of Helsinki",
    image: teamIra.url,
    link: "https://www.linkedin.com/in/irahaltia?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Alexander Saadé",
    role: "Information Systems | Technical University of Munich",
    image: teamAlexander.url,
    link: "https://www.linkedin.com/in/alexander-saade-0971853b3?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
];

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

        {/* Vision & Vorgehen */}
        <section className="bg-secondary py-16 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Vision */}
            <ScrollReveal direction="left">
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 h-full">
                <div className="w-full md:w-1/2 overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full aspect-[4/3] md:aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700">
                    <source src={crawlerVideo.url} type="video/mp4" />
                  </video>
                </div>
                <div className="w-full md:w-1/2 pt-2 text-center md:text-left">
                  <h2 className="font-serif text-3xl md:text-4xl font-light mb-4 text-primary">Vision</h2>
                  <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                    Kali macht manipulative Dark-Pattern-Designs auf Webseiten sichtbar und rechtlich einordenbar, damit Verbraucherzentralen und Aufsichtsbehörden systematisch und gerichtsfest gegen sie vorgehen können.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Vorgehen */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="flex flex-col md:flex-row-reverse items-start gap-6 md:gap-8 h-full">
                <div className="w-full md:w-1/2 overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full aspect-[4/3] md:aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700">
                    <source src={visionVideo.url} type="video/mp4" />
                  </video>
                </div>
                <div className="w-full md:w-1/2 pt-2 text-center md:text-left">
                  <h2 className="font-serif text-3xl md:text-4xl font-light mb-4 text-primary">Vorgehen</h2>
                  <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                    Ein automatisierter Crawler durchsucht Zielseiten headless, erkennt Dark Patterns über eine Kombination aus visuellen Heuristiken und KI-Textklassifikation, ordnet jeden Fund der einschlägigen Rechtsnorm und bietet einen Report.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Beschreibung */}
        <section className="py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal direction="left">
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">Beschreibung</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://github.com/Alextum207/Kali/blob/master/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-foreground text-background px-10 py-3 text-sm font-sans tracking-widest uppercase hover:bg-foreground/80 hover:scale-105 transition-all duration-300"
                >
                  Read Me
                </a>
                <a
                  href="https://github.com/Alextum207/Kali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-foreground text-background px-10 py-3 text-sm font-sans tracking-widest uppercase hover:bg-foreground/80 hover:scale-105 transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Das Team */}
        <section className="py-20 md:py-28 px-6 md:px-12 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal direction="right" delay={0.15}>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 text-center">Das Team</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                {teamMembers.map((member) => (
                  <div key={member.name} className="text-center">
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} auf LinkedIn`}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover mx-auto mb-4 hover:scale-105 transition-transform duration-300"
                      />
                    </a>
                    <p className="font-sans text-sm md:text-base font-medium">{member.name}</p>
                    <p className="font-sans text-xs md:text-sm text-muted-foreground mt-1">{member.role}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Full-width Logo */}
        <ScrollReveal direction="none" duration={0.8}>
          <section className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-white flex items-center justify-center">
            <motion.img
              src={logoAsset.url}
              alt="Kali — Dark Pattern Detector"
              className="w-full h-full object-contain p-8 md:p-16"
              whileInView={{ scale: 1 }}
              initial={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </section>
        </ScrollReveal>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
