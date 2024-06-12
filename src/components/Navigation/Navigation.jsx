import MiddleNav from "./NavPart/MiddleNav";
import NavLinks from "./NavPart/NavLinks";
import SmallOneNav from "./NavPart/SmallOneNav";

const Navigation = () => {
  return (
    <>
      <div className="border-b-2 border-zinc-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SmallOneNav></SmallOneNav>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <MiddleNav></MiddleNav>
      </div>
      <div className="bg-[#333333]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <NavLinks></NavLinks>
        </div>
      </div>
    </>
  );
};

export default Navigation;
