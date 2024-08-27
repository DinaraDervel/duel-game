import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Player = ({ canvasRef, initialPosition, color }) => {
  // Устанавливаем начальную позицию игрока
  const [playerPosition, setPlayerPosition] = useState({
    x: initialPosition.x,
    y: initialPosition.y,
  });
  const radius = 20; // Радиус игрока
  const movementSpeed = 1; // Скорость движения
  const [direction, setDirection] = useState(true); //Направление движения игрока

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    //Простейшая логика движения игрока вверх и вниз
    setPlayerPosition((prevPos) => {
      let newY = prevPos.y;
      if (direction) newY += movementSpeed;
      else newY -= movementSpeed;
      if (newY + radius > canvas.height || newY - radius < 0) {
        // Меняем направление движения при столкновении с краями Canvas
        setDirection(!direction);
      }

      return { ...prevPos, y: newY };
    });

    // Функция для отрисовки игрока
    const drawPlayer = (x, y) => {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI); // Рисуем круг (игрока)
      ctx.fillStyle = color; // Задаем цвет игрока
      ctx.fill(); // Заполняем круг цветом
      ctx.closePath();
    };

    const update = () => {
      if (direction)
        ctx.clearRect(
          playerPosition.x - radius,
          playerPosition.y - radius - movementSpeed,
          radius * 2,
          radius * 2
        );
      else
        ctx.clearRect(
          playerPosition.x - radius,
          playerPosition.y + radius - movementSpeed,
          radius * 2,
          radius * 2
        ); // Очищаем предыдущее изображение игрока
      drawPlayer(playerPosition.x, playerPosition.y); // Рисуем следующее изображение игрока
      requestAnimationFrame(update); // Запускаем следующий кадр
    };

    update();
  }, [canvasRef, playerPosition, direction, color]);

  return null; // Компонент Player не возвращает JSX, т.к. отрисовка происходит на Canvas
};

Player.propTypes = {
  canvasRef: PropTypes.object.isRequired,
  initialPosition: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
};
