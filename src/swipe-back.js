import { isHorizontalSwipe, isForward } from "./gestures";

(function() {
  // todo: use rxjs debounce
  var blockSwipeTemporarily = false;

  document.addEventListener("mousewheel", function(e) {
    if (!blockSwipeTemporarily && isHorizontalSwipe(e.deltaX, e.deltaY)) {
      if (isForward(e.deltaX)) {
        history.forward();
      } else {
        history.back();
      }

      blockSwipeTemporarily = true;
      setTimeout(function() {
        blockSwipeTemporarily = false;
      }, 1000);
    }
  });

  var closeTabAfterFirstClick = false;

  document.addEventListener("contextmenu", function(e) {
    if (closeTabAfterFirstClick) {
      closeTabAfterFirstClick = false;
      var event = document.createEvent("Event");
      event.initEvent("hello");
      document.dispatchEvent(event);
    } else {
      closeTabAfterFirstClick = true;
      setTimeout(function() {
        closeTabAfterFirstClick = false;
      }, 1000);
    }
  });

  document.addEventListener("hello", function(data) {
    chrome.runtime.sendMessage("test");
  });
})();
