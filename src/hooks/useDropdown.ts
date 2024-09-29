import { useCallback } from "react";

import useOutsideClick from "./useOutsideClick";

function useDropdown<T extends HTMLElement>() {
  const { isOpen, setIsOpen, ref } = useOutsideClick<T>();

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    isOpen,
    toggle,
    ref,
  };
}

export default useDropdown;
