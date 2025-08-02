import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FGridSection } from "../Data/data";
import Button from "@mui/material/Button";
export default function StrengthsSection() {
  return (
    <section className="pt-12 px-6 md:px-[180px] text-center">
      <h2 className="text-4xl font-bold text-gray-900">{FGridSection.heading}</h2>
      <p className="text-3xl text-800 mt-2 mb-8">{FGridSection.subheading}</p>

      <div className="grid md:grid-cols-3 gap-4">
        {FGridSection.cards.map((card, index) => (
          <div
            key={index}
            className="border border-[#EDA94E] rounded-xl p-6 flex flex-col items-center shadow-sm hover:shadow-md transition"
          >
            <span className="material-icons text-orange-500 text-5xl mb-4 pb-26 pt-20">{card.icon}</span>
            <h3 className="font-semibold text-[24px] leading-[120%] mb-2">{card.title}</h3>
            <p className="text-gray-600 text-lg pb-[40px]">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
      <button
  variant="contained"
  className="!bg-[#EDA94E] !hover:bg-[#EDA94E] text-white font-medium rounded-3xl px-8 py-3 normal-case flex items-center gap-2 align"
>

    {/* 
    <Button
  variant="contained"
  sx={{
    backgroundColor: "#F19920",
    borderRadius: "9999px", // rounded-full
    px: 4,
    py: 1.5,
    fontWeight: 500,
    textTransform: "none", // normal-case
    display: "flex",
    alignItems: "center",
    gap: "8px",
    "&:hover": {
      backgroundColor: "#d9861b"
    }
  }}
>
    */}


  {FGridSection.buttonText} <span className="text-lg ml-1">→</span>
  
</button>
      </div>
    </section>
  );
}
