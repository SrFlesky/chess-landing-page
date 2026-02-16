function scrollSlider(direction) {
    const container = document.getElementById('slidesContainer');
    if (!container) return;
    
    const slideWidth = container.clientWidth;
    
    container.scrollBy({
        left: direction * slideWidth,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function() {
    
    var seccionStats = document.querySelector('.stats-section');
    
    var observador = new IntersectionObserver(function(entradas) {
        entradas.forEach(function(entrada) {
            if (entrada.isIntersecting) {
                
                var numeros = entrada.target.querySelectorAll('.stat-number');
                
                numeros.forEach(function(numero) {
                    var final = parseInt(numero.dataset.count);
                    
                    var contador = 0;
                    var incremento;

                    if (final > 1000) {
                        incremento = 50;
                    } else if (final > 100) {
                        incremento = 10;
                    } else {
                        incremento = 1;
                    }
                    
                    var intervalo = setInterval(function() {
                        contador = contador + incremento;
                        
                        if (contador >= final) {
                            numero.textContent = final;
                            clearInterval(intervalo);
                        } else {
                            numero.textContent = contador;
                        }
                    }, 30);
                });
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.3 });
    
    observador.observe(seccionStats);
});