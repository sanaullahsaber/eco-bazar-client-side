import { Link } from "react-router-dom";
import FooterImg from "../../assets/Vector.png";

import { Footer } from "flowbite-react";
import AmexImg from "../../assets/Amex.png";
import BkashImg from "../../assets/bkash.png"
import MastercardImg from "../../assets/mastercard.png"
import VisaImg from "../../assets/Visa.png"

const FooterBT = () => {
  return (
    <div className="bg-[#1A1A1A]">
      <div className="max-w-screen-2xl mx-auto ">
        <Footer className="bg-transparent">
          <div className="w-full">
            <div className="grid w-full grid-cols-1 gap-10 px-6 py-8 md:grid-cols-5">
              {/* 1st cols */}
              <div>
                <div>
                  <div className="flex items-center gap-1">
                    <img src={FooterImg} alt="Footer image" />
                    <Link to={"/"}>
                      <p className="text-base text-white sm:text-base md:text-xl lg:text-3xl font-medium">
                        Ecobazar
                      </p>
                    </Link>
                  </div>
                  <p className="text-sm font-normal text-[#808080] my-4">
                    Morbi cursus porttitor enim lobortis molestie. Duis gravida
                    turpis dui, eget bibendum magna congue nec.
                  </p>
                  <div className="text-white flex justify-between">
                    <p className="border-b-2 border-[#00B307]">
                      (219) 555-0114
                    </p>
                    <span className="text-[#808080]">or</span>
                    <p className="border-b-2 border-[#00B307]">
                      proxy@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              {/* 2nd cols */}
              <div className="text-center md:text-left">
                <Footer.Title className="text-white" title="My Account" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#" className="text-[#808080]">
                    My Account
                  </Footer.Link>
                  <Footer.Link href="#" className="text-[#808080]">
                    Order History
                  </Footer.Link>
                  <Footer.Link href="#" className="text-[#808080]">
                    Shopping Cart
                  </Footer.Link>
                  <Footer.Link href="#" className="text-[#808080]">
                    Wishlist
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              {/* 3rd cols */}
              <div className="text-center md:text-left">
                <Footer.Title className="text-white" title="Helps" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#" className="text-[#808080]">
                    Contact
                  </Footer.Link>
                  <Footer.Link href="#" className="text-[#808080]">
                    Faqs
                  </Footer.Link>
                  <Footer.Link href="#" className="text-[#808080]">
                    Terms &amp; Conditions
                  </Footer.Link>
                  <Footer.Link href="#" className="text-[#808080]">
                    Privacy Policy
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              {/* 4th cols */}
              <div className="text-center md:text-left">
                <Footer.Title className="text-white" title="Proxy" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#" className="text-[#808080]">
                    About
                  </Footer.Link>
                  <Footer.Link href="#" className="text-[#808080]">
                    Shop
                  </Footer.Link>
                  <Footer.Link href="#" className="text-[#808080]">
                    Product
                  </Footer.Link>
                  <Footer.Link href="#" className="text-[#808080]">
                    Track Order
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              {/* 5th cols */}
              <div className="text-center md:text-left">
                <Footer.Title className="text-white" title="Categories" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#" className="text-[#808080]">
                    Fruit & Vegetables
                  </Footer.Link>
                  <Footer.Link href="#" className="text-[#808080]">
                    Meat & Fish
                  </Footer.Link>
                  <Footer.Link href="#" className="text-[#808080]">
                    Bread & Bakery
                  </Footer.Link>
                  <Footer.Link href="#" className="text-[#808080]">
                    Beauty & Health
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
            <div className="w-full  border-t-2 border-zinc-200 px-4 py-6 sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright
                href="#"
                className="text-[#808080]"
                by="Ecobazar eCommerce | All Rights Reserved"
                year={2021}
              />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <a href="#">
                  <img src={AmexImg} alt="Amex" className="h-8" />
                </a>
                <a href="#">
                  <img src={MastercardImg} alt="Mastercard" className="h-8" />
                </a>
                <a href="#">
                  <img src={VisaImg} alt="Visa" className="h-8" />
                </a>
                <a href="#">
                  <img src={BkashImg} alt="Bkash" className="h-8" />
                </a>
              </div>
            </div>
          </div>
        </Footer>
      </div>
    </div>
  );
};

export default FooterBT;
