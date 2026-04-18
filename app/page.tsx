import Link from "next/link";

import { MarketCard } from "@/components/market-card";
import { featuredMarkets } from "@/lib/mock-data";
import { formatCompactCurrency } from "@/lib/utils";

const protocolStats = [
  { label: "Volume", value: formatCompactCurrency(42800000) },
  { label: "Markets", value: "39" },
  { label: "Traders", value: "127,840" },
  { label: "Resolved", value: "1,284" }
];

const mvpModules = [
  {
    title: "Discover markets",
    copy: "Scan macro, earnings, and crypto markets with prices that read like live probabilities."
  },
  {
    title: "Trade in seconds",
    copy: "Mock wallet, USDC balance, and local trade execution create a real product loop for demos."
  },
  {
    title: "Track your edge",
    copy: "Portfolio, rewards, and claim flows show the full user lifecycle from entry to resolution."
  }
];

const tokenBenefits = [
  "Trade Better",
  "Earn More",
  "Access Incentives",
  "Help Govern",
  "Unlock Status"
];

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div className="shell hero__grid">
          <div className="hero__content">
            <span className="kicker">ForeSeen Protocol / MVP</span>
            <h1>Price the future before it resolves.</h1>
            <p>
              FORE is a Solana-native prediction market product loop built from first principles: discover a
              market, take a view, manage a position, and resolve with explicit rules.
            </p>
            <div className="hero__actions">
              <Link className="button button--primary" href="/markets">
                Explore Markets
              </Link>
              <Link className="button button--ghost" href="/rules">
                Review Rules
              </Link>
            </div>
            <div className="stats-grid">
              {protocolStats.map((item) => (
                <div className="stat-card" key={item.label}>
                  <span className="eyebrow">{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__featured">
            <div className="featured-panel">
              <div className="featured-panel__header">
                <span className="pill">Launch Focus</span>
                <span className="eyebrow">1 flagship / 2 secondary</span>
              </div>
              <div className="featured-market">
                <h2>{featuredMarkets[0].title}</h2>
                <p>{featuredMarkets[0].subtitle}</p>
                <div className="featured-market__prices">
                  <div className="price-chip price-chip--yes">
                    <span>YES</span>
                    <strong>72c</strong>
                  </div>
                  <div className="price-chip price-chip--no">
                    <span>NO</span>
                    <strong>28c</strong>
                  </div>
                </div>
              </div>
              <div className="stacked-mini-markets">
                {featuredMarkets.slice(1, 3).map((market) => (
                  <Link href={`/market/${market.slug}`} key={market.id}>
                    <span>{market.title}</span>
                    <strong>{Math.round(market.yesPrice * 100)}% YES</strong>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="kicker">Core Loop</span>
              <h2>MVP modules built for a real product demo</h2>
            </div>
          </div>
          <div className="feature-grid">
            {mvpModules.map((item) => (
              <article className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="kicker">Trending Now</span>
              <h2>Launch-ready markets with real resolution logic</h2>
            </div>
            <Link className="section-link" href="/markets">
              View all markets
            </Link>
          </div>

          <div className="market-grid">
            {featuredMarkets.map((market) => (
              <MarketCard key={market.id} market={market} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="kicker">Why Hold FORE</span>
              <h2>Token utility framed as user rights, not empty hype</h2>
            </div>
          </div>

          <div className="token-grid">
            {tokenBenefits.map((item, index) => (
              <article className="token-card" key={item}>
                <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item}</h3>
                <p>
                  {item === "Trade Better" &&
                    "Reduce fees, expand account limits, and access selected trading features earlier."}
                  {item === "Earn More" &&
                    "Boost rewards across trading, liquidity, and seasonal incentive campaigns."}
                  {item === "Access Incentives" &&
                    "Join protocol-led campaigns and treasury-backed growth programs over time."}
                  {item === "Help Govern" &&
                    "Shape market expansion, incentive priorities, and core protocol parameters."}
                  {item === "Unlock Status" &&
                    "Earn tiered recognition, gated market access, and premium identity within the network."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell cta-panel">
          <div>
            <span className="kicker">What ships in this repo</span>
            <h2>Homepage, market discovery, trading panel, portfolio, rewards, rules, and mock APIs.</h2>
          </div>
          <Link className="button button--primary" href="/portfolio">
            Open Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
