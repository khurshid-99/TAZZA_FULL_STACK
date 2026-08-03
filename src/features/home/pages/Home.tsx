import "../styles/Home.scss";
import banner from "../../../assets/banner-image.png";
import {
  brandIcon,
  iamge,
  iamge2,
  iamge3,
  fruits,
  popular,
  deliveryBackGround,
  Meals,
  Repeat,
  Shipping,
  Packaged,
  ctaBack,
  logo,
  LeftArrow,
  instagram,
  facebook,
  linkdin,
  twiter,
} from "../../../images";
import { useState } from "react";
import { Link } from "react-router";
const Home = () => {
  const [email, setEmail] = useState(null);
  const [zipCode, setZipCode] = useState(null);

  return (
    <section className="home">
      <div className="home_category">
        <div className="home_category_item">
          <div className="shape">
            <img src="src/assets/category_inner_icon.svg" alt="" />
          </div>
          <h5>Today’s Deals</h5>
        </div>
        <div className="home_category_item">
          <div className="shape">
            <img src="src/assets/category_inner_icon.svg" alt="" />
          </div>
          <h5>Today’s Deals</h5>
        </div>
        <div className="home_category_item">
          <div className="shape">
            <img src="src/assets/category_inner_icon.svg" alt="" />
          </div>
          <h5>Today’s Deals</h5>
        </div>
        <div className="home_category_item">
          <div className="shape">
            <img src="src/assets/category_inner_icon.svg" alt="" />
          </div>
          <h5>Today’s Deals</h5>
        </div>
        <div className="home_category_item">
          <div className="shape">
            <img src="src/assets/category_inner_icon.svg" alt="" />
          </div>
          <h5>Today’s Deals</h5>
        </div>
        <div className="home_category_item">
          <div className="shape">
            <img src="src/assets/category_inner_icon.svg" alt="" />
          </div>
          <h5>Today’s Deals</h5>
        </div>
        <div className="home_category_item">
          <div className="shape">
            <img src="src/assets/category_inner_icon.svg" alt="" />
          </div>
          <h5>Today’s Deals</h5>
        </div>
        <div className="home_category_item">
          <div className="shape">
            <img src="src/assets/category_inner_icon.svg" alt="" />
          </div>
          <h5>Today’s Deals</h5>
        </div>
        <div className="home_category_item">
          <div className="shape">
            <img src="src/assets/category_inner_icon.svg" alt="" />
          </div>
          <h5>Today’s Deals</h5>
        </div>
      </div>
      <div className="home_category_banner_container">
        <img src={banner} alt="" />
      </div>
      <div className="home_del_container">
        <div className="text">
          <h1>
            Delicious & <span className="text_green">Healthy Meals</span>
            <br />
            <span className="text_orange">Delivered</span> to Your Door
          </h1>
        </div>
        <div className="form_container">
          <form action="">
            <div className="form_email">
              <input type="email" id="email_" placeholder="Email address" />
            </div>
            <div className="form_zip_code">
              <input
                type="number"
                id="zip_code"
                pattern="[0-9]"
                placeholder="Zip code"
              />
            </div>
            <button className="submit">Get Started</button>
          </form>
        </div>
      </div>
      <div className="home_best_seller_category">
        <div className="texts_container">
          <div className="titel">
            <div className="logo">
              <img src={brandIcon} alt="" />
            </div>
            <h1>Our Best Seller</h1>
          </div>
          <p className="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem <br />
            Ipsum has been the industry's standard dummy text ever.
          </p>
        </div>
        <div className="cards_container">
          <div className="cart">
            <img src={iamge} alt="" />
            <div className="cart_detils">
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <h1 className="title">Chicken Curry Cut Small </h1>
              <p className="subtitle">
                Bone-in chunky pieces of skinless meat including...
              </p>
              <div className="weight">
                <h5>
                  Net wt:<span> 1000gms </span>
                </h5>
                <div className="v_line" />
                <h5>
                  Gross: <span> 1026gms</span>
                </h5>
              </div>
              <div className="shop_item">
                <div className="mrp">
                  <h5>
                    <span className="mrp_">MRP: </span>
                    <small className="rs_">Rs</small>
                    <span className="price_">309</span>
                  </h5>
                </div>
                <button className="add_to_cart">Add to Cart</button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="cart">
            <img src={iamge} alt="" />
            <div className="cart_detils">
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <h1 className="title">Chicken Curry Cut Small </h1>
              <p className="subtitle">
                Bone-in chunky pieces of skinless meat including...
              </p>
              <div className="weight">
                <h5>
                  Net wt:<span> 1000gms </span>
                </h5>
                <div className="v_line" />
                <h5>
                  Gross: <span> 1026gms</span>
                </h5>
              </div>
              <div className="shop_item">
                <div className="mrp">
                  <h5>
                    <span className="mrp_">MRP: </span>
                    <small className="rs_">Rs</small>
                    <span className="price_">309</span>
                  </h5>
                </div>
                <button className="add_to_cart">Add to Cart</button>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <div className="home_fruits_category">
        <div className="texts_container">
          <div className="titel">
            <div className="logo">
              <img src={brandIcon} alt="" />
            </div>
            <h1>Fruits & Vegetables</h1>
          </div>
          <p className="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem <br />
            Ipsum has been the industry's standard dummy text ever.
          </p>
        </div>
        <div className="carts_container">
          <div className="cart">
            <img src={fruits} alt="" />
            <div className="cart_detils">
              <h1 className="title">Fresh chopped vegetables</h1>
              <h5 className="weight">
                WT: <span>1000gms</span>
              </h5>
              <div className="shop_item">
                <h5 className="mrp">
                  <span className="mrp_">MRP:</span>
                  <small className="rs_">Rs</small>
                  <span className="price_">128</span>
                </h5>
                <button className="add_to_cart">Add to Cart</button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="cart">
            <img src={fruits} alt="" />
            <div className="cart_detils">
              <h1 className="title">Fresh chopped vegetables</h1>
              <h5 className="weight">
                WT: <span>1000gms</span>
              </h5>
              <div className="shop_item">
                <h5 className="mrp">
                  <span className="mrp_">MRP:</span>
                  <small className="rs_">Rs</small>
                  <span className="price_">128</span>
                </h5>
                <button className="add_to_cart">Add to Cart</button>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <div className="home_popular_category">
        <div className="texts_container">
          <div className="titel">
            <div className="logo">
              <img src={brandIcon} alt="" />
            </div>
            <h1>Popular Categories</h1>
          </div>
          <p className="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem <br />
            Ipsum has been the industry's standard dummy text ever.
          </p>
        </div>
        <div className="carts_container">
          <div className="cart">
            <img src={popular} alt="" />
            <div className="cart_detils">
              <h1 className="title">Raw-Chicken-fillet</h1>
              <h5 className="weight">
                WT: <span>1000gms</span>
              </h5>
              <div className="shop_item">
                <h5 className="mrp">
                  <span className="mrp_">MRP:</span>
                  <small className="rs_">Rs</small>
                  <span className="price_">128</span>
                </h5>
                <button className="add_to_cart">Add to Cart</button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="cart">
            <img src={popular} alt="" />
            <div className="cart_detils">
              <h1 className="title">Raw-Chicken-fillet</h1>
              <h5 className="weight">
                WT: <span>1000gms</span>
              </h5>
              <div className="shop_item">
                <h5 className="mrp">
                  <span className="mrp_">MRP:</span>
                  <small className="rs_">Rs</small>
                  <span className="price_">128</span>
                </h5>
                <button className="add_to_cart">Add to Cart</button>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <div className="home_delivery_step_contener">
        <img src={deliveryBackGround} alt="" className="delivery_background" />
        <div className="delivery_step">
          <div className="step_1 step">
            <img src={Meals} alt="" />
            <h3>Choose Your Meals</h3>
            <p>Lorem Ipsum is simply dummy</p>
          </div>
          <div className="step_2 step">
            <img src={Packaged} alt="" />
            <h3>Packaged fresh</h3>
            <p>Lorem Ipsum is simply dummy</p>
          </div>
          <div className="step_3 step">
            <img src={Shipping} alt="" />
            <h3>Free Shipping</h3>
            <p>Lorem Ipsum is simply dummy</p>
          </div>
          <div className="step_4 step">
            <img src={Repeat} alt="" />
            <h3>Cook & Repeat</h3>
            <p>Lorem Ipsum is simply dummy</p>
          </div>
        </div>
      </div>
      <div className="home_explore_category">
        <div className="texts_container">
          <div className="titel">
            <div className="logo">
              <img src={brandIcon} alt="" />
            </div>
            <h1>Explore Categories</h1>
          </div>
          <p className="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem <br />
            Ipsum has been the industry's standard dummy text ever.
          </p>
        </div>
        <div className="explore_category_">
          <div className="category_top">
            <div className="top_category_left_container">
              <img src={iamge3} alt="" />
            </div>
            <div className="top_category_right_container">
              <div className="right_img_container_1">
                <img src={popular} alt="" />
              </div>
              <div className="right_img_container_2">
                <img src={iamge2} alt="" />
              </div>
            </div>
          </div>
          <div className="category_bottom">
            <div className="category_bottom_left_container">
              <div className="left_img_container_1">
                <img src={fruits} alt="" />
              </div>
              <div className="left_img_container_2">
                <img src={fruits} alt="" />
              </div>
            </div>
            <div className="category_bottom_right_container">
              <img src={iamge} alt="" />
            </div>
          </div>
        </div>
        <div className="exp_cat_btn">
          <button className="btn_explore_cat">Explore More Categories</button>
        </div>
      </div>
      <div className="home_instagram_feed">
        <div className="texts_container">
          <div className="titel">
            <div className="logo">
              <img src={brandIcon} alt="" />
            </div>
            <h1>Explore Categories</h1>
          </div>
          <p className="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </p>
        </div>
        <div className="insagram_feed_carts">
          <div className="cart">
            <img src={iamge2} alt="" />
          </div>
          <div className="cart">
            <img src={iamge2} alt="" />
          </div>
        </div>
      </div>
      <div className="home_discover_container">
        <img src={ctaBack} alt="" />
        <div className="dis_text_con">
          <h5>Discover the Tazzartc</h5>
          <h1>Tazza RTC</h1>
          <h2>
            Daily essentials, delivered to <br />
            your doorstep.
          </h2>
          <div className="dis_text_con_btns">
            <button className="shop_btn dis_btn">Shop Now</button>
            <button className="discover_btn dis_btn">Discover</button>
          </div>
        </div>
      </div>
      <footer className="home_footer">
        <div className="footer_content">
          <div className="footer_left">
            <img src={logo} alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever...
            </p>
          </div>
          <div className="footer_links_container">
            <div className="quick_links">
              <div className="footer_links_title">
                <h1>Quick Link</h1>
                <div className="linke_" />
              </div>
              <div className="footer_links">
                <div className="footer_link">
                  <img src={LeftArrow} alt="" className="laft_arrow" />
                  <Link to={""} className="link">
                    Today's Specials
                  </Link>
                </div>
                <div className="footer_link">
                  <img src={LeftArrow} alt="" className="laft_arrow" />
                  <Link to={""} className="link">
                    Chicken
                  </Link>
                </div>
                <div className="footer_link">
                  <img src={LeftArrow} alt="" className="laft_arrow" />
                  <Link to={""} className="link">
                    Fish
                  </Link>
                </div>
                <div className="footer_link">
                  <img src={LeftArrow} alt="" className="laft_arrow" />
                  <Link to={""} className="link">
                    Mutton
                  </Link>
                </div>
                <div className="footer_link">
                  <img src={LeftArrow} alt="" className="laft_arrow" />
                  <Link to={""} className="link">
                    Ready to Cook
                  </Link>
                </div>
                <div className="footer_link">
                  <img src={LeftArrow} alt="" className="laft_arrow" />
                  <Link to={""} className="link">
                    Fruits & Vegetables{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="our_products">
              <div className="footer_links_title">
                <h1>Our Product</h1>
                <div className="linke_" />
              </div>
              <div className="footer_links">
                <div className="footer_link">
                  <img src={LeftArrow} alt="" className="laft_arrow" />
                  <Link to={""} className="link">
                    Chicken Curry Cut Small
                  </Link>
                </div>
                <div className="footer_link">
                  <img src={LeftArrow} alt="" className="laft_arrow" />
                  <Link to={""} className="link">
                    Lean Goat Curry Cut
                  </Link>
                </div>
                <div className="footer_link">
                  <img src={LeftArrow} alt="" className="laft_arrow" />
                  <Link to={""} className="link">
                    Chicken Drumstick
                  </Link>
                </div>
                <div className="footer_link">
                  <img src={LeftArrow} alt="" className="laft_arrow" />
                  <Link to={""} className="link">
                    Fresh chopped vegetables
                  </Link>
                </div>
                <div className="footer_link">
                  <img src={LeftArrow} alt="" className="laft_arrow" />
                  <Link to={""} className="link">
                    Fresh-Fish-slices
                  </Link>
                </div>
                <div className="footer_link">
                  <img src={LeftArrow} alt="" className="laft_arrow" />
                  <Link to={""} className="link">
                    Assorted-Spices-eggs
                  </Link>
                </div>
              </div>
            </div>
            <div className="social_support_links">
              <div className="social_links">
                <div className="footer_links_title">
                  <h1>Quick Link</h1>
                  <div className="linke_" />
                </div>
                <div className="footer_links">
                  <div className="footer_link">
                    <Link to={""} className="link">
                      <img src={facebook} alt="" />
                    </Link>
                    <Link to={""} className="link">
                      <img src={instagram} alt="" />
                    </Link>
                    <Link to={""} className="link">
                      <img src={twiter} alt="" />
                    </Link>
                    <Link to={""} className="link">
                      <img src={linkdin} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="support_links">
                <div className="footer_links_title">
                  <h1>Support</h1>
                  <div className="linke_" />
                </div>
                <div className="footer_links">
                  <div className="footer_link">
                    <img src={LeftArrow} alt="" className="laft_arrow" />
                    <Link to={""} className="link">
                      Free Shipping
                    </Link>
                  </div>
                  <div className="footer_link">
                    <img src={LeftArrow} alt="" className="laft_arrow" />
                    <Link to={""} className="link">
                      Packaged fresh
                    </Link>
                  </div>
                  <div className="footer_link">
                    <img src={LeftArrow} alt="" className="laft_arrow" />
                    <Link to={""} className="link">
                      Give Us a Call
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_copyright">
          <p>Copyright© 2021 tazzartc.com All Right Reserved</p>
        </div>
      </footer>
    </section>
  );
};

export default Home;
