import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

import Dropdown from "./Dropdown";
import { MenuItem } from "./Navbar";

interface MenuItemsProps {
  menuItem: MenuItem;
  depthLevel: number;
}

export default function MenuItem({ menuItem, depthLevel }: MenuItemsProps) {
  const [dropdown, setDropdown] = useState(false);

  const menuItemsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (
        dropdown &&
        menuItemsRef.current &&
        !menuItemsRef.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={menuItemsRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {menuItem.path && menuItem.children ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              menuItem.title
            ) : (
              <NavLink to={menuItem.path}>{menuItem.title}</NavLink>
            )}

            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                0 && window.innerWidth > 960 ? (
              <BiChevronRight />
            ) : (
              <BiChevronDown />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={menuItem.children}
            dropdown={dropdown}
          />
        </>
      ) : !menuItem.path && menuItem.children ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {menuItem.title}{" "}
            {depthLevel > 0 ? <BiChevronRight /> : <BiChevronRight />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={menuItem.children}
            dropdown={dropdown}
          />
        </>
      ) : (
        <NavLink to={menuItem.path}>{menuItem.title}</NavLink>
      )}
    </li>
  );
}
