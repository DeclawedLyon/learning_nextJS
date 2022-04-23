import { useRouter } from "next/router"

export default function About() {
  const router = useRouter();
  return (
    <div>
      About Page
      <button onClick={() => router.push('/')}>Home page!</button>
    </div>
  )
}