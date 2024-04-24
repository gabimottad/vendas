window.addEventListener('load', function() {
    const valorDinheiroInput = document.getElementById('valor-dinheiro');
    const valorCartaoInput = document.getElementById('valor-cartao');
    const somaInput = document.getElementById('soma');
  
    valorDinheiroInput.addEventListener('input', updateSoma);
    valorCartaoInput.addEventListener('input', updateSoma);
  
    function updateSoma() {
      const valorDinheiro = parseFloat(valorDinheiroInput.value) || 0;
      const valorCartao = parseFloat(valorCartaoInput.value) || 0;
      const soma = valorDinheiro + valorCartao;
      somaInput.value = soma.toFixed(2);
    }
  });
  