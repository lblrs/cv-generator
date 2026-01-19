<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV Maker – Créez un CV professionnel en ligne</title>
    <meta name="description" content="Créez gratuitement votre CV professionnel en ligne. Remplissez vos informations, visualisez en temps réel et téléchargez votre CV en PDF prêt à l’emploi.">
    <link rel="preconnect" href="https://cdn.jsdelivr.net">
    <link href="/assets/css/cv.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
</head>


<body class="p-4 bg-dark vh-100 ">

    <main class="row h-100 d-felx justify-content-center gap-5">

        <div class="col-12 col-md-5 col-xl-3 order-1 bg-light rounded-5 p-5 h-100">
            <?php include "includes/form.php" ?>
        </div>

        <div class="col-12 col-md-6 col-xl-5  order-2  bg-light rounded-5 overflow-y-auto h-100 p-2">
            <?php include "includes/cv.php" ?>
        </div>

    </main>


    <script src="/assets/js/cv.js"></script>
</body>

</html>