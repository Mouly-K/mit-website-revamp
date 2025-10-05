import "./toggleswitch.css";

export interface ToggleSwitchProps {
  /** The title of the ToggleSwitch */
  title: string;
  /** Represents the current state of the ToggleSwitch */
  checked: boolean;
  /** Function that gets called when the checkbox changes */
  onChange: (value: boolean) => void;
  /** Whether the changes to the state of the component is enabled or not */
  enabled: boolean;
}

export default function ToggleSwitch({
  title,
  checked,
  onChange,
  enabled,
}: ToggleSwitchProps) {
  const handleToggle = () => {
    enabled && onChange(!checked);
  };

  return (
    <div className="toggle-container">
      <h4>{title}</h4>
      <label className="toggle-switch">
        <input type="checkbox" checked={checked} onChange={handleToggle} />
        <span className="slider" />
      </label>
    </div>
  );
}
