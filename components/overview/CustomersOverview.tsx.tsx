export default function CustomersOverview() {
  return (
    <div
      className="bg-white rounded-2xl w-[407px] h-auto p-6 mt-4"
      style={{
        boxShadow:
          "var(--lowshadow-box-shadow,  0px 4px 8px 0px rgba(0, 0, 0, 0.02))",
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2.5">
          <div className="shrink-0 w-6 h-6 relative overflow-hidden">
            <svg
              className="h-[auto] absolute left-1 top-0.5 overflow-visible"
              style={{}}
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.294 5.29105C13.294 8.22808 10.9391 10.5831 8 10.5831C5.0619 10.5831 2.70601 8.22808 2.70601 5.29105C2.70601 2.35402 5.0619 0 8 0C10.9391 0 13.294 2.35402 13.294 5.29105ZM8 20C3.66237 20 0 19.295 0 16.575C0 13.8539 3.68538 13.1739 8 13.1739C12.3386 13.1739 16 13.8789 16 16.599C16 19.32 12.3146 20 8 20Z"
                fill="#4545FE"
              />
            </svg>
          </div>
          <p className="text-deep-gray text-left text-1xl font-semibold">
            Customers Overview
          </p>
        </div>

        <button className="flex flex-row gap-0.5 items-center justify-start">
          <p className="text-gray text-right font-['EuclidCircularB-Medium',_sans-serif] text-xs font-medium relative">
            View all
          </p>
          <svg
            className="shrink-0 w-[18px] h-[18px] relative overflow-visible"
            style={{}}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_1029)">
              <path
                d="M9.87852 8.99956L6.16602 5.28706L7.22652 4.22656L11.9995 8.99956L7.22652 13.7726L6.16602 12.7121L9.87852 8.99956Z"
                fill="#CBCBCB"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1029">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col justify-center items-center gap-2 rounded-xl border-solid border-gray border w-[117px] h-[79px] p-4">
          <p className="text-black text-center text-2xl font-black">0</p>
          <p className="text-mid-gray text-center text-sm">Total</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 rounded-xl border-solid border-gray border w-[117px] h-[79px] p-4">
          <p className="text-black text-center text-2xl font-black">0</p>
          <p className="text-mid-gray text-center text-sm">New</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 rounded-xl border-solid border-gray border w-[117px] h-[79px] p-4">
          <p className="text-black text-center text-2xl font-black">0</p>
          <p className="text-mid-gray text-center text-sm">Active</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 rounded-xl border-solid border-gray border w-[117px] h-[79px] p-4">
          <p className="text-black text-center text-2xl font-black">0</p>
          <p className="text-mid-gray text-center text-sm">Inactive</p>
        </div>
      </div>
    </div>
  );
}
