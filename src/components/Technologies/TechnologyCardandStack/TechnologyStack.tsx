import type { Dispatch, SetStateAction } from "react";
import type { IDataType } from "../../../type";
import StackData from "./StackData";
import { Flip,  toast } from "react-toastify";

interface ItechnologyStackProps {
  stackData: IDataType[];
  setStackData: Dispatch<SetStateAction<IDataType[]>>;
}

const TechnologyStack = ({
  stackData,
  setStackData,
}: ItechnologyStackProps) => {
  const totalElement = stackData.length;

  const handleOnclick = () => {
    setStackData([]);

    if(totalElement > 0) {

        toast.success("Removed All technologies from stack", {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
        });
    }
  };

  return (
    <div className="card w-55 bg-base-100 card-sm shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Your Stack</h2>
        <p>
          {totalElement === 0
            ? "Your stack is empty"
            : `${totalElement} technology is selected.`}
        </p>

        <div>
          {stackData.map((data) => (
            <StackData
              data={data}
              stackData={stackData}
              setStackData={setStackData}
              key={data.id}
            ></StackData>
          ))}
        </div>

        <button
          className="btn btn-outline btn-secondary"
          onClick={handleOnclick}
        >
          Remove All
        </button>
      </div>
    </div>
  );
};

export default TechnologyStack;
