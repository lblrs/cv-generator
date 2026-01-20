document.addEventListener("DOMContentLoaded", function () {






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
    


    //RESET BTN
    resetBtn = document.getElementById("resetBtn");

    resetBtn.addEventListener("click", function () {
        window.location.reload();
    });


    

     //EXPORT
    document.getElementById("exportBtn").addEventListener("click", function () {

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
    });

});