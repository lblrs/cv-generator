document.addEventListener("DOMContentLoaded", function () {

    let expId = 0;
    let schoolId = 0;
    let skillsId = 0;
    let lngId = 0;

    //CV SELECT
    const selectCv = document.getElementById("selectCv");
    const insertCv = document.getElementById("cv");

    selectCv.addEventListener("change", function () {

        const cv0 = `<h1 class="text-dark text-center"> Choisissez un CV </h1>`

        //CV 1
        const cv1 = `<html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>CV1</title>
        </head>
        <div class="h-100 w-100 p-3">
            <table width="100%">
                <tr>
                    <td width="65%" valign="top">
                        <h1 id="cv-name">Nom Prenom</h1>
                        <p id="cv-about">Lorem ipsum dolor</p>
                    </td>
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
                    <td valign="top">
                        <h2>Expériences</h2>
                        <div id="expCv"></div>
                        <hr>
                        <h2>Éducation</h2>
                        <div id="schoolCv"></div>
                    </td>
                </tr>
            </table>
            <hr>
            <table width="100%">
                <tr>
                    <td width="50%" valign="top">
                        <table width="100%">
                            <tr>
                                <td>
                                    <h4>Competences</h4>
                                    <div id="skillsCv" style="list-style: none;"></div>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td width="50%">
                        <table width="100%">
                            <tr>
                                <td>
                                    <h4>Langues</h4>
                                    <div id="cv-lng" style="list-style: none;"></div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
        </html>`

        //CV 2
        const cv2 = `
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>CV2</title>
        </head>
        <table width="100%" style="height: 100vh;">
            <tr>
                <td width="30%" valign="top" style="padding: 20px; background: #f5f5f5;">
                    <img id="avatarCv" style="width: 7rem; height: 7rem; border-radius: 50%;">
                    <h1 id="cv-name">Nom Prenom</h1>
                    <p id="cv-about">---</p>
                    <div class="m-1">
                        <span id="cv-email"></span>
                    </div>
                    <div class="m-1">
                        <span id="cv-tel"></span>
                    </div>
                    <div class="m-1">
                        <span id="cv-birth"></span>
                    </div>
                    <div class="m-1">
                        <span id="cv-city"></span>
                    </div>
                    <h5>Compétences</h5>
                    <div id="skillsCv"></div>
                    <h5>Langues</h5>
                    <div id="cv-lng"></div>
                </td>

                
                <td width="70%" valign="top" style="padding: 20px;">
                    <div id="expCv" class="mb-5">
                        <h2 class="pb-1 mt-3">Expérience professionnelle</h2>
                        <hr>
                    </div>
                    <div>
                        <h2 class="pb-1 mt-4">Éducation</h2>
                        <hr>
                        <div id="schoolCv" class="mb-3"></div>
                    </div>
                </td>
            </tr>
        </table>
        </html>`
        

        if (this.value === "0") {
            insertCv.innerHTML = cv0;
        } else if (this.value === "1") {
            insertCv.innerHTML = cv1;
        } else if (this.value === "2") {
            insertCv.innerHTML = cv2;
        }
    });

    //INPUT
    document.addEventListener("input", function (e) {
        const targetSelector = e.target.getAttribute("data-target");

        if (targetSelector) {
            const targetElement = document.querySelector(targetSelector);

            if (targetElement) {
                targetElement.textContent = e.target.value.trim() || "---";
            }
        }
    });

    //PHOTO
    const avatarInput = document.getElementById("avatar");

    avatarInput.addEventListener("change", (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = function (event) {
                const base64 = event.target.result;
                const avatarCv = document.getElementById("avatarCv");
                if (avatarCv) {
                    avatarCv.src = base64;
                }
            };

            reader.readAsDataURL(file);
        }
    });

    //EXP
    const expBtn = document.getElementById("expBtn");

    expBtn.addEventListener("click", function () {
        const expForm = document.getElementById("expForm");
        const expCv = document.getElementById("expCv");
        expId++;
        if (expId > 6) return;

        const expHTML = `
        <div class="row" id="exp${expId}-form">
            <div class="col-md-6">
                <label for="jobTitle${expId}" class="form-label">Poste </label>
                <input type="text" class="form-control" id="jobTitle${expId}" data-target="#cv-jobTitle${expId}" >
            </div>

            <div class="col-md-6">
                <label for="company${expId}" class="form-label">Entreprise </label>
                <input type="text" class="form-control" id="company${expId}" data-target="#cv-company${expId}" >
            </div>

            <div class="col-md-6 mt-3">
                <label for="startDate${expId}" class="form-label">Date de début </label>
                <input type="date" class="form-control" id="startDate${expId}" data-target="#cv-startDate${expId}" >
            </div>

            <div class="col-md-6 mt-3">
                <label for="endDate${expId}" class="form-label">Date de fin </label>
                <input type="date" class="form-control" id="endDate${expId}" data-target="#cv-endDate${expId}" >
            </div>

            <div class="col-md-12 mt-3">
                <label for="jobDescription${expId}" class="form-label">Missions </label>
                <textarea class="form-control text-start" id="jobDescription${expId}" data-target="#cv-jobDescription${expId}" ></textarea>
            </div>

            <button type="button" class="btn btn-outline-danger col-md-6 m-auto mt-3 delete-btn" data-id="exp${expId},">Supprimer</button>
            <hr class="mt-3">
        </div>
    `;

        const expCVHTML = `
        <div id="exp${expId}-cv">
            <p>
                <span style="font-size: large; font-weight: bold;" id="cv-jobTitle${expId}">---</span> / <span style="font-size: large; font-weight: bold;" id="cv-company${expId}">---</span>
            </p>
            <p style="font-size: small; color: #666;">
                <span id="cv-startDate${expId}">---</span> / <span id="cv-endDate${expId}">---</span>
            </p>
            <p id="cv-jobDescription${expId}">---</p>
        </div>
        `;

        expForm.insertAdjacentHTML("beforeend", expHTML);
        expCv.insertAdjacentHTML("beforeend", expCVHTML);

        if (expId === 6) {
            expBtn.style.display = "none";
        }
    });

    //SCHOOL
    const schoolBtn = document.getElementById("schoolBtn");

    schoolBtn.addEventListener("click", function () {
        const schoolForm = document.getElementById("schoolForm");
        const schoolCv = document.getElementById("schoolCv");
        schoolId++;
        if (schoolId > 5) return;

        const schoolHTML = `
        <div class="row" id="school${schoolId}-form">
            <div class="col-md-6">
                <label for="diplome${schoolId}" class="form-label">Diplôme </label>
                <input type="text" class="form-control" id="diplome${schoolId}" data-target="#cv-diplome${schoolId}" >
            </div>

            <div class="col-md-6">
                <label for="school${schoolId}" class="form-label">Établissement </label>
                <input type="text" class="form-control" id="school${schoolId}" data-target="#cv-school${schoolId}" >
            </div>

            <div class="col-md-6 mt-3">
                <label for="schoolStartDate${schoolId}" class="form-label">Date de début </label>
                <input type="date" class="form-control" id="schoolStartDate${schoolId}" data-target="#cv-schoolStartDate${schoolId}" >
            </div>

            <div class="col-md-6 mt-3">
                <label for="schoolEndDate${schoolId}" class="form-label">Date de fin </label>
                <input type="date" class="form-control" id="schoolEndDate${schoolId}" data-target="#cv-schoolEndDate${schoolId}" >
            </div>

            <div class="col-md-12 mt-3">
                <label for="schoolDescription${schoolId}" class="form-label">Description </label>
                <textarea class="form-control text-start" id="schoolDescription${schoolId}" data-target="#cv-schoolDescription${schoolId}" ></textarea>
            </div>

            <button type="button" class="btn btn-outline-danger col-md-6 m-auto mt-3 delete-btn" data-id="school${schoolId}">Supprimer</button>
            <hr class="mt-3">
        </div>
    `;

        const schoolCvHTML = `
            <div id="school${schoolId}-cv">
                <p>
                    <span style="font-size: large; font-weight: bold;" id="cv-diplome${schoolId}">---</span> / <span style="font-size: large; font-weight: bold;" id="cv-school${schoolId}">---</span>
                </p>
                <p style="font-size: small; color: #666;">
                    <span id="cv-schoolStartDate${schoolId}">---</span> / <span id="cv-schoolEndDate${schoolId}">---</span>
                </p>
                <p id="cv-schoolDescription${schoolId}">---</p>
            </div>
            `;

        schoolForm.insertAdjacentHTML("beforeend", schoolHTML);
        schoolCv.insertAdjacentHTML("beforeend", schoolCvHTML);

        if (schoolId === 5) {
            schoolBtn.style.display = "none";
        }
    });

    //SKILLS
    const skillsBtn = document.getElementById("skillsBtn");

    skillsBtn.addEventListener("click", function () {
        const skillsForm = document.getElementById("skillsForm");
        const skillsCv = document.getElementById("skillsCv");
        skillsId++;

        const skillsHTML = `
        <div id="skills${skillsId}-form" class="col-md-12">
            <label for="skills${skillsId}" class="form-label">Compétence</label>
            <input class="form-control" id="skills${skillsId}" data-target="#cv-skills${skillsId}" >
            
            <label for="skills-lvl${skillsId}" class="mt-3">Niveau</label>
            <select class="mt-2 form-select" name="lvl" id="skills-lvl${skillsId}" data-target="#cv-skills-lvl${skillsId}" >
            <option value="Niveau"></option>
            <option value="Novice">Novice</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
            <option value="Expert">Expert</option>
            </select>
            
        <button type="button" class="btn btn-outline-danger col-md-6 mt-2 mb-2 d-block delete-btn" data-id="skills${skillsId}">Supprimer</button>
        <hr>
        </div>
    `;

        const skillsCvHTML = `
        <div id="skills${skillsId}-cv" style="margin-bottom: 5px;">
    <span id="cv-skills${skillsId}">---</span> - <span id="cv-skills-lvl${skillsId}">---</span>
</div>`;

        skillsForm.insertAdjacentHTML("beforeend", skillsHTML);
        skillsCv.insertAdjacentHTML("beforeend", skillsCvHTML);
    });

    //LNG
    const lngBtn = document.getElementById("lngBtn");

    lngBtn.addEventListener("click", function () {
        const lngForm = document.getElementById("lngForm");
        const lngCv = document.getElementById("cv-lng");
        lngId++;

        const lngHTML = `
            <div id="lng${lngId}-form">
                <label for="lng${lngId}" class="form-label">Langue</label>
                <select id="lng${lngId}" name="languages" class="form-select" data-target="#cv-lng${lngId}">
                    <option value="">Sélectionner une langue</option>
                    <option value="Français">Français</option>
                    <option value="Anglais">Anglais</option>
                    <option value="Espagnol">Espagnol</option>
                    <option value="Allemand">Allemand</option>
                    <option value="Italien">Italien</option>
                </select> 

            <label for="lng-lvl${lngId}" class="mt-3">Niveau</label>
            <select class="mt-2 form-select" name="lvl" id="lng-lvl${lngId}" data-target="#cv-lng-lvl${lngId}" >
                <option value=""></option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
            </select>

            <button type="button" class="btn btn-outline-danger col-md-6 mt-2 mb-2 d-block delete-btn" data-id="lng${lngId}">Supprimer</button>
            <hr>
        </div>
    `;

        const lngCvHTML = `
            <div id="lng${lngId}-cv" style="margin-bottom: 5px;">
                <span id="cv-lng${lngId}">---</span> - <span id="cv-lng-lvl${lngId}">---</span>
            </div>`;

        lngForm.insertAdjacentHTML("beforeend", lngHTML);
        lngCv.insertAdjacentHTML("beforeend", lngCvHTML);
    });

});