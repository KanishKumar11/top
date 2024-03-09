"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Left = ({ data }) => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    setProfile(data);
    console.log("profile");
    console.log(profile);
  }, [data, profile]);
  return (
    <div className="bg-[#262c2a] pt-16 pl-[8.33%] 7md:min-h-screen max-h-max flex gap-5 flex-col pr-10 relative overflow-y-hidden">
      <div className="relative w-max">
        <Image
          src={profile?.data?.profile_pic}
          alt=""
          width={200}
          height={200}
          className="rounded-full"
        />
        {data?.is_verified && (
          <div className="absolute bottom-[15px] right-[15px]">
            <Image src="/images/verified.svg" alt="" width={36} height={36} />
          </div>
        )}
      </div>
      <div className=" text-white-A700 pb-5">
        <h1 className="font-bold mt-[24px] mb-[16px] text-4xl">
          {data?.data?.display_name}
        </h1>
        <p className="text-lg font-medium">{profile?.data?.title}</p>
      </div>
      <div className="7md:flex hidden gap-5 flex-wrap mt-[30px] mr-[30px] ">
        <div className="h-20 w-20 bg-[rgba(0,0,0,0.2)] filter invert inline-flex px-[14px] pt-[12px] pb-[8px] flex-col aspect-square items-center justify -center text-xs font-medium leading-[129%] text-[rgba(0,0,0,0.88)] rounded-xl">
          <span>Top</span>
          <span className="text-3xl font-[900] leading-[129%] ">
            {profile?.data?.achievements[0]?.percentage}%
          </span>
        </div>
        <div className="h-20 w-20 bg-[rgba(0,0,0,0.2)] filter invert inline-flex px-[14px] pt-[12px] pb-[8px] flex-col aspect-square items-center justify -center text-xs font-medium leading-[129%] text-[rgba(0,0,0,0.88)] rounded-xl">
          <span>Bookings</span>
          <span className="text-3xl font-[900] leading-[129%] ">
            {profile?.data?.bookings_count}
          </span>
        </div>
        <div>
          <Image src="/images/top-in-data.svg" alt="" width={80} height={80} />
        </div>
        <div>
          <Image
            src="/images/top_rated.svg"
            alt=""
            width={70}
            height={80}
            className="maxh-[80px]"
          />
        </div>
      </div>
      <div className="fixed bottom-[32px] left-[40px] text-white-A700_cc bg-[#141414] border-[#141414] transition-all ease-in-out duration-[.6s] rounded-1 font-bold text-sm flex h-[48px]  items-center gap-2 py-2 px-4 rounded-md cursor-pointer hover:scale-105">
        <Image src="/images/icon.svg" alt="" height={26} width={26} />
        Start your page
      </div>
    </div>
  );
};

export default Left;
