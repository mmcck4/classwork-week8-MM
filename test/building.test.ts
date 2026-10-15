// Only edit this file between the DO NOT MODIFY comments
// You must add additional tests to prove that the
// correct versions are correct, and the incorrect versions are incorrect.
import {
    BuildingFunction,
    totalSize,
    totalSizeIncorrect,
    Shack,
    House,
    Apartment,
    Building,
} from "../src/building";

function yourBuildingTests(totalSize: BuildingFunction) {
    /********************* DO NOT MODIFY BEFORE THIS LINE *************/
    // You will need to add tests here to prove that the
    // correct versions are correct, and the incorrect versions are incorrect.
    //
    //
    expect(totalSize([])).toBe(0);
    const building: Building = new Building();
    building.area = 100;
    expect(totalSize([building])).toBe(100);

    const apartment: Apartment = new Apartment(10, 10);
    expect(totalSize([apartment])).toBe(100);

    const house: House = new House(10, 10);
    expect(totalSize([house])).toBe(100);

    const shack: Shack = new Shack(10);
    expect(totalSize([shack])).toBe(10);

    //
    /********************* DO NOT MODIFY AFTER THIS LINE *************/
}

describe("Buildings", () => {
    test.each(totalSize)("Proving %p is correct", yourBuildingTests);
    // Do not remove this line, even if the system tells you to do so.
    test.failing.each(totalSizeIncorrect)(
        // <-- Do not change this line!
        "Proving %p is incorrect",
        yourBuildingTests,
    );
});
