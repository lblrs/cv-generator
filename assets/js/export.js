document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("exportBtn").addEventListener("click", function (e) {

        const formName = document.getElementById("name").value.trim();
        const formEmail = document.getElementById("email").value.trim();
        const formTel = document.getElementById("tel").value.trim();
        const formBirth = document.getElementById("birth").value.trim();
        const formCity = document.getElementById("city").value.trim();
        const formAbout = document.getElementById("about").value.trim();

        //VERIFICATION
        if (!formName || !formEmail || !formTel || !formBirth || !formCity || !formAbout) {
            alert("Veuillez renseigner tous les champs");
            return;
        };


        //EXPORT
        const html = document.getElementById('cv').innerHTML;

        fetch('export.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'html=' + encodeURIComponent(html)
        })
            .then(r => r.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'cv.pdf';
                a.click();
            });


        e.preventDefault();


    });


});