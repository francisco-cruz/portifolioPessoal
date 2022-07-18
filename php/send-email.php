<?php
    $nome = $POST['nome'];
    $email = $POST['email'];
    $mensagem = $POST['mensagem'];
    $data_envio = date['d/m/Y'];
    $hora_envio = date['H:i:s'];

    $arquivo = "
        <html>
            <p><b>Nome:</b> $nome</p>
            <p><b>E-mail:</b> $email</p>
            <p><b>Mensagem:</b> $nome</p>
            <p><b>E-mail enviado em <b>$data_envio</b> às <b>$hora_envio</b> $nome</p>
        </htmll>
    
    ";

    $destino ="ui_cisco@gmail.com";
    $assunto = "Contato pelo Portifólio";

    $headers = "MIME-Version 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";
    $headers = "From: $nome <$email>";

    mail($destino, $assunto, $arquivo, $headers);

    echo "<meta http-equiv='refresh' content ='10;URL=../contato.html";

?>