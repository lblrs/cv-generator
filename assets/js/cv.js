document.addEventListener("DOMContentLoaded", function () {

    //INPUT
    document.addEventListener("input", function (e) {
        const targetSelector = e.target.getAttribute("data-target");

        if (targetSelector) {
            const targetElement = document.querySelector(targetSelector);

            if (targetElement) {
                targetElement.textContent = e.target.value.trim() || "---";
            };
        };
    });

    //DELETE BTN
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-btn")) {
            const id = e.target.getAttribute("data-id");

            const formElement = document.getElementById(id + "-form");
            const cvElement = document.getElementById(id + "-cv");

            if (formElement) formElement.remove();
            if (cvElement) cvElement.remove();
        }
    });





    //EXP
    const expForm = document.getElementById("expForm");
    const expCv = document.getElementById("expCv");
    const expBtn = document.getElementById("expBtn");
    let expId = 0;

    expBtn.addEventListener("click", function () {
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

            <button type="button" class="btn btn-outline-danger col-md-6 m-auto mt-3 delete-btn" data-id="exp${expId}">Supprimer</button>
            <hr class="mt-3">
        </div>
    `;

        const expCVHTML = `
        <div id="exp${expId}-cv" class="mb-3">
            <div class="d-flex">
                <h3 id="cv-jobTitle${expId}" class="h6 fw-bold mb-1">---</h3>
                <h3 class="h6 fw-bold mb-1">&nbsp;/&nbsp;</h3>
                <h3 id="cv-company${expId}" class="h6 fw-bold mb-1">---</h3>
            </div>
            <div class="d-flex">
                <p id="cv-startDate${expId}" class="text-muted small mb-1">---</p>
                <p class="text-muted small mb-1">&nbsp;/&nbsp;</p>
                <p id="cv-endDate${expId}" class="text-muted small mb-1">---</p>
            </div>
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
    const schoolForm = document.getElementById("schoolForm");
    const schoolCv = document.getElementById("schoolCv");
    const schoolBtn = document.getElementById("schoolBtn");
    let schoolId = 0;

    schoolBtn.addEventListener("click", function () {
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
        <div id="school${schoolId}-cv" class="mb-3">
            <div class="d-flex">
                <h3 id="cv-diplome${schoolId}" class="h6 fw-bold mb-1">---</h3>
                <h3 class="h6 fw-bold mb-1">&nbsp;/&nbsp;</h3>
                <h3 id="cv-school${schoolId}" class="h6 fw-bold mb-1">---</h3>
            </div>
            <div class="d-flex">
                <p id="cv-schoolStartDate${schoolId}" class="text-muted small mb-1">---</p>
                <p class="text-muted small mb-1">&nbsp;/&nbsp;</p>
                <p id="cv-schoolEndDate${schoolId}" class="text-muted small mb-1">---</p>
            </div>
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
    const skillsForm = document.getElementById("skillsForm");
    const skillsCv = document.getElementById("skillsCv");
    const skillsBtn = document.getElementById("skillsBtn");
    let skillsId = 0;

    skillsBtn.addEventListener("click", function () {
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

        const skillsCvHTML =
        `<li id="skills${skillsId}-cv">
        <span id="cv-skills${skillsId}">---</span> - <span id="cv-skills-lvl${skillsId}">---</span>
        </li>`;

        skillsForm.insertAdjacentHTML("beforeend", skillsHTML);
        skillsCv.insertAdjacentHTML("beforeend", skillsCvHTML);
    });


    //LNG
    const lngForm = document.getElementById("lngForm");
    const lngCv = document.getElementById("cv-lng");
    const lngBtn = document.getElementById("lngBtn");
    let lngId = 0;

    lngBtn.addEventListener("click", function () {
        lngId++;

        const lngHTML = `
            <div id="lng${lngId}-form">
                <label for="lng${lngId}" class="form-label">Langue</label>
                <select id="lng${lngId}" name="languages" class="form-select" data-target="#cv-lng${lngId}">
                    <option value="">Sélectionner une langue</option>
                    <option value="Afrikaans">Afrikaans</option>
                    <option value="Albanais">Albanais</option>
                    <option value="Amharique">Amharique</option>
                    <option value="Arabe">Arabe</option>
                    <option value="Aragonais">Aragonais</option>
                    <option value="Arménien">Arménien</option>
                    <option value="Asturien">Asturien</option>
                    <option value="Aymara">Aymara</option>
                    <option value="Azéri">Azéri</option>
                    <option value="Basque">Basque</option>
                    <option value="Biélorusse">Biélorusse</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Bodo">Bodo</option>
                    <option value="Bosniaque">Bosniaque</option>
                    <option value="Breton">Breton</option>
                    <option value="Bulgare">Bulgare</option>
                    <option value="Catalan">Catalan</option>
                    <option value="Kurde central">Kurde central</option>
                    <option value="Tchétchène">Tchétchène</option>
                    <option value="Chinois">Chinois</option>
                    <option value="Chinois (Hong Kong)">Chinois (Hong Kong)</option>
                    <option value="Chinois simplifié">Chinois simplifié</option>
                    <option value="Chinois traditionnel">Chinois traditionnel</option>
                    <option value="Corse">Corse</option>
                    <option value="Croate">Croate</option>
                    <option value="Tchèque">Tchèque</option>
                    <option value="Danois">Danois</option>
                    <option value="Maldivien">Maldivien</option>
                    <option value="Néerlandais">Néerlandais</option>
                    <option value="Dzongkha">Dzongkha</option>
                    <option value="Anglais">Anglais</option>
                    <option value="Anglais (Australie)">Anglais (Australie)</option>
                    <option value="Anglais (Canada)">Anglais (Canada)</option>
                    <option value="Anglais (Inde)">Anglais (Inde)</option>
                    <option value="Anglais (Nouvelle-Zélande)">Anglais (Nouvelle-Zélande)</option>
                    <option value="Anglais (Afrique du Sud)">Anglais (Afrique du Sud)</option>
                    <option value="Anglais (Royaume-Uni)">Anglais (Royaume-Uni)</option>
                    <option value="Anglais (États-Unis)">Anglais (États-Unis)</option>
                    <option value="Espéranto">Espéranto</option>
                    <option value="Estonien">Estonien</option>
                    <option value="Éwé">Éwé</option>
                    <option value="Féroïen">Féroïen</option>
                    <option value="Filipino">Filipino</option>
                    <option value="Finnois">Finnois</option>
                    <option value="Français">Français</option>
                    <option value="Français (Canada)">Français (Canada)</option>
                    <option value="Français (France)">Français (France)</option>
                    <option value="Français (Suisse)">Français (Suisse)</option>
                    <option value="Galicien">Galicien</option>
                    <option value="Géorgien">Géorgien</option>
                    <option value="Allemand">Allemand</option>
                    <option value="Allemand (Autriche)">Allemand (Autriche)</option>
                    <option value="Allemand (Allemagne)">Allemand (Allemagne)</option>
                    <option value="Allemand (Liechtenstein)">Allemand (Liechtenstein)</option>
                    <option value="Allemand (Suisse)">Allemand (Suisse)</option>
                    <option value="Grec">Grec</option>
                    <option value="Guarani">Guarani</option>
                    <option value="Gujarati">Gujarati</option>
                    <option value="Haoussa">Haoussa</option>
                    <option value="Hawaïen">Hawaïen</option>
                    <option value="Hébreu">Hébreu</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Hongrois">Hongrois</option>
                    <option value="Islandais">Islandais</option>
                    <option value="Indonésien">Indonésien</option>
                    <option value="Interlingua">Interlingua</option>
                    <option value="Inuktitut">Inuktitut</option>
                    <option value="Irlandais">Irlandais</option>
                    <option value="Italien">Italien</option>
                    <option value="Italien (Italie)">Italien (Italie)</option>
                    <option value="Italien (Suisse)">Italien (Suisse)</option>
                    <option value="Japonais">Japonais</option>
                    <option value="Groenlandais">Groenlandais</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Cachemiri">Cachemiri</option>
                    <option value="Kazakh">Kazakh</option>
                    <option value="Khmer">Khmer</option>
                    <option value="Kinyarwanda">Kinyarwanda</option>
                    <option value="Coréen">Coréen</option>
                    <option value="Kurde">Kurde</option>
                    <option value="Kirghiz">Kirghiz</option>
                    <option value="Lao">Lao</option>
                    <option value="Latin">Latin</option>
                    <option value="Letton">Letton</option>
                    <option value="Lingala">Lingala</option>
                    <option value="Lituanien">Lituanien</option>
                    <option value="Ganda">Ganda</option>
                    <option value="Luxembourgeois">Luxembourgeois</option>
                    <option value="Macédonien">Macédonien</option>
                    <option value="Maithili">Maithili</option>
                    <option value="Malais">Malais</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Maltais">Maltais</option>
                    <option value="Manipuri">Manipuri</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Mongol">Mongol</option>
                    <option value="Népalais">Népalais</option>
                    <option value="Sotho du Nord">Sotho du Nord</option>
                    <option value="Norvégien">Norvégien</option>
                    <option value="Norvégien (Bokmål)">Norvégien (Bokmål)</option>
                    <option value="Norvégien (Nynorsk)">Norvégien (Nynorsk)</option>
                    <option value="Occitan">Occitan</option>
                    <option value="Oriya">Oriya</option>
                    <option value="Oromo">Oromo</option>
                    <option value="Ossète">Ossète</option>
                    <option value="Pachto">Pachto</option>
                    <option value="Persan">Persan</option>
                    <option value="Polonais">Polonais</option>
                    <option value="Portugais">Portugais</option>
                    <option value="Portugais (Brésil)">Portugais (Brésil)</option>
                    <option value="Portugais (Portugal)">Portugais (Portugal)</option>
                    <option value="Pendjabi">Pendjabi</option>
                    <option value="Quechua">Quechua</option>
                    <option value="Roumain">Roumain</option>
                    <option value="Roumain (Moldavie)">Roumain (Moldavie)</option>
                    <option value="Romanche">Romanche</option>
                    <option value="Russe">Russe</option>
                    <option value="Samoan">Samoan</option>
                    <option value="Santali">Santali</option>
                    <option value="Sarde">Sarde</option>
                    <option value="Gaélique écossais">Gaélique écossais</option>
                    <option value="Serbe">Serbe</option>
                    <option value="Serbo-croate">Serbo-croate</option>
                    <option value="Shona">Shona</option>
                    <option value="Sindhi">Sindhi</option>
                    <option value="Cingalais">Cingalais</option>
                    <option value="Slovaque">Slovaque</option>
                    <option value="Slovène">Slovène</option>
                    <option value="Somali">Somali</option>
                    <option value="Sotho du Sud">Sotho du Sud</option>
                    <option value="Espagnol">Espagnol</option>
                    <option value="Espagnol (Argentine)">Espagnol (Argentine)</option>
                    <option value="Espagnol (Amérique latine)">Espagnol (Amérique latine)</option>
                    <option value="Espagnol (Mexique)">Espagnol (Mexique)</option>
                    <option value="Espagnol (Espagne)">Espagnol (Espagne)</option>
                    <option value="Espagnol (États-Unis)">Espagnol (États-Unis)</option>
                    <option value="Soundanais">Soundanais</option>
                    <option value="Swahili">Swahili</option>
                    <option value="Suédois">Suédois</option>
                    <option value="Tadjik">Tadjik</option>
                    <option value="Tamoul">Tamoul</option>
                    <option value="Tatar">Tatar</option>
                    <option value="Télougou">Télougou</option>
                    <option value="Thaï">Thaï</option>
                    <option value="Tigrigna">Tigrigna</option>
                    <option value="Tongien">Tongien</option>
                    <option value="Tswana">Tswana</option>
                    <option value="Turc">Turc</option>
                    <option value="Turkmène">Turkmène</option>
                    <option value="Twi">Twi</option>
                    <option value="Oudmourte">Oudmourte</option>
                    <option value="Ukrainien">Ukrainien</option>
                    <option value="Ourdou">Ourdou</option>
                    <option value="Ouïghour">Ouïghour</option>
                    <option value="Ouzbek">Ouzbek</option>
                    <option value="Venda">Venda</option>
                    <option value="Vietnamien">Vietnamien</option>
                    <option value="Wallon">Wallon</option>
                    <option value="Gallois">Gallois</option>
                    <option value="Frison occidental">Frison occidental</option>
                    <option value="Wolof">Wolof</option>
                    <option value="Xhosa">Xhosa</option>
                    <option value="Yiddish">Yiddish</option>
                    <option value="Yoruba">Yoruba</option>
                    <option value="Zhuang">Zhuang</option>
                    <option value="Zoulou">Zoulou</option>
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
        <li id="lng${lngId}-cv">
            <span id="cv-lng${lngId}">---</span> - <span id="cv-lng-lvl${lngId}">---</span>
        </li>
    `;

        lngForm.insertAdjacentHTML("beforeend", lngHTML);
        lngCv.insertAdjacentHTML("beforeend", lngCvHTML);
    });




    //EXPORT
    document.getElementById("exportBtn").addEventListener("click", function (e) {
        e.preventDefault();
/*
        const form = document.querySelector('form');
        if (!form.checkValidity()) {
            alert('Veuillez remplir tous les champs obligatoires');
            return;
        }
*/
        window.location.href = "export.php";
    });




    //RESET BTN
    resetBtn = document.getElementById("resetBtn");

    resetBtn.addEventListener("click", function () {
        window.location.reload();
    });


});