<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$send_name = $_POST['send_name'];
$send_phone = $_POST['send_phone'];
$send_message = $_POST['send_message'];
$newsletterMail = $_POST['newsletterMail'];

// Формирование самого письма
$title = "Обращение с Best tour plan";

// в зависимости от пришедшей формы формируем сообщение:
if(isset($_POST['newsletterMail'])){
  // если есть что-то в $_POST['newsletterMail']
  $body = "
  <h2>Подписка на новости</h2>
  <b>Прошу присылать новости на:</b> $newsletterMail<br>
  ";
} else {
  // если нет, отправлена форма с телефоном и пр.
  $body = "
  <h2>Новое обращение</h2>
  <b>Имя:</b> $send_name<br>
  <b>Телефон:</b> $send_phone<br><br>
  <b>Сообщение:</b><br>$send_message
  ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'mail.viktoriya-martynova.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'manager@viktoriya-martynova.ru'; // Логин на почте
    $mail->Password   = 'hF6tP8aQ3cbA4i'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('manager@viktoriya-martynova.ru', 'Виктория'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('v.m.podporogie@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

var_dump($mail);

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "status" => $status]);