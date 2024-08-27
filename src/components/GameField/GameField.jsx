import { useRef } from "react";

import PropTypes from "prop-types";
import { Player } from "../Player/Player";

export const GameField = (props) => {
  const canvasRef = useRef(null);

  return (
    <>
      <canvas ref={canvasRef} width={props.width} height={props.height} />
      <Player
        canvasRef={canvasRef}
        initialPosition={{ x: 50, y: 20 }}
        color="yellow"
      />
      <Player
        canvasRef={canvasRef}
        initialPosition={{ x: props.width - 50, y: 100 }}
        color="green"
      />
    </>
  );
};

GameField.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
