export default function Gallery({params}) {
    console.log(params)
    return (
        <div>
            <h1>Gallery</h1>
            <h2>Params:</h2>
            <p>MuppetID:{params.muppetid}</p>
        </div>
    )
}