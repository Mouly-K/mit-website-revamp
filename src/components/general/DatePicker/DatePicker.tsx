import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import { BiCalendar, BiChevronDown } from "react-icons/bi";

import { formatDateToString } from "../../../utils/utils";
import "./datepicker.css";

/**
 * Props for the DatePicker component.
 */
export interface DatePickerProps {
  /** The title of the date picker */
  title: string;
  /** The selected date value */
  value: Date;
  /** Whether the date picker is enabled or not */
  enabled: boolean;
  /** Callback function when the date value changes */
  onChange: React.Dispatch<React.SetStateAction<any>>;
}

/**
 * A date picker component for selecting dates.
 */
const DatePicker: React.FC<DatePickerProps> = ({
  title,
  value,
  enabled,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const datePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="dropdown noselect" ref={datePickerRef}>
      <div
        className="dropdown-container"
        onClick={() => enabled && setIsOpen(!isOpen)}
      >
        <h4>{title}</h4>
        <div className="date">
          <div className="icon">
            <BiCalendar size="1.4em" />
          </div>
          {formatDateToString(value)}
          <BiChevronDown />
        </div>
      </div>
      <div data-visible={isOpen} className="dropdown-content">
        {/* <h1>Pick a {title}</h1> */}
        <Calendar
          value={value}
          onChange={onChange}
          className="react-calendar"
        />
      </div>
    </div>
  );
};

export default DatePicker;
