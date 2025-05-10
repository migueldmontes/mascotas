function mostrarAnimal() {
  // Obtener el valor del input
  const animalInput = document.getElementById('animalInput').value.toLowerCase();
  const animalDiv = document.getElementById('animalDiv');
  const animalImg = document.getElementById('animalImg');
  const animalNombre = document.getElementById('animalNombre');
  const animalPie = document.getElementById('animalPie');
  
  // Limpiar el contenido anterior
  animalImg.style.display = 'none';
  animalNombre.textContent = '';
  animalPie.textContent = '';
  
  // Según el input del usuario, mostrar la imagen y el nombre del animal
  if (animalInput === 'perro') {
    animalImg.src = 'https://example.com/perro.jpg'; // Cambiar por la URL de la imagen real
    animalImg.alt = 'Perro';
    animalNombre.textContent = 'Perro';
    animalPie.textContent = 'Este es un perro, tu mejor amigo.';
    animalImg.style.display = 'block';
  } else if (animalInput === 'gato') {
    animalImg.src = 'https://example.com/gato.jpg'; // Cambiar por la URL de la imagen real
    animalImg.alt = 'Gato';
    animalNombre.textContent = 'Gato';
    animalPie.textContent = 'Este es un gato, muy independiente.';
    animalImg.style.display = 'block';
  } else if (animalInput === 'canario') {
    animalImg.src = 'https://example.com/canario.jpg'; // Cambiar por la URL de la imagen real
    animalImg.alt = 'Canario';
    animalNombre.textContent = 'Canario';
    animalPie.textContent = 'Este es un canario, canta muy bonito.';
    animalImg.style.display = 'block';
  } else {
    animalNombre.textContent = 'Animal no encontrado';
    animalPie.textContent = 'Por favor, escribe "perro", "gato" o "canario".';
  }
}
