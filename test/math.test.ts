// Only edit this file between the DO NOT MODIFY comments
// You must add additional tests to prove that the
// correct versions are correct, and the incorrect versions are incorrect.
import { addCorrect, addIncorrect, AddFunction } from "../src/math";

function yourAddTests(add: AddFunction) {
    /********************* DO NOT MODIFY BEFORE THIS LINE *************/
    // You will need to add tests here to prove that the
    // correct versions are correct, and the incorrect versions are incorrect.
    //
    //
    expect(add(0, 0)).toBe(0);
    //
    /********************* DO NOT MODIFY AFTER THIS LINE *************/
}

describe("Add", () => {
    test.each(addCorrect)("Proving %p is correct", yourAddTests);
    // Do not remove this line, even if the system tells you to do so.
    test.failing.each(addIncorrect)(
        "Proving %p is incorrect",  // <-- Do not change this line!
        yourAddTests
    );
});
