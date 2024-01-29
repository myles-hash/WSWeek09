import { auth } from "@clerk/nextjs"

export default function AdminPage() {
    const { userId } = auth();

    if (userId !== "user_2bdDO9gZOK85nhHMA5hrvYkXbtR") {
        return <p>No!!!!</p>
    }
    return (<div>
        <p> Secret Page <br/>
    {userId}</p>
    </div>
    )
}