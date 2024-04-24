function adicionarVenda() {
  var produtoInput = document.getElementById('produto');
  var quantidadeInput = document.getElementById('quantidade');
  var precoInput = document.getElementById('preco');

  var produto = produtoInput.value;
  var quantidade = parseInt(quantidadeInput.value);
  var preco = parseFloat(precoInput.value);

  if (produto === '' || quantidade <= 0 || isNaN(quantidade) || preco <= 0 || isNaN(preco)) {
    alert('Preencha os campos corretamente.');
    return;
  }

  var total = quantidade * preco;

  var tabelaVendas = document.getElementById('tabelaVendas');

  var newRow = tabelaVendas.insertRow();
  var produtoCell = newRow.insertCell();
  var quantidadeCell = newRow.insertCell();
  var precoCell = newRow.insertCell();
  var totalCell = newRow.insertCell();

  produtoCell.textContent = produto;
  quantidadeCell.textContent = quantidade;
  precoCell.textContent = 'R$ ' + preco.toFixed(2);
  totalCell.textContent = 'R$ ' + total.toFixed(2);

  produtoInput.value = '';
  quantidadeInput.value = '';
  precoInput.value = '';

  calcularTotalVendas();
}

function calcularTotalVendas() {
  var tabelaVendas = document.getElementById('tabelaVendas');
  var rows = tabelaVendas.getElementsByTagName('tr');

  var totalVendas = 0;

  for (var i = 1; i < rows.length; i++) {
    var totalCell = rows[i].getElementsByTagName('td')[3];
    var total = parseFloat(totalCell.textContent.substring(3));
    totalVendas += total;
  }

  var totalVendasElement = document.getElementById('totalVendas');
  totalVendasElement.textContent = 'Total de Vendas: R$ ' + totalVendas.toFixed(2);
}

function finalizarVenda() {
  var tabelaVendas = document.getElementById('tabelaVendas');
  var totalVendasElement = document.getElementById('totalVendas');

  if (tabelaVendas.rows.length <= 1) {
    alert('Nenhuma venda para finalizar.');
    return;
  }

  var confirmacao = confirm('Deseja realmente finalizar a venda?');
  if (confirmacao) {
    // Calcular o total de vendas e criar uma tabela de itens
    var totalVendas = 0;
    var tabelaItens = '<table><tr><th>Produto</th><th>Quantidade</th><th>Preço</th></tr>';
    for (var i = 1; i < tabelaVendas.rows.length; i++) {
      var produto = tabelaVendas.rows[i].getElementsByTagName('td')[0].textContent;
      var quantidade = tabelaVendas.rows[i].getElementsByTagName('td')[1].textContent;
      var preco = tabelaVendas.rows[i].getElementsByTagName('td')[2].textContent;
      var total = parseFloat(tabelaVendas.rows[i].getElementsByTagName('td')[3].textContent.substring(3));
      totalVendas += total;
      tabelaItens += '<tr><td>' + produto + '</td><td>' + quantidade + '</td><td>' + preco + '</td></tr>';
    }
    tabelaItens += '</table>';

    // Atualizar os elementos da nota fiscal com os valores corretos
    var produtoNotaElement = document.getElementById('produtoNota');
    var quantidadeNotaElement = document.getElementById('quantidadeNota');
    var precoNotaElement = document.getElementById('precoNota');
    var totalNotaElement = document.getElementById('totalNota');

    produtoNotaElement.innerHTML = 'Itens:<br>' + tabelaItens;
    quantidadeNotaElement.textContent = '';
    precoNotaElement.textContent = '';
    totalNotaElement.textContent = 'Total: R$ ' + totalVendas.toFixed(2);

    // Limpar a tabela de vendas e o total de vendas
    tabelaVendas.innerHTML = '<tr><th>Produto</th><th>Quantidade</th><th>Preço</th><th>Total</th></tr>';
    totalVendasElement.textContent = 'Total de Vendas: R$ 0.00';
    alert('Venda finalizada com sucesso!');

    // Exibir a nota fiscal e o botão de imprimir
    document.getElementById('notaFiscal').style.display = 'block';
    document.getElementById('imprimirButton').style.display = 'block';
  }
}

function imprimirNotaFiscal() {
  window.print();
}
