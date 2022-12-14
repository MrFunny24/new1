import React from 'react'
import './home.css'
import Image from 'react-bootstrap/Image'
import img1 from "./OIP.jpg"
import img2 from "./partyhall.jpg"
import img3 from "./bar&rest.jpg"
import img4 from './OIP2.jpg'
import img5 from "./bar&rest2.jpg"
import img6 from "./partyhall2.jpg"

export default function Main() {
  return (
    <div>

      <div className="container marketing">


        <div className="row mt-5" >
          <div className="col-lg-4">
            <Image className='rounded-circle' width="140" height="140" src={img1}></Image>
            <h2>Spa</h2>
            <p>Our first group revolves around the idea of relaxation, with “It"s time to relax!”.</p>
            <p><a className="btn btn-secondary" href="https://stylesatlife.com/articles/best-spas-in-chennai/">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
          <Image className='rounded-circle' width="140" height="140" src={img2}></Image>

            <h2>Party Hall</h2>
            <p>A Party hall, function hall, or reception hall, is a special purpose room, or a building, used for hosting large social and business events.</p>
            <p><a className="btn btn-secondary" href="https://www.venuelook.com/chennai/party-halls">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
          <Image className='rounded-circle' width="140" height="140" src={img3}></Image>

            <h2>Bar and Restaurant</h2>
            <p>The emotions you want to inspire in your customers. “Happy” is not enough. Think about the most popular restaurants.</p>
            <p><a className="btn btn-secondary" href="https://www.justdial.com/Chennai/Restaurants-Bars/nct-10408938">View details &raquo;</a></p>
          </div>
        </div>




        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div className="col-md-5">
          <Image className='featurette-image img-fluid mx-auto' width="500" height="500" src={img4}></Image>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
          </div>
          <div className="col-md-5 order-md-1">
          <Image className='featurette-image img-fluid mx-auto' width="500" height="500" src={img6}></Image>

          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
          </div>
          <div className="col-md-5">
          <Image className='featurette-image img-fluid mx-auto' width="500" height="500" src={img5}></Image>

          </div>
        </div>

        <hr className="featurette-divider" />



      </div>





    </div>
  )
}
