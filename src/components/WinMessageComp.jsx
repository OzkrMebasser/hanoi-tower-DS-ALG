const WinMessageComp = ({ moveCount }) => {
  return (
    <div className="win-message">
      {moveCount < 8 ? "!Excelente! " : "!Muy bien!"}

      <div className="win-subtitle">
        Completaste el juego en <span className="win-number">{moveCount}</span>{" "}
        movimientos
      </div>
    </div>
  );
};

export default WinMessageComp;
