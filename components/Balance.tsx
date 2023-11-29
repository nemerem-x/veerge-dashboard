import { useEffect, useState } from "react";
import { balance } from "@/services/balance";

interface Wallet {
  balance: number;
  ledger_balance: number;
  pending_payout: number;
  total_payout: number;
  total_revenue: number;
}

export default function Balance() {
  const [wallet, setWallet] = useState<Wallet>();

  useEffect(() => {
    async function wallet() {
      const data = await balance();
      setWallet(data);
    }
    wallet();
  }, []);

  return (
    <div className="h-auto w-full relative flex flex-col justify-center items-center mt-20">
      <div className="flex md:flex-row flex-col w-full justify-between gap-10">
        <div className="flex flex-col">
          <div className="flex items-center gap-16 w-full">
            <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
              <p
                className="text-gray-gray-400 text-center relative flex items-center justify-center"
                style={{
                  font: "var(--degular-paragraph-xx-small, 500 14px/16px 'Degular-Medium', sans-serif)",
                }}
              >
                Available Balance
              </p>
              <p
                className="text-black-black-300 text-center relative flex items-center justify-center"
                style={{
                  font: "var(--degular-headers-small, 700 36px/48px 'Degular-Bold', sans-serif)",
                }}
              >
                USD {wallet?.balance.toFixed(2) || "-"}
              </p>
            </div>
            <button
              className="text-trashed-colors-white-100 hover:text-black bg-black-black-300 hover:bg-gray-200 px-10 py-3.5 h-fit rounded-[100px] text-center relative flex items-center justify-center"
              style={{
                font: "var(--degular-subtitle-6-x-small, 600 16px/24px 'Degular-Semibold', sans-serif)",
              }}
            >
              Withdraw
            </button>
          </div>
          <svg
            className="rounded-none w-full max-w-[765px] h-[250px]"
            // style={{ transform: "translate(-0.5px, 80.63px)" }}
            width="767"
            height="178"
            viewBox="0 0 767 178"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 177L166.916 21.336C211.748 -20.7264 285.462 6.79004 292.871 67.8171V67.8171C293.287 71.2484 293.981 74.6685 294.939 77.9895V77.9895C308.165 123.839 364.75 140.125 400.326 108.322L480.44 36.7048C538.095 -14.8352 627.475 -6.14781 674.126 55.5303L766 177"
              stroke="#FF5403"
              strokeLinecap="round"
            />
          </svg>
          <div className="mt-0 w-full" style={{ inset: "0" }}>
            <p
              className="text-gray-gray-400 text-left flex items-center justify-start"
              style={{
                font: "var(--degular-paragraph-xx-small, 500 14px/16px 'Degular-Medium', sans-serif)",
              }}
            >
              Feb 20 , 2022
            </p>
            <p
              className="text-gray-gray-400 text-right flex items-center justify-end"
              style={{
                font: "var(--degular-paragraph-x-small, 500 16px/24px 'Degular-Medium', sans-serif)",
              }}
            >
              Mar 03 , 2022
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-start justify-start">
          <div className="flex flex-col gap-2 items-start justify-start shrink-0 w-[271px] relative">
            <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
              <p
                className="text-gray-gray-400 text-left relative flex-1 flex items-center justify-start"
                style={{
                  font: "var(--degular-paragraph-xx-small, 500 14px/16px 'Degular-Medium', sans-serif)",
                }}
              >
                Ledger Balance
              </p>
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
                  id="mask0_1_1444"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#C4C4C4" />
                </mask>
                <g mask="url(#mask0_1_1444)">
                  <path
                    d="M10.0002 13.9583C10.1773 13.9583 10.3257 13.8984 10.4454 13.7786C10.5651 13.6588 10.6249 13.5104 10.6249 13.3333V9.79161C10.6249 9.61454 10.565 9.46611 10.4451 9.34631C10.3253 9.22652 10.1768 9.16663 9.99963 9.16663C9.82246 9.16663 9.67405 9.22652 9.5544 9.34631C9.43475 9.46611 9.37492 9.61454 9.37492 9.79161V13.3333C9.37492 13.5104 9.43484 13.6588 9.55467 13.7786C9.67452 13.8984 9.82302 13.9583 10.0002 13.9583ZM9.9999 7.74036C10.1906 7.74036 10.3505 7.67586 10.4795 7.54685C10.6085 7.41785 10.673 7.258 10.673 7.06729C10.673 6.8766 10.6085 6.71674 10.4795 6.58773C10.3505 6.45873 10.1906 6.39423 9.9999 6.39423C9.80919 6.39423 9.64934 6.45873 9.52034 6.58773C9.39134 6.71674 9.32684 6.8766 9.32684 7.06729C9.32684 7.258 9.39134 7.41785 9.52034 7.54685C9.64934 7.67586 9.80919 7.74036 9.9999 7.74036ZM10.0013 17.9166C8.90635 17.9166 7.87715 17.7088 6.91371 17.2933C5.95025 16.8777 5.11218 16.3138 4.3995 15.6014C3.68681 14.889 3.12259 14.0513 2.70686 13.0883C2.29112 12.1253 2.08325 11.0963 2.08325 10.0014C2.08325 8.90641 2.29103 7.87722 2.70659 6.91377C3.12214 5.95031 3.6861 5.11224 4.39846 4.39956C5.11084 3.68687 5.94854 3.12265 6.91156 2.70692C7.87458 2.29118 8.90356 2.08331 9.9985 2.08331C11.0934 2.08331 12.1226 2.29109 13.0861 2.70665C14.0495 3.1222 14.8876 3.68616 15.6003 4.39852C16.313 5.1109 16.8772 5.9486 17.2929 6.91163C17.7087 7.87464 17.9165 8.90362 17.9165 9.99856C17.9165 11.0935 17.7088 12.1227 17.2932 13.0861C16.8777 14.0496 16.3137 14.8877 15.6013 15.6004C14.889 16.3131 14.0513 16.8773 13.0882 17.293C12.1252 17.7087 11.0962 17.9166 10.0013 17.9166ZM9.9999 16.6666C11.861 16.6666 13.4374 16.0208 14.7291 14.7291C16.0207 13.4375 16.6666 11.8611 16.6666 9.99996C16.6666 8.13885 16.0207 6.56246 14.7291 5.27079C13.4374 3.97913 11.861 3.33329 9.9999 3.33329C8.13879 3.33329 6.5624 3.97913 5.27073 5.27079C3.97906 6.56246 3.33323 8.13885 3.33323 9.99996C3.33323 11.8611 3.97906 13.4375 5.27073 14.7291C6.5624 16.0208 8.13879 16.6666 9.9999 16.6666Z"
                    fill="#888F95"
                  />
                </g>
              </svg>
            </div>
            <p
              className="text-black-black-300 text-left relative self-stretch flex items-center justify-start"
              style={{
                font: "var(--degular-headers-xx-small, 700 28px/38px 'Degular-Bold', sans-serif)",
              }}
            >
              USD {wallet?.ledger_balance.toFixed(2) || "-"}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start shrink-0 w-[271px] relative">
            <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
              <div
                className="text-gray-gray-400 text-left relative flex-1 flex items-center justify-start"
                style={{
                  font: "var(--degular-paragraph-xx-small, 500 14px/16px 'Degular-Medium', sans-serif)",
                }}
              >
                Total Payout
              </div>
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
                  id="mask0_1_1449"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#C4C4C4" />
                </mask>
                <g mask="url(#mask0_1_1449)">
                  <path
                    d="M10.0002 13.9583C10.1773 13.9583 10.3257 13.8984 10.4454 13.7786C10.5651 13.6588 10.6249 13.5104 10.6249 13.3333V9.79164C10.6249 9.61457 10.565 9.46614 10.4451 9.34634C10.3253 9.22655 10.1768 9.16666 9.99963 9.16666C9.82246 9.16666 9.67405 9.22655 9.5544 9.34634C9.43475 9.46614 9.37492 9.61457 9.37492 9.79164V13.3333C9.37492 13.5104 9.43484 13.6588 9.55467 13.7786C9.67452 13.8984 9.82302 13.9583 10.0002 13.9583ZM9.9999 7.74039C10.1906 7.74039 10.3505 7.67589 10.4795 7.54689C10.6085 7.41789 10.673 7.25803 10.673 7.06732C10.673 6.87663 10.6085 6.71678 10.4795 6.58776C10.3505 6.45876 10.1906 6.39426 9.9999 6.39426C9.80919 6.39426 9.64934 6.45876 9.52034 6.58776C9.39134 6.71678 9.32684 6.87663 9.32684 7.06732C9.32684 7.25803 9.39134 7.41789 9.52034 7.54689C9.64934 7.67589 9.80919 7.74039 9.9999 7.74039ZM10.0013 17.9166C8.90635 17.9166 7.87715 17.7089 6.91371 17.2933C5.95025 16.8777 5.11218 16.3138 4.3995 15.6014C3.68681 14.8891 3.12259 14.0514 2.70686 13.0883C2.29112 12.1253 2.08325 11.0963 2.08325 10.0014C2.08325 8.90644 2.29103 7.87725 2.70659 6.9138C3.12214 5.95034 3.6861 5.11228 4.39846 4.39959C5.11084 3.6869 5.94854 3.12268 6.91156 2.70695C7.87458 2.29121 8.90356 2.08334 9.9985 2.08334C11.0934 2.08334 12.1226 2.29112 13.0861 2.70668C14.0495 3.12223 14.8876 3.68619 15.6003 4.39855C16.313 5.11093 16.8772 5.94863 17.2929 6.91166C17.7087 7.87467 17.9165 8.90365 17.9165 9.99859C17.9165 11.0935 17.7088 12.1227 17.2932 13.0862C16.8777 14.0496 16.3137 14.8877 15.6013 15.6004C14.889 16.3131 14.0513 16.8773 13.0882 17.293C12.1252 17.7088 11.0962 17.9166 10.0013 17.9166ZM9.9999 16.6667C11.861 16.6667 13.4374 16.0208 14.7291 14.7292C16.0207 13.4375 16.6666 11.8611 16.6666 9.99999C16.6666 8.13888 16.0207 6.56249 14.7291 5.27082C13.4374 3.97916 11.861 3.33332 9.9999 3.33332C8.13879 3.33332 6.5624 3.97916 5.27073 5.27082C3.97906 6.56249 3.33323 8.13888 3.33323 9.99999C3.33323 11.8611 3.97906 13.4375 5.27073 14.7292C6.5624 16.0208 8.13879 16.6667 9.9999 16.6667Z"
                    fill="#888F95"
                  />
                </g>
              </svg>
            </div>
            <div
              className="text-black-black-300 text-left relative self-stretch flex items-center justify-start"
              style={{
                font: "var(--degular-headers-xx-small, 700 28px/38px 'Degular-Bold', sans-serif)",
              }}
            >
              USD {wallet?.total_payout.toFixed(2) || "-"}
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start shrink-0 w-[271px] relative">
            <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
              <div
                className="text-gray-gray-400 text-left relative flex-1 flex items-center justify-start"
                style={{
                  font: "var(--degular-paragraph-xx-small, 500 14px/16px 'Degular-Medium', sans-serif)",
                }}
              >
                Total Revenue
              </div>
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
                  id="mask0_1_1454"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#C4C4C4" />
                </mask>
                <g mask="url(#mask0_1_1454)">
                  <path
                    d="M10.0002 13.9583C10.1773 13.9583 10.3257 13.8984 10.4454 13.7786C10.5651 13.6588 10.6249 13.5104 10.6249 13.3333V9.79164C10.6249 9.61457 10.565 9.46614 10.4451 9.34634C10.3253 9.22655 10.1768 9.16666 9.99963 9.16666C9.82246 9.16666 9.67405 9.22655 9.5544 9.34634C9.43475 9.46614 9.37492 9.61457 9.37492 9.79164V13.3333C9.37492 13.5104 9.43484 13.6588 9.55467 13.7786C9.67452 13.8984 9.82302 13.9583 10.0002 13.9583ZM9.9999 7.74039C10.1906 7.74039 10.3505 7.67589 10.4795 7.54689C10.6085 7.41789 10.673 7.25803 10.673 7.06732C10.673 6.87663 10.6085 6.71678 10.4795 6.58776C10.3505 6.45876 10.1906 6.39426 9.9999 6.39426C9.80919 6.39426 9.64934 6.45876 9.52034 6.58776C9.39134 6.71678 9.32684 6.87663 9.32684 7.06732C9.32684 7.25803 9.39134 7.41789 9.52034 7.54689C9.64934 7.67589 9.80919 7.74039 9.9999 7.74039ZM10.0013 17.9166C8.90635 17.9166 7.87715 17.7089 6.91371 17.2933C5.95025 16.8777 5.11218 16.3138 4.3995 15.6014C3.68681 14.8891 3.12259 14.0514 2.70686 13.0883C2.29112 12.1253 2.08325 11.0963 2.08325 10.0014C2.08325 8.90644 2.29103 7.87725 2.70659 6.9138C3.12214 5.95034 3.6861 5.11228 4.39846 4.39959C5.11084 3.6869 5.94854 3.12268 6.91156 2.70695C7.87458 2.29121 8.90356 2.08334 9.9985 2.08334C11.0934 2.08334 12.1226 2.29112 13.0861 2.70668C14.0495 3.12223 14.8876 3.68619 15.6003 4.39855C16.313 5.11093 16.8772 5.94863 17.2929 6.91166C17.7087 7.87467 17.9165 8.90365 17.9165 9.99859C17.9165 11.0935 17.7088 12.1227 17.2932 13.0862C16.8777 14.0496 16.3137 14.8877 15.6013 15.6004C14.889 16.3131 14.0513 16.8773 13.0882 17.293C12.1252 17.7088 11.0962 17.9166 10.0013 17.9166ZM9.9999 16.6667C11.861 16.6667 13.4374 16.0208 14.7291 14.7292C16.0207 13.4375 16.6666 11.8611 16.6666 9.99999C16.6666 8.13888 16.0207 6.56249 14.7291 5.27082C13.4374 3.97916 11.861 3.33332 9.9999 3.33332C8.13879 3.33332 6.5624 3.97916 5.27073 5.27082C3.97906 6.56249 3.33323 8.13888 3.33323 9.99999C3.33323 11.8611 3.97906 13.4375 5.27073 14.7292C6.5624 16.0208 8.13879 16.6667 9.9999 16.6667Z"
                    fill="#888F95"
                  />
                </g>
              </svg>
            </div>
            <div
              className="text-black-black-300 text-left relative self-stretch flex items-center justify-start"
              style={{
                font: "var(--degular-headers-xx-small, 700 28px/38px 'Degular-Bold', sans-serif)",
              }}
            >
              USD {wallet?.total_revenue.toFixed(2) || "-"}
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start shrink-0 w-[271px] relative">
            <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
              <div
                className="text-gray-gray-400 text-left relative flex-1 flex items-center justify-start"
                style={{
                  font: "var(--degular-paragraph-xx-small, 500 14px/16px 'Degular-Medium', sans-serif)",
                }}
              >
                Pending Payout
              </div>
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
                  id="mask0_1_1459"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#C4C4C4" />
                </mask>
                <g mask="url(#mask0_1_1459)">
                  <path
                    d="M10.0002 13.9583C10.1773 13.9583 10.3257 13.8984 10.4454 13.7786C10.5651 13.6588 10.6249 13.5104 10.6249 13.3333V9.79162C10.6249 9.61455 10.565 9.46612 10.4451 9.34633C10.3253 9.22654 10.1768 9.16664 9.99963 9.16664C9.82246 9.16664 9.67405 9.22654 9.5544 9.34633C9.43475 9.46612 9.37492 9.61455 9.37492 9.79162V13.3333C9.37492 13.5104 9.43484 13.6588 9.55467 13.7786C9.67452 13.8984 9.82302 13.9583 10.0002 13.9583ZM9.9999 7.74037C10.1906 7.74037 10.3505 7.67587 10.4795 7.54687C10.6085 7.41787 10.673 7.25802 10.673 7.06731C10.673 6.87661 10.6085 6.71676 10.4795 6.58775C10.3505 6.45875 10.1906 6.39425 9.9999 6.39425C9.80919 6.39425 9.64934 6.45875 9.52034 6.58775C9.39134 6.71676 9.32684 6.87661 9.32684 7.06731C9.32684 7.25802 9.39134 7.41787 9.52034 7.54687C9.64934 7.67587 9.80919 7.74037 9.9999 7.74037ZM10.0013 17.9166C8.90635 17.9166 7.87715 17.7088 6.91371 17.2933C5.95025 16.8777 5.11218 16.3138 4.3995 15.6014C3.68681 14.889 3.12259 14.0513 2.70686 13.0883C2.29112 12.1253 2.08325 11.0963 2.08325 10.0014C2.08325 8.90643 2.29103 7.87723 2.70659 6.91379C3.12214 5.95033 3.6861 5.11226 4.39846 4.39958C5.11084 3.68689 5.94854 3.12267 6.91156 2.70693C7.87458 2.2912 8.90356 2.08333 9.9985 2.08333C11.0934 2.08333 12.1226 2.29111 13.0861 2.70666C14.0495 3.12222 14.8876 3.68618 15.6003 4.39854C16.313 5.11091 16.8772 5.94861 17.2929 6.91164C17.7087 7.87466 17.9165 8.90363 17.9165 9.99858C17.9165 11.0935 17.7088 12.1227 17.2932 13.0862C16.8777 14.0496 16.3137 14.8877 15.6013 15.6004C14.889 16.3131 14.0513 16.8773 13.0882 17.293C12.1252 17.7088 11.0962 17.9166 10.0013 17.9166ZM9.9999 16.6666C11.861 16.6666 13.4374 16.0208 14.7291 14.7291C16.0207 13.4375 16.6666 11.8611 16.6666 9.99997C16.6666 8.13886 16.0207 6.56247 14.7291 5.27081C13.4374 3.97914 11.861 3.33331 9.9999 3.33331C8.13879 3.33331 6.5624 3.97914 5.27073 5.27081C3.97906 6.56247 3.33323 8.13886 3.33323 9.99997C3.33323 11.8611 3.97906 13.4375 5.27073 14.7291C6.5624 16.0208 8.13879 16.6666 9.9999 16.6666Z"
                    fill="#888F95"
                  />
                </g>
              </svg>
            </div>
            <div
              className="text-black-black-300 text-left relative self-stretch flex items-center justify-start"
              style={{
                font: "var(--degular-headers-xx-small, 700 28px/38px 'Degular-Bold', sans-serif)",
              }}
            >
              USD {wallet?.pending_payout.toFixed(2) || "-"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
