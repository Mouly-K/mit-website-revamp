import MenuItem from "./MenuItems";
import { topBarItems } from "../../../routes";

export interface MenuItem {
  path: string;
  title: string;
  children?: MenuItem[];
  element?: JSX.Element;
}

function modifyRoutes(routes: MenuItem[], parentPath = "") {
  return routes.map((route) => {
    const path =
      route.path.includes("http://") || route.path.includes("https://")
        ? route.path
        : parentPath + route.path;
    const modifiedRoute = { ...route, path };

    if (route.children) {
      modifiedRoute.children = modifyRoutes(route.children, path);
    }

    return modifiedRoute;
  });
}

const Navbar = (props: any) => {
  return (
    <nav>
      <ul
        className={`menus nohighlights noselect ${
          props.menuOpen ? "open" : ""
        }`}
      >
        {modifyRoutes(topBarItems).map((menu: MenuItem, index: number) => (
          <MenuItem key={index} menuItem={menu} depthLevel={0} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
