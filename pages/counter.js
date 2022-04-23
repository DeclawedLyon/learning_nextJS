import react, { useEffect } from "react";
import { useRouter } from "next/router"

export default function Counter() {
  const router = useRouter();
  let counter = router.query.counter;
  useEffect(() => {
    router.push('./counter=10', undefined, { shallow: true })
  }, [])
  useEffect(() => {
    console.log(`the counter has changed! counter: ${counter}`)
  }, [])
  return (
    <>
      <p>counter: {counter}</p>
    </>
  )
}