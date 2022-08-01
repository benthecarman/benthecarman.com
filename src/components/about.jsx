import React, { Component } from 'react'

export default class About extends Component
{
    render()
    {
        return (
            <div>
                <section className="colorlib-about" data-section="projects">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <h2 className="colorlib-heading">Open source projects</h2>
                                <span className="heading-meta">I contribute and work on these projects</span>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-7">
                                    <span className="icon">
                                        <img src="images/bitcoin-s.png" alt="bitcoin-s" height="45" width="50" />
                                    </span>
                                    <div className="desc">
                                        <h3><a href="https://github.com/bitcoin-s/bitcoin-s">bitcoin-s</a></h3>
                                        <p>Feature rich toolkit for making Bitcoin and Lightning applications on the JVM.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <img src="images/ln-vortex.png" alt="Lightning Vortex" height="50" width="50" />
                                    </span>
                                    <div className="desc">
                                        <h3><a href="https://github.com/benthecarman/ln-vortex">Lightning Vortex</a></h3>
                                        <p>Still a secret...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <img src="images/bitcoin.svg" alt="Bitcoin" height="50" width="50" />
                                    </span>
                                    <div className="desc">
                                        <h3><a href="https://github.com/bitcoin/bitcoin">Bitcoin Core</a></h3>
                                        <p>Bitcoin uses peer-to-peer technology to operate with no central authority: managing transactions and issuing money are carried out collectively by the network.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-7">
                                    <span className="icon">
                                        <img src="images/krystal_bull.png" alt="Krystal Bull" height="50" width="50" />
                                    </span>
                                    <div className="desc">
                                        <h3><a href="https://github.com/benthecarman/krystal-bull">Krystal Bull</a></h3>
                                        <p>
                                            Krystal Bull is a full fledged DLC Oracle.
                                            It has support for creating and signing every type of event, as well as staking funds to the oracle key.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-6">
                                    <span className="icon">
                                        <img src="images/psbt-toolkit.png" alt="PSBT Toolkit" height="50" width="50" />
                                    </span>
                                    <div className="desc">
                                        <h3><a href="https://github.com/benthecarman/PSBT-Toolkit">PSBT Toolkit</a></h3>
                                        <p>PSBT Toolkit aims to give you a nice gui that gives you functionality for PSBT interactions. There are functions to serve the Creator, Updater, Combiner, Input Finalizer, and Transaction Extractor roles, as well as some utility functions for transactions, and some generators for PSBTs, Transactions, and other Bitcoin data types.</p>
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
