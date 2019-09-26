import React, { Component } from "react";
import {Helmet} from "react-helmet";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "routes.js";

import "../assets/css/base.css";
import "../assets/css/vendor.css";
import "../assets/css/main.css";

const switchRoutes = (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.layout === "/app") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        }
        return null;
      })}
      <Redirect from="/app" to="/app/" />
    </Switch>
  );
export default class App extends Component {

    render(){
        return(
            <div>
                <Helmet>
                    <link rel="stylesheet" href="css/base.css" /> 
                    <link rel="stylesheet" href="css/vendor.css" /> 
                    <link rel="stylesheet" href="css/main.css" />

                    <script src="js/modernizr.js"></script>
	                <script src="js/pace.min.js"></script>    
                </Helmet>

                <div id="top">
                    <header className="main-header">
        
                        <div className="logo">
                            <a href="index.html">Elevate</a>
                        </div> 

                        <a className="menu-toggle" href="#"><span>Menu</span></a>   	

                    </header>

                    <nav id="menu-nav-wrap">

                    <h3>Navigation</h3>   	
                        <ul className="nav-list">
                            <li><a className="smoothscroll" href="#intro" title="">Home</a></li>
                            <li><a className="smoothscroll" href="#features" title="">Features</a></li>
                            <li><a className="smoothscroll" href="#infos" title="">Product Info</a></li>
                            <li><a className="smoothscroll" href="#stats" title="">Stats</a></li>
                            <li><a className="smoothscroll" href="#pricing" title="">Pricing</a></li>					
                            <li><a className="smoothscroll" href="#testimonials" title="">Testimonials</a></li>	
                            <li><a className="smoothscroll" href="#download" title="">Download</a></li>	
                            <li><a className="smoothscroll" href="#subscribe" title="">Newsletter</a></li>			
                        </ul>

                        <h3>We Recommend Dreamhost</h3>  
                        <p className="sponsor-text">
                            Looking for an awesome and reliable webhosting? Try <a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">DreamHost</a>.
                            Get <span>$50 off</span> when you sign up with the promocode <span>styleshout</span>. 
                        </p>

                        <div className="action">
                            <a className="button" href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">Sign Up Now</a>
                        </div>

                    </nav>

                    <div id="main-content-wrap">
                        <section id="intro">

                            <div className="row intro-content">
                                <div className="col-twelve">

                                    <h3 className="animate-intro">Introducing Elevate</h3>
                                    
                                    <h1 className="animate-intro">
                                        The perfect template to
                                        present your awesome product.
                                    </h1>	
                                    
                                    <div className="buttons">
                                        <a className="button stroke smoothscroll animate-intro" href="#features" title="">Features</a>
                                        <a className="button stroke smoothscroll animate-intro" href="#download" title="">Download</a>
                                    </div>					

                                    <img src="images/app-screenshot-big.jpg" alt="" className="animate-intro" />   			

                                </div>		   			
                            </div>   

                        </section>

                        <section id="features">

                            <div className="row section-intro group animate-this">	
                                <div className="col-twelve with-bottom-line">

                                    <h2 className="">Features You'll Love.</h2>

                                    <p className="lead">Lorem ipsum Tempor do Excepteur nulla aute deserunt reprehenderit aute commodo aliquip laboris velit eu esse exercitation ex fugiat pariatur aute consequat. Lorem ipsum Fugiat mollit quis qui. Lorem ipsum Duis Excepteur Duis magna fugiat incididunt qui id quis dolor nisi irure proident labore ut in incididunt eiusmod est anim.</p>

                                </div>   		
                            </div>

                            <div className="row features-wrap">
                                                
                                <div className="features-list block-1-3 block-s-1-2 block-tab-full">

                                    <div className="bgrid feature animate-this">	

                                        <span className="feature-count">01.</span>            

                                        <div className="feature-content">

                                            <h3>Fully Resposive</h3>

                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                                            </p>
                                                            
                                        </div> 	         	 

                                    </div> 

                                    <div className="bgrid feature animate-this">	

                                        <span className="feature-count">02.</span>            

                                        <div className="feature-content">

                                            <h3>Retina Ready</h3>

                                            <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                                            </p>
                                                        
                                        </div> 	         	 

                                    </div> 

                                    <div className="bgrid feature animate-this">	

                                        <span className="feature-count">03.</span>            

                                        <div className="feature-content">

                                            <h3>Stylish Design</h3>

                                            <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                                            </p>
                                                        
                                        </div> 	         	 

                                    </div> 

                                    <div className="bgrid feature animate-this">	

                                        <span className="feature-count">04.</span>            

                                        <div className="feature-content">

                                            <h3>Clean Code</h3>

                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                                            </p>
                                                        
                                        </div> 	         	 

                                    </div> 

                                    <div className="bgrid feature animate-this">	

                                        <span className="feature-count">05.</span>            

                                        <div className="feature-content">

                                            <h3>Easy To Customize</h3>

                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                                            </p>
                                                        
                                        </div> 	         	 

                                    </div>

                                    <div className="bgrid feature animate-this">	

                                        <span className="feature-count">06.</span>            

                                        <div className="feature-content">

                                            <h3>Free of Charge</h3>

                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                                            </p>
                                                        
                                        </div> 	         	 

                                    </div>

                                </div>			

                            </div>
                
                        </section> 

                        <section id="infos">

                            <div className="info-entry">

                                <div className="half-grey"></div>

                                <div className="row info-entry-content">

                                    <div className="media-wrap">
                                        <div className="media animate-this"  data-animate="fadeInRight">
                                            <img src="images/app-screenshot-small.jpg" alt="" />
                                        </div>   				      				
                                    </div>

                                    <div className="col-six text-part">   				
                                        
                                        <h5 className="animate-this" data-animate="fadeInLeft">Some Cool Stuff</h5>
                                        <h2 className="animate-this" data-animate="fadeInLeft">Clean and Organized Code</h2>

                                        <p className="animate-this" data-animate="fadeInLeft">Lorem ipsum Sunt adipisicing adipisicing esse exercitation consequat sed irure commodo cupidatat aute ea adipisicing consectetur nulla consequat irure consectetur veniam sit sit qui reprehenderit officia sunt nulla elit nisi proident.</p>

                                        <a href="#" className="button animate-this" data-animate="fadeInLeft">Learn More</a>
                                                    
                                    </div>   				
                                    
                                </div> 

                            </div> 

                            <div className="info-entry">

                                <div className="half-grey"></div>

                                <div className="row info-entry-content">
                                
                                    <div className="media-wrap">
                                        <div className="media animate-this" data-animate="fadeInLeft">
                                            <div className="fluid-video-wrapper">
                                                <iframe src="http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 
                                            </div>
                                        </div>   				
                                    </div>

                                    <div className="col-six text-part">   				
                                        
                                        <h5 className="animate-this" data-animate="fadeInRight">Video Stuff</h5>
                                        <h2 className="animate-this" data-animate="fadeInRight">Your Super Cool Video</h2>

                                        <p className="animate-this" data-animate="fadeInRight">Lorem ipsum Sunt adipisicing adipisicing esse exercitation consequat sed irure commodo cupidatat aute ea adipisicing consectetur nulla consequat irure consectetur veniam sit sit qui reprehenderit officia sunt nulla elit nisi proident.</p>

                                        <a href="#" className="button animate-this" data-animate="fadeInRight">Learn More</a>
                                                    
                                    </div>

                                </div> 

                            </div> 

                        </section>

                        <section id="stats" className="count-up">

                            <div className="row">
                                <div className="col-twelve">

                                    <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">

                                        <div className="bgrid stat">

                                            <div className="icon-part">
                                                <i className="icon-pencil-ruler"></i>
                                            </div>

                                            <h3 className="stat-count">110</h3>

                                            <h5 className="stat-title">
                                                Awesome Projects
                                            </h5>

                                        </div>				

                                        <div className="bgrid stat">

                                            <div className="icon-part">
                                                <i className="icon-location-user"></i>
                                            </div>

                                            <h3 className="stat-count">9050</h3>

                                            <h5 className="stat-title">
                                                Clients Served
                                            </h5>

                                        </div> 

                                        <div className="bgrid stat">

                                            <div className="icon-part">
                                                <i className="icon-rewards-medal-1"></i>
                                            </div>

                                            <h3 className="stat-count">210</h3>

                                            <h5 className="stat-title">
                                                Awards Received
                                            </h5>

                                        </div> 								

                                        <div className="bgrid stat">

                                            <div className="icon-part">
                                                <i className="icon-alien"></i>
                                            </div>

                                            <h3 className="stat-count">123</h3>

                                            <h5 className="stat-title">
                                                Crazy Ideas
                                            </h5>

                                        </div> 

                                        <div className="bgrid stat">

                                            <div className="icon-part">
                                                <i className="icon-coffee-mug"></i>
                                            </div>

                                            <h3 className="stat-count">1500</h3>

                                            <h5 className="stat-title">
                                                Coffee Cups
                                            </h5>

                                        </div> 

                                        <div className="bgrid stat">

                                            <div className="icon-part">
                                                <i className="icon-hourglass"></i>
                                            </div>

                                            <h3 className="stat-count">7200</h3>

                                            <h5 className="stat-title">
                                                Hours
                                            </h5>

                                        </div> 

                                    </div> 

                                </div> 
                            </div> 

                        </section>

                        <section id="pricing">

                            <div className="row section-intro animate-this">
                                <div className="col-twelve with-bottom-line">

                                    <h2>Plans and Pricing.</h2>

                                    <p className="lead">Lorem ipsum Tempor do Excepteur nulla aute deserunt reprehenderit aute commodo aliquip laboris velit eu esse exercitation ex fugiat pariatur aute consequat. Lorem ipsum Fugiat mollit quis qui. Lorem ipsum Duis Excepteur Duis magna fugiat incididunt qui id quis dolor nisi irure proident labore ut in incididunt eiusmod est anim.</p>

                                </div>   		
                            </div>

                            <div className="row pricing-content">

                                <div className="pricing-tables block-1-3  group">

                                    <div className="bgrid animate-this"> 

                                        <div className="price-block">

                                            <div className="top-part">

                                                <h3 className="plan-title">Starter</h3>
                                            <p className="plan-price"><sup>$</sup>4.99</p>
                                            <p className="price-month">Per month</p>		             

                                            </div>                

                                            <div className="bottom-part">

                                                    <ul className="features">
                                                    <li><strong>3GB</strong> Storage</li>
                                                    <li><strong>10GB</strong> Bandwidth</li>		                  
                                                    <li><strong>5</strong> Databases</li>		                  
                                                    <li><strong>30</strong> Email Accounts</li>
                                                </ul>

                                                <a className="button large" href="">Get Started</a>

                                            </div>

                                        </div>           	
                                
                                    </div> 

                                    <div className="bgrid animate-this">

                                        <div className="price-block primary" data-info="popular">

                                            <div className="top-part">

                                                <h3 className="plan-title">Standard</h3>
                                            <p className="plan-price"><sup>$</sup>9.99</p>
                                            <p className="price-month">Per month</p>							

                                            </div>               

                                            <div className="bottom-part">

                                                    <ul className="features">
                                                    <li><strong>5GB</strong> Storage</li>
                                                    <li><strong>15GB</strong> Bandwidth</li>		                  
                                                    <li><strong>7</strong> Databases</li>		                  
                                                    <li><strong>40</strong> Email Accounts</li>
                                                </ul>

                                                <a className="button large" href="">Get Started</a>

                                                </div>
                            
                                        </div>            	                 

                                    </div> 

                                    <div className="bgrid animate-this">               

                                        <div className="price-block">

                                            <div className="top-part">

                                                <h3 className="plan-title">Premium</h3>
                                            <p className="plan-price"><sup>$</sup>29.99</p>
                                            <p className="price-month">Per month</p>	                		               

                                            </div> 
                            
                                            <div className="bottom-part">

                                                <ul className="features">
                                                    <li><strong>10GB</strong> Storage</li>
                                                    <li><strong>30GB</strong> Bandwidth</li>		                  
                                                    <li><strong>15</strong> Databases</li>		                  
                                                    <li><strong>60</strong> Email Accounts</li>
                                                </ul>

                                                <a className="button large" href="">Get Started</a>

                                            </div>	            		                
                            
                                        </div>                              

                                    </div>		           

                                </div>

                            </div> 

                        </section>

                        <section id="testimonials">
                            <div className="row testimonial-content">
                                <div className="col-twelve">

                                    <h2 className="h01 animate-this">
                                    Hear What Our Customers Say.
                                    </h2>

                                    <div id="testimonial-slider" className="flexslider animate-this">
                                        <ul className="slides">	
                                            <li>
                                                <p>&ldquo;Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.&rdquo;</p>
                                                <p className="author-info">&mdash; Steve Jobs</p>
                                            </li>						
                                            <li>
                                                <p>&ldquo;Good design is as little design as possible. Less, but better - because it concentrates on the essential aspects, and the products are not burdened with non-essentials. Back to purity, back to simplicity..&rdquo;</p>
                                                <p className="author-info">&mdash; Dieter Rams</p>
                                            </li>						
                                            <li>
                                                <p>&ldquo;A fundamental part of that is making mistakes together. There's no learning without trying lots of ideas and failing lots of times.&rdquo;</p>
                                                <p className="author-info">&mdash; Jony Ive</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flexslider-controls animate-this">
                                    <ul className="flex-control-nav">
                                        <li><img src="images/customer01.jpg" alt=""/></li>
                                        <li><img src="images/customer02.jpg" alt=""/></li>
                                        <li><img src="images/customer03.jpg" alt=""/></li>
                                    </ul>
                                    </div>
                            
                                </div>
                            </div>
                        </section>

                        <footer id="main-footer">

                            <div className="footer-social-wrap">  
                                <div className="row">
                                            
                                    <ul className="footer-social-list">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-facebook-square"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-pinterest"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-dribbble"></i>
                                            </a>
                                        </li>
                                    </ul>
                                        
                                </div> 
                            </div> 

                            <div className="footer-info-wrap">

                                <div className="row footer-info">

                                    <div className="col-four tab-full">
                                        <h4><i className="icon-location-map-1"></i> Where to Find Us</h4>

                                        <p>
                                        1600 Amphitheatre Parkway<br/>
                                        Mountain View, CA<br/>
                                        94043 US
                                        </p>
                                    </div>

                                    <div className="col-four tab-full collapse">
                                        <h4><i className="icon-phone-incoming"></i> Get In Touch</h4>

                                        <p>someone@elevatewebsite.com<br/>
                                            info@elevatewebsite.com <br/>
                                            Phone: (+63) 555 1212			     
                                        </p>
                                    </div>

                                    <div className="col-four tab-full">
                                        <h4><i className="icon-organization-hierarchy-3"></i> Company Links</h4>

                                        <ul className="footer-link-list">
                                            <li><a href="#">Company Journal</a></li>
                                            <li><a href="#">Product Support</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                    
                                </div>
                            </div>
            
                            <div className="footer-bottom"> 

                                <div className="copyright">
                                    <span>© Copyright Elevate 2016.</span> 
                                    <span>Design by <a href="http://www.styleshout.com/">styleshout</a></span>	         	
                                </div>  		
                            </div>
            
                        </footer>

                        <div id="go-top">
                            <a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up"></i></a>
                        </div>
                        {
                        /*<div id="preloader"> 
                                <div id="loader"></div>
                        </div>*/
                        }
                    </div>
                </div>

                <Helmet>
                    <script src="js/jquery-2.1.3.min.js"></script>
                    <script src="js/plugins.js"></script>
                    <script src="js/main.js"></script>
                </Helmet>
            </div>
        );
    }
}