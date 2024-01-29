export default function Edit({params}) {
    console.log(params)
    return (
        <div>
            <h1>Edit</h1>
            <h2>Params:</h2>
            <p>Productid: {params.productid}</p>
        </div>
    )
}