document.addEventListener("DOMContentLoaded", function () {


    //CV SELECT
    const selectCv = document.getElementById("selectCv");
    const insertCv = document.getElementById("cv");

    selectCv.addEventListener("change", function () {

        const cv0 = `<h1 class="text-dark text-center"> Choisissez un CV </h1>`

        //CV 1
        const cv1 = `<!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                

                
                <div class="h-100 w-100 p-3">
                
                    <table width="100%">
                        <tr>
                
                            <!-- ABOUT-->
                            <td width="65%" valign="top">
                
                                <h1 id="cv-name">Nom Prenom</h1>
                                <p id="cv-about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sunt quasi non, sint, dolores nobis eveniet laboriosam temporibus aperiam aut reiciendis tempora culpa, distinctio cupiditate. Non, vel. Facilis, consequatur corrupti.</p>
                
                            </td>
                
                            <!-- CONTACT -->
                            <td width="30%" style="padding-left: 5rem;">
                
                                <table width="100%">
                                    <tr>
                                        <td>
                                            <ul style="list-style: none;">
                                                <img id="avatarCv" style="width: 7rem; height: 7rem; border-radius: 50%;">
                                                <li style="padding-top: 1rem;" id="cv-email"></li>
                                                <li style="padding-top: 0.5rem;" id="cv-tel"></li>
                                                <li style="padding-top: 0.5rem;" id="cv-birth"></li>
                                                <li style="padding-top: 0.5rem;" id="cv-city"></li>
                                            </ul>
                                        </td>
                                    </tr>
                
                                </table>
                            </td>
                        </tr>
                    </table>
                
                    <hr>
                
                
                
                
                
                
                    <table width="75%">
                        <tr>
                            <!-- EXP -->
                            <td valign="top">
                
                                <h2>Expériences</h2>
                                <div id="expCv">
                
                                </div>
                
                                <hr>
                
                                <!-- SCHOOL -->
                                <h2>Éducation</h2>
                                <div id="schoolCv">
                
                                </div>
                
                            </td>
                        </tr>
                    </table>
                
                
                
                    <hr>
                
                
                
                
                    <table width="100%">
                        <tr>
                
                            <!-- SKILLS-->
                            <td width="50%" valign="top">
                                <table width="100%">
                                    <tr>
                                        <td>
                                            <h4>Competences</h4>
                                            <div id="skillsCv" style="list-style: none;">
                
                                            </div>
                                        </td>
                                    </tr>
                
                                </table>
                            </td>
                
                            <!-- LNG -->
                            <td width="50%">
                
                                <table width="100%">
                                    <tr>
                                        <td>
                                            <h4>Langues</h4>
                                            <div id="cv-lng" style="list-style: none;">
                
                                            </div>
                                        </td>
                                    </tr>
                
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>


            </body>
            </html>`

        //CV 2

        const cv2 = `<!DOCTYPE html>
                    <html lang="fr">

                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>CV1</title>
                    </head>

                    <body style="margin: 0; padding: 0;">

                        <table width="100%" style="height: 100vh;">
                            <tr>
                                <!-- LEFT 30% -->
                                <td width="30%" valign="top" style="padding: 20px; background: #f5f5f5;">
                                    <img id="avatarCv" style="width: 7rem; height: 7rem; border-radius: 50%;">
                                    <h1 id="cv-name">Nom Prenom</h1>
                                    <p id="cv-about">Lorem ipsum...</p>

                                    <h4>Contact</h4>
                                    <ul style="list-style: none; padding: 0;">
                                        <li id="cv-email"></li>
                                        <li id="cv-tel"></li>
                                        <li id="cv-birth"></li>
                                        <li id="cv-city"></li>
                                    </ul>
                                </td>

                                <!-- RIGHT 70% -->
                                <td width="70%" valign="top" style="padding: 20px;">
                                    <h2>Expériences</h2>
                                    <div id="expCv"></div>

                                    <h2>Éducation</h2>
                                    <div id="schoolCv"></div>

                                    <h2>Compétences</h2>
                                    <div id="skillsCv"></div>

                                    <h2>Langues</h2>
                                    <div id="cv-lng"></div>
                                </td>
                            </tr>
                        </table>

                    </body>

                    </html>`

                    
        // CV 3
        const cv3 = `<div id="cv" class="p-2 rounded-4 overflow-y-auto h-100">
            <div class="container text-center">

            <table width="100%" cellspacing="0" cellpadding="0" style="page-break-inside: avoid;">
                <tr>

                    <!-- ABOUT -->
                    <td width="75%" style="text-align: center;">
                        <div class="">
                            <img id="cv-avatar" class="" src="/assets/img/avatar.jpg" alt="Profile photo" style="width: 5rem; height: 5rem; border-radius: 50%; object-fit: cover; display: block; margin: 0 auto 0.5rem auto;">
                            <h1 id="cv-name" style="margin: 0; font-weight: bold;">Prénom&nbsp;Nom</h1>
                        </div>

                        <p id="cv-about" style="text-align: center; padding: 0 1rem;">
                            À propos de moi : courte présentation professionnelle mettant en avant le profil,
                            les compétences principales et les objectifs.
                        </p>
                    </td>

                    <!-- CONTACT -->
                    <td width="25%" valign="" class="mt-5">
                        <div class="contact-item">
                            <span id="cv-email">Email</span>
                        </div>

                        <div class="contact-item">
                            <span id="cv-tel">Tel</span>
                        </div>

                        <div class="contact-item">
                            <span id="cv-birth">Date de naissance</span>
                        </div>

                        <div class="contact-item">
                            <span id="cv-city">Adresse</span>
                        </div>
                    </td>

                </tr>
            </table>

            </div>
            <hr>

            <table width="100%" cellspacing="0" cellpadding="0">
            <tr>
                <td width="60%" valign="top">

                    <!-- EXP -->
                    <div id="expCv" class="mb-5">
                        <h2 class="pb-1 mt-3">
                            Expérience professionnelle
                        </h2>
                        <hr class="text-primary">

                        <ul id="expCv"></ul>
                    </div>
                    <hr>

                    <!-- EDUCATION -->
                    <div>
                        <h2 class="border-bottom border-primary pb-1 mt-4">Éducation</h2>
                        <div id="schoolCv" class="mb-3">
                        </div>
                    </div>

                </td>
                <td width="30%" valign="top" style="padding-left: 5rem;">

                    <!-- SKILLS -->
                    <h5 class="border-bottom border-primary pb-1 mt-4">Compétences</h5>
                    <ul id="skillsCv" class="small ps-3"></ul>

                    <!-- LANGUES -->
                    <h5 class="border-bottom border-primary pb-1 mt-4">Langues</h5>
                    <ul id="cv-lng" class="small ps-3">

                    </ul>

                </td>
            </tr>
            </table>

            </div>`

        if (this.value === "0") {
            insertCv.innerHTML = cv0;

        } else if (this.value === "1") {
            insertCv.innerHTML = cv1;

        } else if (this.value === "2") {
            insertCv.innerHTML = cv2;

        } else if (this.value === "3") {
            insertCv.innerHTML = cv3;
        }

    });


});