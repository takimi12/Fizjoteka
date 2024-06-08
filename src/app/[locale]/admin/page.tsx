import React,{useState} from "react";
import TopicsList from "../../../components/AdminComponents1/TopicsList";
import Amazon from "../../../components/Amazon/S3uploadForm"
import AmazonImage from "../../../components/AdminComponents1/amazonimage/page"

export default function Admin() {
 
  return (
    <>

  <div>

  <TopicsList />
  <Amazon />
  <AmazonImage />
                </div>
    </>
  );
}
