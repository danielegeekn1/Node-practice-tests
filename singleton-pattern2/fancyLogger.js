class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return FancyLogger.instance;
  }
  log(msg) {
    this.logs.push(msg);
    console.log(`this is a fancy ${msg}`);
  }
  printLogCount() {
    console.log(`${this.logs.length} logs..`);
  }
}
const logger = new FancyLogger();
Object.freeze(logger);
export default logger;
