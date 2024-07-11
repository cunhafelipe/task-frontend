import "./CustomButton.scss";

export default function CustomButton({ onClick, children }) {
  return (
    <div className="custom-button-container" onClick={onClick}>
      {children}
    </div>
  );
}
