browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  if (request.name === "get-document-location") {
    sendResponse({
      href: window.location.href,
      origin: window.location.origin,
    });
  }
});
