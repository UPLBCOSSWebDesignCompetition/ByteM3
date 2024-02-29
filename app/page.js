import SdgCardsSection from "./components/SdgCardsSection";
import TickerSection from "./components/TickerSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TickerSection />
      <SdgCardsSection />
    </main>
  );
}
