import { useState,useEffect } from "react"

import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"
import { SnackData } from "../../../interfaces/SnackData"
import { getPizzas } from "../../../services/api"

export default function Pizzas() {

  const [pizzas,setPizzas] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const pizzaRequest = await getPizzas()
      setPizzas(pizzaRequest.data)
    })()
  },[])
  return (
    <>
  <Head title="Pizzas" description="Nossas melhores Pizzas"/>
  <SnackTitle >Pizzas</SnackTitle>
  <Snacks snacks={pizzas}/>
  </>
  )
}
