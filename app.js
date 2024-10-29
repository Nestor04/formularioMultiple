let currentPage = 1;
const formPages = document.querySelectorAll('.form-page');
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// Datos para guardar
const formData = {
    datosPersonales: {},
    familiares: [],
    condiciones: [],
    internamientos: []
};

// Navegacion entre páginas
function showPage(pageNumber) {
    formPages.forEach((page, index) => {
        page.style.display = (index + 1 === pageNumber) ? 'block' : 'none';
    });
    prevBtn.style.display = (pageNumber === 1) ? 'none' : 'inline';
    nextBtn.innerText = (pageNumber === formPages.length) ? 'Finalizar' : 'Siguiente';
}

function navigatePages(step) {
    if (step === 1 && currentPage === formPages.length) {
        guardarDatos();
    } else {
        currentPage += step;
        showPage(currentPage);
    }
}

// Funcion para agregar los datos en cada seccion
function agregarFamiliar() {
    const nombre = document.getElementById("familiarNombre").value;
    const parentesco = document.getElementById("familiarParentesco").value;
    const edad = document.getElementById("familiarEdad").value;
    
    if (nombre && parentesco && edad) {
        formData.familiares.push({ nombre, parentesco, edad });
        document.getElementById("familiaresList").innerHTML += `<p>${nombre} / ${parentesco} / ${edad}</p>`;
    }
}

function agregarEnfermedad() {
    const enfermedad = document.getElementById("enfermedad").value;
    const tiempo = document.getElementById("tiempoEnfermedad").value;
    
    if (enfermedad && tiempo) {
        formData.condiciones.push({ enfermedad, tiempo });
        document.getElementById("condicionesList").innerHTML += `<p>${enfermedad} - ${tiempo} años</p>`;
    }
}

function agregarInternamiento() {
    const fecha = document.getElementById("internamientoFecha").value;
    const centro = document.getElementById("centroMedico").value;
    const diagnostico = document.getElementById("diagnostico").value;
    
    if (fecha && centro && diagnostico) {
        formData.internamientos.push({ fecha, centro, diagnostico });
        document.getElementById("internamientosList").innerHTML += `<p>${fecha} / ${centro} / ${diagnostico}</p>`;
    }
}

// Aca se muestra los datos guardado en json
function guardarDatos() {
    formData.datosPersonales = {
        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value
    };
    document.getElementById("jsonOutput").innerText = JSON.stringify(formData, null, 2);
}

// Mostrar la pagina al cargar
showPage(currentPage);
