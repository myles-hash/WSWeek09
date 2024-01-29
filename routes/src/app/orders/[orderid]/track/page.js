export default function Track({params}) {
    console.log(params)
    return (
        <div>
            <h1>Track</h1>
            <h2>Params:</h2>
            <p>{params.orderid}</p>
        </div>
    )
}