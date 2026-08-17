import React from 'react';
import './App.css';

const projects = [
  {
    name: 'LDK Server',
    eyebrow: 'Current focus',
    description: 'A ready-to-run, API-first Lightning node built on LDK Node, with a language-agnostic gRPC interface.',
    href: 'https://github.com/lightningdevkit/ldk-server',
    tags: ['Rust', 'Lightning', 'gRPC'],
    tone: 'orange',
  },
  {
    name: 'Lightning Dev Kit',
    eyebrow: 'Contributor',
    description: 'Modular, production-grade libraries for building custom Lightning wallets, nodes, and services.',
    href: 'https://github.com/lightningdevkit/rust-lightning',
    tags: ['Rust', 'Open source', 'Protocol'],
    tone: 'gold',
  },
  {
    name: 'Mutinynet',
    eyebrow: 'Bitcoin playground',
    description: 'A public custom signet with 30-second blocks, a faucet, Lightning infrastructure, and experimental soft forks.',
    href: 'https://mutinynet.com/',
    tags: ['Signet', 'Lightning', 'Covenants'],
    tone: 'blue',
  },
  {
    name: 'Mutiny Wallet',
    eyebrow: 'Co-founder · CTO',
    description: 'A self-custodial, web-first Lightning wallet that pushed private payments and nodes in the browser forward.',
    href: 'https://github.com/MutinyWallet/mutiny-node',
    tags: ['Lightning', 'WASM', 'Privacy'],
    tone: 'purple',
  },
  {
    name: 'NWC for LND',
    eyebrow: 'Implementation',
    description: 'An LND bridge implementing the Nostr Wallet Connect protocol for programmable payments in Nostr applications.',
    href: 'https://github.com/benthecarman/nostr-wallet-connect-lnd',
    tags: ['Nostr', 'Lightning', 'Rust'],
    tone: 'pink',
  },
  {
    name: 'bitcoin-s',
    eyebrow: 'Contributor',
    description: 'A feature-rich Bitcoin and Lightning toolkit for JVM applications, and an important part of my early open-source work.',
    href: 'https://github.com/bitcoin-s/bitcoin-s',
    tags: ['Scala', 'Bitcoin', 'DLCs'],
    tone: 'green',
  },
];

const history = [
  {
    period: '2025 — now',
    title: 'Bitcoin & Lightning developer, Spiral',
    copy: 'Working on Lightning Dev Kit and LDK-related infrastructure, including LDK Server.',
    href: 'https://spiral.xyz/',
  },
  {
    period: '2024 — 2025',
    title: 'Covenant research, Taproot Wizards',
    copy: 'Explored new Bitcoin covenant designs and what they could unlock for wallets, scaling, and self-custody.',
    href: 'https://taprootwizards.com/',
  },
  {
    period: '2023 — 2024',
    title: 'Co-founder & CTO, Mutiny Wallet',
    copy: 'Built an open-source, self-custodial Lightning wallet that ran a node directly in the browser.',
    href: 'https://blog.mutinywallet.com/introducing-mutiny/',
  },
  {
    period: '2021 — 2023',
    title: 'Co-founder, The Bitcoin Company',
    copy: 'Helped build a bitcoin-first rewards and payments company after working on bitcoin-s and DLC tooling at Suredbits.',
    href: 'https://github.com/TheBitcoinCompany',
  },
  {
    period: 'Since 2018',
    title: 'Open-source Bitcoin contributor',
    copy: 'Contributions span Bitcoin Core, Lightning, coinjoin privacy, DLCs, Nostr, Fedimint, and developer tools.',
    href: 'https://github.com/benthecarman',
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ben Carman, home">
          <span className="wordmark-mark">₿</span>
          <span>Ben Carman</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#history">History</a>
        </nav>
        <a className="header-link" href="https://github.com/benthecarman" target="_blank" rel="noopener noreferrer">
          GitHub <Arrow />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker"><span className="status-dot" /> Bitcoin developer in Austin, Texas</p>
            <h1 id="hero-title">Building tools for <em>bitcoin in motion.</em></h1>
            <p className="hero-lede">
              I’m Ben Carman, a Bitcoin and Lightning developer at <a href="https://spiral.xyz/" target="_blank" rel="noopener noreferrer">Spiral</a>. I build open-source software that makes self-custodial payments practical.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
              <a className="button button-ghost" href="mailto:benthecarman@live.com">Get in touch</a>
            </div>
          </div>

          <div className="portrait-wrap" aria-label="Illustration of Ben riding a bear">
            <div className="portrait-grid" />
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <img src="/images/me-bear.png" alt="Ben Carman riding a bear, holding a bitcoin" />
            <div className="portrait-label"><span>Currently building</span><strong>LDK Server</strong></div>
          </div>
        </section>

        <section className="ticker" aria-label="Areas of focus">
          <span>Bitcoin</span><i>✦</i><span>Lightning</span><i>✦</i><span>Privacy</span><i>✦</i><span>Open source</span><i>✦</i><span>Rust</span>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="kicker">Selected open source</p>
              <h2 id="work-title">Things I’ve built<br />and contributed to.</h2>
            </div>
            <p>My work sits at the intersection of payments, privacy, and developer infrastructure. The common thread: making bitcoin more useful.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <a className={`project-card ${project.tone}`} href={project.href} target="_blank" rel="noopener noreferrer" key={project.name}>
                <div className="project-topline">
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-arrow"><Arrow /></span>
                </div>
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-statement">
            <p className="kicker">Why I build</p>
            <h2 id="about-title">Bitcoin should be more than something you hold.</h2>
          </div>
          <div className="about-copy">
            <p>I care about the hard, unglamorous infrastructure that lets people use bitcoin privately, directly, and without handing control to an intermediary.</p>
            <p>That has taken me from Bitcoin Core and DLCs to coinjoins, a Lightning node in the browser, and now developer-friendly infrastructure at Spiral.</p>
            <a className="text-link" href="https://github.com/benthecarman" target="_blank" rel="noopener noreferrer">Follow the commits <Arrow /></a>
          </div>
        </section>

        <section className="section history-section" id="history" aria-labelledby="history-title">
          <div className="section-heading history-heading">
            <div>
              <p className="kicker">The path here</p>
              <h2 id="history-title">A short history.</h2>
            </div>
          </div>
          <div className="history-list">
            {history.map(item => (
              <a className="history-row" href={item.href} target="_blank" rel="noopener noreferrer" key={item.period}>
                <span className="history-period">{item.period}</span>
                <span className="history-detail"><strong>{item.title}</strong><span>{item.copy}</span></span>
                <span className="history-arrow"><Arrow /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="community">
          <p className="kicker">Community</p>
          <h2>Code is better when we<br />work in the open.</h2>
          <p>I’ve helped organize Austin BitDevs and regularly speak about Bitcoin, Lightning, privacy, and the lessons learned while building wallets.</p>
          <a className="button button-light" href="https://austinbitdevs.com/" target="_blank" rel="noopener noreferrer">Austin BitDevs <Arrow /></a>
        </section>
      </main>

      <footer>
        <div className="footer-cta">
          <p className="kicker">Say hello</p>
          <a href="mailto:benthecarman@live.com">Let’s make bitcoin useful.<Arrow /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ben Carman</span>
          <div className="social-links">
            <a href="https://github.com/benthecarman" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://x.com/benthecarman" target="_blank" rel="noopener noreferrer">X / Twitter</a>
            <a href="https://njump.me/e1ff3bfdd4e40315959b08b4fcc8245eaa514637e1d4ec2ae166b743341be1af" target="_blank" rel="noopener noreferrer">Nostr</a>
            <a href="https://keybase.io/benthecarman" target="_blank" rel="noopener noreferrer">Keybase</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
