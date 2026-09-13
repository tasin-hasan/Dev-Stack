import { IoIosStar } from "react-icons/io";
import type { IDataType } from "../../../type";
import { type Dispatch, type SetStateAction } from "react";
import { Flip, toast } from "react-toastify";
import { FaCheck } from "react-icons/fa";

interface ItechnologyCardProps {
  singleData: IDataType;
  stackData: IDataType[];
  setStackData: Dispatch<SetStateAction<IDataType[]>>;
}

const TechnologyCard = ({
  singleData,
  stackData,
  setStackData,
}: ItechnologyCardProps) => {
  const enableOrDisableBtn = stackData.some(
    (element) => element.id === singleData.id,
  );

  const handleSetStackData = () => {
    const newData = stackData.filter((element) => element.id !== singleData.id);

    setStackData([...newData, singleData]);

    toast.success("Added to Stack", {
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

  const showDuplicateToast = () => {
    if (enableOrDisableBtn) {
      toast.warn("The card is already added", {
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
    <div
      className={`card bg-base-100 card-md shadow-sm ${enableOrDisableBtn ? "border-2 border-[#f53199]" : ""}`}
    >
      <div className="card-body space-y-3">
        <div className="flex justify-between items-center">
          <img src={`${singleData.icon}`} className="w-10" alt="" />

          <div className="badge badge-soft badge-primary">
            {singleData.badge}
          </div>
        </div>

        <h2 className="text-xl font-bold">{singleData.name}</h2>

        <p>{singleData.description}</p>

        <div className="flex flex-wrap justify-between items-center gap-2">
          <div className="badge badge-ghost">{singleData.category}</div>

          <div className="inline-block">{singleData.difficulty}</div>
          <div className="flex items-center gap-1">
            <IoIosStar className="text-yellow-500" />
            <span>{singleData.rating}</span>
          </div>
        </div>

        <div className=" card-actions" onClick={showDuplicateToast}>
          <button
            onClick={handleSetStackData}
            className={`btn btn-primary btn-block   ${enableOrDisableBtn ? "bg-[#f5e8ee]" : "bg-black"}  ${enableOrDisableBtn ? "text" : "text-white"}`}
            disabled={enableOrDisableBtn}
          >
            {enableOrDisableBtn ? (
              <>
                <FaCheck /> Added to Stack
              </>
            ) : (
              "Add Stack"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
