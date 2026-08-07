import { ctaBack, LeftArrow, logo } from "../../../images";

const Footer = () => {
  return (
    <footer className="w-full ">
      <div className="w-full aspect-1920/560 relative ">
        <img
          src={ctaBack}
          alt=""
          className="w-full aspect-1920/560 object-cover object-center "
        />
        <div className="absolute top-0 left-0 w-full h-full ">
          <div className="w-347.5 mx-auto h-full flex flex-col  justify-center gap-4 ">
            <h4 className="text-24 ">Discover the Tazzartc</h4>
            <h1 className="text-64 font-n-b">Tazza RTC</h1>
            <h3 className="text-42 font-n-l pb-8  leading-[2.6rem]  ">
              Daily essentials, delivered to <br /> your doorstep.
            </h3>
            <div className="flex gap-3.75 ">
              <button className="w-63.5 aspect-254/76 bg-black text-24 text-white-text rounded-[50px] text-center ">
                Shop Now
              </button>
              <button className="w-63.5 aspect-254/76 bg-transparent border border-black text-24 text-main rounded-[50px] text-center ">
                Discover
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full aspect-1920/560 bg-dark-black ">
        <div className="w-347.5 mx-auto flex justify-between pt-20 pb-12 ">
          <div className="flex flex-col gap-52 ">
            <img src={logo} alt="" className="w-69  aspect-276/104  " />
            <p className="text-light-text text-20 font-n-r  ">
              Lorem Ipsum is simply dummy text of the printing <br />
              and typesetting industry. Lorem Ipsum has been the <br />
              industry's standard dummy text ever...
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col gap-9.5 ">
            <div>
              <h1 className="text-white-text text-24 font-n-sb ">Quick Link</h1>
              <div className="w-9 h-0.5 bg-warning-bg mt-4.75 " />
            </div>
            <ul className="flex flex-col gap-6.75  ">
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">
                  Today's Specials
                </p>
              </li>
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">Chicken</p>
              </li>
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">Fish</p>
              </li>
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">Mutton</p>
              </li>
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">
                  Ready to Cook
                </p>
              </li>
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">
                  Fruits & Vegetables{" "}
                </p>
              </li>
            </ul>
          </div>
          {/*  */}
          {/*  */}
          <div className="flex flex-col gap-9.5 ">
            <div>
              <h1 className="text-white-text text-24 font-n-sb ">Quick Link</h1>
              <div className="w-9 h-0.5 bg-warning-bg mt-4.75 " />
            </div>
            <ul className="flex flex-col gap-6.75  ">
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">
                  Today's Specials
                </p>
              </li>
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">Chicken</p>
              </li>
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">Fish</p>
              </li>
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">Mutton</p>
              </li>
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">
                  Ready to Cook
                </p>
              </li>
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">
                  Fruits & Vegetables{" "}
                </p>
              </li>
            </ul>
          </div>
          {/*  */}
          {/*  */}
          <div className="flex flex-col gap-9.5 ">
            <div>
              <h1 className="text-white-text text-24 font-n-sb ">Quick Link</h1>
              <div className="w-9 h-0.5 bg-warning-bg mt-4.75 " />
            </div>
            <ul className="flex flex-col gap-6.75  ">
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">
                  Today's Specials
                </p>
              </li>
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">Chicken</p>
              </li>
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">Fish</p>
              </li>
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">Mutton</p>
              </li>
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">
                  Ready to Cook
                </p>
              </li>
              <li className="flex items-center gap-2.75 ">
                <img
                  src={LeftArrow}
                  alt=""
                  className="w-[5.3px] aspect-5.3/9.3 object-center object-cover "
                />
                <p className="text-light-text text-18 font-n-r ">
                  Fruits & Vegetables{" "}
                </p>
              </li>
            </ul>
          </div>
          {/*  */}
        </div>
        <div className="w-full bg-dark text-center py-5 ">
          <p className="text-[#65697B] text-16 flex items-center justify-center gap-3 ">
            Copyright© 2021
            <span className="inline-block w-0.5 h-4.75 bg-warning-bg "></span>
            tazzartc.com All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
