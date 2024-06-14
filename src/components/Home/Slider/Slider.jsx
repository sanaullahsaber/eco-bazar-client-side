import { Carousel } from "flowbite-react";
import SliderImg1 from "../../../assets/slider/slider-1.png";
import SliderImg2 from "../../../assets/slider/slider-2.jpg";
import SliderImg3 from "../../../assets/slider/slider-3.jpg";
import SliderImg4 from "../../../assets/slider/slider-4.jpg";

const Slider = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 my-2 sm:my-2 lg:my-10">
      <div className="h-40 sm:h-40 xl:h-80 2xl:h-96">
        <Carousel>
          <div className="flex h-full items-center justify-center dark:bg-red-700 dark:text-white">
            <img
              src={SliderImg1}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
            <img
              src={SliderImg2}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
            <img
              src={SliderImg3}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
            <img
              src={SliderImg4}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
