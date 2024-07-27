import { Skeleton } from "../../Skeleton"
import { Container } from "../styles"


export  function SkeletonSnack() {
  return (<div className="skeleton-wrapper">
    <Container>
      <Skeleton type="title"/>
    </Container>
  </div>)
}
