// Only edit this file between the DO NOT MODIFY comments
// You must add additional tests to prove that the
// correct versions are correct, and the incorrect versions are incorrect.
import {
    MessageConstructor,
    Message,
    MessageIncorrect,
    MessageBase,
} from "../src/message";

function yourMessageTests(Message: MessageConstructor) {
    /********************* DO NOT MODIFY BEFORE THIS LINE *************/
    // You will need to add tests here to prove that the
    // correct versions are correct, and the incorrect versions are incorrect.
    //
    //
    const short: MessageBase = new Message("hi");
    expect(short.getSize()).toBe(2);
    expect(short.getSummary()).toBe("hi");
    expect(short.getContent()).toBe("hi");
    expect(short.isEmpty()).toBe(false);

    const long: MessageBase = new Message("this is a long message");
    expect(long.getSize()).toBe(22);
    expect(long.getSummary()).toBe("this is a ");
    expect(long.getContent()).toBe("this is a long message");
    expect(long.isEmpty()).toBe(false);

    const empty: MessageBase = new Message("    ");
    expect(empty.getSize()).toBe(4);
    expect(empty.isEmpty()).toBe(true);

    //
    /********************* DO NOT MODIFY AFTER THIS LINE *************/
}

describe("Messages", () => {
    test.each(Message)("Proving %p is correct", yourMessageTests);
    // Do not remove this line, even if the system tells you to do so.
    test.failing.each(MessageIncorrect)(
        // <-- Do not change this line!
        "Proving %p is incorrect",
        yourMessageTests,
    );
});
