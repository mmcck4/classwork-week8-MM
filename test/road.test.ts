// Only edit this file between the DO NOT MODIFY comments
// You must add additional tests to prove that the
// correct versions are correct, and the incorrect versions are incorrect.
import { RoadFunction, diagram, diagramIncorrect, Road } from "../src/road";

function yourDiagramTests(diagram: RoadFunction) {
    /********************* DO NOT MODIFY BEFORE THIS LINE *************/
    // You will need to add tests here to prove that the
    // correct versions are correct, and the incorrect versions are incorrect.
    //
    //
    // Delete this comment, and add your tests here.
    //
    /********************* DO NOT MODIFY AFTER THIS LINE *************/
}

describe("Roads", () => {
    test.each(diagram)("Proving %p is correct", yourDiagramTests);
    // Do not remove this line, even if the system tells you to do so.
    test.failing.each(diagramIncorrect)( // <-- Do not change this line!
        "Proving %p is incorrect",
        yourDiagramTests,
    );
});
