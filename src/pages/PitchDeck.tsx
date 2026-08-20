import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const PitchDeck = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />

        <section className="py-24 md:py-36 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 text-primary">Pitch Deck</h1>
              <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Unser Pitch Deck — hier folgt in Kürze die vollständige Präsentation zu Kali.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default PitchDeck;
