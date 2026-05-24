import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });

    const loadBotpress = async () => {
      try {
        await loadScript("https://cdn.botpress.cloud/webchat/v2.2/inject.js");
        await loadScript(
          "https://files.bpcontent.cloud/2025/02/04/05/20250204051844-3KP5LEAH.js"
        );

        if (window.botpressWebChat) {
          window.botpressWebChat.init({
            botId: "543464c2-fa66-4847-aae5-b81ba5135491",
            host: "https://cdn.botpress.cloud",
            composerPlaceholder: "Type your message...",
            useSessionStorage: true,
          });
        }
      } catch {
        // If Botpress fails to load (network, blocker), don't break the page.
      }
    };

    // Wait until the page is idle so the chatbot scripts don't compete with
    // the initial render. Falls back to a 1.5s timeout on browsers without
    // requestIdleCallback (older Safari).
    const schedule =
      typeof window.requestIdleCallback === "function"
        ? (cb) => window.requestIdleCallback(cb, { timeout: 3000 })
        : (cb) => setTimeout(cb, 1500);
    const cancel =
      typeof window.cancelIdleCallback === "function"
        ? (id) => window.cancelIdleCallback(id)
        : (id) => clearTimeout(id);

    const handle = schedule(loadBotpress);

    return () => {
      cancel(handle);
      document
        .querySelectorAll(
          'script[src*="botpress.cloud"], script[src*="bpcontent.cloud"]'
        )
        .forEach((s) => s.remove());
    };
  }, []);

  return null;
};

export default Chatbot;
