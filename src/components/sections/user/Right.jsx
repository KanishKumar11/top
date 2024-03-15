"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { BiSolidPackage } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
import { Button } from "@/components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { IoMdLink } from "react-icons/io";

const service = [
  {
    title: "Career Guidance (30 min)",
    desc: "Direction for the data job hunt",
    time: "30 mins",
    type: "Video Meeting",
    price: "$63",
    category: "call",
  },
  {
    title: "1:1 Data Career Power Hour",
    desc: "Direction for the data job hunt",
    time: "60 mins",
    type: "Video Meeting",
    price: "$121",
    rating: "5",
    dealType: "Popular",
    category: "call",
  },
  {
    title: "Data Career Coaching - 4 Sessions",
    desc: "I'll teach you everything I know on how to get a job in data",
    type: "Package",
    category: "Package",
    price: "$500",
    dealType: "Best Deal",
    time: "4 products",
  },
];
const feedback = [
  {
    f: "I really like the quick turnaround response I received. Matt seems really easy to talk to.",
    person: "Felicia Keys",
  },
  {
    f: "I'm a recent bootcamp graduate who wanted a consult on my job docs, so I booked a resume/portfolio review session with Matt. Matt delivered with sensible advice on both fronts, highlighting my strengths and offering specific and immediately actionable suggestions to flesh out my resume and improve my dashboards. I recommend him: he's sharp.",
    person: "Charlie Stein",
  },
  {
    f: "Just finished my coaching session with Matt, and it was transformative for my data analyst journey. He introduced me to tools to showcase my portfolio and enhance the presentation of my SQL code. Both tools will dramatically improve the professionalism and appeal of my work. Matt's expertise and tailored advice were invaluable. I highly recommend his sessions for anyone in the data field.",
    person: "Justin De Angel",
  },
  {
    f: "The consultation with Matt was enlightening! Discovering that someone with a background similar to mine has successfully navigated into data analytics boosted my confidence in pursuing this new career. I'm eager to continue receiving guidance from Matt",
    person: "Justin De Angel",
  },
];
const aboutLinks = [
  {
    title: "linkedIn",
    icon: <FaLinkedin />,
    link: "/#",
  },
  {
    title: "github",
    icon: <FaGithub />,
    link: "/#",
  },
  {
    title: "youtube",
    icon: <FaYoutube />,
    link: "/#",
  },
  {
    title: "github",
    icon: <IoMdLink />,
    link: "/#",
  },
];
const featured = [
  {
    title: "Just getting started? check out this video",
    link: "https://youtu.be/pXYjGKeOAhw?si=rf-S5tyieF8ELRuy  ",
    img: "https://rriesdqhwmqamnmpuqql.supabase.co/storage/v1/object/public/users/yt.jpg?t=2024-03-03T11%3A51%3A39.546Z",
  },
  {
    title: "Just getting started? check out this video",
    link: "https://youtu.be/pXYjGKeOAhw?si=rf-S5tyieF8ELRuy  ",
    img: "https://rriesdqhwmqamnmpuqql.supabase.co/storage/v1/object/public/users/yt.jpg?t=2024-03-03T11%3A51%3A39.546Z",
  },
];
const Right = ({ data, service, feedback }) => {
  const [active, setActive] = useState("all");
  const [profile, setProfile] = useState(null);
  const [serviceData, setServiceData] = useState(null);
  useEffect(() => {
    setProfile(data);
    setServiceData(service);
    console.log("profile");
    console.log(profile);
    console.log(serviceData);
  }, [data, profile, service, serviceData]);
  return (
    <div className=" bg-zinc-100  w-full py-16 7md:px-[4%] px-[8.33%] flex flex-col gap-5 ">
      <div className="mb-10 flex items-center flex-wrap justify-start p-3.5 gap-5 flex-row">
        {profile?.featured?.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="md:max-w-screen w-[425px] max-w-[50%]"
          >
            <div className=" min-w-[300px] bg-[#fff] rounded-[32px] border-[#ebeaeb] min-h-[175px] relative transition-all ease-in-out shadow-xl py-[24px] px-[30px] flex items-center justify-center flex-grow ">
              <div className="px-1.5 line-clamp-4 text-base font-medium text-[rgba(0,0,0,0.88)]">
                <span>{item.title}</span>
                <span className="overflow-hidden text-[#666b60] text-xs font-medium mt-1.5 leading-[150%] block text-ellipsis">
                  {item.link}
                </span>
              </div>
              <div>
                <Image
                  src={item.img}
                  alt=""
                  width={120}
                  height={200}
                  className="h-[80px] w-[150px]"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-y-[32px] w-full">
        <div className="flex w-full items-center justify-center gap-5">
          <div
            onClick={() => setActive("all")}
            className={`${
              active == "all"
                ? " bg-black-900 text-[#fff]  font-bold"
                : "bg-[#efece3] text-[#000000]/90 border-black-900 "
            } text-lg rounded-[12px] py-4 px-6 inline-flex cursor-pointer`}
          >
            All
          </div>
          <div
            onClick={() => setActive("call")}
            className={`${
              active == "call"
                ? " bg-black-900 text-[#fff]  font-bold"
                : "bg-[#efece3] text-[#000000]/90 border-black-900 "
            } text-lg rounded-[12px] py-4 px-6 inline-flex cursor-pointer`}
          >
            1:1 Call
          </div>
          <div
            onClick={() => setActive("package")}
            className={`${
              active == "package"
                ? " bg-black-900 text-[#fff]  font-bold"
                : "bg-[#efece3] text-[#000000]/90 border-black-900 "
            } text-lg rounded-[12px] py-4 px-6 inline-flex cursor-pointer`}
          >
            Package
          </div>
        </div>
        <div className="w-full">
          {active == "all" && (
            <div className="flex flex-wrap w-full gap-5">
              {profile?.data?.services.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#ffffff]/[95%] shadow-md rounded-[32px] p-5 space-y-4 h-max  md:w-full lg:max-w-[436px] flex-grow"
                >
                  <div className="flex gap-2.5 items-start justify-start">
                    {item?.tags?.map((tag, index) => (
                      <div key={index}>
                        {tag.key == "average_rating" && (
                          <div className="bg-[#f3f3f7] text-base px-3 py-1.5 text-[#141414] flex rounded-[24px] font-extrabold items-center gap-2 justify-center text-center  w-max ">
                            <FaStar />
                            {tag.value}
                          </div>
                        )}
                        {tag.key == "best_deal" && (
                          <div
                            className={`
                         
                             bg-[#f3e2fb] text-[#8231a7]  rounded-[24px] font-bold
                           text-base px-5 py-1.5`}
                          >
                            Best Deal
                          </div>
                        )}{" "}
                        {tag.key == "popular" && (
                          <div
                            className={`
                         
                            bg-[#e7f2ff] text-[#2d4fc5]  rounded-[24px] font-bold
                           text-base px-5 py-1.5`}
                          >
                            Popular
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="pb-7 space-y-3">
                    <h2 className=" text-[#000000]/[95%] text-2xl font-extrabold">
                      {item.title}
                    </h2>
                    <p className="text-base text-[#5c5c5c] font-medium">
                      {item.short_custom_description}
                    </p>
                  </div>
                  <div className="rounded-[18px] bg-[#efeff0] text-sm flex items-center justify-between py-3.5 px-4 ">
                    <div className="gap-3 flex ">
                      <div className="text-3xl text-[#000000]/[88%] flex items-center justify-center ">
                        {item.type == 4 ? (
                          <BiSolidPackage />
                        ) : (
                          <FaCalendarAlt />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-extrabold text-base text-[#000000]/[88%]">
                          {item.type == 4 && "Package"}
                          {item.type == 5 && "Digital Product"}
                          {item.type == 3 &&
                            new Date(item.specific_date).toDateString()}
                          {item.type == 1 && item.short_description}
                        </span>
                        <span className="font-medium text-sm text-[#5c5c5c]">
                          {item?.package_services.length > 0 && (
                            <>
                              {item?.package_services?.length}{" "}
                              {item?.package_services?.length > 1
                                ? "Products"
                                : "Product"}
                            </>
                          )}
                          {item.type == 3 &&
                            new Date(item.specific_date).toTimeString()}
                        </span>
                      </div>
                    </div>
                    <div className="px-4 text-lg font-semibold text-[#141414] hover:bg-[#141414] hover:text-[#fff] border py-2 border-[#141414] rounded-[24px] cursor-pointer flex items-center gap-1.5">
                      {item?.currency?.display_text}
                      {item.total_charge ? item.total_charge : item?.charge}
                      <FaArrowRight />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {active == "call" && (
            <div className="flex flex-wrap w-full gap-5">
              {profile?.data?.services.map((item, index) => (
                <>
                  {item.type === 1 && (
                    <div
                      className="bg-[#ffffff]/[95%] shadow-md rounded-[32px] p-5 space-y-4 h-max  md:w-full lg:max-w-[436px] flex-grow"
                      key={index}
                    >
                      {" "}
                      <div className="flex gap-2.5 items-start justify-start">
                        {item?.tags?.map((tag, index) => (
                          <div key={index}>
                            {tag.key == "average_rating" && (
                              <div className="bg-[#f3f3f7] text-base px-3 py-1.5 text-[#141414] flex rounded-[24px] font-extrabold items-center gap-2 justify-center text-center  w-max ">
                                <FaStar />
                                {tag.value}
                              </div>
                            )}
                            {tag.key == "best_deal" && (
                              <div
                                className={`
                              
                                  bg-[#f3e2fb] text-[#8231a7]  rounded-[24px] font-bold
                                text-base px-5 py-1.5`}
                              >
                                Best Deal
                              </div>
                            )}{" "}
                            {tag.key == "popular" && (
                              <div
                                className={`
                              
                                 bg-[#e7f2ff] text-[#2d4fc5]  rounded-[24px] font-bold
                                text-base px-5 py-1.5`}
                              >
                                Popular
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="pb-7 space-y-3">
                        <h2 className=" text-[#000000]/[95%] text-2xl font-extrabold">
                          {item.title}
                        </h2>
                        <p className="text-base text-[#5c5c5c] font-medium">
                          {item.short_custom_description}
                        </p>
                      </div>
                      <div className="rounded-[18px] bg-[#efeff0] text-sm flex items-center justify-between py-3.5 px-4 ">
                        <div className="gap-3 flex ">
                          <div className="text-3xl text-[#000000]/[88%] flex items-center justify-center ">
                            {item.type == 4 ? (
                              <BiSolidPackage />
                            ) : (
                              <FaCalendarAlt />
                            )}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-extrabold text-base text-[#000000]/[88%]">
                              {item.type == 4 && "Package"}
                              {item.type == 5 && "Digital Product"}
                              {item.type == 3 &&
                                new Date(item.specific_date).toDateString()}
                              {item.type == 1 && item.short_description}
                            </span>
                            <span className="font-medium text-sm text-[#5c5c5c]">
                              {item?.package_services.length > 0 && (
                                <>
                                  {item?.package_services?.length}{" "}
                                  {item?.package_services?.length > 1
                                    ? "Products"
                                    : "Product"}
                                </>
                              )}
                              {item.type == 3 &&
                                new Date(item.specific_date).toTimeString()}
                            </span>
                          </div>
                        </div>
                        <div className="px-4 text-lg font-semibold text-[#141414] hover:bg-[#141414] hover:text-[#fff] border py-2 border-[#141414] rounded-[24px] cursor-pointer flex items-center gap-1.5">
                          {item?.currency?.display_text}
                          {item.total_charge ? item.total_charge : item?.charge}
                          <FaArrowRight />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
          )}
          {active == "package" && (
            <div className="flex flex-wrap w-full gap-5">
              {profile?.data?.services.map((item, index) => (
                <>
                  {item.type === 4 && (
                    <div
                      className="bg-[#ffffff]/[95%] shadow-md rounded-[32px] p-5 space-y-4 h-max  md:w-full lg:max-w-[436px] flex-grow"
                      key={index}
                    >
                      <div className="flex gap-2.5 items-start justify-start">
                        {item?.tags?.map((tag, index) => (
                          <div key={index}>
                            {tag.key == "average_rating" && (
                              <div className="bg-[#f3f3f7] text-base px-3 py-1.5 text-[#141414] flex rounded-[24px] font-extrabold items-center gap-2 justify-center text-center  w-max ">
                                <FaStar />
                                {tag.value}
                              </div>
                            )}
                            {tag.key == "best_deal" && (
                              <div
                                className={`
                              
                                  bg-[#f3e2fb] text-[#8231a7]  rounded-[24px] font-bold
                                text-base px-5 py-1.5`}
                              >
                                Best Deal
                              </div>
                            )}{" "}
                            {tag.key == "popular" && (
                              <div
                                className={`
                              
                                 bg-[#e7f2ff] text-[#2d4fc5]  rounded-[24px] font-bold
                                text-base px-5 py-1.5`}
                              >
                                Popular
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="pb-7 space-y-3">
                        <h2 className=" text-[#000000]/[95%] text-2xl font-extrabold">
                          {item.title}
                        </h2>
                        <p className="text-base text-[#5c5c5c] font-medium">
                          {item.short_custom_description}
                        </p>
                      </div>
                      <div className="rounded-[18px] bg-[#efeff0] text-sm flex items-center justify-between py-3.5 px-4 ">
                        <div className="gap-3 flex ">
                          <div className="text-3xl text-[#000000]/[88%] flex items-center justify-center ">
                            {item.type == 4 ? (
                              <BiSolidPackage />
                            ) : (
                              <FaCalendarAlt />
                            )}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-extrabold text-base text-[#000000]/[88%]">
                              {item.type == 4 && "Package"}
                              {item.type == 5 && "Digital Product"}
                              {item.type == 3 &&
                                new Date(item.specific_date).toDateString()}
                              {item.type == 1 && item.short_description}
                            </span>
                            <span className="font-medium text-sm text-[#5c5c5c]">
                              {item?.package_services.length > 0 && (
                                <>
                                  {item?.package_services?.length}{" "}
                                  {item?.package_services?.length > 1
                                    ? "Products"
                                    : "Product"}
                                </>
                              )}
                              {item.type == 3 &&
                                new Date(item.specific_date).toTimeString()}
                            </span>
                          </div>
                        </div>
                        <div className="px-4 text-lg font-semibold text-[#141414] hover:bg-[#141414] hover:text-[#fff] border py-2 border-[#141414] rounded-[24px] cursor-pointer flex items-center gap-1.5">
                          {item?.currency?.display_text}
                          {item.total_charge ? item.total_charge : item?.charge}
                          <FaArrowRight />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="my-10">
        <div>
          <h2 className="mb-4 text-[32px] text-[#000000]/[88%] font-bold">
            Ratings and feedback
          </h2>
        </div>
        <div className="flex flex-wrap gap-6 justify-center ">
          <div className="bg-[#fdfbf9] shadow-md rounded-[32px]">
            <Image
              src="/images/ratings.svg"
              alt=""
              width={160}
              height={130}
              className="mx-[24px] mb-[14px]"
            />
          </div>
          <div className="bg-[#ffffff]/[95%] rounded-[32px] text-[32px] leading-[32px] font-bold max-w-[200px] flex-grow-1 flex flex-col items-center justify-center text-[#000000]/[95%] px-10 w-auto min-h-[150px]">
            <span>{profile?.data?.total_ratings}</span>
            <span className="text-base text-[#666b60] font-medium">
              {profile?.ratings} RATINGS
            </span>
          </div>
          <div className="bg-[#ffffff]/[95%] rounded-[32px] text-[32px] leading-[32px] font-bold max-w-[200px] flex-grow-1 flex flex-col items-center justify-center text-[#000000]/[95%] px-10 w-auto min-h-[150px]">
            <span>{profile?.data?.testimonials_count}</span>
            <span className="text-base text-[#666b60] font-medium">
              TESTIMONIALS
            </span>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap mt-5 h-full  justify-center ">
          {profile?.data?.testimonials?.slice(0, 4)?.map((item, index) => (
            <div
              key={index}
              className="px-[24px] pt-[18px] pb-[24px] text-[#000000]/[88%] bg-[#fdfbf9] rounded-[32px] gap-5 flex flex-col shadow-md min-h-full h-auto lg:max-w-[460px] cursor-pointer w-full"
            >
              <div className="text-[#efe3d2] text-[34px] ">
                <ImQuotesLeft />
              </div>
              <div className="flex justify-between flex-col gap-5 h-full">
                <div className="font-normal text-[#000000]">{item?.text}</div>
                <div className="font-bold text-base text-[#000000]/[88%]">
                  {item?.follower_name}
                </div>
              </div>
            </div>
          ))}
          {/* <div className="w-full flex items-center justify-center pr-28 mt-5">
            <Button className="font-bold shadow-md  rounded-md">
              Show all {profile?.testimonials} reviews
            </Button>
          </div> */}
        </div>
      </div>
      <div>
        <div>
          <h2 className="mb-4 text-[32px] text-[#000000]/[88%] font-bold">
            About me
          </h2>
        </div>
        <div className="flex gap-[26px] flex-wrap">
          {profile?.data?.social_urls.map((item) => (
            <div key={item?.name}>
              {item.name == "linkedin" && (
                <Link href={item.link}>
                  <div className="p-[22px] text-4xl bg-[#ffffff]/[95%] shadow-md rounded-[16px] text-black-900">
                    <FaLinkedin />
                  </div>
                </Link>
              )}{" "}
              {item.name == "instgarm" && (
                <Link href={item.link}>
                  <div className="p-[22px] text-4xl bg-[#ffffff]/[95%] shadow-md rounded-[16px] text-black-900">
                    <FaInstagram />
                  </div>
                </Link>
              )}
              {item.name == "github" && (
                <Link href={item.link}>
                  <div className="p-[22px] text-4xl bg-[#ffffff]/[95%] shadow-md rounded-[16px] text-black-900">
                    <FaGithub />
                  </div>
                </Link>
              )}
              {item.name == "custom" && (
                <Link href={item.link}>
                  <div className="p-[22px] text-4xl bg-[#ffffff]/[95%] shadow-md rounded-[16px] text-black-900">
                    <IoMdLink />
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
        <div
          className="flex flex-col gap-5 my-10 font-medium text-[#000000]/[88%] leading-[45px] text-lg
        "
        >
          <p>{profile?.data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Right;
