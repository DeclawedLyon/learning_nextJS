import {useRouter} from "next/router"

export default function Route() {

  const router = useRouter();
  const {query} = router.query;

  const createElement = () => {
    return (
      <div>
        The current query is: {query}
      </div>
    )
  }

  let dynamicData = createElement();
  return (
    <>
      {dynamicData}
      <button onClick={() => router.push('/')}>Home page!</button>
    </>
  )
}