import { interval } from 'rxjs';
import { publish, tap } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/multicasting/publish

// EXMPL - 1 - begin
//emit value every 1 second
// Example 1: Connect observable after subscribers
const srcInterval = interval(1000); //do nothing until connect() is called

const exmpl = publish()(
  srcInterval.pipe(
    //side effects will be executed once
    tap((_) => console.log('Do Something!'))
  )
);

const subscribe = exmpl.subscribe((v) => console.log(`Sbscrber 1: ${v}`));
const subscribeTwo = exmpl.subscribe((v) => console.log(`Sbscrber 2: ${v}`));

// call connect after 5 seconds, causing source to begin emitting items
setTimeout(() => {
  example.connect();
}, 5000);
// EXMPL - 1 - end
