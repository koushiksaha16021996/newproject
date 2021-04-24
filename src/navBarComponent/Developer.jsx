import React from 'react'
import './Developers.css'
import azam from '../developerpic/azam.jpeg'
import deboprasad from '../developerpic/deboprasad.jpeg'
import koushik from '../developerpic/koushik.jpg'
import subhasis from '../developerpic/subhasis.jpeg'

const Developer=()=>{
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
    return(
        <div className="maincontainer">
          <div className="container-fluid devbox">
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-ex-12">
                    <div className="cards">
                      <img src={azam} alt="Person" className="card__image"/>
                      <p className="card__name">Md Azam</p>
                      <ul className="social-icons">
                        <li><a href="#" onClick={() => openInNewTab('https://www.facebook.com/')}><i className="fa fa-facebook-square"></i></a></li>
                        <li><a href="#" onClick={() => openInNewTab('https://twitter.com/?lang=en')}><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#" onClick={() => openInNewTab('https://www.linkedin.com/')}><i className="fa fa-linkedin"></i></a></li>                     
                      </ul>
                    
                    </div>
                </div>

                  <div className="col-lg-3 col-sm-6 col-ex-12">
                    <div className="cards">
                      <img src={subhasis} alt="Person" className="card__image"/>
                      <p className="card__name">Subhasish Choudhury</p>
                      <ul className="social-icons">
                        <li><a href="#" onClick={() => openInNewTab('https://www.facebook.com/')}><i className="fa fa-facebook-square"></i></a></li>
                        <li><a href="#" onClick={() => openInNewTab('https://twitter.com/?lang=en')}><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#" onClick={() => openInNewTab('https://www.linkedin.com/')}><i className="fa fa-linkedin"></i></a></li>                    
                      </ul>
                   
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6 col-ex-12">
                    <div className="cards">
                      <img src={deboprasad} alt="Person" className="card__image"/>
                      <p className="card__name">Deboprasad Mukherjee</p>
                      <ul className="social-icons">
                        <li><a href="#" onClick={() => openInNewTab('https://www.facebook.com/')}><i className="fa fa-facebook-square"></i></a></li>
                        <li><a href="#" onClick={() => openInNewTab('https://twitter.com/?lang=en')}><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#" onClick={() => openInNewTab('https://www.linkedin.com/')}><i className="fa fa-linkedin"></i></a></li>                    
                      </ul>
                   
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6 col-ex-12">
                      <div className="cards">
                      <img src={koushik} alt="Person" className="card__image"/>
                      <p className="card__name">Koushik Saha</p>
                      <ul className="social-icons">
                        <li><a href="#" onClick={() => openInNewTab('https://www.facebook.com/koushik.saha.3979/')}><i className="fa fa-facebook-square"></i></a></li>
                        <li><a href="#" onClick={() => openInNewTab('https://twitter.com/Koushik1098')}><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#" onClick={() => openInNewTab('https://www.linkedin.com/in/koushik-saha-1220a4144/')}><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                    
                    </div>
                  </div>
            </div>
        </div>
      </div>
    )
}
export default Developer