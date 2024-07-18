<?php

$conexao = mysqli_connect('localhost', 'webmaster', 'ponks2020') or die ('a conexão nao foi possivel ser completa');
$bd = mysqli_select_db($conexao, 'controle_estoque') or die ('nao foi possivel acessar a base de dados');

?>