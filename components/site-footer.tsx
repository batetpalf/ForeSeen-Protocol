import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <div className="brand brand--footer">
            <span className="brand-mark">F</span>
            <span>
              <strong>FORE</strong>
              <small>Prediction markets on Solana</small>
            </span>
          </div>
          <p className="footer-copy">
            Trade real-world outcomes with clear rules, transparent resolution, and a product loop built for
            launch-day trust.
          </p>
        </div>

        <div>
          <h4>Product</h4>
          <Link href="/markets">Markets</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/rewards">Rewards</Link>
        </div>

        <div>
          <h4>Protocol</h4>
          <Link href="/rules">Rules</Link>
          <Link href="/help">Help</Link>
          <Link href="/create">Create</Link>
        </div>

        <div>
          <h4>Launch</h4>
          <p>Target open</p>
          <strong>Apr 20, 2026 / 22:00 CST</strong>
        </div>
      </div>
    </footer>
  );
}
