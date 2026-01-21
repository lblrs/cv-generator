<?php
require 'vendor/autoload.php';
use Dompdf\Dompdf;
use HTMLPurifier;
use HTMLPurifier_Config;

$html = $_POST['html'];

// Injection HTML
$config = HTMLPurifier_Config::createDefault();
$purifier = new HTMLPurifier($config);
$html = $purifier->purify($html);

$dompdf = new Dompdf();
$dompdf->loadHtml($_POST['html']);
$dompdf->setPaper('A4', 'portrait');
$dompdf->render();

header('Content-Type: application/pdf');
echo $dompdf->output();

?>