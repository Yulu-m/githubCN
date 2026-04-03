chrome.runtime.onInstalled.addListener(function () {
  // chrome.tabs.create({
  //   url: "https://github.com/JQiue/",
  // });
});

const TRANSLATE_ENDPOINTS = [
  "https://libretranslate.de/translate",
  "https://translate.astian.org/translate",
];

async function requestTranslate(url, text) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      q: text,
      source: "en",
      target: "zh",
      format: "text",
    }),
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const data = await response.json();
  const translatedText = data?.translatedText;
  if (!translatedText || typeof translatedText !== "string") {
    throw new Error(`Invalid translatedText: ${JSON.stringify(data)}`);
  }
  return translatedText;
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.type !== "TRANSLATE_TEXT") return false;
  const text = (message.text || "").trim();
  if (!text) {
    sendResponse({ ok: false, error: "empty text" });
    return false;
  }
  (async () => {
    for (const endpoint of TRANSLATE_ENDPOINTS) {
      try {
        const translatedText = await requestTranslate(endpoint, text);
        sendResponse({ ok: true, translatedText, endpoint });
        return;
      } catch (error) {
        console.error("[GitHub CN][background] translate endpoint failed:", endpoint, error);
      }
    }
    sendResponse({ ok: false, error: "all translate endpoints failed" });
  })();
  return true;
});
