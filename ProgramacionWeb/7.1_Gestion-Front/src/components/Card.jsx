import { CircleArrowUp, CircleArrowDown } from "lucide-react";
import React from "react";

const colorClasses = {
  sky: {
    textStrong: "text-sky-600",
    textLight: "text-sky-400",
    bgLight: "bg-sky-900/20",
    iconBg: "bg-sky-700",
  },
  rose: {
    textStrong: "text-rose-600",
    textLight: "text-rose-400",
    bgLight: "bg-rose-900/20",
    iconBg: "bg-rose-700",
  },
};

const Card = ({
  type,
  color = "sky",
  description = "Descripción",
  category = "Categoría",
  amount = 1000,
  date = "05/06/2025",
}) => {

  const colors = colorClasses[color] || colorClasses.sky;

  return (
    <li
      className={`p-4 bg-zinc-900 rounded-xl shadow-md flex justify-between items-center lg:w-7/10 hover:shadow-lg transition-shadow duration-300`}
    >
      <div className="flex flex-col gap-1 max-w-[65%]">
        <div className="flex items-center gap-3">
          <span
            className={`${colors.iconBg} p-2 rounded-full flex items-center justify-center`}
          >
            {type === "Ingreso" ? (
              <CircleArrowUp size={28} strokeWidth={2.5} className="text-white" />
            ) : (
              <CircleArrowDown size={28} strokeWidth={2.5} className="text-white" />
            )}
          </span>
          <p className={`text-2xl font-semibold ${colors.textStrong} truncate`}>
            {description}
          </p>
        </div>
        <p className="text-sm text-stone-400">{category}</p>
        
      </div>

      <div className="text-right flex flex-col items-end justify-center gap-1 min-w-[100px]">
        <p className={`text-xl font-bold ${colors.textLight}`}>
          ${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </p>
        <p className="text-sm text-stone-400">{date}</p>
      </div>
    </li>
  );
};

export default Card;
