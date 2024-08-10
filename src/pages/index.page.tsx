import Link from "next/link";

import { useState } from "react";

import Modal from "@/components/Modal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button type="button" onClick={handleLoginButtonClick}>
        모달 버튼
      </button>
      <Link href="/">초기 설정 ㅇ_ㅇ</Link>
      {isOpen && <Modal />}
    </>
  );
}
