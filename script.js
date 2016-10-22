var pesquisaProduto = function(form) {
  //https://api.jquery.com/jquery.post/
  $.post("model.php", { produto_nome: form['produto_name'].value, produto_preco: form['produto_preco'].value} ) //(endereco do php,objeto json que será acessadas pelo php com $_POST[''])
  .done(function(data) {
    $('#listaProduto').text(data);
  });
};
