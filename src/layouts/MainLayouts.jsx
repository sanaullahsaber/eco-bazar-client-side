import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import FooterBT from "../components/FooterBT/FooterBT";
import SubscribeOurNewsletter from "../components/SubscribeOurNewsletter/SubscribeOurNewsletter";


const MainLayouts = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet ></Outlet>
      <SubscribeOurNewsletter></SubscribeOurNewsletter>
      <FooterBT></FooterBT>
    </div>
  );
};

export default MainLayouts;