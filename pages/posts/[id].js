import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter()
  const {id} = router.query
  const createElement = () => {
    return (
      <></>
    )
  }

  if (id === 3) {

  }
  return ( 
    <div>
      {(id == 3) ? 'test works!' : 'test failed'}
      <p>Post: {id}</p>
    </div>
    
  )
}