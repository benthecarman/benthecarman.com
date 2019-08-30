import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Present</h2>
                        <p>
                          Currently finishing my degree in Computer Science.  I currently work for my university doing web development, as well as, 
                          in my free time I contribute to open source projects. I am hoping to graduate and go on to work somewhere that shares my values
                          and I can make an impact at.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Begin Open Source Contributions <span>December 2018</span></h2>
                        <p>
                          After I felt I had a solid grasp of the surrounding ecosystem around Bitcoin I felt I could begin contributing to the project.
                          I made <a href="https://github.com/bitcoin/bitcoin/pull/14974">my first pull request</a> to the bitcoin core repo and realized that I
                          had much more to learn.  I spent some time improving my skills and learning and I am now a working directly on Wasabi Wallet.  I still
                          have so much to learn about programming, Bitcoin, and OSS but I am learning everyday and working to better myself and the world.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Begin Web Development Internship <span>May 2018</span></h2>
                        <p>
                          At the beginning of the summer of 2018 I was hired to work as a web developer for my university.  I started out learning basic PHP and
                          other basic systems (SQL, Git, Unix) and learned quickly. After I completed my training I was moved onto some projects and have been working
                          here ever since.  I enjoy this job and love be able to come in and program everyday while being paid for it!
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Introduction to Bitcoin <span>November 2017</span></h2>
                        <p>
                          I found Bitcoin through a comedy podcast, afterwards I took a hard look at it and instantly fell in love with it.  I spent countless nights 
                          staying up to watch lectures done by core developers and reading articles to absorb as much information as I could.  Since then, I have still committed
                          most of my free time to learning about Bitcoin and everything surrounding it, from economics to distributed systems, and hope to make an impact in the space.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Begin Undergraduate at Iowa State University <span>August 2015</span></h2>
                        <p>
                          I am pursuing a BS in Computer Science.  I began taking basic programming classes and breezed through them and looked for something more challenging.
                          I did some personal projects as the programming aspect of my classes slowed down.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2"/>
                      </div>
                      <div className="timeline-label">
                        <h2>Introduction to programming <span>August 2011</span></h2>
                        <p>
                          I took a computer programming class at my highschool.  Afterwards, I fell in love with it and continued to take computer related classes throughout my highschool career.
                          In my free time I also learned to create basic python scripts to modifiy the game ToonTown Online. Since, then I've been hooked.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
