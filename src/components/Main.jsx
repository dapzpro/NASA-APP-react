import React from "react";

function Main(props) {
  const { data } = props;
  return (
    <div className="flex flex-col max-h-screen">
      <img
        src={data?.hdurl}
        alt={data?.title || "NASA Image"}
        className="w-full h-full flex-1 object-cover"
      />
    </div>
  );
}

export default Main;
