import React from "react";
import Modal from "../Modal/Modal";

/**
 * Props for the ConfirmModal component.
 */
export interface ConfirmModalProps {
  /** Determines whether the modal is open */
  isOpen: boolean;
  /** Callback to set the modal's open state */
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  /** The title of the modal */
  title: string;
  /** The description or message in the modal */
  description: string;
  /** The label for the cancel button */
  cancelButtonTitle: string;
  /** The label for the confirm button */
  confirmButtonTitle: string;
  /** Callback function when the confirm button is clicked */
  onConfirmClick: () => void;
  /** The content to display in the modal body */
  content: string;
}

/**
 * A modal for confirming actions with a title, description, and confirm/cancel buttons.
 */
export default function ConfirmModal({
  isOpen,
  setIsOpen,
  title,
  description,
  cancelButtonTitle,
  confirmButtonTitle,
  onConfirmClick,
  content,
}: ConfirmModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onModalClose={() => {}}
      title={title}
      description={description}
      modalFooter={
        <>
          <div className="left"></div>
          <div className="right">
            <div
              className="cancel button"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {cancelButtonTitle}
            </div>
            <div
              className="save-changes button"
              onClick={() => {
                setIsOpen(false);
                onConfirmClick();
              }}
            >
              {confirmButtonTitle}
            </div>
          </div>
        </>
      }
    >
      <div
        className="padded-content"
        style={{ fontSize: 14, fontWeight: 500, paddingBottom: 15 }}
      >
        {content}
      </div>
    </Modal>
  );
}
