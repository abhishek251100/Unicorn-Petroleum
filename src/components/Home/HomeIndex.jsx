import React from "react";
import Xyz1 from "./xyz1";
import Xyz2 from "./xyz2";
import Card from "../../Common/Card";
import { HomeData } from "./HomeData";

const HomeIndex = () => {
  return (
    <div>
      {/* </Commen> */}
      {/* </Commen> */}

      <Xyz1 />
      <Xyz2 />

      <Card />

      <div>
        {HomeData.map((data) => {
          return (
            <div>
              <p>{data.id}</p>
              <h1>{data.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeIndex;
