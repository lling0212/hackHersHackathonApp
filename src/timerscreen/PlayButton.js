function PlayButton({ onClick }) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      className="play-svg-button"
      viewBox="0 0 20 20"
      tabIndex="0"
      style={{
        width: '70px',
        height: '70px',
      }}
    >
      <circle cx="10" cy="10" r="10" fill="#007bff" />
      <polygon points="7,5 15,10 7,15" fill="#121212" />
    </svg>
  );
}

export default PlayButton;
