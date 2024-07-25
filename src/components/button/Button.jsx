import "./button.css";

const Button = ({ children, color }) => {
  return (
    <button className="button-container">
      <div className="background-transp" />
      <div style={{ backgroundColor: color }} className="background-pink serif">
        {children}
      </div>
    </button>
  );
};

export default Button;
