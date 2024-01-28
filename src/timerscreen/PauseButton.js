function PauseButton({ onClick }) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      className="pause-svg-button"
      viewBox="0 0 20 20"
      tabIndex="0"
      style={{
        width: '70px',
        height: '70px',
      }}
    >
      <circle cx="10" cy="10" r="10" fill="#007bff" />
      <rect x="6" y="5" width="2" height="10" fill="#121212" />
      <rect x="12" y="5" width="2" height="10" fill="#121212" />
    </svg>
  );
}

export default PauseButton;
