<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
// $send_name = '';
// $send_phone = '';
// $send_message = '';
// $newsletterMail = '';

$send_name = $_POST['send_name'];
$send_phone = $_POST['send_phone'];
$send_message = $_POST['send_message'];
$newsletterMail = $_POST['newsletterMail'];
$modal_send_name = $_POST['modal_send_name'];
$modal_send_phone = $_POST['modal_send_phone'];
$modal_send_mail = $_POST['modal_send_mail'];
$modal_send_message = $_POST['modal_send_message'];

echo $modal_send_message;
// Формирование самого письма
$title = "Обращение с Best tour plan";

// в зависимости от пришедшей формы формируем сообщение:
if(isset($_POST['newsletterMail'])) {
  // если есть что-то в $_POST['newsletterMail']
  $body = "
  <h2>Подписка на новости</h2>
  <b>Прошу присылать новости на:</b> $newsletterMail<br>
  ";
  } elseif(isset($_POST['modal_send_message'])) {
    // если есть что-то в $_POST['modal_send_message']
    $body = "
    <h2>Бронирование</h2>
    <b>Имя:</b> $modal_send_name<br>
    <b>Телефон:</b> $modal_send_phone<br>
    <b>E-mail:</b> $modal_send_mail<br><br>
    <b>Сообщение:</b><br>$modal_send_message
    ";
    } else {
      // если нет, отправлена форма с футера
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
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'v.m.podporogie@gmail.com'; // Логин на почте
    $mail->Password   = 'kwqgpkvybzegkfij'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('v.m.podporogie@gmail.com', 'Виктория'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('v.martynova@mail.ru');  

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
// echo json_encode(["result" => $result, "status" => $status]);
header ('Location: thankyou.html');