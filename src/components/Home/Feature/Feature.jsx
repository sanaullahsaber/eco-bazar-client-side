import FeatureImg1 from "../../../assets/Feature/Icon1.png";
import FeatureImg2 from "../../../assets/Feature/Icon2.png";
import FeatureImg3 from "../../../assets/Feature/Icon3.png";
import FeatureImg4 from "../../../assets/Feature/Icon4.png";

const Feature = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 sm:mb-3 lg:mb-5">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 border-b-2 border-gray-100 shadow-2xl">
          {/* 1st div */}
          <div className="max-w-xs flex flex-col justify-start items-center py-10 space-y-2 hover:border-b-2 hover:border-[#00B307]">
            <img src={FeatureImg1} alt="" />
            <div className="text-center space-y-2">
              <p className="text-lg font-semibold">Free Shipping</p>
              <p className="text-sm text-[#999999]">
                Free Shipping with discount
              </p>
            </div>
          </div>
          {/* 2nd div */}
          <div className="max-w-sm flex flex-col justify-start items-center py-10 space-y-2 hover:border-b-2 hover:border-[#00B307]">
            <img src={FeatureImg2} alt="" />
            <div className="text-center space-y-2">
              <p className="text-lg font-semibold">Great Support 24/7</p>
              <p className="text-sm text-[#999999]">
                Instant access to Contact
              </p>
            </div>
          </div>
          {/* 3rd div */}
          <div className="max-w-sm flex flex-col justify-start items-center py-10 space-y-2 hover:border-b-2 hover:border-[#00B307]">
            <img src={FeatureImg3} alt="" />
            <div className="text-center space-y-2">
              <p className="text-lg font-semibold">100% Secure Payment</p>
              <p className="text-sm text-[#999999]">
                We ensure your money is save
              </p>
            </div>
          </div>
          {/* 4th div */}
          <div className="flex flex-col justify-start items-center py-10 space-y-2 hover:border-b-2 hover:border-[#00B307]">
            <img src={FeatureImg4} alt="" />
            <div className="text-center space-y-2">
              <p className="text-lg font-semibold">Money-Back Guarantee</p>
              <p className="text-sm text-[#999999]">30 days money-back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
