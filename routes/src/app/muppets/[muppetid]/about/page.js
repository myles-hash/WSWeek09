export default function About({params}) {
    console.log(params)
    return (
        <div>
            <h1>Profile</h1>
            <h2>Params:</h2>
            <p>MuppetID:{params.muppetid}</p>
        </div>
    )
}