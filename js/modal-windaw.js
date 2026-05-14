async function fetchData(url) {
    try {
        const response = await fetch(url);

        // Если статус ответа 400 или выше (включая 404)
        if (!response.ok) {
            window.location.href = 'error.html';
            return;
        }

        const data = await response.json();
        return data;

    } catch (error) {
        // Обработка сетевых ошибок (сервер не отвечает)
        console.error('Network error:', error);
        window.location.href = 'error.html';
    }
}

// Пример использования на страницах index.html или barbershop.html
// fetchData('https://api.example.com/data');