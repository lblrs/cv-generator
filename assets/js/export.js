document.addEventListener("DOMContentLoaded", function () {

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