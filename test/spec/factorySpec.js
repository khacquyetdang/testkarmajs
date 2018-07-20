describe("factory", function () {

  it("should build the list of 10 element between 1, 100", function () {
    var result = makeRandomList(10);

    expect(result.length).to.equal(10);

    result.forEach(function (element) {
      expect(element).to.be.above(0);
      expect(element).to.be.below(101);
    });
  });

});