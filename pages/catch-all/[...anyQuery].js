import { useRouter } from "next/router"

export default function CatchAllRoute() {
  const router = useRouter();
  const queries = router.query.anyQuery
  let formatted = false;
  let queryElements;

  const formatQueries = (queries) => {
    if (queries == null) {
      return
    }
    const queryElementArr = queries.map(query => {
      return (
        <div>{query}</div>
      )
    })
    return queryElementArr
  }

  const displayQueries = new Promise((resolve, reject) => {
    queryElements = formatQueries(queries);
    resolve(queryElements)
  })
  
  displayQueries
    .then(
      formatted = true
    )

  return (
    <>
      <p>The queries are:</p>
      {formatted ? queryElements : 'hello'}
    </>
  )
}