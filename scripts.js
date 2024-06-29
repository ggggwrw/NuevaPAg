document.addEventListener('DOMContentLoaded', function() {
    var applyButton = document.getElementById('apply-button');
    var formSection = document.getElementById('formulario-inscripcion');
    var closeButton = document.getElementById('close-button');

    applyButton.addEventListener('click', function(event) {
        event.preventDefault();
        formSection.classList.remove('hidden');
    });

    closeButton.addEventListener('click', function(event) {
        event.preventDefault();
        formSection.classList.add('hidden');
    });

    formSection.addEventListener('click', function(event) {
        if (event.target === formSection) {
            formSection.classList.add('hidden');
        }
    });
});
