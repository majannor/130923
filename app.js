async function get_product(id) {
    //tunnel
const conn = await fetch(`/api/products/${id}`)

    //The json text back
    const data = await conn.json()
    console.log(data.id)
    console.log(data.name)

    document.querySelector("#product_id").innerHTML = data.id
}
