/// <reference path="../../../scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../src/typescript/classSimple.ts" />
describe("Simple Calculations", function () {
    it("should return true", function () {
        var simple = new Simple();
        expect(simple.easyTest()).toBe(5);
    });
});
//# sourceMappingURL=simpleSpec.js.map