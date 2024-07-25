import "./../input/input.css";

const Input = ({ label, id, onChange, type, name }) => {
  return (
    <div className="input-wrapper serif">
      <label htmlFor={id}>{label}</label>
      <input
        className="input-field"
        name={name}
        id={id}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
