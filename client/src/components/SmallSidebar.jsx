import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { useDashboardContext } from '../pages/DashboardLayout';


function SmallSidebar() {
  const {showSidebar, toggleSidebar} = useDashboardContext();
  return <Wrapper>
    <div className={showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"}>
      <div className="content">
        <button className="close-btn" onClick={() => toggleSidebar()}>
          <FaTimes/>
        </button>
        <header>
          <Logo/>
        </header>
        <div className="nav-links">
          <NavLinks />
        </div>
      </div>
    </div>
  </Wrapper>;
}

export default SmallSidebar;
