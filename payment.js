let creditCard = document.getElementById("credit-card");

$(creditCard).on("keypress change", function () {
  $(this).val(function (index, value) {
    return value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
  });
});
