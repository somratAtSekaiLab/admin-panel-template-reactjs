import { useContext } from "react";

import { SidebarLayoutContext } from "../components/SidebarLayoutProvider/SidebarLayoutProvider";

const useSidebarLayout = () => useContext(SidebarLayoutContext);

export default useSidebarLayout;
