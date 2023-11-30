import { Spinner } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import TransactionItem from "@/components/transactions/TransactionItem";
import { useEffect, useState } from "react";
import { transactions } from "@/services/transactions";
import { Selection } from "@nextui-org/react";
import { Filter } from "../../components/Filter";
import { transactionsFilter } from "@/services/transactions";
import { useSetRecoilState } from "recoil";
import { transactionsAtom } from "@/recoil";
import { Info } from "@/types";
import { Prop } from "@/types";

export default function Transactions({ setFilterOpen, filterOpen }: Prop) {
  const [transactionsData, setTransactionsData] = useState<Info[]>([]);
  const [loading, setLoading] = useState(true);
  const [clearFilter, setClearFilter] = useState(false);
  const transactionsState = useSetRecoilState(transactionsAtom);

  useEffect(() => {
    async function transaction() {
      setLoading(true);
      const data = await transactions();
      setTransactionsData(data);
      transactionsState(data);
      setLoading(false);
    }
    transaction();
  }, [clearFilter]);

  const filter = async (
    startDate: string,
    endDate: string,
    selectedType: Selection,
    selectedStatus: Selection
  ) => {
    setLoading(true);
    setFilterOpen(false);
    const data = await transactionsFilter(
      startDate,
      endDate,
      selectedType,
      selectedStatus
    );
    setTransactionsData(data);
    transactionsState(data);
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <div className="bg-gray-400/80 w-full h-full fixed top-0 left-0 z-50 flex justify-center items-center z-[100]">
          <div className="flex gap-4">
            <Spinner size="lg" />
          </div>
        </div>
      )}
      <div className="h-auto w-full relative flex flex-col justify-center items-center mt-12">
        <AnimatePresence>
          {filterOpen && (
            <Filter
              apply={filter}
              setFilterOpen={setFilterOpen}
              clearFilter={clearFilter}
              setClearFilter={setClearFilter}
            />
          )}
        </AnimatePresence>
        <div className="border-solid border-gray-gray-50 border-b pb-6 flex flex-row items-center justify-between w-full">
          <div className="flex flex-col gap-0 items-start justify-start flex-1 relative">
            <p
              className="text-black-black-300 text-left"
              style={{
                font: "var(--degular-headers-3-x-small, 700 24px/32px 'Degular-Bold', sans-serif)",
              }}
            >
              {transactionsData.length} Transactions
            </p>
            <p
              className="text-gray-gray-400 text-left "
              style={{
                font: "var(--degular-paragraph-xx-small, 500 14px/16px 'Degular-Medium', sans-serif)",
              }}
            >
              {/* Your transactions for the last 7 days */}
              All your transactions
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center justify-end shrink-0 relative">
            <button
              onClick={() => setFilterOpen(true)}
              style={{
                font: "var(--degular-subtitle-6-x-small, 600 16px/24px 'Degular-Semibold', sans-serif)",
              }}
              className="bg-gray-gray-50 group hover:bg-black hover:text-white rounded-[100px] pt-3 pr-5 pb-3 pl-[30px] flex flex-row gap-3 items-center justify-center shrink-0 relative"
            >
              Filter
              <svg
                className="shrink-0 w-5 h-5 relative overflow-visible group-hover:bg-white rounded-full"
                style={{ transform: "translate(0px, 0px)" }}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1_1413"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#C4C4C4" />
                </mask>
                <g mask="url(#mask0_1_1413)">
                  <path
                    d="M9.99942 13.0211C9.8789 13.0211 9.76673 13.0019 9.66289 12.9634C9.55904 12.925 9.46032 12.8589 9.36674 12.7653L4.87252 8.27112C4.73405 8.13267 4.66322 7.95864 4.66002 7.74902C4.6568 7.53941 4.72763 7.36217 4.87252 7.2173C5.01738 7.07243 5.19302 7 5.39942 7C5.60582 7 5.78145 7.07243 5.92632 7.2173L9.99942 11.2904L14.0725 7.2173C14.211 7.07885 14.385 7.00802 14.5946 7.0048C14.8042 7.0016 14.9814 7.07243 15.1263 7.2173C15.2712 7.36217 15.3436 7.53781 15.3436 7.74422C15.3436 7.95062 15.2712 8.12626 15.1263 8.27112L10.6321 12.7653C10.5385 12.8589 10.4398 12.925 10.3359 12.9634C10.2321 13.0019 10.1199 13.0211 9.99942 13.0211Z"
                    fill="#131316"
                  />
                </g>
              </svg>
            </button>
            <div className="bg-gray-gray-50 rounded-[100px] pt-3 pr-5 pb-3 pl-[30px] flex flex-row gap-3 items-center justify-center shrink-0 relative">
              <div
                className="text-black-black-300 text-left relative flex items-center justify-start"
                style={{
                  font: "var(--degular-subtitle-6-x-small, 600 16px/24px 'Degular-Semibold', sans-serif)",
                }}
              >
                Export list
              </div>
              <svg
                className="shrink-0 w-5 h-5 relative overflow-visible"
                style={{ transform: "translate(0px, 0px)" }}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1_1419"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#C4C4C4" />
                </mask>
                <g mask="url(#mask0_1_1419)">
                  <path
                    d="M10.0001 12.6875L7.04175 9.75L7.64591 9.14583L9.58341 11.0833V3.875H10.4167V11.0833L12.3542 9.14583L12.9584 9.75L10.0001 12.6875ZM5.52091 15.8333C5.13203 15.8333 4.80925 15.705 4.55258 15.4483C4.29536 15.1911 4.16675 14.8681 4.16675 14.4792V12.5H5.00008V14.4792C5.00008 14.6181 5.0523 14.7394 5.15675 14.8433C5.26064 14.9478 5.38203 15 5.52091 15H14.4792C14.6181 15 14.7395 14.9478 14.8434 14.8433C14.9479 14.7394 15.0001 14.6181 15.0001 14.4792V12.5H15.8334V14.4792C15.8334 14.8681 15.7051 15.1911 15.4484 15.4483C15.1912 15.705 14.8681 15.8333 14.4792 15.8333H5.52091Z"
                    fill="#131316"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-10 pb-32 flex gap-6 items-start justify-center w-full min-h-[400px]">
          {transactionsData.length > 0 ? (
            <div className="w-full flex flex-col gap-6">
              {transactionsData.map((data, index) => {
                return <TransactionItem key={index} data={data} />;
              })}
            </div>
          ) : (
            <div className="w-[400px] flex flex-col gap-4 mt-20">
              <div className="flex flex-col gap-2">
                <p className="text-2xl">
                  No matching transaction found for the selected filter
                </p>
                <p className="text-xs">
                  Change your filters to see more results, or add a new product.
                </p>
              </div>
              <button
                onClick={() => setClearFilter(!clearFilter)}
                className="bg-gray-gray-50 rounded-[100px] py-3 p-6 w-fit"
              >
                Clear Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
