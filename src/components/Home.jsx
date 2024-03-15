"use client";
import { Button, Img, List, Text } from "@/components";
import Image from "next/image";
import React, { useCallback, useState, useMemo, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
const Home = () => {
  const [active, setActive] = useState("data");
  const [activeSession, setActiveSession] = useState(1);
  const supabase = useMemo(() => createClient(), []);
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState([]);
  const [sliceVal, setSliceVal] = useState(16);
  const fetchProfileData = useCallback(async () => {
    try {
      const { data: profile, error } = await supabase.from("top").select("*");

      if (error) {
        console.error(
          "Error fetching profile data from Supabase:",
          error.message
        );
        return <div>User Not Found</div>;
      } else {
        setProfileData(profile);
        console.log(profile);
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  }, [supabase]);
  useEffect(() => {
    fetchProfileData();
  });
  const handleLoadMore = () => {
    setSliceVal(sliceVal + 16);
  };
  if (loading) return <></>;
  if (!(profileData.length > 0)) return <>No User Found!</>;

  return (
    <div className="flex flex-col font-oxygen items-center justify-end mx-auto w-full">
      <div className="bg-zinc-100 flex flex-col items-center justify-start pb-[76px] w-full">
        <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start w-full">
          <div className=" flex lg:hidden md:flex-col flex-row md:gap-5 items-center justify-center max-w-[1200px] mx-auto md:px-5 w-full ">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[59%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[83%] md:w-full">
                {/* <Image
                  className="h-[50px] sm:h-auto object-cover w-[71%] md:w-full"
                  height={500}
                  width={500}
                  src="/images/img_linklaunchstoriespng.png"
                  alt="linklaunchstori"
                /> */}
                <div className="md:h-[150px] mt-[30px] relative w-3/4 sm:w-full ">
                  <Text
                    className=" 12l:text-5xl text-[70px] leading-[80px] text-black-900_e0 top-[0]"
                    size="txtOxygenRegular86"
                  >
                    Hire Fractional
                  </Text>
                  <Text
                    className=" 12l:text-5xl text-[70px] leading-[80px] text-black-900_e0  md:text-wrap"
                    size="txtOxygenBold8348"
                  >
                    Data Science Talent
                  </Text>
                </div>

                <Text
                  className="leading-[30.00px] mt-0.5 text-[22px] text-black-900_e0 sm:text-lg md:text-xl"
                  size="txtOxygenRegular22"
                >
                  <>
                    Turn your passion and knowledge into a thriving business.
                    <br />
                    Help your audience get ahead in life
                  </>
                </Text>
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-between mt-[54px] w-full">
                  <div className="bg-gray-900 border border-gray-900 border-solid flex flex-row gap-6 items-center justify-center p-3.5 rounded-md">
                    <Text
                      className="ml-[39px] mt-1.5 text-[19.69px] text-center text-white-A700"
                      size="txtOxygenBold1969"
                    >
                      Start My Page
                    </Text>
                    <Image
                      className="h-5 mr-[39px] w-5"
                      height={20}
                      width={20}
                      src="/images/img_imgarrowright.svg"
                      alt="imgarrowright"
                    />
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[284px] rounded-md"
                    leftIcon={
                      <Image
                        className="h-[42px] mr-2"
                        src="/images/img_overflowmenu.svg"
                        width={42}
                        height={42}
                        alt="overflow_menu"
                      />
                    }
                    color="gray_900"
                    size="xs"
                    variant="outline"
                  >
                    <div className="font-bold text-[19.22px] text-center">
                      Watch The Film
                    </div>
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row gap-5 items-start justify-start mt-[30px] w-[66%] md:w-full">
                  <div className="flex relative w-[47%] sm:w-full">
                    <div className="flex my-auto mx-auto">
                      <Image
                        className="h-[50px] my-auto rounded-[50%] w-[50px]"
                        src="/images/img_image.png"
                        height={50}
                        width={50}
                        alt="image_One"
                      />
                      <Image
                        className="h-[50px] ml-[-8px] my-auto rounded-[50%] w-[50px] z-[1]"
                        height={50}
                        width={50}
                        src="/images/img_image_50x50.png"
                        alt="image_Two"
                      />
                      <Image
                        className="h-[50px] ml-[-8px] my-auto rounded-[50%] w-[50px] z-[1]"
                        height={50}
                        width={50}
                        src="/images/img_image_1.png"
                        alt="image_Three"
                      />
                      <Image
                        className="h-[50px] ml-[-8px] my-auto rounded-[50%] w-[50px] z-[1]"
                        height={50}
                        width={50}
                        src="/images/img_image_2.png"
                        alt="image_Four"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[7px] items-center justify-start w-[49%] sm:w-full">
                    <div className="flex flex-row gap-3.5  items-center justify-between">
                      <Image
                        className="h-[25px] w-[25px]"
                        src="/images/img_radiogroupitem.svg"
                        alt="radiogroupitem"
                        height={25}
                        width={25}
                      />
                      <Image
                        className="h-[25px] w-[25px]"
                        src="/images/img_radiogroupitem.svg"
                        alt="radiogroupitem_One"
                        height={25}
                        width={25}
                      />
                      <Image
                        className="h-[25px] w-[25px]"
                        src="/images/img_radiogroupitem.svg"
                        alt="radiogroupitem_Two"
                        width={25}
                        height={25}
                      />
                      <Image
                        className="h-[25px] w-[25px]"
                        src="/images/img_radiogroupitem.svg"
                        alt="radiogroupitem_Three"
                        width={25}
                        height={25}
                      />
                      <Image
                        className="h-[25px] w-[25px]"
                        src="/images/img_radiogroupitem.svg"
                        alt="radiogroupitem_Four"
                        width={25}
                        height={25}
                      />
                    </div>
                    <Text
                      className="text-black-900_e0 text-lg"
                      size="txtOxygenRegular18"
                    >
                      5/5 by 1000+ creators
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start lg:pb-32 pb-0 w-[42%] md:w-full md:mt-20">
              <div className="md:h-[486px] h-[494px] pb-1.5 relative w-full">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center object-contain justify-center m-auto p-[5px] w-full"
                  style={{
                    backgroundImage: "url('images/img_divanttypography.svg')",
                  }}
                >
                  <Image
                    className="h-[360px+] sm:h-auto mb-[116px] object-contain w-[67%]"
                    src="/images/img_image_360x327.png"
                    alt="image_Eleven"
                    height={360}
                    width={327}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex hidden md:flex-col flex-row md:gap-5 items-center justify-center max-w-[1200px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start lg:pb-32 pb-0 w-[42%] md:w-full md:mt-20">
              <div className="md:h-[486px] h-[494px] pb-1.5 relative w-full">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center object-contain justify-center m-auto p-[5px] w-full"
                  style={{
                    backgroundImage: "url('images/img_divanttypography.svg')",
                  }}
                >
                  <Image
                    className="h-[360px+] sm:h-auto mb-[116px] object-contain w-[67%]"
                    src="/images/img_image_360x327.png"
                    alt="image_Eleven"
                    height={660}
                    width={800}
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-end justify-start w-[59%] md:w-full">
              <div className="flex flex-col items-end justify-start w-[83%] md:w-full text-right">
                {/* <Image
                  className="h-[50px] sm:h-auto object-cover w-[71%] md:w-full"
                  height={500}
                  width={500}
                  src="/images/img_linklaunchstoriespng.png"
                  alt="linklaunchstori"
                /> */}
                <div className="md:h-[150px] mt-[30px] relative w-3/4 sm:w-full ">
                  <Text
                    className=" 12l:text-5xl text-[70px] leading-[80px] text-black-900_e0 top-[0] text-right"
                    size="txtOxygenRegular86"
                  >
                    Hire Fractional
                  </Text>
                  <Text
                    className=" 12l:text-5xl text-[70px] leading-[80px] text-black-900_e0  md:text-wrap text-right"
                    size="txtOxygenBold8348"
                  >
                    Data Science Talent
                  </Text>
                </div>

                <Text
                  className="leading-[30.00px] mt-0.5 text-[22px] text-black-900_e0 sm:text-lg md:text-xl text-right"
                  size="txtOxygenRegular22"
                >
                  <>
                    Turn your passion and knowledge into a thriving business.
                    <br />
                    Help your audience get ahead in life
                  </>
                </Text>
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-between mt-[54px] w-full">
                  <div className="bg-gray-900 border border-gray-900 border-solid flex flex-row gap-6 items-center justify-center p-3.5 rounded-md">
                    <Text
                      className="ml-[39px] mt-1.5 text-[19.69px] text-center text-white-A700"
                      size="txtOxygenBold1969"
                    >
                      Start My Page
                    </Text>
                    <Image
                      className="h-5 mr-[39px] w-5"
                      height={20}
                      width={20}
                      src="/images/img_imgarrowright.svg"
                      alt="imgarrowright"
                    />
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[284px] rounded-md"
                    leftIcon={
                      <Image
                        className="h-[42px] mr-2"
                        src="/images/img_overflowmenu.svg"
                        width={42}
                        height={42}
                        alt="overflow_menu"
                      />
                    }
                    color="gray_900"
                    size="xs"
                    variant="outline"
                  >
                    <div className="font-bold text-[19.22px] text-center">
                      Watch The Film
                    </div>
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row gap-5 items-start justify-start mt-[30px] w-[66%] md:w-full">
                  <div className="flex relative w-[47%] sm:w-full">
                    <div className="flex my-auto mx-auto">
                      <Image
                        className="h-[50px] my-auto rounded-[50%] w-[50px]"
                        src="/images/img_image.png"
                        height={50}
                        width={50}
                        alt="image_One"
                      />
                      <Image
                        className="h-[50px] ml-[-8px] my-auto rounded-[50%] w-[50px] z-[1]"
                        height={50}
                        width={50}
                        src="/images/img_image_50x50.png"
                        alt="image_Two"
                      />
                      <Image
                        className="h-[50px] ml-[-8px] my-auto rounded-[50%] w-[50px] z-[1]"
                        height={50}
                        width={50}
                        src="/images/img_image_1.png"
                        alt="image_Three"
                      />
                      <Image
                        className="h-[50px] ml-[-8px] my-auto rounded-[50%] w-[50px] z-[1]"
                        height={50}
                        width={50}
                        src="/images/img_image_2.png"
                        alt="image_Four"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[7px] items-center justify-start w-[49%] sm:w-full">
                    <div className="flex flex-row gap-3.5  items-center justify-between">
                      <Image
                        className="h-[25px] w-[25px]"
                        src="/images/img_radiogroupitem.svg"
                        alt="radiogroupitem"
                        height={25}
                        width={25}
                      />
                      <Image
                        className="h-[25px] w-[25px]"
                        src="/images/img_radiogroupitem.svg"
                        alt="radiogroupitem_One"
                        height={25}
                        width={25}
                      />
                      <Image
                        className="h-[25px] w-[25px]"
                        src="/images/img_radiogroupitem.svg"
                        alt="radiogroupitem_Two"
                        width={25}
                        height={25}
                      />
                      <Image
                        className="h-[25px] w-[25px]"
                        src="/images/img_radiogroupitem.svg"
                        alt="radiogroupitem_Three"
                        width={25}
                        height={25}
                      />
                      <Image
                        className="h-[25px] w-[25px]"
                        src="/images/img_radiogroupitem.svg"
                        alt="radiogroupitem_Four"
                        width={25}
                        height={25}
                      />
                    </div>
                    <Text
                      className="text-black-900_e0 text-lg"
                      size="txtOxygenRegular18"
                    >
                      5/5 by 1000+ creators
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center relative w-full ">
        <div className="bg-pink-100 flex flex-col gap-[42px] py-20 pb-40 items-center justify-end mx-auto pt-[90px] w-full">
          <div className="flex sm:flex-col flex-row gap-3 items-center justify-center pt-1.5 px-1.5 w-full">
            <Text
              className="sm:ml-[0]  md:text-5xl text-7xl text-black-900_e0 text-center"
              size="txtOxygenRegular72"
            >
              For people
            </Text>
            <Text
              className=" md:text-5xl text-7xl text-black-900_e0 text-center"
              size="txtOxygenBold7102"
            >
              making Impact
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex  flex-row sm:gap-5 items-center justify-center md:px-10 sm:px-5 px-[386px] w-full flex-wrap">
              <Button
                className="cursor-pointer min-w-[122px] text-center text-lg"
                shape="round"
                color={active == "data" ? "gray_900" : "white_A700"}
                onClick={() => setActive("data")}
              >
                Data
              </Button>
              <Button
                className="cursor-pointer min-w-[144px] ml-3.5 sm:ml-[0] text-center text-lg"
                shape="round"
                color={active == "ml" ? "gray_900" : "white_A700"}
                onClick={() => setActive("ml")}
              >
                Machine Learning
              </Button>
              <Button
                className="cursor-pointer min-w-[195px] ml-3.5 sm:ml-[0] text-center text-lg"
                shape="round"
                color={active == "ai" ? "gray_900" : "white_A700"}
                onClick={() => setActive("ai")}
              >
                Artificial Intelligence
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start p-3.5 w-full">
              {active == "data" && (
                <div className="flex gap-10 flex-wrap">
                  {profileData.slice(10, 14).map((item, index) => (
                    <div key={index} className="h-[410px] flex">
                      <Link href={`/user/${item.username}`}>
                        <div className="bg-white-A700 border border-black-900_19 border-solid flex flex-col gap-3 items-center justify-start rounded-[16px] w-[250px] h-full">
                          <div className=" h-[170px] relative w-full overflow-clip rounded-[16px]">
                            <Image
                              className="absolute inset-x-[0] mx-auto top-[0]"
                              src="/images/img_divanttypography_purple_200.svg"
                              alt="divanttypograph"
                              height={500}
                              width={500}
                            />
                            <div className="absolute bottom-[0] flex flex-col h-[120px] inset-x-[0] items-center justify-start mx-auto w-[120px] rounded-full pt-2 mb-2">
                              <Image
                                className="h-[118px] md:h-auto rounded-full object-cover w-[118px]"
                                src={item.data.profile_pic}
                                alt="image_One"
                                width={500}
                                height={500}
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-start mb-16 w-[83%] md:w-full">
                            <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[76px] w-full">
                              <Text
                                className="sm:text-[19.44px] md:text-[21.44px] text-[23.44px] text-black-900_e0 text-center"
                                size="txtOxygenBold2344"
                              >
                                {item.data.full_name}
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start px-1 w-full">
                              <Text
                                className="leading-[20.00px] text-base text-black-900_e0 text-center"
                                size="txtOxygenRegular16"
                              >
                                <>{item.data.description.slice(0, 100)}...</>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
              {active == "ml" && (
                <div className="flex gap-10 flex-wrap">
                  {profileData.slice(16, 20).map((item, index) => (
                    <div key={index} className="h-[410px] flex">
                      <Link href={`/user/${item.username}`}>
                        <div className="bg-white-A700 border border-black-900_19 border-solid flex flex-col gap-3 items-center justify-start rounded-[16px] w-[250px] h-full">
                          <div className=" h-[170px] relative w-full overflow-clip rounded-[16px]">
                            <Image
                              className="absolute inset-x-[0] mx-auto top-[0]"
                              src="/images/img_divanttypography_purple_200.svg"
                              alt="divanttypograph"
                              height={500}
                              width={500}
                            />
                            <div className="absolute bottom-[0] flex flex-col h-[120px] inset-x-[0] items-center justify-start mx-auto w-[120px] rounded-full pt-2 mb-2">
                              <Image
                                className="h-[118px] md:h-auto rounded-full object-cover w-[118px]"
                                src={item.data.profile_pic}
                                alt="image_One"
                                width={500}
                                height={500}
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-start mb-16 w-[83%] md:w-full">
                            <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[76px] w-full">
                              <Text
                                className="sm:text-[19.44px] md:text-[21.44px] text-[23.44px] text-black-900_e0 text-center"
                                size="txtOxygenBold2344"
                              >
                                {item.data.full_name}
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start px-1 w-full">
                              <Text
                                className="leading-[20.00px] text-base text-black-900_e0 text-center"
                                size="txtOxygenRegular16"
                              >
                                <>{item.data.description.slice(0, 100)}...</>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
              {active == "ai" && (
                <div className="flex gap-10 flex-wrap">
                  {profileData.slice(30, 34).map((item, index) => (
                    <div key={index} className="h-[410px] flex">
                      <Link href={`/user/${item.username}`}>
                        <div className="bg-white-A700 border border-black-900_19 border-solid flex flex-col gap-3 items-center justify-start rounded-[16px] w-[250px] h-full">
                          <div className=" h-[170px] relative w-full overflow-clip rounded-[16px]">
                            <Image
                              className="absolute inset-x-[0] mx-auto top-[0]"
                              src="/images/img_divanttypography_purple_200.svg"
                              alt="divanttypograph"
                              height={500}
                              width={500}
                            />
                            <div className="absolute bottom-[0] flex flex-col h-[120px] inset-x-[0] items-center justify-start mx-auto w-[120px] rounded-full pt-2 mb-2">
                              <Image
                                className="h-[118px] md:h-auto rounded-full object-cover w-[118px]"
                                src={item.data.profile_pic}
                                alt="image_One"
                                width={500}
                                height={500}
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-start mb-16 w-[83%] md:w-full">
                            <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[76px] w-full">
                              <Text
                                className="sm:text-[19.44px] md:text-[21.44px] text-[23.44px] text-black-900_e0 text-center"
                                size="txtOxygenBold2344"
                              >
                                {item.data.full_name}
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start px-1 w-full">
                              <Text
                                className="leading-[20.00px] text-base text-black-900_e0 text-center"
                                size="txtOxygenRegular16"
                              >
                                <>{item.data.description.slice(0, 100)}...</>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-100 flex flex-col items-center justify-start p-[60px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start max-w-[1200px] mb-[110px] mx-auto pt-[100px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col items-start justify-center pr-[7px] py-[7px] w-1/2 md:w-full">
              <div className="  lg:mt-[52px] relative w-full">
                <Text
                  className="leading-[78.00px] m-auto md:text-5xl text-[63.25px] text-black-900_e0 tracking-[-1.92px] "
                  size="txtOxygenBold6325"
                >
                  <>
                    Create your DataChamp page in a{" "}
                    <span
                      className=" sm:text-[45.63px] md:text-[51.63px] text-[59.63px] text-deep_orange-400 tracking-[-1.92px]"
                      size="txtOxygenBold5962"
                    >
                      flash
                    </span>
                  </>
                </Text>
              </div>
              <Text
                className="mt-8 text-gray-800 text-xl"
                size="txtOxygenRegular20"
              >
                Start earning $$ by the time you finish reading our website
              </Text>
              <Text
                className="leading-[34.00px] mb-[82px] mt-12 text-[18.26px] text-gray-900 underline w-[30%] sm:w-full"
                size="txtOxygenBold1826"
              >
                Launch your page ↗
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[42%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Image
                    className="h-[449px] md:h-auto object-cover w-full"
                    src="/images/img_clippathgroup.png"
                    alt="clippathgroup"
                    width={449}
                    height={449}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
            <Image
              className="h-[503px]"
              src="/images/img_divantcol.svg"
              alt="divantcol"
              width={503}
              height={503}
            />
            <div className="flex flex-col items-center justify-start">
              <div className="flex flex-col items-center justify-start p-3.5 w-full"></div>
              <div class="max-w-2xl mx-auto">
                <div className="hs-accordion-group">
                  <div
                    className="hs-accordion hs-accordion-active:bg-zinc-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active"
                    id="hs-basic-with-title-and-arrow-stretched-heading-one"
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                      onClick={() => setActiveSession(1)}
                    >
                      Can I cancel at anytime?
                      <svg
                        className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    {activeSession == 1 && (
                      <div
                        id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                      >
                        <p className="text-gray-800 dark:text-gray-200">
                          Yes, you can cancel anytime no questions are asked
                          while you cancel but we would highly appreciate if you
                          will give us some feedback.
                        </p>
                      </div>
                    )}
                  </div>
                  <div
                    className="hs-accordion hs-accordion-active:bg-zinc-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
                    id="hs-basic-with-title-and-arrow-stretched-heading-two"
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      onClick={() => setActiveSession(2)}
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                    >
                      My team has credits. How do we use them?
                      <svg
                        className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    {activeSession == 2 && (
                      <div
                        id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                      >
                        <p className="text-gray-800 dark:text-gray-200">
                          Yes, you can cancel anytime no questions are asked
                          while you cancel but we would highly appreciate if you
                          will give us some feedback.
                        </p>
                      </div>
                    )}
                  </div>

                  <div
                    className="hs-accordion hs-accordion-active:bg-zinc-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
                    id="hs-basic-with-title-and-arrow-stretched-heading-three"
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      onClick={() => setActiveSession(3)}
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                    >
                      How does Preline&#39;s pricing work?
                      <svg
                        className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    {activeSession == 3 && (
                      <div
                        id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                      >
                        <p className="text-gray-800 dark:text-gray-200">
                          Yes, you can cancel anytime no questions are asked
                          while you cancel but we would highly appreciate if you
                          will give us some feedback.
                        </p>
                      </div>
                    )}
                  </div>
                  <div
                    className="hs-accordion hs-accordion-active:bg-zinc-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
                    id="hs-basic-with-title-and-arrow-stretched-heading-four"
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      onClick={() => setActiveSession(4)}
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                    >
                      How secure is Preline?
                      <svg
                        className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    {activeSession == 4 && (
                      <div
                        id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                      >
                        <p className="text-gray-800 dark:text-gray-200">
                          Yes, you can cancel anytime no questions are asked
                          while you cancel but we would highly appreciate if you
                          will give us some feedback.
                        </p>
                      </div>
                    )}
                  </div>
                  <div
                    className="hs-accordion hs-accordion-active:bg-zinc-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
                    id="hs-basic-with-title-and-arrow-stretched-heading-five"
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      onClick={() => setActiveSession(5)}
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                    >
                      How do I get access to a theme I purchased?
                      <svg
                        className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    {activeSession == 5 && (
                      <div
                        id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                      >
                        <p className="text-gray-800 dark:text-gray-200">
                          Yes, you can cancel anytime no questions are asked
                          while you cancel but we would highly appreciate if you
                          will give us some feedback.
                        </p>
                      </div>
                    )}
                  </div>
                  <div
                    className="hs-accordion hs-accordion-active:bg-zinc-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
                    id="hs-basic-with-title-and-arrow-stretched-heading-six"
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      onClick={() => setActiveSession(6)}
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                    >
                      Upgrade License Type
                      <svg
                        className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    {activeSession == 6 && (
                      <div
                        id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                      >
                        <p className="text-gray-800 dark:text-gray-200">
                          Yes, you can cancel anytime no questions are asked
                          while you cancel but we would highly appreciate if you
                          will give us some feedback.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-100 md:h-[1485px] sm:h-[590px] h-[968px] p-[90px] md:px-5 relative w-full">
        <div className="lg:absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-center lg:mx-auto pb-16 md:px-10 px-16 gap-5 sm:px-5 top-[9%] lg:w-[63%] text-center">
          <Text
            className="md:text-5xl text-[62.75px] text-black-900 text-center"
            size="txtOxygenBold6275"
          >
            <>
              earn more{" "}
              <span
                className="mr-[66px] md:text-5xl text-[64px] text-black-900 text-center"
                size="txtOxygenRegular64"
              >
                on DataChamp
              </span>
            </>
          </Text>
        </div>
        <div className="lg:absolute bottom-[14%] overflow-clip flex md:flex-col flex-row gap-2.5 inset-x-[0] items-center justify-center mx-auto w-[64%]">
          <div className="flex flex-col gap-5 items-center justify-start w-[68%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
              <Image
                className="h-[280px]"
                src="/images/img_divantcol_red_100.svg"
                alt="divantcol_One"
                height={300}
                width={300}
              />
              <div className="flex md:flex-1 flex-col items-center justify-start w-[63%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Image
                        className="h-[280px] md:h-auto object-cover w-full"
                        src="/images/img_clippathgroup_280x488.png"
                        alt="clippathgroup_One"
                        height={300}
                        width={300}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              className="h-[289px]"
              src="/images/img_divantrow.svg"
              alt="divantrow"
              height={300}
              width={300}
            />
          </div>
          <div className="flex flex-col items-center justify-start w-[32%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Image
                  className="h-[586px] md:h-auto object-cover w-full z-0"
                  src="/images/img_clippathgroup_586x386.png"
                  alt="clippathgroup_Two"
                  height={589}
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue_gray-900 flex flex-col z-1 relative items-center justify-start p-[100px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1200px] mx-auto pb-[30px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <Text
              className="md:text-5xl text-[62.13px] text-center text-white-A700"
              size="txtOxygenBold6212"
            >
              People love using DataChamp
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700_e5 flex flex-1 flex-col gap-[9px] items-center justify-start pb-8 rounded-[40px] w-full">
                  <div className="flex flex-col gap-[19px] items-start justify-start p-6 sm:px-5 w-full">
                    <Image
                      className="h-[30px] ml-1 md:ml-[0] w-[30px]"
                      src="/images/img_megaphone.svg"
                      alt="megaphone"
                      height={30}
                      width={30}
                    />
                    <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] pb-2.5 pr-2.5">
                      <Text
                        className="leading-[28.00px] text-black-900_e0 text-xl"
                        size="txtOxygenRegular20Black900e0"
                      >
                        <>
                          Love the integrations with
                          <br />
                          Calendar, Zoom and WhatsApp.
                          <br />
                          Makes my life easier!
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3.5 items-center justify-start md:pr-10 sm:pr-5 pr-[103px] w-[86%] pl-5 md:w-full">
                    <Image
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="/images/img_image_48x48.png"
                      alt="image"
                      height={48}
                      width={48}
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[15.75px] text-black-900_e0"
                        size="txtOxygenBold1575Black900e0"
                      >
                        Aishwarya Srinivasan
                      </Text>
                      <Text
                        className="text-[13.89px] text-black-900_e0"
                        size="txtOxygenRegular1389"
                      >
                        LinkedIn Top Voice
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700_e5 flex flex-1 flex-col gap-[9px] items-center justify-start pb-8 rounded-[40px] w-full">
                  <div className="flex flex-col gap-[19px] items-start justify-start p-6 sm:px-5 w-full">
                    <Image
                      className="h-[30px] ml-1 md:ml-[0] w-[30px]"
                      src="/images/img_megaphone.svg"
                      alt="megaphone"
                      height={30}
                      width={30}
                    />
                    <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] pb-[38px] sm:pr-5 pr-[38px]">
                      <Text
                        className="leading-[28.00px] text-black-900_e0 text-xl"
                        size="txtOxygenRegular20Black900e0"
                      >
                        <>
                          The entire experience is just so
                          <br />
                          seamless. My followers love it
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3.5 items-center justify-start md:pr-10 sm:pr-5 pr-[153px] w-[86%] pl-5 md:w-full">
                    <Image
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="/images/img_image_6.png"
                      alt="image"
                      height={48}
                      width={48}
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-base text-black-900_e0"
                        size="txtOxygenBold16Black900e0"
                      >
                        Joerg Storm
                      </Text>
                      <Text
                        className="text-[13.78px] text-black-900_e0"
                        size="txtOxygenRegular1378"
                      >
                        300K on LinkedIn
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700_e5 flex flex-1 flex-col gap-[9px] items-center justify-start pb-8 rounded-[40px] w-full">
                  <div className="flex flex-col gap-[19px] items-start justify-start p-6 sm:px-5 w-full">
                    <Image
                      className="h-[30px] ml-1 md:ml-[0] w-[30px]"
                      src="/images/img_megaphone.svg"
                      alt="megaphone"
                      height={30}
                      width={30}
                    />
                    <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] pb-[9px] pr-[9px]">
                      <Text
                        className="leading-[28.00px] text-black-900_e0 text-xl"
                        size="txtOxygenRegular20Black900e0"
                      >
                        <>
                          DataChamp is my go-to platform for
                          <br />
                          scheduling 1:1 sessions and hosting
                          <br />
                          webinars!
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3.5 items-center justify-start md:pr-10 sm:pr-5 pr-[52px] w-[86%] pl-5 md:w-full">
                    <Image
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="/images/img_image_7.png"
                      alt="image"
                      height={48}
                      width={48}
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[15.5px] text-black-900_e0"
                        size="txtOxygenBold155Black900e0"
                      >
                        Xinran Waibel
                      </Text>
                      <Text
                        className="text-black-900_e0 text-sm"
                        size="txtOxygenRegular14"
                      >
                        Founder of Data Engineer Things
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700_e5 flex flex-1 flex-col gap-[9px] items-center justify-start pb-8 rounded-[40px] w-full">
                  <div className="flex flex-col gap-[19px] items-start justify-start p-6 sm:px-5 w-full">
                    <Image
                      className="h-[30px] ml-1 md:ml-[0] w-[30px]"
                      src="/images/img_megaphone.svg"
                      alt="megaphone"
                      height={30}
                      width={30}
                    />
                    <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] pb-4 pr-4">
                      <Text
                        className="leading-[28.00px] mb-[21px] text-black-900_e0 text-xl"
                        size="txtOxygenRegular20Black900e0"
                      >
                        <>
                          All my monetisation now happens
                          <br />
                          in one place
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3.5 items-center justify-start md:pr-10 sm:pr-5 pr-[140px] w-[86%] pl-5 md:w-full">
                    <Image
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="/images/img_image_8.png"
                      alt="image"
                      height={48}
                      width={48}
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-base text-black-900_e0"
                        size="txtOxygenBold16Black900e0"
                      >
                        Payal & Gaurav
                      </Text>
                      <Text
                        className="text-black-900_e0 text-sm"
                        size="txtOxygenRegular14"
                      >
                        110K+ on Instagram
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700_e5 flex flex-1 flex-col gap-[9px] items-center justify-start pb-8 rounded-[40px] w-full">
                  <div className="flex flex-col gap-[19px] items-start justify-start p-6 sm:px-5 w-full">
                    <Image
                      className="h-[30px] ml-1 md:ml-[0] w-[30px]"
                      src="/images/img_megaphone.svg"
                      alt="megaphone"
                      height={30}
                      width={30}
                    />
                    <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] pb-2.5 pr-2.5">
                      <Text
                        className="leading-[28.00px] text-black-900_e0 text-xl"
                        size="txtOxygenRegular20Black900e0"
                      >
                        <>
                          The team is extremely helpful and
                          <br />
                          cares a lot about feedback. They
                          <br />
                          keep rolling out new features too!
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3.5 items-center justify-start md:pr-10 pr-24 sm:pr-5 w-[86%] pl-5  md:w-full">
                    <Image
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="/images/img_image_9.png"
                      alt="image"
                      height={48}
                      width={48}
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[15.63px] text-black-900_e0"
                        size="txtOxygenBold1562Black900e0"
                      >
                        Lorraine Lee
                      </Text>
                      <Text
                        className="text-[13.89px] text-black-900_e0"
                        size="txtOxygenRegular1389"
                      >
                        Speaker, 320K on LinkedIn
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700_e5 flex flex-1 flex-col items-center justify-start pb-[22px] rounded-[40px] w-full">
                  <div className="flex flex-col gap-[19px] items-start justify-start p-6 sm:px-5 w-full">
                    <Image
                      className="h-[30px] ml-1 md:ml-[0] w-[30px]"
                      src="/images/img_megaphone.svg"
                      alt="megaphone"
                      height={30}
                      width={30}
                    />
                    <div className="flex flex-col items-start justify-start ml-1 md:ml-[0]">
                      <Text
                        className="leading-[28.00px] text-black-900_e0 text-xl"
                        size="txtOxygenRegular20Black900e0"
                      >
                        <>
                          I love DataChamp! It has made it
                          <br />
                          seamless to schedule mentoring
                          <br />
                          sessions! Big fan of DataChamp’s
                          <br />
                          WhatsApp integration.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3.5 items-center justify-start sm:pr-5 pr-[31px] w-[86%] pl-5  md:w-full">
                    <Image
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="/images/img_image_10.png"
                      alt="image"
                      height={48}
                      width={48}
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-base text-black-900_e0"
                        size="txtOxygenBold16Black900e0"
                      >
                        Jessica
                      </Text>
                      <Text
                        className="text-black-900_e0 text-sm"
                        size="txtOxygenRegular14"
                      >
                        Global Data Lead in Energy Industry
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-100 flex flex-col items-center justify-start p-[60px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1200px] mb-20 mx-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start py-[97px] w-[67%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="md:text-5xl text-7xl text-black-900_e0"
                  size="txtOxygenLight72Black900e0"
                >
                  Calculate your
                </Text>
                <Text
                  className="md:text-5xl text-[71.16px] text-black-900_e0"
                  size="txtOxygenBold7116"
                >
                  earning potential
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-4">
                <Text
                  className="leading-[32.00px] text-black-900_e0 text-lg"
                  size="txtOxygenRegular18"
                >
                  <>
                    Calculated using your LinkedIn profile and comparing based
                    on similar
                    <br />
                    profiles on DataChamp
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-start justify-end md:pr-10 pr-12 sm:pr-5 pt-12 w-full">
                <Text
                  className="text-black-900_e0 text-xl"
                  size="txtOxygenRegular20Black900e0"
                >
                  <span className="text-black-900_e0 font-oxygen text-left font-normal">
                    No sign up required.{" "}
                  </span>
                  <span className="text-teal-700 font-oxygen text-left font-normal">
                    See example
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col font-roboto items-center justify-start pb-[3px] w-[34%] md:w-full">
              <div className="bg-black-900 flex flex-col items-center justify-start w-full">
                <div className="bg-black-900 h-[599px] relative w-full">
                  <div className="h-[599px] m-auto w-full">
                    <Image
                      className="h-[599px] m-auto object-cover w-full"
                      src="/images/img_divytpcuedth.png"
                      alt="divytpcuedth"
                      height={599}
                      width={800}
                    />
                    <Image
                      className="absolute bottom-[39%] h-[90px] inset-x-[0] mx-auto"
                      src="/images/img_settings.svg"
                      alt="settings"
                      height={90}
                      width={90}
                    />
                  </div>
                  <div className="absolute h-[349px] inset-x-[0] mx-auto top-[0] w-full">
                    <Image
                      className="h-[349px] m-auto object-cover w-full"
                      src="/images/img_divytpgradienttop.png"
                      alt="divytpgradientt"
                      height={349}
                      width={800}
                    />
                    <div className="absolute flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-evenly mx-auto pb-0.5 pl-0.5 top-[0] w-[97%]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-gray-200 "
                          size="txtRobotoRegular16"
                        >
                          Impact your audience
                        </Text>
                      </div>
                      <Image
                        className="h-10"
                        src="/images/img_buttonshare.svg"
                        alt="buttonshare"
                        width={72}
                        height={72}
                      />
                    </div>
                    <div className="absolute flex flex-row gap-2 inset-x-[0] items-center justify-start mx-auto p-[5px] top-[12%] w-[97%]">
                      <Image
                        className="h-6 md:h-auto rounded-[50%] w-6"
                        src="/images/img_linkphotoimage.png"
                        alt="linkphotoimage"
                        height={48}
                        width={48}
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-gray-200  text-sm"
                          size="txtRobotoMedium14"
                        >
                          DataChamp
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-11 items-start justify-start md:pr-10 sm:pr-5 pr-[60px] pt-[60px] w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
              <div className="flex flex-col items-center justify-start py-0.5 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Image
                    className="h-[385px] md:h-auto object-cover w-full"
                    src="/images/img_clippathgroup_385x356.png"
                    alt="clippathgroup_Three"
                    height={385}
                    width={356}
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start p-[41px] md:px-10 sm:px-5 rounded-[48px] w-[65%] md:w-full">
              <Image
                className="h-[103px] w-[110px] md:h-[100px] md:ml-[0] ml-[13px] object-cover  "
                src="/images/img_image_103x110.png"
                alt="image_Eighteen"
                height={103}
                width={110}
              />
              <Text
                className="md:ml-[0] ml-[13px] mt-[57px] text-[19px] text-gray-900_02"
                size="txtOxygenRegular19"
              >
                Creator earnings on DataChamp (2023)
              </Text>
              <Text
                className="md:ml-[0] ml-[13px] mt-[43px] md:text-5xl text-[80px] text-gray-900_02"
                size="txtOxygenBold80"
              >
                $ 2,104,210
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 flex md:flex-col flex-row md:gap-5 items-start justify-center p-[180px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-6 items-start justify-start mb-[60px] md:ml-[0] ml-[180px] lg:pb-[166px] md:pr-10 sm:pr-5 pr-[166px]">
          <Text
            className="leading-[70.00px] sm:text-[38.95px] md:text-[44.95px] text-[52.95px] text-black-900_e0"
            size="txtOxygenBold5295"
          >
            <>
              Frequently asked
              <br />
              questions
            </>
          </Text>
          <Text
            className="text-black-900_e0 text-xl"
            size="txtOxygenRegular20Black900e0"
          >
            <>Can&#39;t find the answer you are looking for?</>
          </Text>
          <Text
            className="leading-[34.00px] mb-[65px] text-[19.69px] text-teal-700 w-[34%] sm:w-full"
            size="txtOxygenBold1969Teal700"
          >
            Reach out to us
          </Text>
        </div>
        <div className="flex md:flex-col flex-row items-center justify-between lg:w-1/2">
          <div className="flex flex-col items-center justify-start">
            <div class="max-w-2xl mx-auto">
              <div className="hs-accordion-group">
                <div
                  className="hs-accordion hs-accordion-active:bg-zinc-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active"
                  id="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                    onClick={() => setActiveSession(1)}
                  >
                    Can I cancel at anytime?
                    <svg
                      className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  {activeSession == 1 && (
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                    >
                      <p className="text-gray-800 dark:text-gray-200">
                        Yes, you can cancel anytime no questions are asked while
                        you cancel but we would highly appreciate if you will
                        give us some feedback.
                      </p>
                    </div>
                  )}
                </div>
                <div
                  className="hs-accordion hs-accordion-active:bg-zinc-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
                  id="hs-basic-with-title-and-arrow-stretched-heading-two"
                >
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={() => setActiveSession(2)}
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  >
                    My team has credits. How do we use them?
                    <svg
                      className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  {activeSession == 2 && (
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                    >
                      <p className="text-gray-800 dark:text-gray-200">
                        Yes, you can cancel anytime no questions are asked while
                        you cancel but we would highly appreciate if you will
                        give us some feedback.
                      </p>
                    </div>
                  )}
                </div>

                <div
                  className="hs-accordion hs-accordion-active:bg-zinc-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
                  id="hs-basic-with-title-and-arrow-stretched-heading-three"
                >
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={() => setActiveSession(3)}
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                  >
                    How does Preline&#39;s pricing work?
                    <svg
                      className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  {activeSession == 3 && (
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                    >
                      <p className="text-gray-800 dark:text-gray-200">
                        Yes, you can cancel anytime no questions are asked while
                        you cancel but we would highly appreciate if you will
                        give us some feedback.
                      </p>
                    </div>
                  )}
                </div>
                <div
                  className="hs-accordion hs-accordion-active:bg-zinc-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
                  id="hs-basic-with-title-and-arrow-stretched-heading-four"
                >
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={() => setActiveSession(4)}
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                  >
                    How secure is Preline?
                    <svg
                      className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  {activeSession == 4 && (
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                    >
                      <p className="text-gray-800 dark:text-gray-200">
                        Yes, you can cancel anytime no questions are asked while
                        you cancel but we would highly appreciate if you will
                        give us some feedback.
                      </p>
                    </div>
                  )}
                </div>
                <div
                  className="hs-accordion hs-accordion-active:bg-zinc-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
                  id="hs-basic-with-title-and-arrow-stretched-heading-five"
                >
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={() => setActiveSession(5)}
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                  >
                    How do I get access to a theme I purchased?
                    <svg
                      className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  {activeSession == 5 && (
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                    >
                      <p className="text-gray-800 dark:text-gray-200">
                        Yes, you can cancel anytime no questions are asked while
                        you cancel but we would highly appreciate if you will
                        give us some feedback.
                      </p>
                    </div>
                  )}
                </div>
                <div
                  className="hs-accordion hs-accordion-active:bg-zinc-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
                  id="hs-basic-with-title-and-arrow-stretched-heading-six"
                >
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={() => setActiveSession(6)}
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                  >
                    Upgrade License Type
                    <svg
                      className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  {activeSession == 6 && (
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                    >
                      <p className="text-gray-800 dark:text-gray-200">
                        Yes, you can cancel anytime no questions are asked while
                        you cancel but we would highly appreciate if you will
                        give us some feedback.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
