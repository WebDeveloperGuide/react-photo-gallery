function Button({ text, active, handleSelectCategory }) {
  return (
    <button
      className={`font-medium py-2 px-4 m-1 rounded-full ${
        active
          ? "bg-[#4da771] text-white"
          : "bg-[#ffffff] border border-[#a1cfbd]"
      }`}
      onClick={() => handleSelectCategory(text.toLowerCase())}
    >
      {text}
    </button>
  );
}

export default Button;
