import React from "react";

function Footer(props) {
  const { handleModal, data } = props;
  return (
    <footer className="fixed bottom-0 left-0 w-full flex items-center justify-between gap-[1rem] pr-5 ">
      <div className="absolute inset-0 z-[-1] bg-linear-to-t from-[#030615] to-[var(--transparent)]  "></div>
      <div>
        <h1 className="text-3xl font-[200] ">APOD PROJECT</h1>
        <h2 className="text-5xl font-extrabold pb-[0.5rem]">{data?.title}</h2>
      </div>
      <button
        className="cursor-pointer text-gray-400 bg-transparent  p-[1.5rem]  transition-colors duration-300 ease-in-out hover:text-white  active:scale-95"
        onClick={handleModal}
      >
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}

export default Footer;
