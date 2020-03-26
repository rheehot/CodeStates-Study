var Grub = function() {
  this.age = 0;
  this.color = "pink";
  this.food = "jelly";
};
Grub.prototype.eat = function() {
  return "Mmmmmmmmm jelly";
};

// age = 0 ;
// color = 'pink'
// food = 'jelly'
// eat -> method -> 'mmmmmm jelly;

module.exports = Grub;
