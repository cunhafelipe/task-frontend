export default function CustomImput({ label, value }) {
  return (
    <div className="custom-input-container">
      <input type="text" className="custom-input" />

      {label && (
        <label
          className={`${value.length !== "" ? "shrink" : ""} custom-input-label`}
        ></label>
      )}
    </div>
  );
}
