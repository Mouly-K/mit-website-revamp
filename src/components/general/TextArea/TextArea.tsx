import "./textarea.css";

export interface TextAreaProps {
  /** Optional title for the text area */
  title?: string;
  /** Placeholder text for the text area */
  placeholder: string;
  /** Current value of the text area */
  value: string;
  /** Callback function when text area value changes */
  onChange?: (e: string) => void;
  /** Function to validate the text area value */
  validateWith?: (e: string) => RegExpMatchArray | null | boolean;
  /** Error text to display when validation fails */
  errorText?: string;
  /** Determines if the text area is read-only */
  readOnly?: boolean;
  /** Optional limit for the text area */
  limit?: number;
}

export default function TextArea({
  title,
  placeholder,
  value,
  onChange,
  validateWith,
  errorText,
  readOnly,
  limit,
}: TextAreaProps) {
  return (
    <div className="text-area-container">
      {title && <h4>{title}</h4>}
      <div className="text-area-wrapper">
        <textarea
          data-disabled={readOnly}
          value={value}
          className="text-area"
          placeholder={placeholder}
          onChange={(e) =>
            (!limit || e.target.value.length <= limit) &&
            onChange &&
            onChange(e.target.value)
          }
          readOnly={readOnly}
        />
      </div>
      {validateWith && !validateWith(value) && errorText && (
        <p className="text-area-error">{errorText}</p>
      )}
    </div>
  );
}
