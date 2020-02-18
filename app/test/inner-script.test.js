import {expect} from "chai";
import { someText } from "../src/js/inner-script";

describe("someText", function() {
 it("Say Hi!", function() {
   let text = 'Hi';
   expect(someText(text)).to.equal('Say Hi!');
 });
});