import SmNavbar from "../Responsive Component/Responsive Navbar/SmNavbar";
import XlNavbar from "../Responsive Component/Responsive Navbar/XlNavbar";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="py-3 xl:px-0 md:px-5 px-2    w-full shadow-md">
      <Container>
        <div className="lg:block hidden">
          <XlNavbar />
        </div>
        <div className="lg:hidden block">
          <SmNavbar />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
