document.addEventListener('DOMContentLoaded', function() {
    const viewfinder = document.querySelector('.camera-viewfinder');
    const flash = document.getElementById('flash');
    const randomImage = document.getElementById('random-image');
    const captureText = document.getElementById('capture-text');
    
    // Sonido de obturador
    const shutterSound = new Audio('shutter.mp3'); // Reemplaza con el sonido de obturador que desees
  
    // Lista de imágenes aleatorias (URL locales o externas)
    const images = [
      'img/imatge1.jpg',  // Reemplaza con tus propias imágenes
      'img/imatge2.jpg',
      'img/imatge3.jpg',
      'img/imatge4.jpg',
      'img/imatge5.jpg'
    ];
  
    // Evento de clic para "capturar"
    viewfinder.addEventListener('click', function() {
      // Simula el flash
      flash.style.display = 'block';
      setTimeout(() => {
        flash.style.display = 'none';
      }, 100); // Duración del flash
  
      // Reproduce el sonido de disparo
      shutterSound.play();
  
      // Seleccionar una imagen aleatoria
      const randomIndex = Math.floor(Math.random() * images.length);
      randomImage.src = images[randomIndex];
      randomImage.style.display = 'block';  // Mostrar la imagen capturada
  
      // Ocultar el texto de captura
      captureText.style.display = 'none';
    });
  });
  