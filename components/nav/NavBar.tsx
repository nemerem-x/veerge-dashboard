import React from "react";
import { Link } from "@chakra-ui/next-js";
// import { Image } from "@nextui-org/react";
import Calendar from "react-calendar";
import "../../app/Calendar.css";
import {
  IconButton,
  Input,
  Stack,
  useDisclosure,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Image
} from "@chakra-ui/react";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className={"w-full h-[149px] relative flex flex-col"}>
      <div
        className="bg-black flex px-20 justify-between items-center h-[100px]"
        style={{
          boxShadow:
            "var(--lowshadow-box-shadow,  0px 4px 8px 0px rgba(0, 0, 0, 0.02))",
        }}
      >
        <div className="w-[165px] h-auto">
          <Image
            className="w-[119px] h-[35px]"
            src="/inscentive1.png"
            alt="logo"
          />
          <p className="text-[#ffffff] text-sm">For Mainstone</p>
        </div>

        {/* other end of nav */}
        <div className="flex items-center gap-16">
          <div className="flex flex-row gap-6 items-center justify-start relative">
            <div className="cursor-pointer w-8 h-8 relative">
              <svg
                className="h-[auto] absolute left-[2.67px] top-[2.67px] overflow-visible"
                style={{}}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.7736 0.666809H20.2136C24.7469 0.666809 27.3336 3.22681 27.3336 7.77348V20.2268C27.3336 24.7468 24.7603 27.3335 20.2269 27.3335H7.7736C3.22693 27.3335 0.666931 24.7468 0.666931 20.2268V7.77348C0.666931 3.22681 3.22693 0.666809 7.7736 0.666809ZM15.0936 15.1068H18.8803C19.4936 15.0935 19.9869 14.6001 19.9869 13.9868C19.9869 13.3735 19.4936 12.8801 18.8803 12.8801H15.0936V9.12014C15.0936 8.50681 14.6003 8.01348 13.9869 8.01348C13.3736 8.01348 12.8803 8.50681 12.8803 9.12014V12.8801H9.10693C8.8136 12.8801 8.5336 13.0001 8.32027 13.2001C8.12027 13.4135 8.00027 13.6921 8.00027 13.9868C8.00027 14.6001 8.4936 15.0935 9.10693 15.1068H12.8803V18.8801C12.8803 19.4935 13.3736 19.9868 13.9869 19.9868C14.6003 19.9868 15.0936 19.4935 15.0936 18.8801V15.1068Z"
                  fill="white"
                />
              </svg>
            </div>

            <ButtonGroup size="sm" isAttached variant="link">
              <IconButton
                // ref={btnRef}
                aria-label="icon"
                onClick={onOpen}
                icon={
                  <svg
                    className="h-[auto] overflow-visible"
                    style={{}}
                    width="24"
                    height="28"
                    viewBox="0 0 24 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 20.4933V10.3427H24V20.5747C24 24.76 21.3655 27.3333 17.1504 27.3333H6.83644C2.66081 27.3333 0 24.7067 0 20.4933ZM6.61252 17.2133C6.00659 17.2413 5.50604 16.76 5.4797 16.148C5.4797 15.5347 5.9539 15.028 6.55983 15C7.15258 15 7.63996 15.468 7.65313 16.0667C7.67948 16.6813 7.20527 17.188 6.61252 17.2133ZM12.0263 17.2133C11.4204 17.2413 10.9199 16.76 10.8935 16.148C10.8935 15.5347 11.3677 15.028 11.9736 15C12.5664 15 13.0538 15.468 13.067 16.0667C13.0933 16.6813 12.6191 17.188 12.0263 17.2133ZM17.4007 22.12C16.7947 22.1067 16.3074 21.6 16.3074 20.9867C16.2942 20.3733 16.7816 19.868 17.3875 19.8547H17.4007C18.0198 19.8547 18.5203 20.3613 18.5203 20.9867C18.5203 21.6133 18.0198 22.12 17.4007 22.12ZM10.8935 20.9866C10.9199 21.6 11.4204 22.0813 12.0263 22.0533C12.6191 22.028 13.0933 21.5213 13.067 20.908C13.0538 20.308 12.5664 19.84 11.9736 19.84C11.3677 19.868 10.8935 20.3733 10.8935 20.9866ZM5.46651 20.9866C5.49286 21.6 5.99341 22.0813 6.59933 22.0533C7.19209 22.028 7.66629 21.5213 7.63995 20.908C7.62678 20.308 7.1394 19.84 6.54664 19.84C5.94072 19.868 5.46651 20.3733 5.46651 20.9866ZM16.3205 16.1346C16.3205 15.5213 16.7947 15.028 17.4006 15.0146C17.9934 15.0146 18.4676 15.4933 18.494 16.0813C18.5071 16.6946 18.0329 17.2013 17.4402 17.2133C16.8342 17.2266 16.3337 16.76 16.3205 16.148V16.1346Z"
                      fill="white"
                    />
                    <path
                      opacity="0.4"
                      d="M0.00448608 10.3425C0.0216101 9.55987 0.0874718 8.00653 0.211292 7.50653C0.843564 4.69453 2.99066 2.90786 6.05981 2.6532H17.9413C20.9841 2.9212 23.1575 4.71987 23.7898 7.50653C23.9123 7.9932 23.9781 9.55853 23.9953 10.3425H0.00448608Z"
                      fill="white"
                    />
                    <path
                      d="M7.07314 6.78666C7.65272 6.78666 8.08741 6.34799 8.08741 5.75999V1.69466C8.08741 1.10666 7.65272 0.666656 7.07314 0.666656C6.49356 0.666656 6.05887 1.10666 6.05887 1.69466V5.75999C6.05887 6.34799 6.49356 6.78666 7.07314 6.78666Z"
                      fill="white"
                    />
                    <path
                      d="M16.9266 6.78666C17.493 6.78666 17.9409 6.34799 17.9409 5.75999V1.69466C17.9409 1.10666 17.493 0.666656 16.9266 0.666656C16.347 0.666656 15.9123 1.10666 15.9123 1.69466V5.75999C15.9123 6.34799 16.347 6.78666 16.9266 6.78666Z"
                      fill="white"
                    />
                  </svg>
                }
              />
            </ButtonGroup>
            <Drawer
              colorScheme={"dark"}
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              // finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Calendar</DrawerHeader>
                <Calendar
                  showFixedNumberOfWeeks={true}
                  next2Label={null}
                  prev2Label={null}
                />
              </DrawerContent>
            </Drawer>
            <svg
              className="cursor-pointer w-8 h-8 relative overflow-visible"
              style={{}}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.9428 11.7284C24.9428 13.4031 25.3853 14.39 26.3593 15.5275C27.0975 16.3655 27.3333 17.4411 27.3333 18.608C27.3333 19.7736 26.9504 20.8801 26.1831 21.7785C25.1787 22.8556 23.762 23.5431 22.3163 23.6627C20.2212 23.8412 18.1249 23.9916 16.0007 23.9916C13.8751 23.9916 11.7801 23.9017 9.68499 23.6627C8.23794 23.5431 6.82135 22.8556 5.81822 21.7785C5.05095 20.8801 4.66666 19.7736 4.66666 18.608C4.66666 17.4411 4.90386 16.3655 5.64064 15.5275C6.64511 14.39 7.05855 13.4031 7.05855 11.7284V11.1604C7.05855 8.91778 7.61776 7.45135 8.76932 6.0158C10.4814 3.92226 13.2258 2.66666 15.9411 2.66666H16.0603C18.8339 2.66666 21.6669 3.98268 23.35 6.1662C24.4419 7.5722 24.9428 8.97686 24.9428 11.1604V11.7284ZM12.0982 26.7477C12.0982 26.0764 12.7144 25.7688 13.2842 25.6372C13.9508 25.4963 18.0124 25.4963 18.6789 25.6372C19.2488 25.7688 19.8649 26.0764 19.8649 26.7477C19.8317 27.3869 19.4568 27.9537 18.9387 28.3136C18.2668 28.8373 17.4784 29.1689 16.6541 29.2885C16.1983 29.3476 15.7504 29.3489 15.3104 29.2885C14.4848 29.1689 13.6964 28.8373 13.0258 28.3123C12.5064 27.9537 12.1314 27.3869 12.0982 26.7477Z"
                fill="white"
              />
            </svg>
          </div>

          {/* <div
            className={"w-[178px] cursor-pointer h-12 flex items-center gap-2"}
          >
            <svg
              className="h-[auto] overflow-visible"
              style={{}}
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_249_4)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                  fill="url(#paint0_linear_249_4)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.9176 39.4385C17.1725 39.4385 11.4775 38.3423 11.4775 34.1126C11.4775 29.8813 17.2083 28.8239 23.9176 28.8239C30.6641 28.8239 36.3576 29.9202 36.3576 34.15C36.3576 38.3811 30.6268 39.4385 23.9176 39.4385V39.4385ZM32.1488 16.568C32.1488 21.1351 28.4869 24.7972 23.9166 24.7972C19.3478 24.7972 15.6844 21.1351 15.6844 16.568C15.6844 12.0009 19.3478 8.34036 23.9166 8.34036C28.4869 8.34036 32.1488 12.0009 32.1488 16.568Z"
                  fill="#191919"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_249_4"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="48"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FEFEFE" />
                  <stop offset="1" stopColor="#ECECEC" />
                </linearGradient>
                <clipPath id="clip0_249_4">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-white text-left">Ahmed Ali</p>
            <svg
              className="h-[auto] overflow-visible"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 8L18 14L6 14L12 8Z" fill="white" />
            </svg>
          </div> */}

          <Menu>
            <MenuButton
              variant="link"
              as={Button}
              leftIcon={
                <svg
                  className="h-[auto] overflow-visible"
                  style={{}}
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_249_4)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                      fill="url(#paint0_linear_249_4)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.9176 39.4385C17.1725 39.4385 11.4775 38.3423 11.4775 34.1126C11.4775 29.8813 17.2083 28.8239 23.9176 28.8239C30.6641 28.8239 36.3576 29.9202 36.3576 34.15C36.3576 38.3811 30.6268 39.4385 23.9176 39.4385V39.4385ZM32.1488 16.568C32.1488 21.1351 28.4869 24.7972 23.9166 24.7972C19.3478 24.7972 15.6844 21.1351 15.6844 16.568C15.6844 12.0009 19.3478 8.34036 23.9166 8.34036C28.4869 8.34036 32.1488 12.0009 32.1488 16.568Z"
                      fill="#191919"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_249_4"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="48"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FEFEFE" />
                      <stop offset="1" stopColor="#ECECEC" />
                    </linearGradient>
                    <clipPath id="clip0_249_4">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              rightIcon={
                <svg
                  className="h-[auto] overflow-visible"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 8L18 14L6 14L12 8Z" fill="white" />
                </svg>
              }
            >
              Ahmed Ali
            </MenuButton>
            <MenuList>
              <MenuItem minH="48px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://placekitten.com/100/100"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <span>Fluffybuns the Destroyer</span>
              </MenuItem>
              <MenuItem minH="40px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://placekitten.com/120/120"
                  alt="Simon the pensive"
                  mr="12px"
                />
                <span>Simon the pensive</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>

      <div
        className="bg-main-white flex justify-center items-center w-full h-[70px]"
        style={{
          boxShadow:
            "var(--lowshadow-box-shadow,  0px 4px 8px 0px rgba(0, 0, 0, 0.02))",
        }}
      >
        <div className="w-[80%] flex justify-between">
          <div className="flex gap-12">
            <Stack direction="row" spacing={4} align="center">
              <Link href="/">
                <Button
                  leftIcon={
                    <svg
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{}}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z"
                        fill="#191919"
                      />
                    </svg>
                  }
                  colorScheme="gray"
                  variant="ghost"
                >
                  Dashboard
                </Button>
              </Link>
            </Stack>

            <Stack direction="row" spacing={4} align="center">
              <Link href="/listings">
                <Button
                  leftIcon={
                    <svg
                      className="shrink-0 w-6 h-6 relative overflow-visible"
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
                        d="M4.23914 10.3913C4.25355 6.15071 7.7029 2.72471 11.9435 2.73912C16.1841 2.75353 19.6101 6.20288 19.5957 10.4435V10.5304C19.5435 13.2869 18.0043 15.8348 16.1174 17.8261C15.0382 18.9467 13.8331 19.9388 12.5261 20.7826C12.1766 21.0849 11.6582 21.0849 11.3087 20.7826C9.36021 19.5143 7.65008 17.9131 6.25653 16.0522C5.01449 14.4294 4.30931 12.4597 4.23914 10.4174V10.3913Z"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9174 13C13.2765 13 14.3783 11.8982 14.3783 10.5391C14.3783 9.17999 13.2765 8.07822 11.9174 8.07822C10.5583 8.07822 9.45654 9.17999 9.45654 10.5391C9.45654 11.8982 10.5583 13 11.9174 13Z"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  colorScheme="gray"
                  variant="ghost"
                >
                  Listings
                </Button>
              </Link>
            </Stack>

            <Stack direction="row" spacing={4} align="center">
              <Link href="/users">
                <Button
                  leftIcon={
                    <svg
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{}}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5789 12.0561C14.2177 12.0561 16.3569 9.91686 16.3569 7.27803C16.3569 4.6392 14.2177 2.5 11.5789 2.5C8.94007 2.5 6.80087 4.6392 6.80087 7.27803C6.80087 9.91686 8.94007 12.0561 11.5789 12.0561Z"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.00002 18.7014C3.99873 18.3655 4.07385 18.0337 4.2197 17.7311C4.67736 16.8158 5.96798 16.3307 7.03892 16.111C7.81128 15.9462 8.59431 15.836 9.38217 15.7815C10.8408 15.6533 12.3079 15.6533 13.7666 15.7815C14.5544 15.8367 15.3374 15.9468 16.1099 16.111C17.1808 16.3307 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.064 18.9291 19.6808C18.4714 20.6419 17.1808 21.0812 16.1099 21.2918C15.3384 21.4634 14.5551 21.5766 13.7666 21.6304C12.5794 21.7311 11.3866 21.7494 10.1968 21.6854C9.92221 21.6854 9.65677 21.6854 9.38217 21.6304C8.59663 21.5773 7.81632 21.4641 7.04807 21.2918C5.96798 21.0812 4.68652 20.6419 4.2197 19.6808C4.0746 19.3747 3.99955 19.0401 4.00002 18.7014Z"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  colorScheme="gray"
                  variant="ghost"
                >
                  Users
                </Button>
              </Link>
            </Stack>

            <Stack direction="row" spacing={4} align="center">
              <Link href="/account">
                <Button
                  leftIcon={
                    <svg
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{}}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.6389 14.3958H17.5906C16.1042 14.3949 14.8994 13.1909 14.8985 11.7045C14.8985 10.218 16.1042 9.01413 17.5906 9.01321H21.6389"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.0486 11.6429H17.7369"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.74766 3H16.3911C19.2892 3 21.6388 5.34951 21.6388 8.24766V15.4247C21.6388 18.3229 19.2892 20.6724 16.3911 20.6724H7.74766C4.84951 20.6724 2.5 18.3229 2.5 15.4247V8.24766C2.5 5.34951 4.84951 3 7.74766 3Z"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.03561 7.53818H12.4346"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  colorScheme="gray"
                  variant="ghost"
                >
                  Account
                </Button>
              </Link>
            </Stack>

            <Stack direction="row" spacing={4} align="center">
              <Link href="/request">
                <Button
                  leftIcon={
                    <svg
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{}}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.09264 9.40427H20.9166"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.4421 13.3097H16.4513"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.0046 13.3097H12.0139"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.55789 13.3097H7.56715"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.4421 17.1962H16.4513"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.0046 17.1962H12.0139"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.55789 17.1962H7.56715"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.0437 2V5.29078"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.9655 2V5.29078"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.2383 3.57919H7.77096C4.83427 3.57919 3 5.21513 3 8.22222V17.2719C3 20.3262 4.83427 22 7.77096 22H16.229C19.175 22 21 20.3546 21 17.3475V8.22222C21.0092 5.21513 19.1842 3.57919 16.2383 3.57919Z"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  colorScheme="gray"
                  variant="ghost"
                >
                  Request
                </Button>
              </Link>
            </Stack>

            <Stack direction="row" spacing={4} align="center">
              <Link href="/settings">
                <Button
                  leftIcon={
                    <svg
                      className="h-[auto] w-[74.11%] bottom-[10.42%] top-[9.49%] h-[80.09%] overflow-visible"
                      style={{}}
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.8066 6.62358L18.1842 5.54349C17.6576 4.62957 16.4907 4.31429 15.5755 4.83869V4.83869C15.1399 5.09531 14.6201 5.16812 14.1307 5.04106C13.6413 4.91399 13.2226 4.59749 12.9668 4.16134C12.8023 3.88412 12.7139 3.56836 12.7105 3.24601V3.24601C12.7254 2.72919 12.5304 2.22837 12.17 1.85764C11.8096 1.48691 11.3145 1.27783 10.7975 1.27805H9.54348C9.03695 1.27804 8.5513 1.47988 8.19398 1.83891C7.83667 2.19795 7.63716 2.68456 7.63959 3.19109V3.19109C7.62458 4.23689 6.77246 5.07678 5.72655 5.07667C5.4042 5.07332 5.08844 4.98491 4.81122 4.82038V4.82038C3.89605 4.29598 2.7291 4.61126 2.20252 5.52519L1.53433 6.62358C1.00839 7.53636 1.31938 8.70258 2.22998 9.23228V9.23228C2.82189 9.57401 3.18652 10.2056 3.18652 10.889C3.18652 11.5725 2.82189 12.204 2.22998 12.5458V12.5458C1.32054 13.0719 1.00921 14.2353 1.53433 15.1453V15.1453L2.16591 16.2346C2.41263 16.6798 2.82659 17.0083 3.31618 17.1474C3.80577 17.2866 4.33062 17.2249 4.77461 16.976V16.976C5.21106 16.7213 5.73117 16.6515 6.21932 16.7822C6.70748 16.9128 7.12322 17.233 7.37415 17.6716C7.53868 17.9489 7.62709 18.2646 7.63044 18.587V18.587C7.63044 19.6435 8.48694 20.5 9.54348 20.5H10.7975C11.8505 20.5 12.7055 19.6491 12.7105 18.5961V18.5961C12.7081 18.088 12.9089 17.6 13.2681 17.2407C13.6274 16.8814 14.1155 16.6806 14.6236 16.6831C14.9452 16.6917 15.2596 16.7797 15.5389 16.9394V16.9394C16.4517 17.4653 17.6179 17.1543 18.1476 16.2437V16.2437L18.8066 15.1453C19.0617 14.7075 19.1318 14.186 19.0012 13.6963C18.8706 13.2067 18.5502 12.7893 18.111 12.5366V12.5366C17.6717 12.2839 17.3514 11.8665 17.2208 11.3769C17.0902 10.8873 17.1602 10.3658 17.4153 9.92793C17.5812 9.63831 17.8214 9.39817 18.111 9.23228V9.23228C19.0161 8.70286 19.3264 7.54346 18.8066 6.63274V6.63274V6.62358Z"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="10.1751"
                        cy="10.889"
                        r="2.63616"
                        stroke="#3D3D3D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  colorScheme="gray"
                  variant="ghost"
                >
                  Settings
                </Button>
              </Link>
            </Stack>
          </div>

          <div className="w-fit relative">
            <Input
              size="md"
              htmlSize={30}
              variant="outline"
              width="auto"
              placeholder="Search... properties, customers here"
            />
            <svg
              className="h-[auto] absolute right-3 top-2 w-[25px] h-[25px] overflow-visible"
              style={{}}
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7666 20.7552C16.7308 20.7552 20.7551 16.7309 20.7551 11.7666C20.7551 6.80236 16.7308 2.77805 11.7666 2.77805C6.80233 2.77805 2.77802 6.80236 2.77802 11.7666C2.77802 16.7309 6.80233 20.7552 11.7666 20.7552Z"
                stroke="#3D3D3D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.0183 18.4851L21.5423 22"
                stroke="#3D3D3D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
