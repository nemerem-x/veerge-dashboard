import { motion } from "framer-motion";
import { useState } from "react";
import Calendar from "react-calendar";
import "../app/Calendar.css";
import { Selection, Select, SelectItem } from "@nextui-org/react";
import { months } from "@/utils/months";
import { IShareProps } from "@/types";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const Filter = ({
  setFilterOpen,
  setClearFilter,
  clearFilter,
  apply,
}: IShareProps): JSX.Element => {
  const [selectedType, setSelectedType] = useState<Selection>(new Set([]));
  const [selectedStatus, setSelectedStatus] = useState<Selection>(new Set([]));
  const [disableApplyBtn, setDisableApplyBtn] = useState(false);
  const [startValue, startOnChange] = useState<Value>(new Date("01 mar 2022"));
  const [endValue, endOnChange] = useState<Value>(new Date("02 mar 2022"));

  const types = [
    "Store Transactions",
    "Get Tipped",
    "Withdrawals",
    "Deposits",
    "Chargebacks",
    "Cashbacks",
  ];
  const allStatus = ["Successful", "Pending", "Failed"];

  const closeModal = (e: any) => {
    if (e.target.id === "bg") {
      setFilterOpen(false);
    }
  };

  const clearFilterFields = () => {
    setClearFilter(!clearFilter);
    setSelectedStatus(new Set([]));
    setSelectedType(new Set([]));
  }

  const call = () => {
    apply(startDate, endDate, selectedType, selectedStatus);
  }

  const startDate = `${
    (startValue as Date)?.getDate() +
    " " +
    months[(startValue as Date)?.getMonth()] +
    " " +
    (startValue as Date)?.getFullYear()
  }`;
  const endDate = `${
    (endValue as Date)?.getDate() +
    " " +
    months[(endValue as Date)?.getMonth()] +
    " " +
    (endValue as Date)?.getFullYear()
  }`;

  return (
    <motion.div
      id="bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
      className="bg-gray-400/80 w-full h-full fixed top-0 left-0 z-50 flex justify-end"
    >
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, x: 20 }}
        className={"bg-[#ffffff] rounded-[20px] w-[456px] h-vh relative"}
        style={{
          boxShadow:
            "var(--thick-shadow-box-shadow,  0px 8px 16px 4px rgba(188, 196, 204, 0.10),  0px 12px 24px 0px rgba(219, 222, 229, 0.10),  0px 16px 32px 0px rgba(219, 222, 229, 0.10))",
          backdropFilter: "var(--thick-shadow-backdrop-filter, blur(8px))",
        }}
      >
        <div
          className="bg-[rgba(255,255,255,0.90)] rounded-tl-[20px] rounded-tr-[20px] border-solid border-trashed-colors-white-100 border-2 pt-5 pr-6 pb-5 pl-6 flex flex-col gap-2.5 items-start justify-start w-[456px] absolute left-0 top-0"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
            <div
              className="text-black-black-300 text-left relative flex-1 flex items-center justify-start"
              style={{
                font: "700 24px/120% 'DegularDisplay-Bold', sans-serif",
              }}
            >
              Filter
            </div>
            <button
              onClick={() => setFilterOpen(false)}
              className="rounded-[100px] shrink-0 w-[34px] h-[34px] relative"
            >
              <svg
                className="w-6 h-6 absolute left-1 top-1 overflow-visible"
                style={{}}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_5041_754"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#C4C4C4" />
                </mask>
                <g mask="url(#mask0_5041_754)">
                  <path
                    d="M6.39995 18.3L5.69995 17.6L11.3 12L5.69995 6.40001L6.39995 5.70001L12 11.3L17.6 5.70001L18.3 6.40001L12.7 12L18.3 17.6L17.6 18.3L12 12.7L6.39995 18.3Z"
                    fill="#131316"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>

        <div className="w-[412px] h-10 absolute overflow-scroll pb-6 left-[22px] top-[82px]">
          <div className="flex flex-row gap-3 items-start justify-start w-[877px] absolute left-0 top-0">
            <div className="bg-trashed-colors-white-100 rounded-[100px] border-solid border-gray-gray-50 border pt-2.5 pr-[18px] pb-2.5 pl-[18px] flex flex-col gap-1 items-center justify-center shrink-0 relative">
              <div
                className="text-black-black-300 text-left relative flex items-center justify-start"
                style={{
                  font: "var(--degular-subtitle-7-x-small, 600 14px/16px 'Degular-Semibold', sans-serif)",
                }}
              >
                Today{" "}
              </div>
            </div>
            <div className="bg-white-white-100 rounded-[100px] border-solid border-gray-gray-50 border pt-2.5 pr-[18px] pb-2.5 pl-[18px] flex flex-col gap-1 items-center justify-center shrink-0 relative">
              <div
                className="text-black-black-300 text-left relative flex items-center justify-start"
                style={{
                  font: "var(--degular-subtitle-7-x-small, 600 14px/16px 'Degular-Semibold', sans-serif)",
                }}
              >
                Last 7 days{" "}
              </div>
            </div>
            <div className="bg-trashed-colors-white-100 rounded-[100px] border-solid border-gray-gray-50 border pt-2.5 pr-[18px] pb-2.5 pl-[18px] flex flex-col gap-1 items-center justify-center shrink-0 relative">
              <div
                className="text-black-black-300 text-left relative flex items-center justify-start"
                style={{
                  font: "var(--degular-subtitle-7-x-small, 600 14px/16px 'Degular-Semibold', sans-serif)",
                }}
              >
                This month{" "}
              </div>
            </div>
            <div className="bg-trashed-colors-white-100 rounded-[100px] border-solid border-gray-gray-50 border pt-2.5 pr-[18px] pb-2.5 pl-[18px] flex flex-col gap-1 items-center justify-center shrink-0 relative">
              <div
                className="text-black-black-300 text-left relative flex items-center justify-start"
                style={{
                  font: "var(--degular-subtitle-7-x-small, 600 14px/16px 'Degular-Semibold', sans-serif)",
                }}
              >
                Last 3 months{" "}
              </div>
            </div>
            <div className="bg-trashed-colors-white-100 rounded-[100px] border-solid border-gray-gray-50 border pt-2.5 pr-[18px] pb-2.5 pl-[18px] flex flex-col gap-1 items-center justify-center shrink-0 relative">
              <div
                className="text-black-black-300 text-left relative flex items-center justify-start"
                style={{
                  font: "var(--degular-subtitle-7-x-small, 600 14px/16px 'Degular-Semibold', sans-serif)",
                }}
              >
                This year{" "}
              </div>
            </div>
            <div className="bg-trashed-colors-white-100 rounded-[100px] border-solid border-gray-gray-50 border pt-2.5 pr-[18px] pb-2.5 pl-[18px] flex flex-col gap-1 items-center justify-center shrink-0 relative">
              <div
                className="text-black-black-300 text-left relative flex items-center justify-start"
                style={{
                  font: "var(--degular-subtitle-7-x-small, 600 14px/16px 'Degular-Semibold', sans-serif)",
                }}
              >
                Last year{" "}
              </div>
            </div>
            <div className="bg-black-black-300 rounded-[100px] pt-2.5 pr-[18px] pb-2.5 pl-[18px] flex flex-col gap-1 items-center justify-center shrink-0 relative">
              <div
                className="text-white-white-100 text-left relative flex items-center justify-start"
                style={{
                  font: "var(--degular-subtitle-7-x-small, 600 14px/16px 'Degular-Semibold', sans-serif)",
                }}
              >
                All time{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start justify-start w-[412px] absolute left-[calc(50%_-_206px)] top-[146px]">
          <div className="flex flex-row gap-1.5 items-start justify-start self-stretch shrink-0 relative">
            <div className="flex flex-col gap-3 items-start justify-start flex-1 relative">
              <div className="flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative">
                <p
                  className="text-black-black-300 text-left relative flex-1 h-4 flex items-center justify-start"
                  style={{
                    font: "var(--degular-subtitle-6-x-small, 600 16px/24px 'Degular-Semibold', sans-serif)",
                  }}
                >
                  Date Range
                </p>
              </div>
              <div className="flex w-full gap-6 relative h-[50px]">
                <div className="group cursor-pointer flex justify-between items-center bg-gray-gray-50 w-1/2 rounded-xl px-3 z-40">
                  <p className="text-sm">{startDate}</p>
                  <svg
                    className="shrink-0 w-5 h-5 relative overflow-visible"
                    style={{}}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_5041_714"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <rect width="20" height="20" fill="#C4C4C4" />
                    </mask>
                    <g mask="url(#mask0_5041_714)">
                      <path
                        d="M9.99992 12.25L5.58325 7.83332L6.16659 7.22916L9.99992 11.0625L13.8333 7.22916L14.4166 7.83332L9.99992 12.25Z"
                        fill="#31373D"
                      />
                    </g>
                  </svg>
                  <div className="group-hover:block hidden w-full bg-white h-auto border-[2px] p-6 border-gray-200 rounded-[20px] left-0 top-12 absolute z-[200000]">
                    <Calendar onChange={startOnChange} value={startValue} />
                  </div>
                </div>
                <div className="group cursor-pointer flex justify-between items-center bg-gray-gray-50 w-1/2 rounded-xl px-3 z-40">
                  <p className="text-sm">{endDate}</p>
                  <svg
                    className="shrink-0 w-5 h-5 relative overflow-visible"
                    style={{}}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_5041_714"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <rect width="20" height="20" fill="#C4C4C4" />
                    </mask>
                    <g mask="url(#mask0_5041_714)">
                      <path
                        d="M9.99992 12.25L5.58325 7.83332L6.16659 7.22916L9.99992 11.0625L13.8333 7.22916L14.4166 7.83332L9.99992 12.25Z"
                        fill="#31373D"
                      />
                    </g>
                  </svg>
                  <div className="group-hover:block hidden w-full bg-white h-auto border-[2px] p-6 border-gray-200 rounded-[20px] left-0 top-12 absolute z-10">
                    <Calendar onChange={endOnChange} value={endValue} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
            <div className="flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative">
              <div
                className="text-black-black-300 text-left relative flex-1 h-4 flex items-center justify-start"
                style={{
                  font: "var(--degular-subtitle-6-x-small, 600 16px/24px 'Degular-Semibold', sans-serif)",
                }}
              >
                Transaction Type
              </div>
            </div>
            <div className="bg-gray-gray-50 w-full rounded-xl border-solid border-gray-gray-50 border flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
              <Select
                variant="flat"
                label="Select Transaction Type"
                // placeholder="Select Transaction Type"
                selectionMode="multiple"
                className="w-full"
                selectedKeys={selectedType}
                onSelectionChange={setSelectedType}
              >
                {types.map((type, i) => (
                  <SelectItem key={i} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
            <div className="flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative">
              <div
                className="text-black-black-300 text-left relative flex-1 h-4 flex items-center justify-start"
                style={{
                  font: "var(--degular-subtitle-6-x-small, 600 16px/24px 'Degular-Semibold', sans-serif)",
                }}
              >
                Transaction Status
              </div>
            </div>
            <div className="bg-gray-gray-50 w-full rounded-xl border-solid border-gray-gray-50 border flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
              <Select
                label="Select Transaction Status"
                // placeholder="Select Transaction Status"
                selectionMode="multiple"
                className="w-full"
                selectedKeys={selectedStatus}
                onSelectionChange={setSelectedStatus}
              >
                {allStatus.map((status, i) => (
                  <SelectItem key={i} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
        </div>

        <div
          className="bg-[rgba(255,255,255,0.90)] rounded-br-[20px] rounded-bl-[20px] border-solid border-trashed-colors-white-100 border-2 py-5 px-6 flex flex-row gap-3 items-start justify-start w-full h-[90px] absolute left-0 bottom-0"
          style={{ backdropFilter: "var(--blur-backdrop-filter, blur(16px))" }}
        >
          <button
            onClick={clearFilterFields}
            style={{
              font: "var(--degular-subtitle-6-x-small, 600 16px/24px 'Degular-Semibold', sans-serif)",
            }}
            className="bg-trashed-colors-white-100 hover:bg-red-100 text-black-black-300 w-1/2 rounded-[100px] border-solid border-gray-gray-50 border px-3 py-6 flex flex-row gap-2 items-center justify-center self-stretch shrink-0 relative"
          >
            Clear
          </button>

          <button
            disabled={disableApplyBtn}
            onClick={call}
            style={{
              font: "var(--degular-subtitle-6-x-small, 600 16px/24px 'Degular-Semibold', sans-serif)",
            }}
            className="bg-black text-trashed-colors-white-100 w-1/2 rounded-[100px] px-3 py-6 flex flex-row gap-2 items-center justify-center self-stretch shrink-0 relative"
          >
            Apply
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
