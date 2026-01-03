export const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="transition-all after:transition-all bg-gray-500 border-gray-500 border-8 rounded-md py-2.5 px-5 text-xl z-10 after:absolute after:content-['⇄'] btn-hover m-3 relative overflow-hidden text-white line"
    >
      <span className="reltive transition-all">{children}</span>
    </button>
  );
};

// .icon-slide-left {
//   @extend %bg;
//   @extend %c;
//   &::after {
//     @extend %pc;
//     content: "👨‍🚀";
//     position: absolute;
//     left: -20%;
//     transition: 0.25s ease;
//   }
//   span {
//     transition: 0.25s ease;
//   }
//   &:hover {
//     span {
//       margin-left: 20px;
//     }
//     &:after {
//       left: 20px;
//     }
//   }
// }

// %bg {
//   color: #FFF;
//   background: $c;
//   border-color: $c;
// }

// %c {
//   position: relative;
//   overflow: hidden;
// }

// %pc {
//   transform: translate(-50%, -50%);
//   left: 50%;
//   top: 50%;
// }
