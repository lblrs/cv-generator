<html lang="en">

<head>
    <link href="/assets/css/cv.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV Maker</title>
</head>


<body class="p-4 bg-dark vh-100 ">

    <main class="row rounded-5 h-100 d-felx justify-content-around gap-3">

        <div class="col-12 col-md-3 order-1 bg-light rounded-5 p-5 h-100">
            <?php include "form.php" ?>
        </div>

        <div class="col-12 col-md-7 order-2  bg-light rounded-5 overflow-y-auto h-100 p-5">
            <?php include "cv.php" ?>
        </div>

    </main>


    <script src="/assets/js/app.js"></script>
</body>

</html>