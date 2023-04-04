import './Button.css';

const Button = ({ btnText, onClick }) => {
  return (
    <button className="more-btn" onClick={onClick}>
      <span>{btnText}</span>
    </button>
  );
};
export default Button;
