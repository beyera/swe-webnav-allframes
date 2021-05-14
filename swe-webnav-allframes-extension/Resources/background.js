browser.browserAction.onClicked.addListener(printAllFramesToConsole);

async function printAllFramesToConsole(tab) {
  console.group("browser.webNavigation.getAllFrames");
  try {
    const response = await browser.webNavigation.getAllFrames({
      tabId: tab.id,
    });
    console.table(response);
  } catch {
    console.log(`Failed to get frames for tab (${tab.id})`);
  }
  console.groupEnd("browser.webNavigation.getAllFrames");
}
