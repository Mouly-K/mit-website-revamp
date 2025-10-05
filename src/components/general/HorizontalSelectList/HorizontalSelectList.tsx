import "./horizontalselectlist.css";

/**
 * Props for the HorizontalSelectList component.
 */
export interface SelectableListProps {
  /** The title of the selectable list */
  title: string;
  /** The description of the selectable list, visible on hover of the title */
  description?: string;
  /** An array of items to be displayed in the selectable list */
  items: string[];
  /** The currently selected item from the list */
  selectedItem: string;
  /** Function to set the selected item */
  setSelectedItem: (value: string) => void;
  /** Whether the selection functionality is enabled or not */
  enabled: boolean;
}

/**
 * A horizontal list of selectable items.
 */
export default function HorizontalSelectList({
  title,
  description,
  items,
  selectedItem,
  setSelectedItem,
  enabled,
}: SelectableListProps) {
  /**
   * Handle click on a selectable item.
   * @param item - The item that was clicked.
   */
  const handleClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="selectable-list-container">
      <h4 title={description || title}>{title}</h4>
      <div className="selectable-list">
        {items.map((item, index) => (
          <div
            key={index}
            className={`selectable-item ${
              item === selectedItem ? "selected" : ""
            }`}
            onClick={() => enabled && handleClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
