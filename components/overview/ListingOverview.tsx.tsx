export default function ListingOverview() {
  return (
    <div
      className="bg-white rounded-2xl w-[475px] h-auto p-6"
      style={{
        boxShadow:
          "var(--lowshadow-box-shadow,  0px 4px 8px 0px rgba(0, 0, 0, 0.02))",
      }}
    >
      <p className="text-main-black text-lg font-semibold mb-4">
        Listing Overview
      </p>

      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col gap-2.5 w-[190px]">
          <p className="text-main-black text-xs border-b border-gray pb-2">
            Most viewed
          </p>
          <div className="flex gap-3">
            <div className="bg-gray rounded-xl border-solid border-green-600 border w-[67px] h-[68px] flex justify-center items-center">
              <svg
                className="w-9 h-9 overflow-visible"
                style={{}}
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4993 33H24.4992C29.5846 33 33 29.4328 33 24.1249V11.8751C33 6.56716 29.5846 3 24.5007 3H11.4993C6.41535 3 3 6.56716 3 11.8751V24.1249C3 29.4328 6.41535 33 11.4993 33ZM12.7483 16.5C10.6803 16.5 9 14.8174 9 12.75C9 10.6826 10.6803 9 12.7483 9C14.8148 9 16.4965 10.6826 16.4965 12.75C16.4965 14.8174 14.8148 16.5 12.7483 16.5ZM29.7312 22.401C30.2336 23.6889 29.9725 25.2369 29.4355 26.5124C28.7991 28.0295 27.5803 29.178 26.0448 29.6796C25.363 29.9025 24.648 30 23.9346 30H11.293C10.035 30 8.92182 29.6982 8.00925 29.1362C7.43758 28.7834 7.33653 27.969 7.76037 27.4411C8.4693 26.5588 9.16918 25.6734 9.8751 24.7801C11.2206 23.0712 12.1271 22.5759 13.1347 23.0109C13.5434 23.1905 13.9537 23.4597 14.3761 23.7446C15.5013 24.5093 17.0655 25.5603 19.1259 24.4195C20.5359 23.6298 21.3537 22.2751 22.0659 21.0955L22.0778 21.0759C22.1283 20.9931 22.1782 20.9103 22.228 20.8278C22.4674 20.4318 22.7035 20.041 22.9707 19.681C23.3056 19.2306 24.5469 17.822 26.1549 18.8252C27.1791 19.4567 28.0404 20.3112 28.962 21.226C29.3135 21.5758 29.5638 21.9737 29.7312 22.401Z"
                  fill="#E4E4E4"
                />
              </svg>
            </div>
            <p className="text-black font-bold">None</p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 w-[190px]">
          <p className="text-main-black text-xs border-b border-gray pb-2">
            Most shared
          </p>
          <div className="flex gap-3">
            <div className="bg-gray rounded-xl border-[#4545FE] border-green-600 border w-[67px] h-[68px] flex justify-center items-center">
              <svg
                className="w-9 h-9 overflow-visible"
                style={{}}
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4993 33H24.4992C29.5846 33 33 29.4328 33 24.1249V11.8751C33 6.56716 29.5846 3 24.5007 3H11.4993C6.41535 3 3 6.56716 3 11.8751V24.1249C3 29.4328 6.41535 33 11.4993 33ZM12.7483 16.5C10.6803 16.5 9 14.8174 9 12.75C9 10.6826 10.6803 9 12.7483 9C14.8148 9 16.4965 10.6826 16.4965 12.75C16.4965 14.8174 14.8148 16.5 12.7483 16.5ZM29.7312 22.401C30.2336 23.6889 29.9725 25.2369 29.4355 26.5124C28.7991 28.0295 27.5803 29.178 26.0448 29.6796C25.363 29.9025 24.648 30 23.9346 30H11.293C10.035 30 8.92182 29.6982 8.00925 29.1362C7.43758 28.7834 7.33653 27.969 7.76037 27.4411C8.4693 26.5588 9.16918 25.6734 9.8751 24.7801C11.2206 23.0712 12.1271 22.5759 13.1347 23.0109C13.5434 23.1905 13.9537 23.4597 14.3761 23.7446C15.5013 24.5093 17.0655 25.5603 19.1259 24.4195C20.5359 23.6298 21.3537 22.2751 22.0659 21.0955L22.0778 21.0759C22.1283 20.9931 22.1782 20.9103 22.228 20.8278C22.4674 20.4318 22.7035 20.041 22.9707 19.681C23.3056 19.2306 24.5469 17.822 26.1549 18.8252C27.1791 19.4567 28.0404 20.3112 28.962 21.226C29.3135 21.5758 29.5638 21.9737 29.7312 22.401Z"
                  fill="#E4E4E4"
                />
              </svg>
            </div>
            <p className="text-black font-bold">None</p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 w-[190px]">
          <p className="text-main-black text-xs border-b border-gray pb-2">
            Most watchlisted
          </p>
          <div className="flex gap-3">
            <div className="bg-gray rounded-xl border-orange-300 border-green-600 border w-[67px] h-[68px] flex justify-center items-center">
              <svg
                className="w-9 h-9 overflow-visible"
                style={{}}
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4993 33H24.4992C29.5846 33 33 29.4328 33 24.1249V11.8751C33 6.56716 29.5846 3 24.5007 3H11.4993C6.41535 3 3 6.56716 3 11.8751V24.1249C3 29.4328 6.41535 33 11.4993 33ZM12.7483 16.5C10.6803 16.5 9 14.8174 9 12.75C9 10.6826 10.6803 9 12.7483 9C14.8148 9 16.4965 10.6826 16.4965 12.75C16.4965 14.8174 14.8148 16.5 12.7483 16.5ZM29.7312 22.401C30.2336 23.6889 29.9725 25.2369 29.4355 26.5124C28.7991 28.0295 27.5803 29.178 26.0448 29.6796C25.363 29.9025 24.648 30 23.9346 30H11.293C10.035 30 8.92182 29.6982 8.00925 29.1362C7.43758 28.7834 7.33653 27.969 7.76037 27.4411C8.4693 26.5588 9.16918 25.6734 9.8751 24.7801C11.2206 23.0712 12.1271 22.5759 13.1347 23.0109C13.5434 23.1905 13.9537 23.4597 14.3761 23.7446C15.5013 24.5093 17.0655 25.5603 19.1259 24.4195C20.5359 23.6298 21.3537 22.2751 22.0659 21.0955L22.0778 21.0759C22.1283 20.9931 22.1782 20.9103 22.228 20.8278C22.4674 20.4318 22.7035 20.041 22.9707 19.681C23.3056 19.2306 24.5469 17.822 26.1549 18.8252C27.1791 19.4567 28.0404 20.3112 28.962 21.226C29.3135 21.5758 29.5638 21.9737 29.7312 22.401Z"
                  fill="#E4E4E4"
                />
              </svg>
            </div>
            <p className="text-black font-bold">None</p>
          </div>
        </div>

        <div className="w-[190px] pt-8">
          <div className="bg-main-white rounded-xl border-solid border-light-gray border w-[189px] h-[68px] p-2 relative">
            <p className="text-main-black text-2xl">0</p>
            <p className="text-deep-gray text-xs">Number of watchlists</p>
            <svg
              className="w-6 h-6 absolute overflow-visible top-2 right-2"
              style={{}}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.9 2H15.07C17.78 2 19.97 3.07 20 5.79V20.97C20 21.14 19.96 21.31 19.88 21.46C19.75 21.7 19.53 21.88 19.26 21.96C19 22.04 18.71 22 18.47 21.86L11.99 18.62L5.5 21.86C5.351 21.939 5.18 21.99 5.01 21.99C4.45 21.99 4 21.53 4 20.97V5.79C4 3.07 6.2 2 8.9 2ZM8.22 9.62H15.75C16.18 9.62 16.53 9.269 16.53 8.83C16.53 8.39 16.18 8.04 15.75 8.04H8.22C7.79 8.04 7.44 8.39 7.44 8.83C7.44 9.269 7.79 9.62 8.22 9.62Z"
                fill="#CBCBCB"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
