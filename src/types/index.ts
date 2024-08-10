import { MODAL_TITLE } from "@/constants/modal";

export type ModalStateType = {
  [K in keyof typeof MODAL_TITLE]: {
    isOpen: boolean;
  };
};
