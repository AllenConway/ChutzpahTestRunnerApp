/// <reference path="../../../scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../src/typescript/classSimple.ts" />

describe("Simple Calculations", () => {

    it("should return true", () => {
        var simple: Simple = new Simple();
        expect(simple.easyTest()).toBe(5);
    });

});