import { useState } from "react";
import { useGetDataFromJson } from "./hooks";
import { Grid } from "./components/ResumeGenerator/Layout/index";

function App() {
  const fileData = useGetDataFromJson({});
  console.log(`~ useGetDataFromJson`, fileData);
  return <Grid/>
}

export default App;
