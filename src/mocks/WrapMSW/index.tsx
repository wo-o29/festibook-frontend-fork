import { ReactNode, useEffect, useState } from "react";

import { initMSW } from "..";

function WrapMSW({ children }: { children: ReactNode }) {
  const [isMount, setIsMount] = useState(
    () => process.env.NODE_ENV === "production",
  );

  useEffect(() => {
    if (isMount) {
      return;
    }

    const setInit = async () => {
      await initMSW();
      setIsMount(true);
    };

    setInit();
  }, [isMount]);

  if (!isMount) {
    return null;
  }

  return <>{children}</>;
}

export default WrapMSW;
