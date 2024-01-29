export default function Settings({params}) {
    console.log(params)
    return (
        <div>
            <h1>Settings</h1>
            <h2>Params:</h2>
            <p>UserID:{params.userid}</p>
        </div>
    )
}