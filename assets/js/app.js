document.addEventListener("DOMContentLoaded", function () {

    // FORM
    //about
    const name = document.getElementById("name");
    const about = document.getElementById("about");
    const email = document.getElementById("email");
    const tel = document.getElementById("tel");
    const birth = document.getElementById("birth");
    const city = document.getElementById("city");
    const zip = document.getElementById("zip");
    const country = document.getElementById("country");

    //exp
    const jobTitle = document.getElementById("jobTitle");
    const company = document.getElementById("company");
    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");
    const jobDescription = document.getElementById("jobDescription");

    //school
    const diplome = document.getElementById("diplome");
    const school = document.getElementById("school");
    const schoolStartDate = document.getElementById("schoolStartDate");
    const schoolEndDate = document.getElementById("schoolEndDate");
    const schoolDescription = document.getElementById("schoolDescription");



    // CV
    //about
    const cvName = document.getElementById("cv-name");
    const cvAbout = document.getElementById("cv-about");
    const cvEmail = document.getElementById("cv-email");
    const cvTel = document.getElementById("cv-tel");
    const cvBirth = document.getElementById("cv-birth");
    const cvAddress = document.getElementById("cv-address");

    //exp
    const cvJobTitle = document.getElementById("cv-jobTitle");
    const cvCompany = document.getElementById("cv-company");
    const cvStartDate = document.getElementById("cv-startDate");
    const cvEndDate = document.getElementById("cv-endDate");
    const cvJobDescription = document.getElementById("cv-jobDescription");

    //shool
    const cvDiplome = document.getElementById("cv-diplome");
    const cvschool = document.getElementById("cv-school");
    const cvschoolStartDate = document.getElementById("cv-schoolStartDate");
    const cvschoolEndDate = document.getElementById("cv-schoolEndDate");
    const cvschoolDescription = document.getElementById("cv-schoolDescription");

   
    
    
    // EVENT
    //about
    name.addEventListener("input", updateCV);
    about.addEventListener("input", updateCV);
    email.addEventListener("input", updateCV);
    tel.addEventListener("input", updateCV);
    birth.addEventListener("input", updateCV);
    city.addEventListener("input", updateCV);
    zip.addEventListener("input", updateCV);
    country.addEventListener("input", updateCV);
    
    //exp
    jobTitle.addEventListener("input", updateCV);
    company.addEventListener("input", updateCV);
    startDate.addEventListener("input", updateCV);
    endDate.addEventListener("input", updateCV);
    jobDescription.addEventListener("input", updateCV);

    //shool
    diplome.addEventListener("input", updateCV);
    school.addEventListener("input", updateCV);
    schoolStartDate.addEventListener("input", updateCV);
    schoolEndDate.addEventListener("input", updateCV);
    schoolDescription.addEventListener("input", updateCV);
    
    
    
    
    // FUNCTIONS
    function updateCV() {

        //about
        cvName.textContent = name.value;
        cvAbout.textContent = about.value;
        cvEmail.textContent = email.value;
        cvTel.textContent = tel.value;
        cvBirth.textContent = birth.value;
        cvAddress.textContent = `${city.value} ${zip.value} ${country.value}`;

        //exp
        cvJobTitle.textContent = jobTitle.value;
        cvCompany.textContent = company.value;
        cvStartDate.textContent = startDate.value;
        cvEndDate.textContent = endDate.value;
        cvJobDescription.textContent = jobDescription.value;

        //shool
        cvDiplome.textContent = diplome.value;
        cvschool.textContent = school.value;
        cvschoolStartDate.textContent = schoolStartDate.value;
        cvschoolEndDate.textContent = schoolEndDate.value;
        cvschoolDescription.textContent = schoolDescription.value;
    };


    

    //BTN
    //EXP
    let expContainer = document.getElementById("expContainer")
    const expBtn = document.getElementById("expBtn");
    let expCount = 0;
    let id = 0;

    expBtn.addEventListener("click", function () {
        expCount++;
        id++;

        if (expCount <= 3) {

            const expHTML =
                `<hr class="mt-5 mb-5">
                <div class="col-md-6">
                    <label for="jobTitle" class="form-label">Poste</label>
                    <input type="text" class="form-control" id="jobTitle-${id}">
                </div>

                <div class="col-md-6">
                    <label for="company" class="form-label">Entreprise</label>
                    <input type="text" class="form-control" id="company-${id}">
                </div>

                <div class="col-md-6 mt-3">
                    <label for="startDate" class="form-label">Date de début</label>
                    <input type="date" class="form-control" id="startDate-${id}">
                </div>

                <div class="col-md-6 mt-3">
                    <label for="endDate" class="form-label">Date de fin</label>
                    <input type="date" class="form-control" id="endDate-${id}">
                </div>

                <div class="col-md-12 mt-3">
                    <label for="jobDescription" class="form-label">Missions</label>
                    <textarea class="form-control text-start" id="jobDescription-${id}"></textarea>
                </div>`;

            expContainer.insertAdjacentHTML("beforeend", expHTML);

        } else if (expCount == 4) {
            expBtn.disable = true;
        };

    });


    //school
    let shoolContainer = document.getElementById("shoolContainer");
    const schoolBtn = document.getElementById("schoolBtn");
    let shoolCount = 0;
    let shoolId = 0;

    schoolBtn.addEventListener("click", function () {
        shoolCount++;
        shoolId++;

        if (shoolCount <= 3) {
            const shoolHTML =
                `<hr class="mt-5 mb-5">
                <div class="col-md-6">
                    <label for="diplome" class="form-label">Diplôme</label>
                    <input type="text" class="form-control" id="diplome-${shoolId}">
                </div>

                <div class="col-md-6">
                    <label for="school" class="form-label">Établissement</label>
                    <input type="text" class="form-control" id="school-${shoolId}">
                </div>

                <div class="col-md-6 mt-3">
                    <label for="schoolStartDate" class="form-label">Date de début</label>
                    <input type="date" class="form-control" id="schoolStartDate-${shoolId}">
                </div>

                <div class="col-md-6 mt-3">
                    <label for="schoolEndDate" class="form-label">Date de fin</label>
                    <input type="date" class="form-control" id="schoolEndDate-${shoolId}">
                </div>

                <div class="col-md-12 mt-3">
                    <label for="schoolbDescription" class="form-label">Description</label>
                    <textarea class="form-control text-start" id="schoolDescription-${shoolId}"></textarea>
                </div>`

            shoolContainer.insertAdjacentHTML("beforeend", shoolHTML)

        } else if (shoolCount == 4) {
            shoolBtn.disable = true;
        };

    });

});