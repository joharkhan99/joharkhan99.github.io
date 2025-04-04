import React from "react";
import { ProjectProcess } from "../../data";

interface Props {
  process?: ProjectProcess[] | [];
}

const TimeLine = ({ process }: Props) => {
  return (
    <div className="w-full md:p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {process?.map((p: ProjectProcess, index) => {
          return (
            <div
              className={`bg-[#333] rounded-lg transform transition-all duration-150 hover:scale-105 shadow-xl p-4 ${
                (index + 1) % 2 != 0 && "md:mt-20"
              } h-fit`}
              key={`process-${index}`}
            >
              <div className="mx-auto flex justify-center items-center bg-[#95C11F] text-sm text-[#154633] h-20 w-[130px] font-bold uppercase animate-blob text-center">
                {index + 1}.
                <br />
                {p.name}
              </div>
              <p className="text-sm mt-5 font-normal">{p.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLine;
