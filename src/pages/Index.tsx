import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import heroVideo from "@/assets/hero-video.mp4";
import visionVideo from "@/assets/vision-scan.mp4.asset.json";
import crawlerVideo from "@/assets/vorgehensweise-crawler.mp4.asset.json";
import teamKarinia from "@/assets/team-karinia.jpeg.asset.json";
import teamIra from "@/assets/team-ira.jpeg.asset.json";
import teamAlexander from "@/assets/team-alexander.jpeg.asset.json";
import { LayoutDashboard, FileSearch, Scale, FileText, MessageSquare } from "lucide-react";

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

        {/* Features */}
        <ScrollReveal direction="none" duration={0.8}>
          <section className="py-20 md:py-28 px-6 md:px-12 border-t border-border">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-16 text-center">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-full bg-muted">
                    <LayoutDashboard className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold mb-2">Dashboard mit Risiko-Übersicht</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    Alle bisherigen Scans auf einen Blick, mit Risiko-Badge pro Seite.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-full bg-muted">
                    <FileSearch className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold mb-2">Fund-Details je Seite</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    Welche manipulativen Muster wo gefunden wurden, mit Filtermöglichkeit.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-full bg-muted">
                    <Scale className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold mb-2">Rechtliche Einordnung</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    Jeder Fund wird automatisch der passenden Norm zugeordnet (UWG, BGB, DSGVO, DSA, PAngV).
                  </p>
                </div>
                <div className="text-center lg:col-start-1 lg:col-end-2 lg:justify-self-end">
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-full bg-muted">
                    <FileText className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold mb-2">Gerichtsfester PDF-Report</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    Download eines Beweis-Reports mit Deckblatt, Risiko-Score und Fund-Tabelle, samt Screenshot/Zeitstempel als Beleg.
                  </p>
                </div>
                <div className="text-center lg:col-start-2 lg:col-end-3 lg:justify-self-start">
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-full bg-muted">
                    <MessageSquare className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold mb-2">Chatbot <span className="text-muted-foreground font-normal">(geplant)</span></h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    Case-Worker können in der Scan-Ansicht per Chat Fragen zu den Funden eines Scans stellen und bekommen Antworten mit Quellenangabe/Disclaimer, ohne dass irgendwas gespeichert wird.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
