<form class="row g-3 p-2 rounded-4 overflow-y-auto h-100">

    <!-- Info personel -->
    <div class="d-flex gap-3">
        <img src="/assets/img/person.png">
        <h3> Informations</h3>
    </div>

    <hr class="bg-secondary">

    <div class="col-md-6">
        <label for="name" class="form-label">Nom et Prénom</label>
        <input type="text" class="form-control" id="name">
    </div>

    <div class="col-md-6">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email">
    </div>

    <div class="col-md-6">
        <label for="tel" class="form-label">Tel</label>
        <input type="text" class="form-control" id="tel">
    </div>

    <div class="col-md-6">
        <label for="birth" class="form-label">Date de naissance</label>
        <input type="date" class="form-control" id="birth">
    </div>

    <div class="col-md-6">
        <label for="city" class="form-label">Ville</label>
        <input type="text" class="form-control" id="city">
    </div>

    <div class="col-md-6">
        <label for="zip" class="form-label">Code postale</label>
        <input type="text" class="form-control" id="zip">
    </div>

    <div class="col-md-12">
        <label for="country">Pays</label>
        <input type="text" class="form-control" id="country">
    </div>

    <div class="col-12">
        <label for="about" class="form-label">À propos de moi</label>
        <textarea class="form-control" id="about"></textarea>
    </div>



    <!-- EXP -->
    <div id="expContainer" class="row">

        <div class="d-flex gap-3 pt-5">
            <img src="/assets/img/exp.png">
            <h3>Expériences</h3>
        </div>
        <hr>

        <div class="col-md-6">
            <label for="jobTitle" class="form-label">Poste</label>
            <input type="text" class="form-control" id="jobTitle">
        </div>

        <div class="col-md-6">
            <label for="company" class="form-label">Entreprise</label>
            <input type="text" class="form-control" id="company">
        </div>

        <div class="col-md-6 mt-3">
            <label for="startDate" class="form-label">Date de début</label>
            <input type="date" class="form-control" id="startDate">
        </div>

        <div class="col-md-6 mt-3">
            <label for="endDate" class="form-label">Date de fin</label>
            <input type="date" class="form-control" id="endDate">
        </div>

        <div class="col-md-12 mt-3">
            <label for="jobDescription" class="form-label">Missions</label>
            <textarea class="form-control text-start" id="jobDescription"></textarea>
        </div>

    </div>
        <button type="button" id="expBtn" class="btn btn-primary btn-lg col-6 m-auto mt-3 ">Ajouter</button>



    <!-- EDUCATION -->
    <div id="shoolContainer" class="row">
        <div class="d-flex gap-3 pt-5">
            <img src="/assets/img/shool.png">
            <h3 class="text-center">Éducation</h3>
        </div>
        <hr>

        <div class="col-md-6">
            <label for="diplome" class="form-label">Diplôme</label>
            <input type="text" class="form-control" id="diplome">
        </div>

        <div class="col-md-6">
            <label for="school" class="form-label">Établissement</label>
            <input type="text" class="form-control" id="school">
        </div>

        <div class="col-md-6 mt-3">
            <label for="schoolStartDate" class="form-label">Date de début</label>
            <input type="date" class="form-control" id="schoolStartDate">
        </div>

        <div class="col-md-6 mt-3">
            <label for="schoolEndDate" class="form-label">Date de fin</label>
            <input type="date" class="form-control" id="schoolEndDate">
        </div>

        <div class="col-md-12 mt-3">
            <label for="schoolbDescription" class="form-label">Description</label>
            <textarea class="form-control text-start" id="schoolDescription"></textarea>
        </div>

    </div>
        <button type="button" id="schoolBtn" class="btn btn-primary btn-lg col-6 m-auto mt-3 ">Ajouter</button>



    <!-- SKILLS -->
    <div class="d-flex gap-3 pt-5">
        <img src="/assets/img/skills.png">
        <h3 class="text-center">Compétences</h3>
    </div>
    <hr>

    <div class="col-md-12">
        <label for="skill" class="form-label">Compétence</label>
        <textarea class="form-control" id="skill"></textarea>
    </div>
    <button type="button" class="btn btn-primary col-3 ">+</button>


    <div class="col-md-12">
        <label for="lng" class="form-label">Langues</label>
        <textarea class="form-control" id="lng"></textarea>
    </div>
    <button type="button" class="btn btn-primary col-3">+</button>

    <div class="col-md-12">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description"></textarea>
    </div>
    <button type="button" class="btn btn-primary col-3">+</button>









    <div class="col-12">
        <button type="submit" class="btn btn-primary">Valider</button>
    </div>

</form>