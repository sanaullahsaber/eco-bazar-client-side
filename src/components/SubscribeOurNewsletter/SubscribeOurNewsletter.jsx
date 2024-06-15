const SubscribeOurNewsletter = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 flex flex-col lg:flex-row justify-between items-center">
          {/* 1st div */}
          <div className="flex flex-col justify-start items-start max-w-[448px] mb-4 lg:mb-0">
            <h3 className="text-2xl font-semibold">Subscribe our Newsletter</h3>
            <p className="text-[#999999]">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          {/* 2nd div */}
          <div className="w-full max-w-md lg:max-w-lg">
            {/* Search Input and Button */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Enter your email..."
                className="w-full py-2 pl-5 pr-32 border border-gray-300 rounded-full focus:outline-none focus:ring-0 focus:border-gray-300"
              />
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-[#00B307] text-white rounded-full hover:bg-[#00A803] focus:outline-none focus:ring-2 focus:ring-lime-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeOurNewsletter;
