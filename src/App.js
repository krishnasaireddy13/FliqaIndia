import { Component } from "react";
import {
  MdArrowForwardIos,
  MdArrowBackIos,
  MdKeyboardDoubleArrowRight,
  MdEast,
} from "react-icons/md";
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="container-1">
            <img
              src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685784842/FliqaIndia-Logo_1_fsriwz.png"
              alt="logo"
              className="logo"
            />
            <ul className="header-ul">
              <li className="header-list-item">Home</li>
              <li className="header-list-item">Service</li>
              <li className="header-list-item">Portfolio</li>
              <li className="header-list-item">Community</li>
              <li className="header-list-item">Blog</li>
            </ul>
          </div>
          <div className="">
            <button className="sign-buttons">Sign Up</button>
            <button className="sign-buttons">Sign In</button>
          </div>
        </div>

        <div className="main-con">
          <img
            src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685848453/image_5_clwugo.png"
            alt="img1"
            className="img1"
          />
          <div className="search-container">
            <h1 className="main-head1">India’s Leading Creative Platform</h1>
            <p className="para-1">
              Experience hassle free bookings. Trusted by 2500+ Customers
            </p>
            <div className="search-bar-container">
              <input
                type="search"
                placeholder="Search service, blog and many more…"
                className="search"
              />
              <button className="search-button">Search</button>
            </div>
          </div>

          <div className="containers">
            <div className="con1">
              <img
                src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685852729/Group_156_sbp8op.png"
                alt="img-1"
                className="img-2"
              />
              <div className="in-con">
                <h1 className="h1-con1">Verified Reviews</h1>
                <p className="p-con1">For verified reviewers</p>
              </div>
            </div>
            <div className="con1">
              <img
                src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685854494/Group_154_fj4d0x.png"
                alt="img-1"
                className="img-2"
              />
              <div className="in-con">
                <h1 className="h1-con1">Top Articles</h1>
                <p className="p-con1">Helps you decide</p>
              </div>
            </div>
            <div className="con1">
              <img
                src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685854667/Group_153_tdbhwz.png"
                alt="img-1"
                className="img-2"
              />
              <div className="in-con">
                <h1 className="h1-con1">Write Share Win Contest</h1>
                <p className="p-con1">Earn cash for reviews</p>
              </div>
            </div>
            <div className="con1">
              <img
                src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685854697/Group_155_1_iubxpz.png"
                alt="img-1"
                className="img-2"
              />
              <div className="in-con">
                <h1 className="h1-con1">MouthShut for Brands</h1>
                <p className="p-con1">Request a Demo</p>
              </div>
            </div>
          </div>
          <hr />

          <div className="associate-container">
            <div className="associate-con1">
              <div>
                <h1 className="associate-h1">Find Trusted Associate</h1>
                <p className="associate-p">
                  Find the best Fliqa Associate for your special day.
                </p>
              </div>
              <button className="associate-button">
                See More
                <span className="double-arrow">
                  <MdKeyboardDoubleArrowRight />
                </span>
              </button>
            </div>

            <div className="associate-con2">
              <div className="associate-con3">
                <img
                  src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685857115/Rectangle_171_izlfbw.png"
                  alt="associates"
                  className="associate-img"
                />
                <div className="associate-con4">
                  <div>
                    <p className="associate-content">Name Title</p>
                    <p className="associate-content">Location</p>
                  </div>
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685857917/png-transparent-spain-sea-salt-20-minutos-brand-verified-stamp-angle-text-logo-removebg-preview_2_pfijlq.png"
                    alt="verified"
                  />
                </div>
              </div>

              <div className="associate-con3">
                <img
                  src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685857115/Rectangle_171_1_lulnat.png"
                  alt="associates"
                  className="associate-img"
                />
                <div className="associate-con4">
                  <div>
                    <p className="associate-content">Name Title</p>
                    <p className="associate-content">Location</p>
                  </div>
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685857917/png-transparent-spain-sea-salt-20-minutos-brand-verified-stamp-angle-text-logo-removebg-preview_2_pfijlq.png"
                    alt="verified"
                  />
                </div>
              </div>

              <div className="associate-con3">
                <img
                  src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685857115/Rectangle_171_2_nufzjk.png"
                  alt="associates"
                  className="associate-img"
                />
                <div className="associate-con4">
                  <div>
                    <p className="associate-content">Name Title</p>
                    <p className="associate-content">Location</p>
                  </div>
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685857917/png-transparent-spain-sea-salt-20-minutos-brand-verified-stamp-angle-text-logo-removebg-preview_2_pfijlq.png"
                    alt="verified"
                  />
                </div>
              </div>

              <div className="associate-con3">
                <img
                  src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685857115/Rectangle_171_3_uvdeb0.png"
                  alt="associates"
                  className="associate-img"
                />
                <div className="associate-con4">
                  <div>
                    <p className="associate-content">Name Title</p>
                    <p className="associate-content">Location</p>
                  </div>
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685857917/png-transparent-spain-sea-salt-20-minutos-brand-verified-stamp-angle-text-logo-removebg-preview_2_pfijlq.png"
                    alt="verified"
                  />
                </div>
              </div>

              <div className="associate-con3">
                <img
                  src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685857115/Rectangle_171_4_hwoita.png"
                  alt="associates"
                  className="associate-img"
                />
                <div className="associate-con4">
                  <div>
                    <p className="associate-content">Name Title</p>
                    <p className="associate-content">Location</p>
                  </div>
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685857917/png-transparent-spain-sea-salt-20-minutos-brand-verified-stamp-angle-text-logo-removebg-preview_2_pfijlq.png"
                    alt="verified"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="services">
            <h1 className="associate-h1">Our Featured Services</h1>
            <p className="associate-p">
              Discover the range of services provided by FliqaIndia
            </p>

            <div className="services-con0">
              <button className="services-arrow">
                <MdArrowBackIos className="arrows" />
              </button>
              <div className="services-con1">
                <img
                  src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685878161/image_64_yxkc64.png"
                  alt="services-img"
                  className="services-img"
                />
                <div className="services-details">
                  <h1 className="service-h1">Pre Wedding Photoshoot</h1>
                  <hr className="service-hr" />
                  <p className="service-p">
                    Starting at
                    <span className="service-span"> 25,000 (One Day)</span>
                  </p>
                  <button className="service-button">Know more</button>
                </div>
              </div>

              <div className="services-con1">
                <img
                  src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685878161/image_64_1_s7bkzf.png"
                  alt="services-img"
                  className="services-img"
                />
                <div className="services-details">
                  <h1 className="service-h1">Wedding Photoshoot</h1>
                  <hr className="service-hr" />
                  <p className="service-p">
                    Starting at
                    <span className="service-span"> 65,000 (Two days)</span>
                  </p>
                  <button className="service-button">Know more</button>
                </div>
              </div>

              <div className="services-con1">
                <img
                  src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685878160/image_64_2_remeuc.png"
                  alt="services-img"
                  className="services-img"
                />
                <div className="services-details">
                  <h1 className="service-h1">Portfolio Shoot</h1>
                  <hr className="service-hr" />
                  <p className="service-p">
                    Starting at
                    <span className="service-span">
                      25,000 (Standard price for 6-8 hours)
                    </span>
                  </p>
                  <button className="service-button">Know more</button>
                </div>
              </div>

              <div className="services-con1">
                <img
                  src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685878161/image_64_3_aafql8.png"
                  alt="services-img"
                  className="services-img"
                />
                <div className="services-details">
                  <h1 className="service-h1">Birthday Baby Folio</h1>
                  <hr className="service-hr" />
                  <p className="service-p">
                    Starting at
                    <span className="service-span"> 15,000 (One day)</span>
                  </p>
                  <button className="service-button">Know more</button>
                </div>
              </div>
              <button className="services-arrow">
                <MdArrowForwardIos className="arrows" />
              </button>
            </div>
          </div>

          <div className="banner">
            <h1 className="banner-h1">
              DISCOVER <br /> GRAPHIC DESGIN IDEAS <br /> AND SERVICES
            </h1>
          </div>

          <div>
            <h1 className="popular">
              Popular:
              <span className="popular-span">
                Website Design | Logo Design | Brochure Label Design
              </span>
            </h1>
            <hr />
          </div>

          <div className="blogs">
            <h1 className="associate-h1">Our Blogs</h1>
            <p className="associate-p">Check out our Latest Blog</p>

            <div className="blogs-con">
              <div className="blogs1">
                <div className="blogs1-0">
                  <p className="blog1-p">Featured on: Sep 15, 2021</p>
                  <h1 className="blog1-h1">
                    Wedding <br />
                    Photography <br /> at Goa
                  </h1>
                </div>
              </div>

              <div className="blogs2">
                <div className="blogs1-0">
                  <p className="blog1-p">Featured on: Sep 15, 2021</p>
                  <h1 className="blog1-h1">
                    Photography:
                    <br /> Expectations <br />
                    vs. Reality
                  </h1>
                </div>
              </div>

              <div className="blog3">
                <div className="blog3-con1">
                  <h1 className="blog3-h1">Trending Now</h1>
                  <button className="blog3-button">View All</button>
                </div>
                <div className="blog3-con2">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685944649/FliqaIndia_wedding_2_a9gi5p.png"
                    alt="blogs"
                    className="blog3-imgs"
                  />
                  <div>
                    <h1 className="blog3-blogs-h1">
                      Creative Industries are on the verge of depletion due to
                      COVID-19
                    </h1>
                    <p className="blog3-blogs-p">
                      In a period where many industries remain highly unclear,
                      others want to grasp how COVID-19 impact
                    </p>
                  </div>
                </div>

                <div className="blog3-con2">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685944649/FliqaIndia_wedding_1_topgd7.png"
                    alt="blogs"
                    className="blog3-imgs"
                  />
                  <div>
                    <h1 className="blog3-blogs-h1">
                      Photography: Expectations vs. Reality
                    </h1>
                    <p className="blog3-blogs-p">
                      Most of the time without any hands-on experience in
                      photography, professional and advanced photography
                      actually
                    </p>
                  </div>
                </div>

                <div className="blog3-con2">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685944649/Wedding_Trailer_1_bmtr3m.png"
                    alt="blogs"
                    className="blog3-imgs"
                  />
                  <div className="blog3-con3">
                    <h1 className="blog3-blogs-h1">
                      Wedding Photography at Goa
                    </h1>
                    <p className="blog3-blogs-p">
                      Wedding Photography in Goa If not, every couple when they
                      make their list of Pre-wedding shoot
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="real">
            <h1 className="associate-h1">Real Wedding</h1>
            <p className="associate-p">
              List your wedding and browse portfolio
            </p>

            <div className="real-con">
              <div className="real-con1">
                <img
                  src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685948425/image_59_r9kayw.png"
                  alt="real-imgs"
                />
                <div>
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685948424/image_56_h9cdev.png"
                    alt="real-imgs"
                    className="real-sm-img"
                  />
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685948424/image_57_vvzqns.png"
                    alt="real-imgs"
                    className="real-sm-img"
                  />
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685948425/image_90_uxkyfn.png"
                    alt="real-imgs"
                    className="real-sm-img"
                  />
                </div>
                <div className="real-con2">
                  <h1 className="real-con-h1">Danielle & Ronnie</h1>
                  <p className="real-con-p">38 photos. Kittery,Polland</p>
                </div>
              </div>

              <div className="real-con1">
                <img
                  src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685948424/image_59_1_om1x6q.png"
                  alt="real-imgs"
                />
                <div>
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685948424/image_56_h9cdev.png"
                    alt="real-imgs"
                    className="real-sm-img"
                  />
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685948424/image_57_vvzqns.png"
                    alt="real-imgs"
                    className="real-sm-img"
                  />
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685948425/image_90_uxkyfn.png"
                    alt="real-imgs"
                    className="real-sm-img"
                  />
                </div>
                <div className="real-con2">
                  <h1 className="real-con-h1">Danielle & Ronnie</h1>
                  <p className="real-con-p">38 photos. Kittery,Polland</p>
                </div>
              </div>

              <div className="real-con1">
                <img
                  src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685948424/image_59_2_n1k59b.png"
                  alt="real-imgs"
                />
                <div>
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685948424/image_56_h9cdev.png"
                    alt="real-imgs"
                    className="real-sm-img"
                  />
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685948424/image_57_vvzqns.png"
                    alt="real-imgs"
                    className="real-sm-img"
                  />
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685948425/image_90_uxkyfn.png"
                    alt="real-imgs"
                    className="real-sm-img"
                  />
                </div>
                <div className="real-con2">
                  <h1 className="real-con-h1">Danielle & Ronnie</h1>
                  <p className="real-con-p">38 photos. Kittery,Polland</p>
                </div>
              </div>

              <div className="real-con1">
                <img
                  src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685948425/image_59_3_xckw6n.png"
                  alt="real-imgs"
                />
                <div>
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685948424/image_56_h9cdev.png"
                    alt="real-imgs"
                    className="real-sm-img"
                  />
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685948424/image_57_vvzqns.png"
                    alt="real-imgs"
                    className="real-sm-img"
                  />
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685948425/image_90_uxkyfn.png"
                    alt="real-imgs"
                    className="real-sm-img"
                  />
                </div>
                <div className="real-con2">
                  <h1 className="real-con-h1">Danielle & Ronnie</h1>
                  <p className="real-con-p">38 photos. Kittery,Polland</p>
                </div>
              </div>
            </div>
            <div className="real-con3">
              <button className="real-button">
                <p className="real-button-p">View more weddings</p>
                <MdEast className="real-icon" />
              </button>
            </div>

            <hr className="real-hr" />
          </div>

          <div className="best-offers">
            <div className="offers-con1">
              <h1 className="associate-h1">Best Offers</h1>
              <p className="associate-p">
                Discover the best offers on our services
              </p>
            </div>

            <div className="offer-con2">
              <div className="offers-con3">
                <div className="offers-con4">
                  <div className="offers-con5">
                    <h1 className="offers-h1">
                      Wedding <br /> Packages
                    </h1>
                    <hr className="offers-hr" />
                    <div className="offers-con6">
                      <p className="discount">Discount</p>
                      <img
                        src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685951341/Images50-removebg-preview_2_sovs4i.png"
                        alt="discount"
                        className="offer-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="offer-con7">
                  <button className="offer-button">BOOK NOW</button>
                </div>
              </div>

              <div className="offers-con3">
                <div className="offers-con4-1">
                  <div className="offers-con5">
                    <h1 className="offers-h1">
                      Wedding <br /> Packages
                    </h1>
                    <hr className="offers-hr" />
                    <div className="offers-con6">
                      <p className="discount">Discount</p>
                      <img
                        src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685951341/Images50-removebg-preview_2_sovs4i.png"
                        alt="discount"
                        className="offer-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="offer-con7">
                  <button className="offer-button">BOOK NOW</button>
                </div>
              </div>

              <div className="offers-con3">
                <div className="offers-con4-2">
                  <div className="offers-con5">
                    <h1 className="offers-h1">
                      Wedding <br /> Packages
                    </h1>
                    <hr className="offers-hr" />
                    <div className="offers-con6">
                      <p className="discount">Discount</p>
                      <img
                        src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685951341/Images50-removebg-preview_2_sovs4i.png"
                        alt="discount"
                        className="offer-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="offer-con7">
                  <button className="offer-button">BOOK NOW</button>
                </div>
              </div>

              <div className="offers-con3">
                <div className="offers-con4">
                  <div className="offers-con5">
                    <h1 className="offers-h1">
                      Wedding <br /> Packages
                    </h1>
                    <hr className="offers-hr" />
                    <div className="offers-con6">
                      <p className="discount">Discount</p>
                      <img
                        src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685951341/Images50-removebg-preview_2_sovs4i.png"
                        alt="discount"
                        className="offer-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="offer-con7">
                  <button className="offer-button">BOOK NOW</button>
                </div>
              </div>
            </div>
            <hr className="offers-hr-1" />
          </div>

          <div className="testimonials">
            <div className="test-head">
              <div>
                <h1 className="associate-h1">Testimonials</h1>
                <p className="associate-p">Words from our clients</p>
              </div>
              <div>
                <button className="test-buttons1">Google</button>
                <button className="test-buttons">Facebook</button>
                <button className="test-buttons">Weddingwire</button>
                <button className="test-buttons">WedmeGood</button>
              </div>
            </div>

            <div className="test-con0">
              <div className="test-con1">
                <div className="test-imgcon">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685957760/Ellipse_1_it2pio.png"
                    alt="test"
                  />
                </div>
                <p className="test-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet
                </p>
                <h1 className="test-h1">~Ramdom Name</h1>
              </div>

              <div className="test-con1">
                <div className="test-imgcon">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685957760/Ellipse_1_it2pio.png"
                    alt="test"
                  />
                </div>
                <p className="test-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet
                </p>
                <h1 className="test-h1">~Ramdom Name</h1>
              </div>

              <div className="test-con1">
                <div className="test-imgcon">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685957760/Ellipse_1_it2pio.png"
                    alt="test"
                  />
                </div>
                <p className="test-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet
                </p>
                <h1 className="test-h1">~Ramdom Name</h1>
              </div>

              <div className="test-con1">
                <div className="test-imgcon">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685957760/Ellipse_1_it2pio.png"
                    alt="test"
                  />
                </div>
                <p className="test-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet
                </p>
                <h1 className="test-h1">~Ramdom Name</h1>
              </div>
            </div>
            <hr className="offer-hr-1" />
          </div>

          <div className="success-con">
            <div className="success-con2">
              <img
                src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685959458/Rectangle_208_hki4en.png"
                alt="sucess-1"
                className="sucess-imgs"
              />
              <img
                src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685959458/Rectangle_209_y3easq.png"
                alt="sucess-1"
                className="sucess-imgs"
              />
            </div>

            <div className="client-ratings">
              <div>
                <div className="client-con">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685959478/image_149_fczh9j.png"
                    alt="client"
                    className="client-imgs"
                  />
                  <h1 className="rating-p">4.9/5</h1>
                </div>

                <div className="client-con">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685959478/image_152_nsaetg.png"
                    alt="client"
                    className="client-imgs"
                  />
                  <h1 className="rating-p">4.9/5</h1>
                </div>

                <div className="client-con">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685959478/image_151_fw0uqj.png"
                    alt="client"
                    className="client-imgs"
                  />
                  <h1 className="rating-p">5.0/5</h1>
                </div>
              </div>

              <div>
                <div className="client-con">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685959600/image-removebg-preview_-_2022-07-23T185243_1_1_g38pzw.png"
                    alt="client"
                    className="client-imgs"
                  />
                  <h1 className="rating-p">4.9/5</h1>
                </div>

                <div className="client-con">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685959479/image-removebg-preview_-_2022-07-23T185023_1_whkfl0.png"
                    alt="client"
                    className="client-imgs"
                  />
                  <h1 className="rating-p">4.8/5</h1>
                </div>

                <div className="client-con">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685959479/image_154_f3lrgu.png"
                    alt="client"
                    className="client-imgs"
                  />
                  <h1 className="rating-p">5.0/5</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="success">
            <div className="head-success">
              <h1 className="associate-h1">Our Success</h1>
              <p className="associate-p">Journey of our success.</p>
            </div>

            <div className="con-0-success">
              <div className="con-1-success">
                <div className="image-circle">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685961489/image-removebg-preview_-_2022-07-23T230415_1_aurx5l.png"
                    alt="success"
                    className="sucess-im"
                  />
                </div>
                <p className="para-success">
                  Back in 2019, FliqaIndia recognize as a startup with DPIT in
                  Startup India.
                </p>
              </div>

              <div className="con-1-success">
                <div className="image-circle">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685961489/image-removebg-preview_-_2022-07-23T230432_gwod8b.png"
                    alt="success"
                    className="sucess-im"
                  />
                </div>
                <p className="para-success">
                  Appreciation from Startup Bengal for our creative startup
                  community
                </p>
              </div>

              <div className="con-1-success">
                <div className="image-circle">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685961489/image-removebg-preview_-_2022-07-23T230437_gmwxjr.png"
                    alt="success"
                    className="sucess-im"
                  />
                </div>
                <p className="para-success">
                  FliqaIndia got featured on Yourstory. Click here
                </p>
              </div>

              <div className="con-1-success">
                <div className="image-circle">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685961541/image_184_tuyznn.png"
                    alt="success"
                    className="sucess-im"
                  />
                </div>
                <p className="para-success">
                  Received awards from ImagesBazaar on leading creative industry
                </p>
              </div>

              <div className="con-1-success">
                <div className="image-circle">
                  <img
                    src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685961489/image-removebg-preview_-_2022-07-23T230425_mjjm3q.png"
                    alt="success"
                    className="sucess-im"
                  />
                </div>
                <p className="para-success">
                  Top ten in Intuit Circle Codeathon, 2020
                </p>
              </div>
            </div>
          </div>

          <div className="photography">
            <div className="photography-1">
              <h1 className="photography-h1">
                ULTIMATE <br /> COURSE IN
              </h1>
              <h1 className="photography-h2">PHOTOGRAPHY</h1>
            </div>

            <img
              src="https://res.cloudinary.com/dbxaqxmto/image/upload/v1685962490/image_183_trr8gh.png"
              alt="camera"
              className="camera-img"
            />
          </div>

          <div className="join">
            <div className="join-con2">
              <div>
                <h1 className="join-h1">
                  Grow your freelancing
                  <br /> career with Fliqa Associate
                </h1>
                <p className="join-p">
                  Register yourself Verification & Quality Check Verified
                  Associate at FliqaIndia
                </p>
              </div>
              <button className="join-button">Join Now</button>
            </div>
          </div>

          <div className="footer">
            <div className="footer1">
              <div>
                <h1 className="footer-h1">Never miss a thing.</h1>
                <div className="email-box">
                  <input
                    type="search"
                    className="email-text"
                    placeholder="Email Address"
                  />
                  <button className="email-button">Subscribe</button>
                </div>
                <div className="icons-con-1">
                  <p className="footer-p">Be in touch</p>
                  <div className="icons-con">
                    <FaFacebook className="icons" />
                    <FaWhatsapp className="icons" />
                    <FaLinkedin className="icons" />
                    <FaYoutube className="icons" />
                    <FaInstagram className="icons" />
                  </div>
                </div>
              </div>

              <div className="footer-con2">
                <div>
                  <h1 className="footer-h2">Never miss a thing.</h1>
                  <div className="footer-con3">
                    <div>
                      <p className="footer-items">Services</p>
                      <p className="footer-items">Blog</p>
                      <p className="footer-items">Portfolio</p>
                    </div>
                    <div>
                      <p className="footer-items">Tutorial</p>
                      <p className="footer-items">Careers</p>
                      <p className="footer-items">Film</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="footer-h2">Never miss a thing.</h1>
                <p className="footer-items">Contact us</p>
                <p className="footer-items">Feedback</p>
                <p className="footer-items">FAQ</p>
                <p className="footer-items">Terms and conditions</p>
                <p className="footer-items">Privacy Policy</p>
                <p className="footer-items">Data Deletion Protocol</p>
              </div>
            </div>
            <div>
              <div className="rights">
                <p className="rights-para">
                  2019-2021, FliqaIndia Pvt Ltd. -ALL RIGHT RESERVED <br />{" "}
                  POWERED BY FLIQAINDIA PVT. LTD.
                  <br /> VERSION 5.1.5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
