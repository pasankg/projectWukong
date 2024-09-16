
import { useState, useEffect } from 'react'
import { Resume } from '../types'

const RESUME = "../../resume.json";

//Resume return type
const useGetDataFromJson = (): Resume => {
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

export default useGetDataFromJson //In the index.ts file, defaults are exported from `export { default as useGetDataFromJson } from ''`





