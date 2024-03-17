"use client"
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { allDocs } from "contentlayer/generated";
import { notFound, usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import {remark} from 'remark';
import html from 'remark-html';
import Image from "next/image";

const Page = ({ params }) => {
  const supabase = useMemo(() => createClient(), []);
  const username = params.slug;
  const pathname = usePathname();
  const [profileData, setProfileData] = useState([]);
const [resume,setResume]=useState("")
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
    }
  }, [supabase, pathname]);

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  if (!(profileData.length > 0)) return <>No User Found!</>;

  // Convert Markdown to HTML
  const markdownToHtml = async (markdownContent) => {
    const processedContent = await remark().use(html).process(markdownContent);
    // setResume(processedContent.toString())
    return processedContent.toString();

  };

  // Render HTML
  const renderHtml = async () => {
    const htmlContent = await markdownToHtml(profileData[0].resume.content);
    setResume(htmlContent)
    console.log(htmlContent)
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };
renderHtml()
  return (
    <div className="bg-[#f3e0e0] py-2">
    <Image src={profileData[0].data.profile_pic} className="rounded-full mx-auto" width={200} height={200} alt=""/>
      <div className="resume">
         <div dangerouslySetInnerHTML={{ __html: resume }} />
      </div>
    </div>
  );
};

export default Page;
