"use client";

import Link from "next/link";

import { useAccount } from "@/components/account-provider";
import { formatCurrency } from "@/lib/utils";

function shortenAddress(address: string) {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

function DesktopAccount() {
  const { account, wallet } = useAccount();

  return (
    <div className="header-account">
      <div>
        <span className="eyebrow">USDC</span>
        <strong>{formatCurrency(account.usdcBalance)}</strong>
      </div>
      <div>
        <span className="eyebrow">FORE</span>
        <strong>{account.foreBalance.toLocaleString()}</strong>
      </div>
      <div>
        <span className="eyebrow">Wallet</span>
        <strong>{wallet.connected && wallet.address ? shortenAddress(wallet.address) : "Offline"}</strong>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const { wallet, connectWallet, disconnectWallet } = useAccount();

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="brand" href="/">
          <span className="brand-mark">F</span>
          <span>
            <strong>FORE</strong>
            <small>ForeSeen Protocol</small>
          </span>
        </Link>

        <nav className="site-nav">
          <Link href="/markets">Markets</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/rewards">Rewards</Link>
          <Link href="/rules">Rules</Link>
          <Link href="/help">Help</Link>
        </nav>

        <div className="site-header__actions">
          <DesktopAccount />
          {wallet.connected ? (
            <button className="button button--ghost" onClick={disconnectWallet} type="button">
              Disconnect
            </button>
          ) : (
            <button className="button button--primary" onClick={connectWallet} type="button">
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
