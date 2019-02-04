import { isHorizontalSwipe, isForward } from "./gestures";
import { fromEvent, timer } from "rxjs";
import {
  buffer,
  debounceTime,
  map,
  throttle,
  filter
} from "rxjs/operators";

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

  const rightClick = fromEvent(document, "contextmenu");

  rightClick
    .pipe(
      buffer(rightClick.pipe(debounceTime(250))),
      map(list => list.length),
      filter(l => l === 2)
    )
    .subscribe(() => {
      chrome.runtime.sendMessage("test");
    });
})();
