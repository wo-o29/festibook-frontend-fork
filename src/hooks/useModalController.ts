import { useCallback, useState } from "react";

function useModalController<T>(initialState: T) {
  const [modalState, setModalState] = useState<T>(initialState);

  const open = useCallback((key: keyof T) => {
    setModalState((prev) => ({
      ...prev,
      [key]: { isOpen: true, close: false },
    }));
  }, []);

  // 언마운트 전에 동작(리액트 트리에 남아 있음)
  const close = useCallback((key: keyof T) => {
    setModalState((prev) => ({
      ...prev,
      [key]: { ...prev[key], close: true },
    }));
  }, []);

  // 실제로 리액트 트리에서 요소를 제거
  const unMount = useCallback((key: keyof T) => {
    setModalState((prev) => ({
      ...prev,
      [key]: { ...prev[key], isOpen: false },
    }));
  }, []);

  return { modalState, open, close, unMount } as const;
}

export default useModalController;
