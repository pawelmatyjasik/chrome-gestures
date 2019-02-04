import { fromEvent } from "rxjs";
import { buffer, debounceTime, map, filter } from "rxjs/operators";

(function() {
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
