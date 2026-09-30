import React from 'react';
import './App.css';

const aiProjects = [
  {
    name: 'goose',
    kind: 'AI agent',
    lang: 'Rust',
    href: 'https://github.com/aaif-goose/goose',
    description: 'Open-source agent with a desktop app, CLI, and API. I fixed streaming for some providers and got the agent loop running on wasm32.',
  },
  {
    name: 'Mesh LLM',
    kind: 'Shared inference',
    lang: 'Rust',
    href: 'https://github.com/Mesh-LLM/mesh-llm',
    description: 'Pools GPUs across machines to serve models. I built the Lightning payments, so people who share compute get paid.',
  },
  {
    name: 'exllamav3',
    kind: 'Local inference',
    lang: 'Python',
    href: 'https://github.com/turboderp-org/exllamav3',
    description: 'Fast inference for quantized models on consumer GPUs. I sent patches for DFlash speculative decoding and new models.',
  },
  {
    name: 'bwen',
    kind: 'Fine-tuning',
    lang: 'Python',
    href: 'https://github.com/benthecarman/bwen',
    description: 'Fine-tunes a small model to write like you, trained only on your real tweets with no synthetic data. I published a 14B model trained on mine.',
  },
];

const bitcoinProjects = [
  {
    name: 'LDK Server',
    kind: 'Lightning node',
    lang: 'Rust',
    href: 'https://github.com/lightningdevkit/ldk-server',
    description: 'A Lightning node you run as a daemon and drive over gRPC. My main project at Spiral.',
  },
  {
    name: 'Lightning Dev Kit',
    kind: 'Library',
    lang: 'Rust',
    href: 'https://github.com/lightningdevkit/rust-lightning',
    description: 'Rust libraries for building Lightning wallets and nodes.',
  },
  {
    name: 'Mutiny Wallet',
    kind: 'Wallet',
    lang: 'Rust',
    href: 'https://github.com/MutinyWallet/mutiny-node',
    description: 'A self-custodial Lightning wallet that ran a full node in a browser tab. I co-founded it and was CTO.',
  },
  {
    name: 'Mutinynet',
    kind: 'Test network',
    href: 'https://mutinynet.com/',
    description: 'A public signet with 30-second blocks and soft forks to try out.',
  },
  {
    name: 'NWC for LND',
    kind: 'Nostr',
    lang: 'Rust',
    href: 'https://github.com/benthecarman/nostr-wallet-connect-lnd',
    description: 'Nostr Wallet Connect for LND nodes.',
  },
  {
    name: 'bitcoin-s',
    kind: 'Toolkit',
    lang: 'Scala',
    href: 'https://github.com/bitcoin-s/bitcoin-s',
    description: 'A Bitcoin library for the JVM, and where I started, writing DLC code.',
  },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/benthecarman',
    icon: 'M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3',
  },
  {
    label: 'Twitter',
    href: 'https://x.com/benthecarman',
    icon: 'M23.95 4.57a10 10 0 0 1-2.82.78 4.96 4.96 0 0 0 2.16-2.72c-.95.55-2 .96-3.13 1.18a4.92 4.92 0 0 0-8.38 4.48A13.94 13.94 0 0 1 1.64 3.16a4.82 4.82 0 0 0-.67 2.48c0 1.71.87 3.21 2.19 4.1a4.9 4.9 0 0 1-2.23-.62v.06a4.92 4.92 0 0 0 3.95 4.83 5 5 0 0 1-2.21.08 4.94 4.94 0 0 0 4.6 3.42 9.87 9.87 0 0 1-6.1 2.1c-.39 0-.78-.02-1.17-.06a14 14 0 0 0 7.56 2.21c9.05 0 14-7.5 14-13.99l-.01-.63A9.94 9.94 0 0 0 24 4.59z',
  },
];

function External({ href, children, className }) {
  if (href.startsWith('mailto:')) {
    return <a className={className} href={href}>{children}</a>;
  }
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  );
}

function ProjectGrid({ id, label, projects, size }) {
  return (
    <section className="projects" aria-labelledby={id}>
      <h2 className="group-label" id={id}>{label}</h2>
      <ul className={`grid grid-${size}`}>
        {projects.map(project => (
          <li key={project.name}>
            <External className="project" href={project.href}>
              <span className="kind">{[project.kind, project.lang].filter(Boolean).join(' · ')}</span>
              <span className="project-name">
                {project.name}<span className="arrow" aria-hidden="true">↗</span>
              </span>
              <span className="project-description">{project.description}</span>
            </External>
          </li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  return (
    <div className="page">
      <header className="masthead">
        <span className="name">
          <img src="/images/me-bear.png" alt="" width="36" height="36" />
          Ben Carman
        </span>
        <nav aria-label="Elsewhere">
          {socials.map(social => (
            <External href={social.href} key={social.label}>
              <svg className="icon" viewBox="0 0 24 24" role="img" aria-label={social.label}>
                <path d={social.icon} />
              </svg>
            </External>
          ))}
        </nav>
      </header>

      <main>
        <div className="intro">
          <p className="lede">
            Building freedom&nbsp;tech with Bitcoin and open-source AI.
          </p>
        </div>

        <ProjectGrid id="ai" label="AI" projects={aiProjects} size="large" />
        <ProjectGrid id="bitcoin" label="Bitcoin" projects={bitcoinProjects} size="small" />

        <section className="about" aria-label="Background">
          <p>
            Before Spiral I co-founded Mutiny Wallet and The Bitcoin Company, researched covenants
            at <External href="https://taprootwizards.com/">Taproot Wizards</External>, and
            wrote DLC code at Suredbits. Most of what I write now is Rust.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p className="contact">
          Say hi at <External href="mailto:benthecarman@live.com">benthecarman@live.com</External>
        </p>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Ben Carman</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
