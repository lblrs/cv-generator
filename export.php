<?php
require_once 'vendor/autoload.php';

use Dompdf\Dompdf;

ob_start();
include 'includes/cv.php';
$html = ob_get_clean();

$pdf = new Dompdf();
$pdf->loadHtml($html);
$pdf->setPaper('A4');
$pdf->render();
$pdf->stream('cv.pdf');

?>