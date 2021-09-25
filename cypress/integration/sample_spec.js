describe("My First Passing Test", () => {
    it("Does not do much!", () => {
        expect(true).to.equal(true);
    });
});

describe("My First Falling Test", () => {
    it("Does not do much!", () => {
        expec(false).to.equal(true);
    });
});
