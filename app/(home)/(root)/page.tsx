import { redirect } from "next/navigation"

export default function Page() {
  redirect("/dashboard")
  return (
    <main>
      <h1>Home</h1>
    </main>
  )
}