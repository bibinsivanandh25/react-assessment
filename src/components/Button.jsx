const Button = ({ children, style, disabled, type }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`rounded-md bg-cyan-500 px-4 py-3 text-sm font-medium text-white hover:bg-cyan-400 focus:bg-cyan-400 focus:outline-none disabled:cursor-not-allowed ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
