import SdgCardsSection from "./components/SdgCardsSection";
import SdgArticlesSection from "./components/SdgArticlesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SdgCardsSection />
      <SdgArticlesSection />
    </main>
  );
}
