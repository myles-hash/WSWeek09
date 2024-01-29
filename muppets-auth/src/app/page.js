import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();
  const user = await currentUser();

  if (userId === null) {
    return(<div>
      <h1>Home</h1>
      <nav>
        <Link href="/about">ABOUT</Link>
      </nav>
    </div>)
  }
  return(
    <div>
      <h1>Home</h1>
      <nav>
        <Link href="/about">ABOUT</Link> | <Link href="/posts">POSTS</Link> | <Link href="/comments">COMMENTS</Link>
      </nav>
      <h2>Welcome, {user?.username} </h2>
    </div>
  )
}