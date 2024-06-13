import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import FooterBT from "../components/FooterBT/FooterBT";


const MainLayouts = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet ></Outlet>
      <FooterBT></FooterBT>
    </div>
  );
};

export default MainLayouts;