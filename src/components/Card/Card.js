import { TextArea } from "../TextArea/TextArea";
import { useEffect } from "react";

export const Card = ({
  placeholder,
  onChange,
  value,
  text,
  onClick,
  title,
  textArea,
  id,
  show,
}) => {
  useEffect(() => {
    const button = document.getElementById(`button-${id}`);
    const copy = document.getElementById(`copy-${id}`);
    const progress = document.getElementById(`progress-${id}`);
    const check = document.getElementById(`check-${id}`);

    let loadingTime = 600;
    let blocked = false;

    button?.addEventListener("click", () => {
      if (blocked) return;
      blocked = true;

      copy.classList.add("animate-down");

      let percent = 0;
      let load = setInterval(() => {
        percent++;
        progress.style.height = percent + "%";
      }, loadingTime / 100);

      setTimeout(() => {
        clearInterval(load);

        setTimeout(() => {
          progress.classList.remove("bg-opacity-20");
          progress.classList.add("bg-opacity-0");
          check.classList.remove("w-0");
          check.classList.add("w-5");

          setTimeout(() => {
            check.classList.add("w-0");
            check.classList.remove("w-5");
            setTimeout(() => {
              reset();
            }, 1000);
          }, 1000);
        }, 500);
      }, loadingTime);
    });

    function reset() {
      progress.style.height = "0%";
      copy.classList.remove("animate-down");

      setTimeout(() => {
        progress.classList.remove("bg-opacity-0");
        progress.classList.add("bg-opacity-20");
        blocked = false;
      }, 500);
    }
  }, []);

  return (
    <div className="max-w-96 w-full lg:w-2/5 sm:w-full h-96 border-image rounded-l-none rounded-r-2xl m-4 line-height">
      <div className="relative m-0 h-full pt-11 pr-7 pb-line-height pl-80px text-2xl rounded-l-none rounded-r-2xl font-shadows bg-sheet sheet-after">
        <p className="p-0 pb-10 line-height">{title}</p>

        {textArea ? (
          <TextArea
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            show={show}
          />
        ) : (
          <span
            className={`p-0 pb-10 block line-height w-full h-3/4 overflow-y-scroll bg-shadow ${
              show === "toMorse" && text ? "font-borel" : ""
            }`}
          >
            {text ? text : "Traducción"}
          </span>
        )}

        <button
          id={`button-${id}`}
          onClick={() => onClick(textArea ? value : text)}
          className="group text-black cursor-pointer flex justify-between items-center overflow-hidden transition-all hover:glow max-w-5xl absolute top-8 right-5"
        >
          <div className="relative w-12 h-12 text-black flex justify-center items-center transition-all">
            <svg
              id={`copy-${id}`}
              className="w-4 h-4 transition-all text-black group-hover:-translate-y-1"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z" />
            </svg>

            <svg
              id={`check-${id}`}
              className="absolute z-10 w-0 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-black transition-all"
              stroke="currentColor"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              ></path>
            </svg>

            <div
              id={`progress-${id}`}
              className="absolute w-full h-0 bg-blue-500 bg-opacity-20 top-0 duration-200"
            ></div>
          </div>
        </button>
      </div>
    </div>
  );
};
