import LiveNowBanner from "@/components/ui/LiveNowBanner";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <div className="mx-auto max-w-[1800px] p-5">

        {/* HERO + RIGHT SIDEBAR */}
        <section className="grid gap-5 lg:grid-cols-[2fr_380px]">
           <LiveNowBanner />
          
          <div className="space-y-5">
            {/* <LiveMatchWidget />
            <MatchStats />
            <TopScorers /> */}
            <p>live</p>
            <p>match</p>
            <p>Score</p>
          </div>
        </section>

        {/* MATCHES */}
        <section className="mt-5">
          {/* <MatchTabs />
          <MatchList /> */}
          <p>match tab</p>
          <p>match list</p>
        </section>

        {/* GROUPS + NEWS */}
        <section className="mt-5 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          {/* <GroupsOverview />
          <NewsUpdates /> */}
          <p>groupOverview</p>
          <p>News Updates</p>
        </section>

      </div>
    </main>
  );
}