//Back End //
function Pizza(size, toppindone, toppingtwo){
  this.size = size;
  this.topone = toppingone;
  this.toptwo = toppingtwo;
  this.price = 0;
}
Pizza.prototype.priceForSize = function() {
  if (this.size === "Small") {
    this.price += 10;
  } else if (this.size === "Medium") {
    this.price += 12;
  } else if (this.size === "Large"){
    thi.price += 15;
  } else {
    this.price += 20;
  }
}

// Front End //

$("#pizza-options").submit(function(event){
  event.preventDefault();

  var toppingOne = $(".topping-one").val();
  var toppingTwo = $(".topping-two").val();
  var sizeInput = $("#size").val();
  var newPizza = new Pizza(toppingOne, toppingTwo, sizeInput);
})
