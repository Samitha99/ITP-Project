import React from 'react'
import image from './img/hero-bg.jpg'
import './page.css'

function Page() {
  return (
    <>
      <section className="slider_section">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 800,
            flex: 1,
            width: '100%',
          }}
        >
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>Fast Food Restaurant</h1>
                        <p>
                          Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad
                          mollitia laborum quam quisquam esse error unde. Tempora ex doloremque,
                          labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>Fast Food Restaurant</h1>
                        <p>
                          Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad
                          mollitia laborum quam quisquam esse error unde. Tempora ex doloremque,
                          labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>Fast Food Restaurant</h1>
                        <p>
                          Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad
                          mollitia laborum quam quisquam esse error unde. Tempora ex doloremque,
                          labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <ol className="carousel-indicators">
                <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                <li data-target="#customCarousel1" data-slide-to="1"></li>
                <li data-target="#customCarousel1" data-slide-to="2"></li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <h1>next</h1>
      </section> */}
    </>
  )
}
export default Page
