<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV1</title>
</head>

<body style="margin: 0; padding: 0;">

    <table width="100%" style="height: 100vh;">
        <tr>

            <!-- ABOUT -->
            <td width="30%" valign="top" style="padding: 20px; background: #f5f5f5;">
                <img id="avatarCv" style="width: 7rem; height: 7rem; border-radius: 50%;">
                <h1 id="cv-name">Nom Prenom</h1>
                <p id="cv-about">---</p>

                <!-- CONTACT -->
                <div class="contact-item">
                    <span id="cv-email"></span>
                </div>

                <div class="contact-item">
                    <span id="cv-tel"></span>
                </div>

                <div class="contact-item">
                    <span id="cv-birth"></span>
                </div>

                <div class="contact-item">
                    <span id="cv-city"></span>
                </div>

                <!-- SKILLS -->
                <h5>Compétences</h5>
                <div id="skillsCv"></div>


                <!-- LNG -->
                <h5>Langues</h5>
                <div id="cv-lng"></div>



            </td>


            <td width="70%" valign="top" style="padding: 20px;">


                <!-- EXP -->
                <div id="expCv" class="mb-5">
                    <h2 class="pb-1 mt-3">Expérience professionnelle</h2>
                    <hr>
                    <ul id="expCv"></ul>
                </div>


                <!-- SCHOOL -->
                <div>
                    <h2 class="pb-1 mt-4">Éducation</h2>
                    <hr>
                    <div id="schoolCv" class="mb-3">
                    </div>
                </div>


            </td>
        </tr>
    </table>

</body>

</html>