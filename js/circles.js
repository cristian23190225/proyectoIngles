// Este script crea círculos de colores dinámicamente en el fondo
document.addEventListener("DOMContentLoaded", function () {
    const numCircles = 400; // Número de círculos a crear
    const body = document.body;

    // Crear círculos en el fondo
    for (let i = 0; i < numCircles; i++) {
        let circle = document.createElement("div");
        circle.classList.add("circle");

        // Crear círculos de diferentes tamaños
        let size = Math.random() * 125 + 40; // Tamaño aleatorio entre 40px y 165px
        circle.style.width = size + "px";
        circle.style.height = size + "px";

        // Asignar colores aleatorios (en tonos oscuros)
        circle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        // Colocar los círculos en posiciones aleatorias dentro del cuerpo
        let x = Math.random() * window.innerWidth; // Posición aleatoria en el eje X
        let y = Math.random() * window.innerHeight; // Posición aleatoria en el eje Y
        circle.style.position = "absolute";
        circle.style.top = `${y}px`;
        circle.style.left = `${x}px`;

        // Agregar el círculo al documento
        body.appendChild(circle);

        // Animación de movimiento aleatorio de los círculos
        let randomDuration = Math.random() * 15 + 5; // Duración aleatoria entre 5s y 20s
        let randomDirectionX = Math.random() > 0.5 ? 1 : -1; // Dirección aleatoria para el movimiento en X
        let randomDirectionY = Math.random() > 0.5 ? 1 : -1; // Dirección aleatoria para el movimiento en Y
        let randomMoveType = Math.floor(Math.random() * 3); // Tipo de movimiento aleatorio (0: diagonal, 1: arriba-abajo, 2: izquierda-derecha)

        // Generar las animaciones para el movimiento de los círculos
        let keyframes;
        if (randomMoveType === 0) {
            // Movimiento diagonal
            keyframes = `
                0% { transform: translate(0, 0); }
                25% { transform: translate(${randomDirectionX * 100}vw, ${randomDirectionY * 100}vh); }
                50% { transform: translate(${randomDirectionX * 200}vw, ${randomDirectionY * 200}vh); }
                75% { transform: translate(${randomDirectionX * 300}vw, ${randomDirectionY * 300}vh); }
                100% { transform: translate(0, 0); }
            `;
        } else if (randomMoveType === 1) {
            // Movimiento de arriba a abajo
            keyframes = `
                0% { transform: translate(0, 0); }
                50% { transform: translate(0, 100vh); }
                100% { transform: translate(0, 0); }
            `;
        } else {
            // Movimiento de izquierda a derecha
            keyframes = `
                0% { transform: translate(0, 0); }
                50% { transform: translate(100vw, 0); }
                100% { transform: translate(0, 0); }
            `;
        }

        // Establecer la animación
        const style = document.createElement("style");
        style.innerHTML = `
            @keyframes moveCircles${i} {
                ${keyframes}
            }
        `;
        document.head.appendChild(style);

        // Aplicar la animación al círculo
        circle.style.animation = `moveCircles${i} ${randomDuration}s linear infinite`;
    }
});
