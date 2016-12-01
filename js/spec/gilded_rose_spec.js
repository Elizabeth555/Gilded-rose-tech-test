describe("Gilded Rose", function() {

  it("should foo", function() {
    items = [ new Item("foo", 30, 30) ];
    update_quality();
    expect(items[0].name).toEqual("foo");
    expect(items[0].sell_in).toEqual(29)
    expect(items[0].quality).toEqual(29)
  });

  it("should return ", function (){
    items = [new Item("Aged Brie", 30, 30)]
    update_quality();
    expect(items[0].name).toEqual("Aged Brie");
    expect(items[0].sell_in).toEqual(29)
    expect(items[0].quality).toEqual(31)
  });



});
