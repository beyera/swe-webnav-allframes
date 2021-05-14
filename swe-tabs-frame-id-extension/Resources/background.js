browser.webNavigation.onCompleted.addListener(onWebNavigationCompleted);

async function onWebNavigationCompleted(frameDetails) {
  // Only try to communicate with https frames, to match where we are injecting
  // our content script.
  if (!frameDetails.url.startsWith("https://")) return;
  const { tabId, frameId } = frameDetails;

  try {
    const response = await browser.tabs.sendMessage(
      tabId,
      { name: "get-document-location" },
      { frameId }
    );

    console.table({
      "Sent message to tab": tabId,
      "Sent message to frame": frameId,
      "Received response from frame location": response.href
        ? response.href
        : "",
    });
  } catch {
    console.log(
      `Failed to send message to frame (${frameId}) on tab (${tabId}).`
    );
  }
}
