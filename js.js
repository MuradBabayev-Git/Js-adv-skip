document.addEventListener('DOMContentLoaded', function() {
    const redAdv = document.querySelector('.red_adv');
    const countdownElement = document.createElement('div');
    countdownElement.id = 'countdown';
    const greenClose = document.querySelector('.green_close');
    const message = document.querySelector('.message');

    greenClose.appendChild(countdownElement);

    // Показываем сообщение
    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => {
            message.style.display = 'none';
        }, 500); // Время для анимации исчезновения сообщения
    }, 4000); // Сообщение отображается 4 секунды

    // Показ рекламы через 5 секунд после исчезновения сообщения
    setTimeout(() => {
        redAdv.style.bottom = '0'; // Перемещение вверх

        let countdown = 5;
        countdownElement.textContent = countdown;

        // Логика отсчета
        const interval = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;

            if (countdown <= 0) {
                clearInterval(interval);
                countdownElement.textContent = '';
                const closeImage = document.createElement('img');
                closeImage.src = 'https://media.istockphoto.com/id/1145925821/vector/skip-advertisement-web-button.jpg?s=612x612&w=0&k=20&c=oZI7z_4exnZZhP0DCW3ybuYLYVhWfMRY-JDYJzxZZhU='; // URL изображения для кнопки закрытия
                closeImage.alt = 'Close';
                closeImage.onclick = () => {
                    redAdv.style.transform = 'translateX(-100vw)'; // Перемещение влево
                    setTimeout(() => {
                        redAdv.style.display = 'none';
                    }, 500); // Совпадает с длительностью перехода
                };
                greenClose.appendChild(closeImage);
            }
        }, 1000);
    }, 5000); // 5 секунд задержки
});
