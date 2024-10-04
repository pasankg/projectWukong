// import { useState } from "react";
import { Stack } from '@mui/system'
// import { useGetDataFromJson, useDynamicTemplateGenerator } from "./hooks";
import { useDynamicTemplateGenerator } from "./hooks";
// import { Grid } from "./components/ResumeGenerator/Layout";
// import {
//   ExperienceSection,
//   NameCardSection,
//   SummarySection,
// } from "./components/ResumeGenerator/Sections";

import {TemplateDropdown } from './components/ResumeGenerator/Sections'
import {TemplateDisplay } from './components/ResumeGenerator/Sections'

function App() {
  // const fileData = useGetDataFromJson();

  

  // const context = useDynamicTemplateGenerator()

  return (
    <div>
      <TemplateDropdown />
      <TemplateDisplay />
    </div>

    // <Stack>
    //   <Stack>{context}</Stack>
    //   {/* <NameCardSection {...(fileData?.nameCard || [])} />
    //   <SummarySection profileSummary={fileData?.profileSummary} />
    //   <ExperienceSection experiences={fileData?.experience || []} /> */}
    // </Stack>
  );
}

export default App;

//fullName, designation, contactDetails
