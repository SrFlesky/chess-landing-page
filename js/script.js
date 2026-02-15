function scrollSlider(direction) {
    const container = document.getElementById('slidesContainer');
    if (!container) return; // Por si acaso no encuentra el elemento
    
    const slideWidth = container.clientWidth; // Ancho de cada slide
    
    // Scroll suave al siguiente slide
    container.scrollBy({
        left: direction * slideWidth,
        behavior: 'smooth'
    });
}