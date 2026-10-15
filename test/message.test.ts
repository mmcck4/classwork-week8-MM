// Only edit this file between the DO NOT MODIFY comments
// You must add additional tests to prove that the
// correct versions are correct, and the incorrect versions are incorrect.
import { MessageConstructor, Message, MessageIncorrect } from "../src/message";

function yourMessageTests(Message: MessageConstructor) {
    /********************* DO NOT MODIFY BEFORE THIS LINE *************/
    // You will need to add tests here to prove that the
    // correct versions are correct, and the incorrect versions are incorrect.
    //
    //
    // Delete this comment, and add your tests here.
    //
    /********************* DO NOT MODIFY AFTER THIS LINE *************/
}

describe("Messages", () => {
    test.each(Message)("Proving %p is correct", yourMessageTests);
    // Do not remove this line, even if the system tells you to do so.
    test.failing.each(MessageIncorrect)( // <-- Do not change this line!
        "Proving %p is incorrect",
        yourMessageTests,
    );
});
