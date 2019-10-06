

window.onload = function () {




  const quantity = Array.from(document.getElementsByClassName("quantity"));
  const glaze = Array.from(document.getElementsByClassName("glaze"));
  const bag = Array.from(document.getElementsByClassName("bag"));

  var hasQuantity = "0";
  quantity.forEach(function(element, index, array) {
    element.addEventListener("click", function(event) {
      quantity.forEach(function(element, index, array) {
        element.style.backgroundColor = "#446080";
        hasQuantity = "0";
        console.log(hasQuantity);
      })
      event.target.style.backgroundColor = "black";
      hasQuantity = "1";
      console.log(hasQuantity);
    })
  });



  var hasGlaze = "0";
  glaze.forEach(function(element, index, array) {
    element.addEventListener("click", function(event) {
      glaze.forEach(function(element, index, array) {
        element.style.backgroundColor = "#446080";
        hasGlaze = "0";
        console.log(hasGlaze)
      })
      event.target.style.backgroundColor = "black";
      hasGlaze = "1";
      console.log(hasGlaze);
    })
  });

  bag.forEach(function(element, index, array) {
    element.addEventListener("click", function(event) {
      event.target.style.backgroundColor = "black";
      if (hasGlaze == "0") {
        alert("Please select a GLAZE");
      } else if (hasQuantity =="0") {
        alert("Please select a QUANTITY");
      } else {
        alert("Added to bag!");
      }
    })
  });







  const qty1 = document.getElementById("1");
  const qty3 = document.getElementById("3");
  const qty6 = document.getElementById("6");
  const qty12 = document.getElementById("12");
  const total = document.getElementById("total");

  qty1.addEventListener("click", function() {
    total.innerHTML = "$1.00";
  });
  qty3.addEventListener("click", function() {
    total.innerHTML = "$3.00";
  });
  qty6.addEventListener("click", function() {
    total.innerHTML = "$6.00";
  });
  qty12.addEventListener("click", function() {
    total.innerHTML = "$12.00";
  });


  document.getElementById("shopping-bag").addEventListener("click", function() {
    alert("hello world!")
  })










};

console.log("hi there");
