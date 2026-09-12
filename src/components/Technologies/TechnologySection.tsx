import React, { use, useState } from "react";
import type { IDataType } from "../../type";
import TechnologyCard from "./TechnologyCardandStack/TechnologyCard";
import TechnologyStack from "./TechnologyCardandStack/TechnologyStack";

interface ItechnologySectionProps {
  techPromiseData: Promise<IDataType[]>;
}

const TechnologySection = ({ techPromiseData }: ItechnologySectionProps) => {
  const techData = use(techPromiseData);

  const [stackData, setStackData] = useState<IDataType[]>([]);




  return (
    // technology section
    <section className="my-10 max-w-[80%] mx-auto md:my-35">
      <h1 className="font-bold text-2xl text-center mb-3 md:text-4xl md:text-start">
        Explore the <span className="gradient-text">Technologies</span>
      </h1>

      <p className="font-light text-center mb-8 md:mb-10 md:text-start">Pick one technology to build your ideal stack.</p>

      {/* technology-cards and your-stack section  */}
      <div className="flex gap-3.5">
        {/* cards div  */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {techData.map((eachData)=> <TechnologyCard singleData={eachData} key={eachData.id} stackData={stackData} setStackData={setStackData} ></TechnologyCard>)}

        </div>

        {/* stack div  */}
        <div>
            <TechnologyStack stackData={stackData} setStackData={setStackData}></TechnologyStack>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
