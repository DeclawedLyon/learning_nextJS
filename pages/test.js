import { useRouter } from "next/router"

export default function TestPage() {
  const router= useRouter();
  return (
    <div>
      This is the test page yo
      <button onClick={() => router.push('/')}>Home page!</button>
    </div>
  )
}