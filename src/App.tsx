import { useState } from "react";
import { useGetDataFromJson } from "./hooks";
import { Grid } from "./components/ResumeGenerator/Layout/index";
import { NameCardSection } from "./components/ResumeGenerator/Sections/index";

function App() {
  const fileData = useGetDataFromJson({});
  console.log(`~ useGetDataFromJson`, fileData.nameCard);
  // return <Grid/>

  return (
    <NameCardSection
      fullName={`${fileData?.nameCard?.fullName}`}
      designation={`${fileData?.nameCard?.designation}`}
      contactDetails={`${fileData?.nameCard?.contactDetails}`}
    />
  );
}

export default App;
