import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i/></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center" style={{verticalalign: 'middle'}}>
              <div className="author-img" style={{backgroundImage: 'url(images/me.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Ben Carman</a></h1>
              <span className="email"><i className="icon-mail"></i><a style={{color: '#424242', textDecoration: 'underline'}} href="mailto:benthecarman@live.com">benthecarman@live.com</a></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://github.com/benthecarman" title="GitHub" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://twitter.com/benthecarman" title="Twitter" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://keybase.io/benthecarman" title="Keybase" target="_blank" rel="noopener noreferrer"><i className="icon-key" /></a></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
