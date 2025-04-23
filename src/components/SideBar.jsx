import React from "react";

export default function SideBar(props) {
  const { handleModal, data } = props;
  return (
    <div className="fixed inset-0 flex flex-col z-10 sm:relative sm:inset-auto sm:min-w-[30%] sm:max-h-screen sm:shadow-[0_0_40px_1px_#030615]">
      {/* Fondo opcional con gradiente */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#030615] to-transparent"></div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#030615] opacity-0 z-10 sm:right-0 sm:left-auto sm:w-screen"
        onClick={handleModal}
      ></div>

      {/* Contenido del Sidebar */}
      <div className="relative z-20 flex flex-col gap-4 p-4 overflow-y-scroll h-full w-4/5 max-w-[800px] ml-auto bg-[#030615] sm:ml-0 sm:w-full">
        <h2 className="font-extralight text-[1.4rem]">{data?.title}</h2>

        <div className="flex-1 flex flex-col gap-2">
          <p className="text-[1.1rem] font-extralight">{data?.date}</p>
          <p className="text-gray-400 text-lg">{data?.explanation}</p>
        </div>

        <button
          className="bg-transparent text-white border-none outline-none mr-auto cursor-pointer transition-opacity duration-200 hover:opacity-70"
          onClick={handleModal}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
