export default function OrderID({params}) {
    console.log(params)
    return (
        <div>
            <h1>OrderID</h1>
            <h2>Params:</h2>
            <p>{params.orderid}</p>
        </div>
    )
}