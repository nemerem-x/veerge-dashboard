

export default function SalesOverview() {
  return (
    <div className="relative w-full h-auto">
      <div
        className="bg-white flex flex-col rounded-2xl w-full h-auto p-6 relative"
        style={{
          boxShadow:
            "var(--lowshadow-box-shadow,  0px 4px 8px 0px rgba(0, 0, 0, 0.02))",
        }}
      >
        <div className="bg-white flex justify-between items-center rounded-lg w-full mb-4 h-auto">
          <div>
            <p className="text-black text-left font-bold text-2xl mb-2">
              Sales Overview
            </p>
            <p className="text-gray-500 text-xs">
              Showing overview Jan 2022 - Sep 2022
            </p>
          </div>
          <button className="rounded-xl border-solid border-[#cbcbcb] border py-4 px-8">
            View Transactions
          </button>
        </div>

        <div className="w-full flex gap-6 justify-end py-4 border-b">
          <button className="text-deep-gray text-center">1 Week</button>
          <button className="text-deep-gray text-center">1 Month</button>
          <button className="text-deep-gray text-center">1 Year</button>
        </div>

        <div className="w-full mt-6 flex justify-between">
          <div className="w-full flex flex-col justify-end items-center">
            <div className="flex gap-4 pt-2 border-t">
              <p className="text-xs">Jan</p>
              <p className="text-xs">Feb</p>
              <p className="text-xs">Mar</p>
              <p className="text-xs">Apr</p>
              <p className="text-xs">May</p>
              <p className="text-xs">Jun</p>
              <p className="text-xs">Jul</p>
              <p className="text-xs">Aug</p>
              <p className="text-xs">Sep</p>
              <p className="text-xs">Oct</p>
              <p className="text-xs">Nov</p>
              <p className="text-xs">Dec</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 max-w-[400px]">
            <div className="bg-main-white rounded-xl border-solid border-light-gray border w-[189px] h-[73px] p-2">
              <p className="text-[#4545FE] text-lg font-bold">₦ 0.00</p>
              <div className="flex gap-2 items-center">
                <p className="text-deep-gray text-sm">Balance</p>
                <svg
                  className="w-3.5 h-3.5 overflow-visible"
                  style={{}}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_981)">
                    <path
                      d="M6.99935 1.16699C10.2193 1.16699 12.8327 3.78033 12.8327 7.00033C12.8327 10.2203 10.2193 12.8337 6.99935 12.8337C3.77935 12.8337 1.16602 10.2203 1.16602 7.00033C1.16602 3.78033 3.77935 1.16699 6.99935 1.16699ZM7.58268 7.00033H9.33268L6.99935 4.66699L4.66602 7.00033H6.41602V9.33366H7.58268V7.00033Z"
                      fill="#12D8A0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_981">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-green-400 text-left">0%</p>
              </div>
            </div>
            <div className="bg-main-white rounded-xl border-solid border-light-gray border w-[189px] h-[73px] p-2">
              <p className="text-green-400 text-lg font-bold">₦ 0.00</p>
              <div className="flex gap-2 items-center">
                <p className="text-deep-gray text-sm">Deposit</p>
                <svg
                  className="w-3.5 h-3.5 overflow-visible"
                  style={{}}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_981)">
                    <path
                      d="M6.99935 1.16699C10.2193 1.16699 12.8327 3.78033 12.8327 7.00033C12.8327 10.2203 10.2193 12.8337 6.99935 12.8337C3.77935 12.8337 1.16602 10.2203 1.16602 7.00033C1.16602 3.78033 3.77935 1.16699 6.99935 1.16699ZM7.58268 7.00033H9.33268L6.99935 4.66699L4.66602 7.00033H6.41602V9.33366H7.58268V7.00033Z"
                      fill="#12D8A0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_981">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-green-400 text-left">0%</p>
              </div>
            </div>
            <div className="bg-main-white rounded-xl border-solid border-light-gray border w-[189px] h-[73px] p-2">
              <p className="text-black text-lg font-bold">₦ 0.00</p>
              <div className="flex gap-2 items-center">
                <p className="text-deep-gray text-sm">Purchase</p>
                <svg
                  className="w-3.5 h-3.5 overflow-visible"
                  style={{}}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_981)">
                    <path
                      d="M6.99935 1.16699C10.2193 1.16699 12.8327 3.78033 12.8327 7.00033C12.8327 10.2203 10.2193 12.8337 6.99935 12.8337C3.77935 12.8337 1.16602 10.2203 1.16602 7.00033C1.16602 3.78033 3.77935 1.16699 6.99935 1.16699ZM7.58268 7.00033H9.33268L6.99935 4.66699L4.66602 7.00033H6.41602V9.33366H7.58268V7.00033Z"
                      fill="#12D8A0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_981">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-green-400 text-left">0%</p>
              </div>
            </div>
            <div className="bg-main-white rounded-xl border-solid border-light-gray border w-[189px] h-[73px] p-2">
              <p className="text-red-600 text-lg font-bold">₦ 0.00</p>
              <div className="flex gap-2 items-center">
                <p className="text-deep-gray text-sm">Withdrawal</p>
                <svg
                  className="w-3.5 h-3.5 overflow-visible"
                  style={{}}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_981)">
                    <path
                      d="M6.99935 1.16699C10.2193 1.16699 12.8327 3.78033 12.8327 7.00033C12.8327 10.2203 10.2193 12.8337 6.99935 12.8337C3.77935 12.8337 1.16602 10.2203 1.16602 7.00033C1.16602 3.78033 3.77935 1.16699 6.99935 1.16699ZM7.58268 7.00033H9.33268L6.99935 4.66699L4.66602 7.00033H6.41602V9.33366H7.58268V7.00033Z"
                      fill="#FF6A6A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_981">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-red-600 text-left">0%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
