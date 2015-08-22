describe('advanced set', function() {
  var advancedSet;

  beforeEach(function() {
    advancedSet = AdvancedSet();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(advancedSet.add).to.be.a("function");
    expect(advancedSet.contains).to.be.a("function");
    expect(advancedSet.remove).to.be.a("function");
  });

  it('should add string values to a set', function(){
    advancedSet.add("Susan Sarandon");
    expect(advancedSet.contains('Susan Sarandon')).to.equal(true);
  });

  it('should add number values to a set', function() {
    advancedSet.add(5);
    expect(advancedSet.contains(5)).to.equal(true);
  });

  it('should add boolean values to a set', function() {
    advancedSet.add(true);
    expect(advancedSet.contains(true)).to.equal(true);
  });

  it('should add objects to a set', function() {
    advancedSet.add({one: 1});
    expect(advancedSet.contains({one: 1})).to.equal(true);
  });

  it('should add arrays to a set', function() {
    advancedSet.add([1,2,3]);
    expect(advancedSet.contains([1,2,3])).to.equal(true);
  });  

  it('should remove values from a set', function(){
    advancedSet.add("Mel Gibson");
    advancedSet.remove("Mel Gibson");
    expect(advancedSet.contains("Mel Gibson")).to.equal(false);
  });

});