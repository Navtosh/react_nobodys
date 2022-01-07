import React, { Component } from 'react';  
import Carousel from 'react-bootstrap/Carousel';
import { BannerDiscription } from "./BannerDiscription";
import { BannerImage } from "./BannerImage";

export class BootstrapCarousel extends Component {  

        render() {  
  
                return (  
                    
                        <div>
    <div className="container-fluid gray_bg">
        <div className="justify-content-center">
          <div className="container">
            <div className="justify-content-center">
            <Carousel>
                <Carousel.Item>
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 align-self-center">
                        <Carousel.Caption>
                            <BannerDiscription />
                        </Carousel.Caption>                        
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 align-self-center">
                        <BannerImage />
                      </div>
                    </div>                    
                </Carousel.Item  >
                <Carousel.Item>
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 align-self-center">
                        <Carousel.Caption>
                            <BannerDiscription />
                        </Carousel.Caption>                        
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 align-self-center">
                        <BannerImage />
                      </div>
                    </div>                    
                </Carousel.Item  >
                <Carousel.Item>
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 align-self-center">
                        <Carousel.Caption>
                            <BannerDiscription />
                        </Carousel.Caption>                        
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 align-self-center">
                        <BannerImage />
                      </div>
                    </div>                    
                </Carousel.Item  >
                <Carousel.Item>
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 align-self-center">
                        <Carousel.Caption>
                            <BannerDiscription />
                        </Carousel.Caption>                        
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 align-self-center">
                        <BannerImage />
                      </div>
                    </div>                    
                </Carousel.Item  >
                <Carousel.Item>
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 align-self-center">
                        <Carousel.Caption>
                            <BannerDiscription />
                        </Carousel.Caption>                        
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 align-self-center">
                        <BannerImage />
                      </div>
                    </div>                    
                </Carousel.Item  >


            </Carousel>
            
            </div>
          </div>
        </div>
      </div>
                        </div>
                )  
        }  
}  
  
export default BootstrapCarousel  