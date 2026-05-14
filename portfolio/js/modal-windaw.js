// Функція для перевірки, чи "існує" шлях (приклад для клієнтської сторони)
window.addEventListener('load', () => {
    console.log("404 handler active");
    
    // Ефект появи контенту
    const content = document.querySelector('.content');
    content.style.opacity = '0';
    content.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        content.style.opacity = '1';
    }, 100);
});

// Якщо ви використовуєте звичайний хостинг, додайте це у файл .htaccess:
// ErrorDocument 404 /404.html