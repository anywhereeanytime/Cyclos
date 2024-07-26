import "./button.css";

const Button = ({ children, color, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className="button-container"
    >
      <div className="background-transp" />
      <div style={{ backgroundColor: color }} className="background-pink serif">
        {children}
      </div>
    </button>
  );
};

export default Button;
