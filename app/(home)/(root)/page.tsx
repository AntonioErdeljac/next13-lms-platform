import Link from "next/link";

export default async function Page() {
  return (
    <main>
      <h1>Home</h1>
      <Link href={"/dashboard"}>
      Dashboard
      </Link>
    </main>
  )
}