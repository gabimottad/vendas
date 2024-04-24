window.addEventListener('DOMContentLoaded', function() {
  var table = document.getElementById('product-table');
  var addForm = document.getElementById('add-product-form');

  addForm.addEventListener('submit', function(event) {
      event.preventDefault();

      var productName = document.getElementById('product-name').value;
      var productPrice = document.getElementById('product-price').value;
      var productQuantity = document.getElementById('product-quantity').value;

      var newRow = document.createElement('tr');
      newRow.innerHTML = '<td>' + productName + '</td><td>' + productPrice + '</td><td>' + productQuantity + '</td>';

      table.getElementsByTagName('tbody')[0].appendChild(newRow);

      addForm.reset();
  });
});
