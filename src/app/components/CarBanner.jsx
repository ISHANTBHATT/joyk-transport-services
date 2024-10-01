import React from "react";

function CarBanner() {
  return (
    <div
      className="bg-[#fdeeec] p-20"
      style={{
        backgroundImage: 'url("/images/bg-download.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    ></div>
  );
}

export default CarBanner;
