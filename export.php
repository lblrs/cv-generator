<?php
require 'vendor/autoload.php';
use Dompdf\Dompdf;

$dompdf = new Dompdf();
$dompdf->loadHtml($_POST['html']);
$dompdf->render();
header('Content-Type: application/pdf');
echo $dompdf->output();
?>