import { interval } from 'rxjs';
import { publish, tap } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/multicasting/publish

// EXMPL - 1 - begin
//emit value every 1 second
const srcInterval = interval(1000); //do nothing until connect() is called

const example = publish()(
  srcInterval.pipe(
    //side effects will be executed once
    tap((_) => console.log('Do Something!'))
  )
);

// const subscribe = example.subscribe((val) =>
//   console.log(`Sbscrber One: ${val}`)
// );
// const subscribeTwo = example.subscribe((val) =>
//   console.log(`Sbscrber Two: ${val}`)
// );

//call connect after 5 seconds, causing source to begin emitting items
// setTimeout(() => {
//   example.connect();
// }, 5000);
// EXMPL - 1 - end

// EXMPL - 2 - begin
// PUBLISH->INTERVAL->PIPE->TAP
const subscribe = publish()(
  interval(2000).pipe(
    //side effects will be executed once
    tap((_) => console.log('Do Something!'))
  )
).subscribe((val) => console.log(`Sbscrber One: ${val}`));
// const subscribeTwo = example.subscribe((val) =>
//   console.log(`Sbscrber Two: ${val}`)
// );

//call connect after 5 seconds, causing source to begin emitting items
// setTimeout(() => {
//   example.connect();
// }, 5000);
// EXMPL - 1 - end
