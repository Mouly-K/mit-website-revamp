import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./modal.css";

/**
 * Props for the Modal component.
 */
export interface ModalProps {
  /** Whether the modal is currently open or not */
  isOpen: boolean;
  /** Function to set the modal's open state */
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  /** Function to be called when the modal is closed */
  onModalClose?: () => void;
  /** The content to be displayed within the modal */
  children: React.ReactNode;
  /** The title of the modal */
  title: string;
  /** A description or subtitle for the modal */
  description: string;
  /** Content to be displayed in the modal footer */
  modalFooter: React.ReactNode;
}

/**
 * A reusable modal component with customizable content.
 */
export default function Modal({
  isOpen,
  setIsOpen,
  onModalClose,
  children,
  title,
  description,
  modalFooter,
}: ModalProps) {
  return (
    <div className={`modal-container ${isOpen ? "open" : "hidden"}`}>
      <div className={`modal ${isOpen ? "open" : "hidden"}`}>
        <div className="modal-header noselect">
          <div className="left">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div
            className="close-button"
            onClick={() => {
              setIsOpen(false);
              onModalClose && onModalClose();
            }}
          >
            <IoCloseOutline />
          </div>
        </div>
        <div className="modal-content">{children}</div>
        {modalFooter && (
          <div className="modal-footer noselect">{modalFooter}</div>
        )}
      </div>
    </div>
  );
}
