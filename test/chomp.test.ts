// Only edit this file between the DO NOT MODIFY comments
// You must add additional tests to prove that the
// correct versions are correct, and the incorrect versions are incorrect.
import { ChompFunction, chomp, chompIncorrect } from "../src/chomp";

function yourChompTests(chomp: ChompFunction) {
    /********************* DO NOT MODIFY BEFORE THIS LINE *************/
    // You will need to add tests here to prove that the
    // correct versions are correct, and the incorrect versions are incorrect.
    //
    //
    expect(chomp("computer science", "computer")).toBe("science");
    expect(chomp("computer science", "science")).toBe("computer science");
    expect(chomp("computer science", " ")).toBe("computer science");
    expect(chomp("", "")).toBe("");
    //
    /********************* DO NOT MODIFY AFTER THIS LINE *************/
}

describe("Chomp", () => {
    test.each(chomp)("Proving %p is correct", yourChompTests);
    // Do not remove this line, even if the system tells you to do so.
    test.failing.each(chompIncorrect)(
        // <-- Do not change this line!
        "Proving %p is incorrect",
        yourChompTests,
    );
});
