class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}
export const CounterInstance = new Counter();
/*
that's another way we could export the same class we declared above
export const CounterInstance = new Counter({
  count: 0,
  increment() {
    this.count++;
  },
});
*/
