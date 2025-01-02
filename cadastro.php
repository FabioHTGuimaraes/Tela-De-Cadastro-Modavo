<?php
$servername = "localhost";
$username = "fabiohenrique";
$password = "Fabio1902";
$dbname = "cpaas_projeto";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
$conexao = mysqli_connect($servername, $username, $password, $dbname);
if (!$conexao) {
    die("Houve um erro: " . mysqli_connect_error());
}

$nome_cliente = $_POST['nome_cliente'];
$datanasc_cliente = $_POST['datanasc_cliente'];
$sexo_cliente = $_POST['sexo_cliente'];
$nomematerno_cliente = $_POST['nomematerno_cliente'];
$cpf_cliente = $_POST['cpf_cliente'];
$email_cliente = $_POST['email_cliente'];
$celular_cliente = $_POST['celular_cliente'];
$fixo_cliente = $_POST['fixo_cliente'];
$cep_cliente = $_POST['cep_cliente'];
$rua_cliente = $_POST['rua_cliente'];
$numero_cliente = $_POST['numero_cliente'];
$bairro_cliente = $_POST['bairro_cliente'];
$complemento_cliente = $_POST['complemento_cliente'];
$cidade_cliente = $_POST['cidade_cliente'];
$estado_cliente = $_POST['estado_cliente'];
$login_cliente = $_POST['login_cliente'];
$confirmarSenha = $_POST['confirmarSenha'];
$senha_cliente = $_POST['senha_cliente'];


// Depuração: Verificar o valor da data antes de tentar convertê-la
echo "Data recebida: $datanasc_cliente <br>";

$date = DateTime::createFromFormat('d/m/Y', $datanasc_cliente);
if ($date) {
    $datanasc_cliente = $date->format('Y-m-d');
    echo "Data convertida: $datanasc_cliente <br>";
} else {
    die("Data de nascimento inválida. Por favor, use o formato DD/MM/YYYY.");
}

// Usar prepared statements para evitar SQL injection
$stmt = $conexao->prepare("INSERT INTO cliente (nome_cliente, datanasc_cliente, sexo_cliente, nomematerno_cliente, cpf_cliente, email_cliente, celular_cliente, fixo_cliente, cep_cliente, rua_cliente, numero_cliente, bairro_cliente, complemento_cliente, cidade_cliente, estado_cliente, login_cliente, senha_cliente) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssssssssssss", $nome_cliente, $datanasc_cliente, $sexo_cliente, $nomematerno_cliente, $cpf_cliente, $email_cliente, $celular_cliente, $fixo_cliente, $cep_cliente, $rua_cliente, $numero_cliente, $bairro_cliente, $complemento_cliente, $cidade_cliente, $estado_cliente, $login_cliente, $senha_cliente);

if ($stmt->execute()) {
    header("Location: login.html");
} else {
    echo "Erro: " . $stmt->error;
}

$stmt->close();
mysqli_close($conexao);
?>