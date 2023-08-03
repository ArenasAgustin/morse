export const TextArea = ({ onChange, value, placeholder }) => {
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="flex relative z-20 peer w-full h-auto min-h-[80px] px-3 py-2 text-sm bg-white border-2 border-neutral-900 placeholder:text-neutral-500 focus:text-neutral-800 focus:border-neutral-900 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
      />
      <div className="absolute inset-0 z-10 w-full h-full -m-1 duration-300 ease-out translate-x-2 translate-y-2 bg-black peer-focus:m-0 peer-focus:translate-x-0 peer-focus:translate-y-0"></div>
    </div>
  );
};
