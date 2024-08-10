import Link from "next/link";

import Modal from "@/components/Modal";
import { MODAL_TITLE } from "@/constants/modal";
import useModalController from "@/hooks/useModalController";

export default function Home() {
  const { modalState, open, close, unMount } = useModalController({
    [MODAL_TITLE.LOGIN]: { isOpen: false, close: true },
  });

  return (
    <>
      <button type="button" onClick={() => open(MODAL_TITLE.LOGIN)}>
        모달 버튼
      </button>
      <Link href="/">초기 설정 ㅇ_ㅇ</Link>
      {modalState[MODAL_TITLE.LOGIN].isOpen && (
        <Modal
          key={MODAL_TITLE.LOGIN}
          currentState={modalState[MODAL_TITLE.LOGIN]}
          onClose={() => {
            close(MODAL_TITLE.LOGIN);

            setTimeout(() => {
              unMount(MODAL_TITLE.LOGIN);
            }, 250);
          }}
        />
      )}
    </>
  );
}
