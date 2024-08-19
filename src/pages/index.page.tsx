import Link from "next/link";

import { overlay } from "overlay-kit";

import LoginModal from "@/components/Modal/Login";

export default function Home() {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          overlay.open(({ isOpen, close, unmount }) => {
            return (
              <LoginModal
                isOpen={isOpen}
                onClose={() => {
                  close();

                  setTimeout(() => {
                    unmount();
                  }, 250);
                }}
              />
            );
          });
        }}
      >
        로그인 버튼
      </button>
      <Link href="/">초기 설정 ㅇ_ㅇ</Link>
    </>
  );
}
