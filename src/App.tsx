// import { useState } from "react";
import { useGetDataFromJson } from "./hooks";
// import { Grid } from "./components/ResumeGenerator/Layout";
import {
  ExperienceSection,
  NameCardSection,
  SummarySection,
} from "./components/ResumeGenerator/Sections";

function App() {
  const fileData = useGetDataFromJson();
  console.log(`~ useGetDataFromJson`, fileData);
  // return <Grid/>

  return (
    <>
      <NameCardSection {...(fileData?.nameCard || [])} />
      <SummarySection profileSummary={fileData?.profileSummary} />
      <ExperienceSection experiences={fileData?.experience || []} />
    </>
  );
}

export default App;

//fullName, designation, contactDetails
