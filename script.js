// Función para mostrar una sección y ocultar las demás

function mostrarSeccion(nombre) {
  const secciones = ['cyber-divas', 'quienes-son', 'contacto', 'testimonios'];

  // Oculta todas las secciones
  secciones.forEach(sec => {
    const seccion = document.getElementById(sec);
    if (seccion) {
      seccion.style.display = 'none';
    }
  });


  // Muestra la sección seleccionada
  const contenedor = document.getElementById(nombre);

  // Si ya se cargó una vez, solo mostrarla
  if (contenedor.dataset.cargado === 'true') {
    contenedor.style.display = 'block';
    return;
  }

  // Cargar contenido del HTML correspondiente
  fetch(`secciones/${nombre}.html`)
    .then(response => response.text())
    .then(data => {
      contenedor.innerHTML = data;
      contenedor.dataset.cargado = 'true';
      contenedor.style.display = 'block';
    });
}