import { Button } from "../Button/Button";
import { TextArea } from "../TextArea/TextArea";
import { useEffect } from "react";

export const Card = ({ placeholder, onChange, value, text, onClick }) => {
  useEffect(() => {
    const button = document.getElementById("button");
    const copy = document.getElementById("copy");
    const progress = document.getElementById("progress");
    const check = document.getElementById("check");

    // Time for the download animation itself
    let loadingTime = 1000;
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
      }, 200);
    }
  }, []);

  return (
    <div>
      <TextArea placeholder={placeholder} onChange={onChange} value={value} />
      <div className="">
        <span className="text-3xl font-bold underline">{text}</span>
        <button
          id="button"
          className="group rounded-md shadow bg-blue-500 text-white cursor-pointer flex justify-between items-center overflow-hidden transition-all hover:glow max-w-5xl"
        >
          <div className="relative w-12 h-12 bg-white bg-opacity-20 text-white flex justify-center items-center transition-all">
            <svg
              id="copy"
              className="w-4 h-4 transition-all group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
            <svg
              id="check"
              className="absolute z-10 w-0 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div
              id="progress"
              className="absolute w-full h-0 bg-white bg-opacity-20 top-0 duration-200"
            ></div>
          </div>
          <p className="px-5">Files.zip</p>
        </button>
      </div>
    </div>
  );
};
