<form class="row g-3 p-2 rounded-4 overflow-y-auto h-100">

    <!-- Info personel -->
    <div class="d-flex gap-3">
        <img src="/assets/img/person.png">
        <h3> Informations</h3>
    </div>

    <hr class="bg-secondary">

    <div class="col-md-6">
        <label for="name" class="form-label">Nom et Prénom</label>
        <input type="text" class="form-control" id="name" data-target="#cv-name">
    </div>

    <div class="col-md-6">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" data-target="#cv-email">
    </div>

    <div class="col-md-6">
        <label for="tel" class="form-label">Tel</label>
        <input type="text" class="form-control" id="tel" data-target="#cv-tel">
    </div>

    <div class="col-md-6">
        <label for="birth" class="form-label">Date de naissance</label>
        <input type="date" class="form-control" id="birth" data-target="#cv-birth">
    </div>

    <div class="col-md-12">
        <label for="city" class="form-label">Ville</label>
        <input type="text" class="form-control" id="city" data-target="#cv-city">
    </div>

    <div class="col-12">
        <label for="about" class="form-label">À propos de moi</label>
        <textarea class="form-control" id="about" data-target="#cv-about"></textarea>
    </div>


    <!-- EXP -->
    <div class="row">
        <div class="d-flex gap-3 pt-5">
            <img src="/assets/img/exp.png">
            <h3>Expériences</h3>
        </div>
        <hr>
        <div id="expForm" class="row"></div>
    </div>
    <button type="button" id="expBtn" class="btn btn-primary btn-lg col-6 m-2 mt-3">Ajouter</button>


    <!-- EDUCATION -->
    <div class="row">
        <div class="d-flex gap-3 pt-5">
            <img src="/assets/img/shool.png">
            <h3 class="text-center">Éducation</h3>
        </div>
        <hr>
        <div id="schoolForm" class="row"></div>
    </div>
    <button type="button" id="schoolBtn" class="btn btn-primary btn-lg col-6 m-2 mt-3">Ajouter</button>


    <!-- SKILLS -->

        <div class="row">
        <div class="d-flex gap-3 pt-5">
            <img src="/assets/img/skills.png">
            <h3 class="text-center">Compétences</h3>
        </div>
        <hr>

        <div id="skillsForm" class="row"></div>
    </div>
    <button type="button" id="skillsBtn" class="btn btn-primary btn-lg col-6 m-2 mt-3">Ajouter</button>


    <hr>
    <div class="col-12">
        <button type="submit" class="btn btn-primary">Valider</button>
    </div>
    
</form>
