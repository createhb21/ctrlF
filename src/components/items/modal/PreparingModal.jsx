import { useSetRecoilState } from 'recoil';
import { preparingModal } from '../../../store/atom';
import styles from '../../../styles/items/modal/modal_preparing.module.css';

export default function PreparingModal({ setShowPreparingModal, setShowMenu }) {
  const setShowHiddenModal = useSetRecoilState(preparingModal);
  const modalClose = () => setShowHiddenModal(false);

  return (
    <div className={styles.notes_modal}>
      <div className={styles.modal_overlay}>
        <div className={styles.modal_content}>
          <h1 className={styles.modal_h1}>준비중입니다</h1>
          <div className={styles.btn}>
            <button className={styles.ok_button} onClick={modalClose}>
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
