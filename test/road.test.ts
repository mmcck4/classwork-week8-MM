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
    const road1: Road = new Road("1", true);
    const road2: Road = new Road("2", true);
    const road3: Road = new Road("3", true);
    const roadfalse: Road = new Road("1", false);
    expect(diagram([road1])).toBe("1");
    expect(diagram([roadfalse])).toBe("empty");
    expect(diagram([road1, road2, road3])).toBe("1->2->3");
    expect(diagram([roadfalse, road2, road3])).toBe("2->3");
    expect(diagram([])).toBe("empty");

    //
    /********************* DO NOT MODIFY AFTER THIS LINE *************/
}

describe("Roads", () => {
    test.each(diagram)("Proving %p is correct", yourDiagramTests);
    // Do not remove this line, even if the system tells you to do so.
    test.failing.each(diagramIncorrect)(
        // <-- Do not change this line!
        "Proving %p is incorrect",
        yourDiagramTests,
    );
});
