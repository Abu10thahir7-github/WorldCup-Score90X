import LiveNowBanner from "@/components/ui/LiveNowBanner";
import LiveMatchesMIniOverView from "@/components/ui/liveMatchesMIniOverView";
import MinNewsUpdates from "@/components/ui/minNewsUpdates";
import MiniGroupOverview from "@/components/ui/miniGroupOverview";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <div className="mx-auto max-w-[1800px] p-5">

        {/* HERO + RIGHT SIDEBAR */}
        <section className="grid gap-5 lg:grid-cols-[2fr_380px]">
          <div className="flex flex-col space-y-3">

           <LiveNowBanner />
   <LiveMatchesMIniOverView />
          </div>
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
        {/* <section className="mt-5">

        </section> */}

        {/* GROUPS + NEWS */}
        <section className="mt-5 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          {/* <GroupsOverview />
          <NewsUpdates /> */}
          <MiniGroupOverview />
          <MinNewsUpdates />
        </section>

      </div>
    </main>
  );
}