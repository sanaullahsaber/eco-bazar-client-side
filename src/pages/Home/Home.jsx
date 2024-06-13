import Feature from "../../components/Home/Feature/Feature";
import PopularCategories from "../../components/Home/PopularCategories/PopularCategories";
import Slider from "../../components/Home/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Feature></Feature>
      <PopularCategories></PopularCategories>
    </div>
  );
};

export default Home;