import { useState } from "react";
import { TbEye } from "react-icons/tb";
import "./textinput.css";

export interface TextInputProps {
  /** Optional title for the input */
  title?: string;
  /** Type of the input (e.g., 'text' or 'password') */
  type: string;
  /** Placeholder text for the input */
  placeholder: string;
  /** Current value of the input */
  value: string;
  /** Callback function when input value changes */
  onChange?: (e: string) => void;
  /** Function to validate the input value */
  validateWith?: (e: string) => RegExpMatchArray | null | boolean;
  /** Error text to display when validation fails */
  errorText?: string;
  /** Determines if the input is read-only */
  readOnly?: boolean;
  /** Optional limit for the input */
  limit?: number;
}

export default function TextInput({
  title,
  type,
  placeholder,
  value,
  onChange,
  validateWith,
  errorText,
  readOnly,
  limit,
}: TextInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="text-input-container">
      {title && <h4>{title}</h4>}
      <div className="text-input-wrapper">
        <input
          data-disabled={readOnly}
          type={type === "password" && !visible ? "password" : "text"}
          value={value || ""}
          className="text-input"
          placeholder={placeholder}
          onChange={(e) => {
            (!limit || e.target.value.length <= limit) &&
              onChange &&
              onChange(e.target.value);
          }}
          readOnly={readOnly}
        />
        {type === "password" && (
          <div className="text-input-eye" onClick={() => setVisible(!visible)}>
            <TbEye />
          </div>
        )}
      </div>
      {validateWith && !validateWith(value) && errorText && (
        <p className="text-input-error">{errorText}</p>
      )}
    </div>
  );
}
