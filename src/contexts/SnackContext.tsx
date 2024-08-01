import { createContext,ReactNode,useEffect,useState } from 'react'

import { SnackData } from '../interfaces/SnackData'

import { getDesserts, getPizzas,getDrinks,getBurgers } from '../services/api'

interface SnackContextProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  desserts: SnackData[]
}

interface SnackProviderProps {
  children:ReactNode
}
export const SnackContext = createContext({} as SnackContextProps)

export function SnackProvider({children}:SnackProviderProps) {
  const [burgers,setBurgers] = useState<SnackData[]>([])
  const [pizzas,setPizzas] = useState<SnackData[]>([])
  const [drinks,setDrinks] = useState<SnackData[]>([])
  const [desserts,setDesserts] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      try {
      const burgerRequest = await getBurgers()
      const pizzaRequest = await getPizzas()
      const drinksRequest = await getDrinks()
      const dessertsRequest = await getDesserts()

      const requests = [burgerRequest,pizzaRequest,drinksRequest,dessertsRequest]

      const [
        {data:burgerResponse},
        {data:pizzaResponse},
        {data:drinksResponse},
        {data:dessertsResponse},
      ] = await Promise.all(requests)

      setBurgers(burgerResponse)
      setPizzas(pizzaResponse)
      setDrinks(drinksResponse)
      setDesserts(dessertsResponse)
    }catch(error) {
      console.error(error);

    }
    })()
  },[])
  return (
    <SnackContext.Provider value={{burgers,pizzas,drinks,desserts}}>
          {children}
        </SnackContext.Provider>
  )
}
