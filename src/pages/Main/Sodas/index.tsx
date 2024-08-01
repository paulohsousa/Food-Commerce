
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"

import { Snacks } from "../../../components/Snacks"
import { useSnack } from "../../../hooks/useSnack"



export default function Sodas() {

  const {drinks} = useSnack()

  return (
    <>
  <Head title="Bebidas" description="Nossas melhores Bebidas"/>
  <SnackTitle>Bebidas</SnackTitle>
  <Snacks snacks={drinks}/>
  </>
  )
}
