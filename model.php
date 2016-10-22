<?php
  $nome = $_POST['produto_nome']; //Recebe requisicao post
  $preco = $_POST['produto_preco'];
  echo "Produto recebido no servidor: " . $nome . " R$: " . $preco ;
 ?>
