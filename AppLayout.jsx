import { Outlet } from "react-router-dom";
import Header from "./Header";
import TierNav from "./TierNav";
import Footer from "./Footer";
import { useState } from "react";

export default function AppLayout() {
  const [activeTier, setActiveTier] = useState('D1');
  const [activeSport, setActiveSport] = useState('football');

  return (
    <div className="min-h-screen bg-background flex">
      <TierNav activeTier={activeTier} onTierChange={setActiveTier} />
      <div className="flex-1 flex flex-col min-h-screen ml-0 md:ml-16">
        <Header activeSport={activeSport} onSportChange={setActiveSport} />
        <main className="flex-1">
          <Outlet context={{ activeTier, activeSport, setActiveTier, setActiveSport }} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
