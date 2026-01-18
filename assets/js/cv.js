document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener("input", function (e) {
        const targetSelector = e.target.getAttribute("data-target");

        if (targetSelector) {
            const targetElement = document.querySelector(targetSelector);

            if (targetElement) {
                targetElement.textContent = e.target.value.trim() || "---";
            };
        };
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
            <div class="col-md-6">
                <label for="jobTitle${expId}" class="form-label">Poste</label>
                <input type="text" 
                    class="form-control" 
                    id="jobTitle${expId}" 
                    data-target="#cv-jobTitle${expId}">
            </div>

            <div class="col-md-6">
                <label for="company${expId}" class="form-label">Entreprise</label>
                <input type="text" 
                    class="form-control" 
                    id="company${expId}" 
                    data-target="#cv-company${expId}">
            </div>

            <div class="col-md-6 mt-3">
                <label for="startDate${expId}" class="form-label">Date de début</label>
                <input type="date" 
                    class="form-control" 
                    id="startDate${expId}" 
                    data-target="#cv-startDate${expId}">
            </div>

            <div class="col-md-6 mt-3">
                <label for="endDate${expId}" class="form-label">Date de fin</label>
                <input type="date" 
                    class="form-control" 
                    id="endDate${expId}" 
                    data-target="#cv-endDate${expId}">
            </div>

            <div class="col-md-12 mt-3">
                <label for="jobDescription${expId}" class="form-label">Missions</label>
                <textarea class="form-control text-start" 
                        id="jobDescription${expId}" 
                        data-target="#cv-jobDescription${expId}"></textarea>
            </div>

            <button id="expDelBrn${expId}" type="button" class="btn btn-outline-danger col-md-6 m-auto mt-3">Supprimer</button>
            <hr class="mt-3">
        `;

        const expCVHTML = `
            <div class="mb-3">
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
            <div class="col-md-6">
                <label for="diplome${schoolId}" class="form-label">Diplôme</label>
                <input type="text" 
                    class="form-control" 
                    id="diplome${schoolId}"
                    data-target="#cv-diplome${schoolId}">
            </div>

            <div class="col-md-6">
                <label for="school${schoolId}" class="form-label">Établissement</label>
                <input type="text" 
                    class="form-control" 
                    id="school${schoolId}"
                    data-target="#cv-school${schoolId}">
            </div>

            <div class="col-md-6 mt-3">
                <label for="schoolStartDate${schoolId}" class="form-label">Date de début</label>
                <input type="date" 
                    class="form-control" 
                    id="schoolStartDate${schoolId}"
                    data-target="#cv-schoolStartDate${schoolId}">
            </div>

            <div class="col-md-6 mt-3">
                <label for="schoolEndDate${schoolId}" class="form-label">Date de fin</label>
                <input type="date" 
                    class="form-control" 
                    id="schoolEndDate${schoolId}"
                    data-target="#cv-schoolEndDate${schoolId}">
            </div>

            <div class="col-md-12 mt-3">
                <label for="schoolDescription${schoolId}" class="form-label">Description</label>
                <textarea class="form-control text-start" 
                    id="schoolDescription${schoolId}"
                    data-target="#cv-schoolDescription${schoolId}"></textarea>
            </div>
            <button id="schoolDelBtn${schoolId}" type="button" class="btn btn-outline-danger col-md-6 m-auto mt-3">Supprimer</button>

            <hr class="mt-3">
        `;

        const schoolCvHTML = `
            <div class="mb-3">
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
    const skillsCv = document.getElementById("cv-skill");
    const skillsBtn = document.getElementById("skillsBtn");
    let skillsId = 0;

    skillsBtn.addEventListener("click", function() {
        skillsId++;

        skillsHTML = 
                    `<div id="skillsForm" class="col-md-12">
                    <label for="skill" class="form-label">Compétence</label>
                    <textarea class="form-control" id="skill" data-target="#cv-skill${skillsId}"></textarea>
                    <button id="skillsDelBtn${skillsId}" type="button" class="btn btn-outline-danger col-md-6 m-auto mt-3">Supprimer</button>

                    </div>`


        skillsCvHTML = `<li>---</li>`;

        skillsForm.insertAdjacentHTML("beforeend", skillsHTML);
        skillsCv.insertAdjacentHTML("beforeend", skillsCvHTML);
    });

});