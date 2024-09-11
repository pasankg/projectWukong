
import { useState, useEffect } from 'react'

export interface UseGetDataFromJsonParams { } // in the index.ts file, interface is exported by `export * from ''` code
const RESUME = "../../resume.json";
const useGetDataFromJson = (params: UseGetDataFromJsonParams) => {
 const [data, setData] = useState({})

 useEffect(() => {
  const readDataFromFile = async () => {
   const resp = await (
    await fetch(RESUME, { mode: "no-cors" })
   ).json();

   setData(resp)
  }
  readDataFromFile()
 }, [])

 return data

}

export default useGetDataFromJson //in the index.ts file, defualts are exported from `export { default as useGetDataFromJson } from ''`





