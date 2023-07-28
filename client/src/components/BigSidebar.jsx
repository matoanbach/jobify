import Wrapper from "../assets/wrappers/BigSidebar";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { useDashboardContext } from "../pages/DashBoardLayout";

function BigSidebar() {
  const {showSidebar} = useDashboardContext()
  return (
    <Wrapper>
      <div className={showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            <NavLinks isBigSidebar="true"/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default BigSidebar;
