import React, { useState, useEffect, useRef, ReactNode } from "react";
import { FiEye } from "react-icons/fi";
import { AiOutlineHolder } from "react-icons/ai";
import "./filter.css";

/**
 * Props for the Filter component.
 */
export interface FilterProps {
  /** Label for the filter */
  filterLabel?: string;
  /** Available options for the filter */
  options: SelectedOptions;
  /** Selected options for the filter */
  selectedOptions: SelectedOptions;
  /** Function to set selected options */
  setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOptions>>;
  /** Children to display as the filter's trigger */
  children: ReactNode;
  /** Alignment of the filter dropdown */
  align?: "left" | "right";
}

/**
 * Interface for selected options.
 */
export interface SelectedOptions {
  [key: string]: string[];
}

/**
 * A filter component for selecting options from a dropdown.
 */
const Filter: React.FC<FilterProps> = ({
  filterLabel,
  options,
  selectedOptions,
  setSelectedOptions,
  children,
  align,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const updateFilters = (key: string, value: string) => {
    let oldSelectedOptions = selectedOptions;

    oldSelectedOptions[key]?.includes(value)
      ? (oldSelectedOptions[key] = oldSelectedOptions[key].filter(
          (item) => item !== value
        ))
      : oldSelectedOptions[key].push(value);

    Object.keys(oldSelectedOptions).map((key: string) =>
      oldSelectedOptions[key]?.length === options[key]?.length
        ? (oldSelectedOptions[key] = [])
        : null
    );

    setSelectedOptions({ ...oldSelectedOptions });
  };

  return (
    <div className="filter-dropdown noselect" ref={filterRef}>
      <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div>
      <div
        data-visible={isOpen}
        data-align={align || "left"}
        className="filter-dropdown-content"
      >
        <h1>Filters</h1>
        {(filterLabel ? [filterLabel] : Object.keys(options)).map(
          (filterLabel: string, index: number) => (
            <div className="group-wrapper" key={filterLabel}>
              <div className="group-container">
                <div className="group-name">
                  <label>{filterLabel}</label>
                  {selectedOptions[filterLabel]?.length !== 0 && (
                    <div
                      className="visible-toggle"
                      onClick={() => {
                        setSelectedOptions(
                          (oldSelectedOptions: SelectedOptions) => {
                            oldSelectedOptions[filterLabel] = [];
                            return { ...oldSelectedOptions };
                          }
                        );
                      }}
                    >
                      Show all
                    </div>
                  )}
                </div>
                {options[filterLabel]?.map((option, index) => (
                  <div
                    className="option"
                    key={index}
                    onClick={() => updateFilters(filterLabel, option)}
                  >
                    <div className="content">
                      <AiOutlineHolder />
                      {typeof option === "boolean"
                        ? option
                          ? "Yes"
                          : "No"
                        : String(option)}
                    </div>
                    <div className="visible-toggle">
                      {selectedOptions[filterLabel]?.includes(option) ? (
                        <FiEye />
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
              {!filterLabel && index !== Object.keys(options)?.length - 1 && (
                <div className="separator" />
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Filter;
