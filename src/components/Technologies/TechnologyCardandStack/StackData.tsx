import type { Dispatch, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";
import type { IDataType } from "../../../type";
import { Flip, toast } from "react-toastify";

interface IStackDataProps {
  data: IDataType;
  stackData: IDataType[];
  setStackData: Dispatch<SetStateAction<IDataType[]>>;
}

const StackData = ({ data, stackData, setStackData }: IStackDataProps) => {
  const handleRemove = () => {
    const newDataAfterRemove = stackData.filter((s_data)=> s_data.id !== data.id);

    setStackData([...newDataAfterRemove]);

    toast.success("Remove one item", {
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

  };

  return (
    <div className="flex justify-between border border-gray-300 px-2 rounded-xl py-2 mb-2">
      <div className="flex gap-2">
        <img src={data.icon} className="w-6 rounded-3xl" alt="" />
        <div>
          <h4 className="font-semibold">{data.name}</h4>
          <p>{data.category}</p>
        </div>
      </div>
      <button onClick={handleRemove}>
        <RxCross2 />
      </button>
    </div>
  );
};

export default StackData;
