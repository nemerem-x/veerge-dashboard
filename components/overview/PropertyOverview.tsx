export default function PropertyOverview() {
  return (
      <div
        className="bg-white rounded-2xl w-[407px] h-auto p-6"
        style={{
          boxShadow:
            "var(--lowshadow-box-shadow,  0px 4px 8px 0px rgba(0, 0, 0, 0.02))",
        }}
      >
        <div className="flex gap-2.5 items-center justify-between mb-6 w-full">
          <div className="flex gap-2.5">
            <div className="shrink-0 w-6 h-6 relative overflow-hidden">
              <svg
                className="h-[auto] absolute right-[0%] left-[0%] w-[100%] bottom-[0.03%] top-[0.03%] h-[99.94%] overflow-visible"
                style={{}}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 14.9922C10.3432 14.9922 9 16.3353 9 17.9922V23.9922H15V17.9922C15 16.3353 13.6568 14.9922 12 14.9922Z"
                  fill="#4545FE"
                />
                <path
                  d="M17 17.9929V23.9929H21C22.6568 23.9929 24 22.6497 24 20.9929V11.8719C24.0002 11.3524 23.7983 10.8532 23.437 10.4799L14.939 1.29285C13.4396 -0.329491 10.9089 -0.4291 9.28655 1.07034C9.20949 1.14159 9.13523 1.21579 9.06403 1.29285L0.581016 10.4769C0.208734 10.8517 -0.000140554 11.3586 7.09607e-08 11.8869V20.9929C7.09607e-08 22.6497 1.34316 23.9929 3 23.9929H6.99998V17.9929C7.01869 15.2661 9.22027 13.0393 11.8784 12.9752C14.6255 12.9089 16.9791 15.1736 17 17.9929Z"
                  fill="#4545FE"
                />
                <path
                  d="M12 14.9922C10.3432 14.9922 9 16.3353 9 17.9922V23.9922H15V17.9922C15 16.3353 13.6568 14.9922 12 14.9922Z"
                  fill="#4545FE"
                />
              </svg>
            </div>
            <p className="text-deep-gray text-left text-1xl font-semibold">
              Property Overview
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
            <p className="text-mid-gray text-center text-sm">Available</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 rounded-xl border-solid border-gray border w-[117px] h-[79px] p-4">
            <p className="text-black text-center text-2xl font-black">0</p>
            <p className="text-mid-gray text-center text-sm">Sold Out</p>
          </div>
        </div>
      </div>
  );
}
