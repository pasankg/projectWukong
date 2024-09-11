import { useState } from 'react'
import { useGetDataFromJson } from './hooks';

function App() {
  const fileData = useGetDataFromJson({});
  console.log(`~ useGetDataFromJson`, fileData)
  return (
    <>
    </>
      
  )
}

export default App
