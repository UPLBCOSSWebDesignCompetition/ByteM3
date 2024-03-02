import SdgCardsSection from "./components/SdgCardsSection";
import TickerSection from "./components/TickerSection";
import SdgArticlesSection from "./components/SdgArticlesSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex max-w-5xl flex-col items-center justify-between p-24 m-auto">
      <TickerSection />
      <SdgCardsSection />
      <SdgArticlesSection />
      <Footer />
    </main>
  );
}
