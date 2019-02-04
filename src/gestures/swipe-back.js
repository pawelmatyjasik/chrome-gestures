import { isHorizontalSwipe, isForward } from "../gestures";
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
})();
