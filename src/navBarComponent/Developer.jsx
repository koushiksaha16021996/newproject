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
                    <div className="card">
                      <img src={azam} alt="Person" class="card__image"/>
                      <p class="card__name">Md Azam</p>
                      <ul class="social-icons">
                        <li><a href="#" onClick={() => openInNewTab('https://www.facebook.com/')}><i class="fa fa-facebook-square"></i></a></li>
                        <li><a href="#" onClick={() => openInNewTab('https://twitter.com/?lang=en')}><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#" onClick={() => openInNewTab('https://www.linkedin.com/')}><i class="fa fa-linkedin"></i></a></li>                     
                      </ul>
                    
                    </div>
                </div>

                  <div className="col-lg-3 col-sm-6 col-ex-12">
                    <div className="card">
                      <img src={subhasis} alt="Person" class="card__image"/>
                      <p class="card__name">Subhasish Choudhury</p>
                      <ul class="social-icons">
                        <li><a href="#" onClick={() => openInNewTab('https://www.facebook.com/')}><i class="fa fa-facebook-square"></i></a></li>
                        <li><a href="#" onClick={() => openInNewTab('https://twitter.com/?lang=en')}><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#" onClick={() => openInNewTab('https://www.linkedin.com/')}><i class="fa fa-linkedin"></i></a></li>                    
                      </ul>
                   
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6 col-ex-12">
                    <div className="card">
                      <img src={deboprasad} alt="Person" class="card__image"/>
                      <p class="card__name">Deboprasad Mukherjee</p>
                      <ul class="social-icons">
                        <li><a href="#" onClick={() => openInNewTab('https://www.facebook.com/')}><i class="fa fa-facebook-square"></i></a></li>
                        <li><a href="#" onClick={() => openInNewTab('https://twitter.com/?lang=en')}><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#" onClick={() => openInNewTab('https://www.linkedin.com/')}><i class="fa fa-linkedin"></i></a></li>                    
                      </ul>
                   
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6 col-ex-12">
                      <div className="card">
                      <img src={koushik} alt="Person" class="card__image"/>
                      <p class="card__name">Koushik Saha</p>
                      <ul class="social-icons">
                        <li><a href="#" onClick={() => openInNewTab('https://www.facebook.com/koushik.saha.3979/')}><i class="fa fa-facebook-square"></i></a></li>
                        <li><a href="#" onClick={() => openInNewTab('https://twitter.com/Koushik1098')}><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#" onClick={() => openInNewTab('https://www.linkedin.com/in/koushik-saha-1220a4144/')}><i class="fa fa-linkedin"></i></a></li>
                      </ul>
                    
                    </div>
                  </div>
            </div>
        </div>
      </div>
    )
}
export default Developer