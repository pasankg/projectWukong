// import { useState } from "react";
import { Stack } from '@mui/system'
import { useDynamicTemplateGenerator } from "./hooks";
// import { Grid } from "./components/ResumeGenerator/Layout";
// import {
//   ExperienceSection,
//   NameCardSection,
//   SummarySection,
// } from "./components/ResumeGenerator/Sections";
import { useSelector } from "react-redux";

import {TemplateDisplay } from './components/ResumeGenerator/Sections'
import { TemplateGeneratorSelector } from './slices'

function App() {
  // const fileData = useGetDataFromJson();

  const selectedTemplateId = useSelector(TemplateGeneratorSelector.getSelectedTemplateId);

  

  const context = useDynamicTemplateGenerator({ templateId: selectedTemplateId })

  return (
    <Stack>
      <TemplateDisplay />
      <Stack>{context}</Stack>
    </Stack>

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
