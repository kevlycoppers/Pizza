
//Business Logic//
function Pizza(name, size){
  this.name = name;
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.getPriceForSize = function() {
  if (this.size === "small") {
    this.price += 8;
  } else if (this.size === "medium") {
    this.price += 9.75;
  } else {
    this.price += 11.50;
  }
}

Pizza.prototype.toppingPrice = function(newPizza) {
  newPizza.toppings.forEach(function(topping) {
    newPizza.price += 2;
  });
}

Pizza.prototype.listToppings = function() {
  var array = this.toppings;
  if (array.length === 1){
    return array[0];
  } else if (array.length === 2) {
    return array[0] + " and " + array[1];
  } else {
    return array.slice(0, -1).join(", ") + " and " + array[array.length - 1];
  }
}

// USER INTERFACE LOGIC //


$(function() {
  $("#add-topping").click(function() {
    $(".all-toppings").append('<div class="form-group">' +
                                '<div class="new-topping">' +
                                  '<label for="new-toppings">What other <span class="red-text">toppings</span> would you like?</label>' +
                                    '<select class="form-control" id="new-toppings">' +
                                      '<option>Pepperoni</option>' +
                                      '<option>Mushrooms</option>' +
                                      '<option>Onions</option>' +
                                      '<option>Sausage</option>' +
                                      '<option>Bacon</option>' +
                                      '<option>Extra Cheese</option>' +
                                    '</select>' +
                                  '</div>' +
                                '</div>');
  });

  $("#pizza-options").submit(function(event) {
    event.preventDefault();

    var nameInput = $("#name").val();
    var sizeInput = $("#size").val().toLowerCase();
    var newPizza = new Pizza(nameInput, sizeInput);

    $(".new-topping").each(function() {
      var toppingInput = $(this).find("#new-toppings").val().toLowerCase();
      newPizza.toppings.push(toppingInput);
    });

    newPizza.getPriceForSize();
    newPizza.toppingPrice(newPizza);

    $("#pizza-options").hide();
    $(".total-price-text").append("<h3>Hi <span class='red-text'>" + newPizza.name + "</span>, your <span class='red-text'>" + newPizza.size + "</span>-sized pizza with " + newPizza.listToppings() + " will come to a total of <span class='red-text'>$" + newPizza.price + "</span>.</h3>");
    $(".total-price").fadeIn();
  });
});
