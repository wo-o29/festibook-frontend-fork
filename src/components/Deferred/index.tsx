import { ReactNode, useEffect, useState } from "react";

interface DeferredProps {
  children: ReactNode;
}

function DeferredComponent({ children }: DeferredProps) {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    // 200ms 지난 후 children Render
    const timeoutId = setTimeout(() => {
      setIsDeferred(true);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!isDeferred) {
    return null;
  }

  return <>{children}</>;
}

export default DeferredComponent;
