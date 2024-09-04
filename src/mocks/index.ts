async function initMSW() {
  // server
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen();
    return;
  }

  // browser
  const { browser } = await import("./browser");
  browser.start();
}

export { initMSW };
