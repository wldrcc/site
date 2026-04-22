document.getElementById('btn-saludo').addEventListener('click', function() {
    const mensaje = document.getElementById('mensaje');
    
    if (mensaje.classList.contains('hidden')) {
        mensaje.classList.remove('hidden');
        this.textContent = 'Cerrar';
    } else {
        mensaje.classList.add('hidden');
        this.textContent = '¡Saludar!';
    }
});
