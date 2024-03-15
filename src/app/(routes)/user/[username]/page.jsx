"use client";
import Left from "@/components/sections/user/Left";

import Right from "@/components/sections/user/Right";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { usePathname } from "next/navigation";

const Page = () => {
  const [profileData, setProfileData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = useMemo(() => createClient(), []);
  const pathname = usePathname();

  const fetchProfileData = useCallback(async () => {
    try {
      const { data: profile, error } = await supabase
        .from("top")
        .select("*")
        .eq("username", pathname.split("/")[2]);

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
  }, [pathname, supabase, setProfileData]);

  const fetchServiceData = useCallback(async () => {
    try {
      const { data: service, error } = await supabase
        .from("service")
        .select("*")
        .eq("username", pathname.split("/")[2]);

      if (error) {
        console.error(
          "Error fetching service data from Supabase:",
          error.message
        );
      } else {
        setServiceData(service);
        console.log(service);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }, [pathname, supabase, setServiceData]);

  const fetchFeedbackData = useCallback(async () => {
    try {
      const { data: feedback, error } = await supabase
        .from("feedback")
        .select("*")
        .eq("username", pathname.split("/")[2]);

      if (error) {
        console.error(
          "Error fetching service data from Supabase:",
          error.message
        );
      } else {
        setFeedbackData(feedback);
        console.log(service);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }, [pathname, supabase]);

  useEffect(() => {
    fetchProfileData();
    fetchServiceData();
    fetchFeedbackData();
  }, [fetchFeedbackData, fetchProfileData, fetchServiceData]);
  if (loading) return <></>;
  if (!(profileData.length > 0)) return <>No User Found!</>;
  return (
    <div className="flex w-full flex-col ">
      {/* <div className="flex w-full flex-col 7md:flex-row"> */}
      <aside className=" w-full  right-0">
        {/* <aside className="7md:w-1/3 w-full 7md:fixed right-0"> */}
        <Left data={profileData[0]} />
      </aside>
      <main className=" w-full self-start justify-self-start mr-auto">
        {/* <main className="7md:w-2/3 w-full self-start justify-self-start mr-auto"> */}
        <Right
          data={profileData[0]}
          service={serviceData}
          feedback={feedbackData}
        />
      </main>
      {/* <aside className=" w-full  right-0">
        <aside className="7md:w-1/3 w-full 7md:fixed right-0">
        <Left data={profileData[0]} />
      </aside> */}
    </div>
  );
};

export default Page;
