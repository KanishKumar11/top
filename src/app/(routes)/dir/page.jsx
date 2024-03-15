"use client";
import React, { useCallback, useState, useMemo, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { Text } from "@/components";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
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
    <div className="flex gap-10 flex-wrap px-10 justify-center py-5 max-w-7xl mx-auto flex-col">
      <h1 className="w-full text-center font-bold my-10 text-5xl">
        Profile Directory
      </h1>
      <div className="flex gap-10 flex-wrap">
        {profileData.slice(0, sliceVal).map((item, index) => (
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
      {profileData.length > sliceVal && (
        <div
          onClick={handleLoadMore}
          className="bg-cyan-300 py-3 font-semibold px-8 rounded-xl mx-auto block cursor-pointer"
        >
          Load More
        </div>
      )}
    </div>
  );
};

export default Page;
