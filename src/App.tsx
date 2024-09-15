// import { useState } from "react";
import { useGetDataFromJson } from "./hooks";
// import { Grid } from "./components/ResumeGenerator/Layout";
import {
  NameCardSection,
  SummarySection,
} from "./components/ResumeGenerator/Sections";

function App() {
  const fileData = useGetDataFromJson({});
  console.log(`~ useGetDataFromJson`, fileData);
  // return <Grid/>

  return (
    <>
      <NameCardSection {...fileData?.nameCard} />
      <SummarySection profileSummaryData={fileData?.profileSummary} />
    </>
  );
}

export default App;
