import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";

import "./dropdown.css";

interface DropdownProps {
  value: string;
  items: string[];
  onChange: (value: string) => void;
}

export default function Dropdown({ value, items, onChange }: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = (clickedItem: string) => {
    onChange(clickedItem);
    setDropdownOpen(false);
  };

  return (
    <div className="dropdown-container noselect">
      <div
        data-active={dropdownOpen}
        className="dropdown-wrapper"
        style={{ height: items.length * 40 }}
      >
        <p className="dropdown-item" onClick={handleClick}>
          <GrLanguage />
          {value}
          {!dropdownOpen ? <BiChevronDown /> : <BiChevronUp />}
        </p>
        {items
          .filter((item: string) => item !== value)
          .map((item: string, index: number) => (
            <p
              className="dropdown-item"
              key={index}
              onClick={() => {
                handleItemClick(item);
              }}
            >
              {item}
            </p>
          ))}
      </div>
    </div>
  );
}
