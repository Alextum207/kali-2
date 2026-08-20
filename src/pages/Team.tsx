import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const Team = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />

        <section className="py-24 md:py-36 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 text-primary">Team</h1>
              <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Das Team hinter Kali — hier folgen in Kürze die Köpfe und Rollen hinter dem Projekt.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Team;
