export default function ProductID({params}) {
    console.log(params)
    return (
        <div>
            <h1>Product ID</h1>
            <h2>Params:</h2>
            <p>Productid: {params.productid}</p>
        </div>
    )
}