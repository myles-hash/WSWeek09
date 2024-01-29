export default function Videos({params}) {
    console.log(params)
    return (
        <div>
            <h1>Videos</h1>
            <h2>Params:</h2>
            <p>MuppetID:{params.muppetid}</p>
        </div>
    )
}