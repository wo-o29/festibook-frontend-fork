import { ReactNode } from "react";

interface HeaderLayoutProps {
  children: ReactNode;
}

function HeaderLayout({ children }: HeaderLayoutProps) {
  return (
    <>
      <header>추후 헤더 완성되면 만들어진 헤더 사용 예정 </header>
      <main>{children}</main>
    </>
  );
}

export default HeaderLayout;
