import SdgCardsSection from "./components/SdgCardsSection";
import TickerSection from "./components/TickerSection";

export default function Home() {
  return (
    <main className="flex max-w-5xl flex-col items-center justify-between p-24 m-auto">
      <TickerSection />
      <SdgCardsSection />
    </main>
  );
}
