import { useState,useEffect } from "react"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"

import { getDesserts } from "../../../services/api"
import { Snacks } from "../../../components/Snacks"
export default function IceCream() {
  const [desserts,setDesserst] = useState([])

  useEffect(() => {
    (async () => {
      const dessertRequest = await getDesserts()
      setDesserst(dessertRequest.data)
    })()
  },[])
  return (
    <>
  <Head title="Sobremesas" description="Nossas melhores Sobremesas"/>
  <SnackTitle>Sobremesas</SnackTitle>
  <Snacks snacks={desserts}/>
  </>
  )
}
