document.addEventListener('DOMContentLoaded', function() {
    const svgInput = document.getElementById('svg-input');
    const svgTextarea = document.getElementById('svg-textarea');
    const svgPreview = document.getElementById('svg-preview');
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const convertBtn = document.getElementById('convert-btn');
    const pngResult = document.getElementById('png-result');
    const downloadLink = document.getElementById('download-link');

    // Обработка загрузки SVG файла
    svgInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file && file.type === 'image/svg+xml') {
            const reader = new FileReader();
            reader.onload = function(e) {
                svgTextarea.value = e.target.result;
                updatePreview(e.target.result);
            };
            reader.readAsText(file);
        }
    });

    // Обновление предпросмотра при изменении текста
    svgTextarea.addEventListener('input', function() {
        updatePreview(this.value);
    });

    function updatePreview(svgContent) {
        if (!svgContent) return;
        
        try {
            // Очищаем предпросмотр
            svgPreview.innerHTML = '';
            
            // Создаем blob из SVG
            const blob = new Blob([svgContent], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            
            // Создаем изображение для предпросмотра
            const img = document.createElement('img');
            img.src = url;
            img.style.maxWidth = '100%';
            img.onload = function() {
                URL.revokeObjectURL(url);
            };
            
            svgPreview.appendChild(img);
        } catch (error) {
            console.error('Ошибка при отображении SVG:', error);
            svgPreview.innerHTML = '<p style="color: red;">Ошибка: неверный SVG формат</p>';
        }
    }

    // Конвертация SVG в PNG
    convertBtn.addEventListener('click', async function() {
        const svgContent = svgTextarea.value;
        if (!svgContent) {
            alert('Пожалуйста, введите SVG код или загрузите файл');
            return;
        }

        const width = parseInt(widthInput.value) || 800;
        const height = parseInt(heightInput.value) || 600;

        try {
            // Создаем canvas для конвертации
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            canvas.width = width;
            canvas.height = height;

            // Создаем изображение из SVG
            const svgBlob = new Blob([svgContent], { type: 'image/svg+xml' });
            const svgUrl = URL.createObjectURL(svgBlob);
            
            const img = new Image();
            
            img.onload = function() {
                // Очищаем canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Рисуем SVG на canvas
                ctx.drawImage(img, 0, 0, width, height);
                
                // Конвертируем в PNG
                const pngUrl = canvas.toDataURL('image/png');
                
                // Показываем результат
                pngResult.src = pngUrl;
                pngResult.style.display = 'block';
                
                // Настраиваем ссылку для скачивания
                downloadLink.href = pngUrl;
                downloadLink.download = 'converted-image.png';
                downloadLink.style.display = 'inline-block';
                
                // Очищаем URL
                URL.revokeObjectURL(svgUrl);
            };
            
            img.onerror = function() {
                alert('Ошибка: неверный SVG формат');
                URL.revokeObjectURL(svgUrl);
            };
            
            img.src = svgUrl;

        } catch (error) {
            console.error('Ошибка конвертации:', error);
            alert('Произошла ошибка при конвертации: ' + error.message);
        }
    });

    // Автоматическое обновление высоты при изменении ширины
    widthInput.addEventListener('input', function() {
        if (svgPreview.firstChild && svgPreview.firstChild.naturalWidth) {
            const aspectRatio = svgPreview.firstChild.naturalHeight / svgPreview.firstChild.naturalWidth;
            heightInput.value = Math.round(parseInt(this.value) * aspectRatio);
        }
    });
});