import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"

/* here we have imported ai from react icons so that we can use the icons directley unlikely the bootstarp*/



const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Techstar</h1>
          <p>finds solution to ur every problem</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" /> {/* vg is vector garaphics */}
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>who we are ?</h1>
        
          <p>
      At <strong>TechSol</strong>, we are more than just a technology company  we are a team of innovators, creators, and problem-solvers driven by a shared passion for excellence. 
      With a commitment to empowering businesses, we deliver cutting-edge solutions tailored to meet the ever-evolving demands of the digital age.
      From crafting intuitive applications to optimizing business processes, 
      we strive to bridge the gap between vision and reality. Guided by our core values of innovation, integrity, and collaboration, 
      we aim to leave a lasting impact on the industries we serve.
      Together, lets shape a smarter, more connected future one solution at a time.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay:"0.3s",}}>
              < AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{animationDelay:"0.5s",}}>
              < AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.7s",}}>
              < AiFillInstagram/>
              <p>Instagram</p>
            </div>
            <div style={{animationDelay:"0.9s",}}>
              < AiFillYoutube/>
              <p>Youtube</p>
            </div>


          </article>

        </div>
      </div>
    </>
  );
};

export default Home;
