import React, { Component } from 'react'

export default class Introduction extends Component
{
  render()
  {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundColor: '#2E2E2E' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! I'm Ben.<br />Checkout what I am up to.</h1>
                          <p>
                            {/* <a className="btn btn-primary btn-learn" href="files/Resume - Ben Carman.pdf" target="_blank" rel="noopener noreferrer" download>Download CV<i className="icon-download4" /></a> */}
                            <a className="btn btn-primary btn-learn" href="https://github.com/benthecarman" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
