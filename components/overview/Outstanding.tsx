import React from "react";

export default function Outstanding() {
  return (
    <div
      className="bg-white rounded-2xl w-[418px] h-auto p-6 relative"
      style={{
        boxShadow:
          "var(--lowshadow-box-shadow,  0px 4px 8px 0px rgba(0, 0, 0, 0.02))",
      }}
    >
      <div className="flex justify-between mb-12">
        <div>
          <p className="text-error text-2xl font-bold">₦ 0.00</p>
          <p className="text-mid-gray text-left">Total Outstanding Balance</p>
        </div>
        <div className="flex flex-row gap-0.5 items-center justify-start">
          <p className="text-gray text-xs">View all</p>
          <svg
            className="shrink-0 w-[18px] h-[18px] relative overflow-visible"
            style={{}}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_1079)">
              <path
                d="M9.87852 8.99956L6.16602 5.28706L7.22652 4.22656L11.9995 8.99956L7.22652 13.7726L6.16602 12.7121L9.87852 8.99956Z"
                fill="#CBCBCB"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1079">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="bg-gray-100 flex justify-center items-center rounded-xl w-[154px] h-[155px]">
          <svg
            className="w-[100px] h-[100px] overflow-visible"
            style={{}}
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.9424 91.6667H68.0533C82.1796 91.6667 91.6667 81.7579 91.6667 67.0138V32.9863C91.6667 18.2421 82.1796 8.33334 68.0575 8.33334H31.9424C17.8204 8.33334 8.33334 18.2421 8.33334 32.9863V67.0138C8.33334 81.7579 17.8204 91.6667 31.9424 91.6667ZM35.4119 45.8333C29.6675 45.8333 25 41.1595 25 35.4167C25 29.6739 29.6675 25 35.4119 25C41.1521 25 45.8238 29.6739 45.8238 35.4167C45.8238 41.1595 41.1521 45.8333 35.4119 45.8333ZM82.5867 62.225C83.9821 65.8025 83.2571 70.1025 81.7654 73.6454C79.9975 77.8596 76.6121 81.05 72.3467 82.4434C70.4529 83.0625 68.4667 83.3334 66.485 83.3334H31.3693C27.875 83.3334 24.7828 82.495 22.2479 80.9338C20.66 79.9538 20.3793 77.6917 21.5566 76.2254C23.5258 73.7746 25.47 71.315 27.4308 68.8338C31.1683 64.0867 33.6864 62.7108 36.4852 63.9192C37.6207 64.4179 38.7603 65.1659 39.9335 65.9571C43.0592 68.0813 47.4042 71.0008 53.1275 67.8321C57.0442 65.6383 59.3158 61.8754 61.2942 58.5988L61.3271 58.5442C61.4675 58.3142 61.6063 58.0842 61.7446 57.855C62.4096 56.755 63.0654 55.6696 63.8075 54.6696C64.7379 53.4183 68.1858 49.5054 72.6525 52.2921C75.4975 54.0463 77.89 56.42 80.45 58.9613C81.4263 59.9329 82.1217 61.0379 82.5867 62.225Z"
              fill="#E4E4E4"
            />
          </svg>
        </div>

        <div className="flex flex-col">
          <p className="text-main-black text-left mb-10 font-bold text-lg">
            None
          </p>

          <div>
            <p className="text-sm text-red-400">₦0.00</p>
            <p className="text-sm">Outstanding Balance</p>
          </div>

          <div className="flex items-center gap-2 justify-end absolute right-4 bottom-4">
            <p className="text-sm">1/5</p>
            <div className="flex flex-row gap-2">
              <button className="flex justify-center items-center bg-gray-200 rounded-[50%] w-8 h-8">
                <svg
                  className="w-6 h-6 overflow-visible"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 12L14 6L14 18L8 12Z" fill="#919191" />
                </svg>
              </button>
              <button className="flex justify-center items-center bg-gray-200 rounded-[50%] w-8 h-8">
                <svg
                  className="w-6 h-6 overflow-visible"
                  style={{}}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_1061)">
                    <path d="M16 12L10 18V6L16 12Z" fill="#191919" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1061">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
