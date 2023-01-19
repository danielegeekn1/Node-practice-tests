class Counter {
  constructor() {
    this.count = 0;
    this.logger = new Logger();
  }
  increment() {
    this.count++;
  }
  logValue() {
    this.logger.output(this.count);
  }
}
class Logger {
  output(msg) {
    console.log(msg);
  }
}
const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
