import { isHorizontalSwipe, isForward } from "./gestures";
import { fromEvent, timer } from "rxjs";
import { throttle, filter } from "rxjs/operators";

(function() {
  fromEvent(window, "mousewheel")
    .pipe(
      throttle(() => timer(1000)),
      filter(e => isHorizontalSwipe(e.deltaX, e.deltaY))
    )
    .subscribe(e => {
      if (isForward(e.deltaX)) {
        history.forward();
      } else {
        history.back();
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
