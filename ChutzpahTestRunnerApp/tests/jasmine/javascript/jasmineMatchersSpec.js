/// <reference path="../src/jasmine.js" />
describe("jasmine built in matchers unit tests", function () {
    var boolTest;
    var person = {
        firstName: "Allen",
        lastName: "Conway"
    };
    beforeEach(function () {
        boolTest = true;
    });
    it("boolTest should be truthy", function () {
        expect(boolTest).toBeTruthy();
    });
    it("boolTest should be true", function () {
        expect(boolTest).toBe(true);
    });
    it("should be null", function () {
        var obj = null;
        expect(obj).toBeNull();
    });
    it("testx should be greater than testz", function () {
        var testx = 5;
        var testz = 1;
        expect(testx).toBeGreaterThan(testz);
    });
    it("should not contain 10 in the array", function () {
        var myArray = [1, 2, 3, 4, 5];
        expect(myArray).not.toContain(10);
    });
    it("should have person matching return data", function () {
        var returnData = {
            firstName: "Allen",
            lastName: "Conway"
        };
        expect(returnData).toEqual(person);
    });
});
//# sourceMappingURL=jasmineMatchersSpec.js.map