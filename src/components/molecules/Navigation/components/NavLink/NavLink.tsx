import { memo } from "react";

import { Link } from "react-router-dom";

import { RouteItemDef } from "@app/types/route.types";

interface NavLinkProps {
  navItem: RouteItemDef;
}

const NavLink = memo(({ navItem }: NavLinkProps) => {
  return (
    <Link to={Array.isArray(navItem.path) ? navItem.path[0] : navItem.path}>
      {navItem.navigationTitle
        ? navItem.navigationTitle
        : `Missing navigationTitle for "${navItem.id}"`}
    </Link>
  );
});

export default NavLink;
