import { isHorizontalSwipe, isForward } from "../gestures";
import { asyncScheduler, fromEvent, timer } from "rxjs";
import { observeOn, throttle, filter } from "rxjs/operators";

export default function swipe(scheduler = asyncScheduler){
  return fromEvent(window, "mousewheel")
    .pipe(
      observeOn(scheduler),
      throttle(() => timer(1000)),
      filter(e => isHorizontalSwipe(e.deltaX, e.deltaY))
    );
  }
