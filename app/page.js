import Header from "./components/Header";
import SdgCardsSection from "./components/SdgCardsSection";
import TickerSection from "./components/TickerSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex max-w-5xl flex-col items-center justify-between p-24 m-auto">
      <Header />
      <TickerSection />
      <SdgCardsSection />
      <Footer />
    </main>
  );
} 
