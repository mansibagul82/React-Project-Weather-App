import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, items }) {
  return (
    <div>
      <div className="flex flex-row items-center justify-between text-white">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;