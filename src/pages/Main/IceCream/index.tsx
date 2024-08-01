
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"


import { Snacks } from "../../../components/Snacks"
import { useSnack } from "../../../hooks/useSnack"
export default function IceCream() {

  const {desserts} = useSnack()
  return (
    <>
  <Head title="Sobremesas" description="Nossas melhores Sobremesas"/>
  <SnackTitle>Sobremesas</SnackTitle>
  <Snacks snacks={desserts}/>
  </>
  )
}
