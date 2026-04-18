const faqs = [
  {
    question: "What does the MVP actually simulate?",
    answer:
      "This repository simulates market discovery, trading, portfolio tracking, rewards, and claims using local mock state. It is built to demonstrate product flow before live wallet execution."
  },
  {
    question: "Does this repo include on-chain settlement?",
    answer:
      "Not yet. The MVP is intentionally front-end first, so the next layer would be wallet hooks, backend services, and Solana program integration."
  },
  {
    question: "Why use USDC instead of FORE for trading?",
    answer:
      "USDC is easier to understand as a quote asset. FORE is better positioned as the utility, governance, rewards, and status token."
  }
];

export default function HelpPage() {
  return (
    <section className="section page-shell">
      <div className="shell">
        <div className="section-heading">
          <div>
            <span className="kicker">Help</span>
            <h1 className="page-title">Questions a launch-day user is likely to ask</h1>
          </div>
        </div>

        <div className="stack-list">
          {faqs.map((faq) => (
            <article className="content-block" key={faq.question}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

