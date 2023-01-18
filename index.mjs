import "./script1.mjs";
import "./script2.mjs";
import { CounterInstance } from "./counter.mjs";
CounterInstance.increment();
console.log("count:", CounterInstance.count);
