class Counter {
  constructor() {
    this.count = 0;
    this.logger = null;
  }
  setLogger(logger) {
    this.logger = logger;
  }
  increment() {
    this.count++;
  }
  logValue() {
    if (!this.logger) {
      throw new Error("no logger instance");
    }
    this.logger.output(this.count);
  }
}
class Logger {
  output(msg) {
    console.log(msg);
  }
}
const counter = new Counter(new Logger());

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.setLogger(new Logger());
counter.logValue();
