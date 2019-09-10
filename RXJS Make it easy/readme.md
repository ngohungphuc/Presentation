# Common operators
* skip 
    > Skip allows you to ignore the first x emissions from the source. Generally skip is used when you have an observable that always emits certain values on subscription that you wish to ignore 

    ```ts
    import { interval } from 'rxjs';
    import { skip } from 'rxjs/operators';

    //emit every 1s
    const source = interval(1000);
    //skip the first 5 emitted values
    const example = source.pipe(skip(5));
    //output: 5...6...7...8........
    const subscribe = example.subscribe(val => console.log(val));
    ```

* skipUntil
    > Skip emitted values from source until provided observable emits.
    ```ts
    import { interval, timer } from 'rxjs';
    import { skipUntil } from 'rxjs/operators';

    //emit every 1s
    const source = interval(1000);
    //skip emitted values from source until inner observable emits (6s)
    const example = source.pipe(skipUntil(timer(6000)));
    //output: 5...6...7...8........
    const subscribe = example.subscribe(val => console.log(val));
    ```

* skipWhile
  > Skip emitted values from source until provided expression is false.
  ```ts
    import { interval } from 'rxjs';
    import { skipWhile } from 'rxjs/operators';

    //emit every 1s
    const source = interval(1000);
    //skip emitted values from source while value is less than 5
    const example = source.pipe(skipWhile(val => val < 5));
    //output: 5...6...7...8........
    const subscribe = example.subscribe(val => console.log(val));
  ```

* take
  > Emit provided number of values before completing.
  ```ts
    import { of } from 'rxjs';
    import { take } from 'rxjs/operators';

    //emit 1,2,3,4,5
    const source = of(1, 2, 3, 4, 5);
    //take the first emitted value then complete
    const example = source.pipe(take(1));
    //output: 1
    const subscribe = example.subscribe(val => console.log(val));
  ```
* takeWhile
  >Emit values until provided expression is false
  ```ts
    import { of } from 'rxjs';
    import { takeWhile } from 'rxjs/operators';

    //emit 1,2,3,4,5
    const source$ = of(1, 2, 3, 4, 5);

    //allow values until value from source is greater than 4, then complete
    source$
    .pipe(takeWhile(val => val <= 4));
    // log: 1,2,3,4
    .subscribe(val => console.log(val));
  ```
* takeUntil
  > Emit values until provided observable emits.
  ```ts
    import { interval, timer } from 'rxjs';
    import { takeUntil } from 'rxjs/operators';

    //emit value every 1s
    const source = interval(1000);
    //after 5 seconds, emit value
    const timer$ = timer(5000);
    //when timer emits after 5s, complete source
    const example = source.pipe(takeUntil(timer$));
    //output: 0,1,2,3
    const subscribe = example.subscribe(val => console.log(val));
  ```
* tap
  > Transparently perform actions or side-effects, such as logging.
  ```ts
  import { of } from 'rxjs';
    import { tap, map } from 'rxjs/operators';

    const source = of(1, 2, 3, 4, 5);
    // transparently log values from source with 'tap'
    const example = source.pipe(
    tap(val => console.log(`BEFORE MAP: ${val}`)),
    map(val => val + 10),
    tap(val => console.log(`AFTER MAP: ${val}`))
    );

    //'tap' does not transform values
    //output: 11...12...13...14...15
    const subscribe = example.subscribe(val => console.log(val));
  ```
* reduce
  ```ts
    import { of } from 'rxjs';
    import { reduce } from 'rxjs/operators';

    const source = of(1, 2, 3, 4);
    const example = source.pipe(reduce((acc, val) => acc + val));
    //output: Sum: 10'
    const subscribe = example.subscribe(val => console.log('Sum:', val));
  ```
* pipe
* of
  > Emit variable amount of values in a sequence and then emits a complete notification.
  ```ts
    import { of } from 'rxjs';
    //emits any number of provided values in sequence
    const source = of(1, 2, 3, 4, 5);
    //output: 1,2,3,4,5
    const subscribe = source.subscribe(val => console.log(val));
  ```
* debounce
  > Discard emitted values that take less than the specified time, based on selector function, between output.
  ```ts
    // RxJS v6+
  import { of, timer } from 'rxjs';
  import { debounce } from 'rxjs/operators';

  //emit four strings
  const example = of('WAIT', 'ONE', 'SECOND', 'Last will display');
  /*
      Only emit values after a second has passed between the last emission,
      throw away all other values
  */
  const debouncedExample = example.pipe(debounce(() => timer(1000)));
  /*
      In this example, all values but the last will be omitted
      output: 'Last will display'
  */
  const subscribe = debouncedExample.subscribe(val => console.log(val));

  ```
* debounceTime
  > Discard emitted values that take less than the specified time between output
  ```ts
  // RxJS v6+
  import { fromEvent } from 'rxjs';
  import { debounceTime, map } from 'rxjs/operators';

  // elem ref
  const searchBox = document.getElementById('search');

  // streams
  const keyup$ = fromEvent(searchBox, 'keyup');

  // wait .5s between keyups to emit current value
  keyup$
    .pipe(
      map((i: any) => i.currentTarget.value),
      debounceTime(500)
    )
    .subscribe(console.log);

  ```
* withLatestFrom
  > Provide the last value from another observable.
* map
* switchMap
* exhaustMap
* mergeMap
* concatMap
* mapTo
* filter
* forkJoin
  > When all observables complete, emit the last emitted value from each.
  ```ts
  import { ajax } from 'rxjs/ajax';
  import { forkJoin } from 'rxjs';

    /*
    when all observables complete, provide the last
    emitted value from each as dictionary
    */
    forkJoin(
    // as of RxJS 6.5+ we can use a dictionary of sources
    {
        google: ajax.getJSON('https://api.github.com/users/google'),
        microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
        users: ajax.getJSON('https://api.github.com/users')
    }
    )
    // { google: object, microsoft: object, users: array }
    .subscribe(console.log);
  ```
* fromEvent
  > Turn event into observable sequence.
  ```ts
    import { fromEvent } from 'rxjs';
    import { map } from 'rxjs/operators';

    //create observable that emits click events
    const source = fromEvent(document, 'click');
    //map to string with given event timestamp
    const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
    //output (example): 'Event time: 7276.390000000001'
    const subscribe = example.subscribe(val => console.log(val));
  ```
* distinctUntilChanged
  > Only emit when the current value is different than the last
  ```ts
    import { from } from 'rxjs';
    import { distinctUntilChanged } from 'rxjs/operators';

    // only output distinct values, based on the last emitted value
    const source$ = from([1, 1, 2, 2, 3, 3]);

    source$
    .pipe(distinctUntilChanged())
    // output: 1,2,3
    .subscribe(console.log);
  ```
* throttle
  > Emit value on the leading edge of an interval, but suppress new values until durationSelector has completed.
  ```ts
  import { interval } from 'rxjs';
  import { throttle } from 'rxjs/operators';

  //emit value every 1 second
  const source = interval(1000);
  //throttle for 2 seconds, emit latest value
  const example = source.pipe(throttle(val => interval(2000)));
  //output: 0...3...6...9
  const subscribe = example.subscribe(val => console.log(val));
  ```
* throttleTime
  ```ts
  import { interval } from 'rxjs';
  import { throttleTime } from 'rxjs/operators';

  //emit value every 1 second
  const source = interval(1000);
  /*
    throttle for five seconds
    last value emitted before throttle ends will be emitted from source
  */
  const example = source.pipe(throttleTime(5000));
  //output: 0...6...12
  const subscribe = example.subscribe(val => console.log(val));
  ```
* delay
  > Delay emitted values by given time.
  ```ts
    import { fromEvent, of } from 'rxjs';
    import { mergeMap, delay, takeUntil } from 'rxjs/operators';

    const mousedown$ = fromEvent(document, 'mousedown');
    const mouseup$ = fromEvent(document, 'mouseup');

    mousedown$
    .pipe(
        mergeMap(event =>
        of(event).pipe(
            delay(700),
            takeUntil(mouseup$)
        )
        )
    )
    .subscribe(event => console.log('Long Press!', event));
  ```

# Advance operators
* startWith
* pluck
* pairwise
* retryWhen
* zip
* groupBy
* subscribeOn
* timestamp
* auditTime
* race
* ignoreElements
* min
* max
* endWith

Subject demo :
* https://stackblitz.com/edit/rxjs-nzyehv?devtoolsheight=60
* https://stackblitz.com/edit/rxjs-subjects-comparison?file=index.ts&devtoolsheight=100
