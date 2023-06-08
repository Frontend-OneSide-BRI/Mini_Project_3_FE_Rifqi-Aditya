const Button = ({ btnText = "SIGN UP NOW" }) => {
  return (
    <div className="bg-stone-700 rounded-lg">
      <p className="text-white font-semibold px-6 py-3 text-sm">{btnText}</p>
    </div>
  );
};

export default Button;
