export const TextArea = ({ onChange, value, placeholder, show }) => {
  return (
    <textarea
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={`block relative outline-none line-height border-0 w-full h-3/4 p-0 m-0 bg-transparent font-shadows text-2xl resize-none overflow-y-scroll bg-shadow ${
        show !== "toMorse" && value ? "font-borel" : ""
      }`}
    />
  );
};
