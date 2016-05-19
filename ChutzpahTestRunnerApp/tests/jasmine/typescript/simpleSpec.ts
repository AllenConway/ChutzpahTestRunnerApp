/// <reference path="../../../scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../src/typescript/classSimple.ts" />

describe("Simple Calculations", () => {

    it("should return true", () => {
        var simpl = new Simple();
        expect(simpl.easyTest()).toBe(5);
    });

});