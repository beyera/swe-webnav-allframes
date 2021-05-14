# browser.tabs.sendMessage() with frameId option

The purpose of this project is to highlight the difference between [`browser.tabs.sendMessage()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) in Safari and other web browsers. When a `frameId` is specified in the optional options object, the message should only be sent to the frame identified. This works as documented in Chrome and Firefox. However, if Safari, it appears that this option is ignored and the message is sent to all frames and uses the return value of the first frame to respond.

This project is based on the example [Safari Web Extension Xcode project](https://developer.apple.com/documentation/safariservices/safari_web_extensions/creating_a_safari_web_extension). It also uses [WebExtension `browser` API Polyfill](https://github.com/mozilla/webextension-polyfill) to work in Chrome.

## Example of background logs loading this extension on https://www.patreon.com/login

### Safari

Even though a `frameId` is specified (0 and 110), both messages receive a response from frame 0. This is a race condition, so every message has the possibility of returning from either frame.

<p align="center">
   <img src="images/safari.jpg">
</p>

### Chrome

<p align="center">
   <img src="images/chrome.jpg">
</p>

### Firefox

<p align="center">
   <img src="images/firefox.jpg">
</p>
