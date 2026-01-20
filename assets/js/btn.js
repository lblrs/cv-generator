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


});