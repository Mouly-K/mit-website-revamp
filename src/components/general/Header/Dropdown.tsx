import MenuItem from "./MenuItems";
import { MenuItem as MenuItemProp } from "./Navbar";

interface DropdownProps {
  submenus: MenuItemProp[];
  dropdown: boolean;
  depthLevel: number;
}

const Dropdown = ({ submenus, dropdown, depthLevel }: DropdownProps) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul
      className={`dropdown ${dropdownClass} ${
        dropdown ? "show" : ""
      }`}
    >
      {submenus.map((submenu: MenuItemProp, index: number) => (
        <MenuItem menuItem={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
