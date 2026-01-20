<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV Maker</title>
    <meta name="description" content="Créez gratuitement votre CV professionnel en ligne. Remplissez vos informations, visualisez en temps réel et téléchargez votre CV en PDF prêt à l'emploi.">
    <link rel="preconnect" href="https://cdn.jsdelivr.net">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body >

    <section class="vh-100 d-flex align-items-center justify-content-center" style="background-image: url(/assets/img/bg1.webp); background-repeat:no-repeat; background-size: cover">
        <div class="text-center">
            <h1 class="text-white display-4 fw-bold mb-4">Bienvenue au CV Maker</h1>
            <p class="text-white-50 lead mb-4">Créez votre CV professionnel en quelques minutes</p>
            <button class="btn btn-light btn-lg" onclick="document.getElementById('cvSection').scrollIntoView({behavior: `smooth`})">Commencer</button>
        </div>
    </section>




    
    <section id="cvSection" class="vh-100 p-4" style="background-image: url(/assets/img/bg2.webp); background-repeat:no-repeat; background-size: cover">
        <main class="row h-100 d-flex justify-content-center gap-5 p-5 m-auto">

            <div class="col-12 col-md-5 col-xl-3 order-1 bg-dark text-white rounded-5 p-5 h-100 overflow-y-auto">
                <?php include "includes/form.php" ?>
            </div>
    
            <div id="cv" class="col-12 col-md-6 col-xl-5 order-2 bg-light rounded-5 overflow-y-auto h-100 p-2">
                <?php include "includes/cv2.php" ?>
            </div>

        </main>
    </section>

    <script src="/assets/js/cv.js"></script>
    <script src="/assets/js/btn.js"></script>
    <script src="/assets/js/export.js"></script>
</body>

</html>