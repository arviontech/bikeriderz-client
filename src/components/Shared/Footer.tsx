import MdFooter from "../Responsive Component/Responsive Footer/MdFooter";
import SmFooter from "../Responsive Component/Responsive Footer/SmFooter";
import XLFooter from "../Responsive Component/Responsive Footer/XLFooter";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-[#182532]">
      <Container>
        <div>
          <div className="hidden md:block lg:block">
            <XLFooter />

            <MdFooter />
          </div>

          <div className="block md:hidden lg:hidden">
            {/* for small device */}
            <SmFooter />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
