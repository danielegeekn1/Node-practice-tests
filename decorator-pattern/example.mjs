class Text {
  constructor(text) {
    this.string = text;
  }
  toString() {
    return this.string;
  }
}
import clc from "cli-color";
/*
class BlueText {
  constructor(text) {
    this.text = text;
  }
  toString() {
    return clc.blue(this.text.toString());
  }
}
*/
//method called monkey patching
function BlueText(text) {
  let originalString = text.toString;
  text.toString = function () {
    return clc.blue(originalString.apply(text));
  };
  return text;
}
console.log(new Text("this is some text").toString());
/*console.log(new BlueText(new Text("this text is blue")).toString());
console.log(new Text("this is some text").toString());*/
console.log(BlueText(new Text("this text is bluee")).toString());
