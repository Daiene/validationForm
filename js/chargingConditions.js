document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("dataForm")) {
        var scriptElement = document.createElement('script');
        scriptElement.src = "/js/validation/index.js";
        scriptElement.type = "module";
        document.body.appendChild(scriptElement);
    }
});
