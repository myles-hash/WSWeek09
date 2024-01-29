export default function Profile({params}) {
    console.log(params)
    return (
        <div>
            <h1>Profile</h1>
            <h2>Params:</h2>
            <p>UserID:{params.userid}</p>
        </div>
    )
}