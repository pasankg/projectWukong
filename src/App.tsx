// import { useState } from "react";
import { useGetDataFromJson, useGetTemplateEngine } from "./hooks";
// import { Grid } from "./components/ResumeGenerator/Layout";
import {
  ExperienceSection,
  NameCardSection,
  SummarySection,
} from "./components/ResumeGenerator/Sections";

function App() {
  const fileData = useGetDataFromJson();

  useGetTemplateEngine()

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
