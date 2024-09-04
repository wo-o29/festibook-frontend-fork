async function initMSW() {
  // server
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen({ onUnhandledRequest: "bypass" });
    return;
  }

  // browser
  const { browser } = await import("./browser");
  await browser.start({ onUnhandledRequest: "bypass" });
}

export { initMSW };
