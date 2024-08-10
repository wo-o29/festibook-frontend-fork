import { ReactNode } from "react";

import { createPortal } from "react-dom";

import * as S from "./styled";

interface PortalProps {
  children: ReactNode;
}

function Portal({ children }: PortalProps) {
  return createPortal(<S.Container>{children}</S.Container>, document.body);
}

export default Portal;
