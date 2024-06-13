import img1 from "../../../assets/PopularCategories/image1.png";
import img2 from "../../../assets/PopularCategories/image2.png";
import img3 from "../../../assets/PopularCategories/image3.png";
import img4 from "../../../assets/PopularCategories/image4.png";
import img5 from "../../../assets/PopularCategories/image5.png";
import img6 from "../../../assets/PopularCategories/image6.png";
import img7 from "../../../assets/PopularCategories/image7.png";
import img8 from "../../../assets/PopularCategories/image8.png";
import img9 from "../../../assets/PopularCategories/image9.png";
import img10 from "../../../assets/PopularCategories/image10.png";
import img11 from "../../../assets/PopularCategories/image11.png";
import img12 from "../../../assets/PopularCategories/image12.png";

const PopularCategories = () => {
  const images = [
    {
      id: 1,
      image: img1,
      title: "Fresh Fruit",
    },
    {
      id: 2,
      image: img2,
      title: "Fresh Vegetables",
    },
    {
      id: 3,
      image: img3,
      title: "Meat & Fish",
    },
    {
      id: 4,
      image: img4,
      title: "Snacks",
    },
    {
      id: 5,
      image: img5,
      title: "Beverages",
    },
    {
      id: 6,
      image: img6,
      title: "Beauty & Health",
    },
    {
      id: 7,
      image: img7,
      title: "Bread & Bakery",
    },
    {
      id: 8,
      image: img8,
      title: "Baking Needs",
    },
    {
      id: 9,
      image: img9,
      title: "Cooking",
    },
    {
      id: 10,
      image: img10,
      title: " Diabetic Food",
    },
    {
      id: 11,
      image: img11,
      title: "Dish Detergents",
    },
    {
      id: 12,
      image: img12,
      title: "Oil",
    },
  ];
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 my-5">
        <p className="text-3xl font-semibold py-10">Popular Categories</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 sm:gap-1 md:gap-3 lg:gap-6">
          {images.map((image) => (
            <div key={image.id}>
              <div className="flex flex-col items-center justify-center border space-y-4 hover:border-2 hover:border-[#00B307] hover:text-[#2C742F]">
                <img src={image.image} alt="" />
                <div className="pb-3">
                  <p className="text-lg font-medium text-center ">
                    {image.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
