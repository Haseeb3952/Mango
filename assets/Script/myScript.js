/*----- cart-plus-minus-button1 -----*/
$(".cart-amount1").append(
  '<span class="dec qtybtn">-</span><span class="inc qtybtn">+</span>'
);
$(".qtybtn").on("click", function () {
  var $button = $(this);
  var oldValue = $button.parent().find("input").val();
  if ($button.text() == "+") {
    var newVal = parseFloat(oldValue) + 1;
  } else {
    // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }
  $button.parent().find("input").val(newVal);
});
