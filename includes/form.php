<form class="row g-3 p-2 rounded-4 overflow-y-auto h-100">

    <!-- Info personel -->
    
    <div class="d-flex gap-3">
        <img src="/assets/img/person.png" alt="icon informations personnels">
        <h3> Informations</h3>
    </div>
    
    <hr>
    
    <select id="selectCv" class="my-2 bg-dark text-light text-center form-control">
        <option value="0"> Choisir le cv</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
    <div class="col-md-6">
        <label for="name" class="form-label">Nom et Prénom *</label>
        <input type="text" class="form-control bg-dark text-white" id="name" data-target="#cv-name" required>
    </div>

    <div class="col-md-6">
        <label for="email" class="form-label">Email *</label>
        <input type="email" class="form-control bg-dark text-white" id="email" data-target="#cv-email" required>
    </div>

    <div class="col-md-6">
        <label for="tel" class="form-label">Tel *</label>
        <input type="text" maxlength="10" class="form-control bg-dark text-white" id="tel" data-target="#cv-tel" required>
    </div>

    <div class="col-md-6">
        <label for="birth" class="form-label">Date de naissance *</label>
        <input type="date" class="form-control bg-dark text-white" id="birth" data-target="#cv-birth" required>
    </div>

    <div class="col-md-12">
        <label for="avatar" class="form-label">Photo</label>
        <input type="file" class="form-control bg-dark text-white" id="avatar" accept="image/*" data-target="#cv-avatar">
    </div>

    <div class="col-md-12">
        <label for="city" class="form-label">Ville *</label>
        <input type="text" maxlength="20" class="form-control bg-dark text-white" text-white id="city" data-target="#cv-city" required>
    </div>

    <div class="col-12">
        <label for="about" class="form-label">À propos de moi *</label>
        <textarea class="form-control bg-dark text-white" id="about" data-target="#cv-about" required></textarea>
    </div>


    <!-- EXP -->
    <div class="row">
        <div class="d-flex gap-3 pt-5">
            <img src="/assets/img/exp.png" alt="icone expériences">
            <h3>Expériences</h3>
        </div>
        <hr>
        <div id="expForm" class="row">

        </div>
    </div>
    <button type="button" id="expBtn" class="btn btn-primary btn-lg col-6 m-2 mt-3">Ajouter</button>


    <!-- EDUCATION -->
    <div class="row">
        <div class="d-flex gap-3 pt-5">
            <img src="/assets/img/shool.png" alt="icone éducation">
            <h3 class="text-center">Éducation</h3>
        </div>
        <hr>
        <div id="schoolForm" class="row"></div>
    </div>
    <button type="button" id="schoolBtn" class="btn btn-primary btn-lg col-6 m-2 mt-3">Ajouter</button>


    <!-- SKILLS -->

    <div class="row">
        <div class="d-flex gap-3 pt-5">
            <img src="/assets/img/skills.png" alt="icone compétences">
            <h3 class="text-center">Compétences</h3>
        </div>
        <hr>

        <div id="skillsForm" class="row"></div>
    </div>
    <button type="button" id="skillsBtn" class="btn btn-primary btn-lg col-6 m-2 mt-3">Ajouter</button>


    <!-- LNG -->

    <div class="row">
        <div class="d-flex gap-3 pt-5">
            <img src="/assets/img/lng.png" class="pb-1" alt="icone langues">
            <h3 class="text-center">Langues</h3>
        </div>
        <hr>

        <div id="lngForm" class="col-md-12"></div>

    </div>
    <button type="button" id="lngBtn" class="btn btn-primary btn-lg col-6 m-2 mt-3">Ajouter</button>



    <div class="col-12 mt-5">
        <button id="exportBtn" type="submit" class="btn btn-success col-md-8">Télécahrger PDF</button>
        <button id="resetBtn" type="submit" class="btn btn-outline-success">Reset</button>
    </div>

</form>