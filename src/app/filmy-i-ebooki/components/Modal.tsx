import React from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeaderWraper}>
        <div className={styles.modalHeader}>
            Sprecyzuj czego szukasz
            <button className={`{styles.closeButton} Button ` } onClick={onClose}>
          ×
        </button>

        </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
