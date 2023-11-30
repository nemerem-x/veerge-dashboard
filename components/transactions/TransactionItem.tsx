import { months } from "@/utils/months";
import { Info } from "@/types";

export default function TransactionItem(Prop: { key: number; data: Info }) {
  const { data } = Prop;
  const value = new Date(data.date);

  const date = `${
    value.getDate() + " " + months[value.getMonth()] + " " + value.getFullYear()
  }`;

  return (
    <div className="flex justify-between w-full h-[49px] relative">
      <div className="flex gap-2">
        {data.type === "deposit" ? (
          <div className="bg-trashed-colors-jade-100 rounded-[50%] relative flex justify-center w-[50px] h-[50px]">
            <svg
              className="h-[auto] max-w-[22px] h-[40.82%]"
              style={{}}
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_4733_245"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="21"
                height="21"
              >
                <rect x="0.5" y="0.5" width="20" height="20" fill="#C4C4C4" />
              </mask>
              <g mask="url(#mask0_4733_245)">
                <path
                  d="M5.25 15.75V8.25H6.08333V14.3333L16.1667 4.25L16.75 4.83333L6.66667 14.9167H12.75V15.75H5.25Z"
                  fill="#075132"
                />
              </g>
            </svg>
          </div>
        ) : (
          <div className="bg-trashed-colors-red-100 rounded-[50%] relative flex justify-center w-[50px] h-[50px]">
            <svg
              className="h-[auto] max-w-[22px] h-[40.82%]"
              style={{}}
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_4733_759"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="21"
                height="21"
              >
                <rect x="0.5" y="0.5" width="20" height="20" fill="#C4C4C4" />
              </mask>
              <g mask="url(#mask0_4733_759)">
                <path
                  d="M4.99984 16.5833L4.4165 16L14.4998 5.91668H8.4165V5.08334H15.9165V12.5833H15.0832V6.50001L4.99984 16.5833Z"
                  fill="#961100"
                />
              </g>
            </svg>
          </div>
        )}
        <div className="flex flex-col">
          <p
            className="text-black-black-300 text-left"
            style={{
              font: "var(--degular-paragraph-x-small, 500 16px/24px 'Degular-Medium', sans-serif)",
            }}
          >
            {data?.metadata?.product_name ||
              data?.metadata?.type ||
              "Cash withdrawal"}
          </p>
          <p
            className="text-gray-gray-400 text-left"
            style={{
              font: "var(--degular-paragraph-xx-small, 500 14px/16px 'Degular-Medium', sans-serif)",
            }}
          >
            {data?.metadata?.name || data.status}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <p
          className="text-black-black-300 text-right"
          style={{
            font: "700 16px/150% 'Degular-Bold', sans-serif",
          }}
        >
          USD {data.amount}
        </p>
        <p
          className="text-gray-gray-400"
          style={{
            font: "var(--degular-paragraph-xx-small, 500 14px/16px 'Degular-Medium', sans-serif)",
          }}
        >
          {date}
        </p>
      </div>
    </div>
  );
}
