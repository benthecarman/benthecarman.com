import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <h2 className="colorlib-heading">About Me</h2>
                    <span className="heading-meta">Who Am I?</span>
                    <p>
                        I am Ben. I value freedom for all and believe privacy technologies like Bitcoin are the best way to achieve this.
                        Currently, I am working towards this by working on projects like Wasabi to make this a reality. I am attending
                        Iowa State University and studying Computer Science, by doing so I am learning all that I can to become a better
                        programmer so I can help make this a reality as best as I can.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about" data-section="projects">
        <div className="colorlib-narrow-content">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <h2 className="colorlib-heading">Current projects</h2>
                    <span className="heading-meta">I contribute and work on these projects</span>
                </div>
            </div>
            <div className="row row-pt-md">
				<div className="col-md-3 text-center animate-box">
                    <div className="services color-7">
                        <span className="icon">
                            <img src="images/wasabi.png" alt="Wasabi Wallet" height="45" width="50"/>
                        </span>
                        <div className="desc">
                            <h3><a href="https://github.com/zkSNACKs/WalletWasabi">Wasabi Wallet</a></h3>
                            <p>Open-source, non-custodial, privacy focused Bitcoin wallet for Windows, Linux, and Mac. Built-in Tor, CoinJoin, and coin control features.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center animate-box">
                    <div className="services color-3">
                        <span className="icon">
                            <img src="images/LightningRod.svg" alt="Lightning Rod" height="50" width="50"/>
                        </span>
                        <div className="desc">
                            <h3><a href="https://github.com/benthecarman/Lightning-Rod">Lightning Rod</a></h3>
                            <p>Lightning Rod's aim is to have users be able to connect their lightning node to other users' Bitcoin full nodes.</p>
                            <p><small>This project is completely self run.</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center animate-box">
                    <div className="services color-1">
                        <span className="icon">
                            <img src="images/bitcoin.svg" alt="Bitcoin" height="50" width="50"/>
                        </span>
                        <div className="desc">
                            <h3><a href="https://github.com/bitcoin/bitcoin">Bitcoin Core</a></h3>
                            <p>Bitcoin uses peer-to-peer technology to operate with no central authority: managing transactions and issuing money are carried out collectively by the network.</p>
                        </div>
                    </div>
                </div>
				<div className="col-md-3 text-center animate-box">
                    <div className="services color-7">
                        <span className="icon">
                            <img src="images/bitcoin-s.png" alt="bitcoin-s" height="45" width="50"/>
                        </span>
                        <div className="desc">
                            <h3><a href="https://github.com/bitcoin-s/bitcoin-s">bitcoin-s</a></h3>
                            <p>Feature rich toolkit for making Bitcoin and Lightning applications on the JVM.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
