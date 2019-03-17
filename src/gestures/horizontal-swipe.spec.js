import { TestScheduler } from 'rxjs/testing';
import swipe from './horizontal-swipe'

global.window = {}

const scheduler = new TestScheduler ((actual, expected) => {
    expect(actual).toEqual(expected);
  });
   
  xit('generate the stream correctly', () => {
    scheduler.run(helpers => {
      const { cold, expectObservable, expectSubscriptions } = helpers;
      const swipeSub = swipe(scheduler);

      const expected = '-a--b--c---|';
   
      expectObservable(swipeSub).toBe(expected);
    });
  });