import React from "react";
import { Text, Img } from "@/components";
const Footer = () => {
  return (
    <div className="bg-gray-900 flex flex-col items-center justify-start p-[94px] md:px-10 sm:px-5 w-full">
      <div className="flex flex-col items-center justify-start max-w-[1200px] mb-[5px] mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start w-[42%] md:w-full">
            <Img
              className="h-24"
              src="images/img_linkimage_white_a700.svg"
              alt="linkimage_One"
            />
            <Text
              className="mt-[87px] text-[13.89px] text-white-A700"
              size="txtOxygenRegular1389WhiteA700"
            >
              548 Market St PMB 30073, San Francisco
            </Text>
            <Text
              className="mt-4 text-[13.89px] text-white-A700"
              size="txtOxygenRegular1389WhiteA700"
            >
              ©2024 Topmate
            </Text>
          </div>
          <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[34%] md:w-full">
            <div className="flex flex-col items-start justify-start pb-12 md:pr-10 pr-12 sm:pr-5 w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-[93%] md:w-full">
                <div className="flex flex-row items-center justify-between w-3/4 md:w-full">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtOxygenRegular14WhiteA700"
                  >
                    About
                  </Text>
                  <Text
                    className="text-sm text-white-A700"
                    size="txtOxygenRegular14WhiteA700"
                  >
                    Pricing
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-[71%] md:w-full">
                  <a href="javascript:" className="text-sm text-white-A700">
                    <Text size="txtOxygenRegular14WhiteA700">Contact Us</Text>
                  </a>
                  <Text
                    className="text-sm text-white-A700"
                    size="txtOxygenRegular14WhiteA700"
                  >
                    Blog
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <a
                    href="javascript:"
                    className="text-[13.89px] text-white-A700"
                  >
                    <Text size="txtOxygenRegular1389WhiteA700">
                      Terms Of Service
                    </Text>
                  </a>
                  <Text
                    className="text-sm text-white-A700"
                    size="txtOxygenRegular14WhiteA700"
                  >
                    Creator report 2022
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-[92%] md:w-full">
                  <a href="javascript:" className="text-sm text-white-A700">
                    <Text size="txtOxygenRegular14WhiteA700">Privacy</Text>
                  </a>
                  <Text
                    className="text-sm text-white-A700"
                    size="txtOxygenRegular14WhiteA700"
                  >
                    Carousel Maker
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-10 items-center justify-start w-[43%] md:w-full">
              <div className="bg-black-900 flex flex-col h-[30px] items-center justify-start rounded-[50%] w-[30px]">
                <Img
                  className="h-[30px] rounded-[50%] w-[30px]"
                  src="images/img_link.svg"
                  alt="link"
                />
              </div>
              <div className="bg-black-900 flex flex-col h-[30px] items-center justify-start rounded-[50%] w-[30px]">
                <Img
                  className="h-7 w-7"
                  src="images/img_imgtwitter.svg"
                  alt="imgtwitter"
                />
              </div>
              <div className="bg-black-900 flex flex-col h-[30px] items-center justify-start rounded-[50%] w-[30px]">
                <Img
                  className="h-[30px] rounded-[50%] w-[30px]"
                  src="images/img_info.svg"
                  alt="info"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
