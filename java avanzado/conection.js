/* let mysql = require(`mysql`);

let conexion = mysql.createConnection({
    host: `localhost`,
    database: `ecommerce`,
    user: `root`,
    password: ``
})

conexion.connect({function(error) {
    if (error){
        return error;
    }else {
        console.log(`Conexion Exitosa`);
    }
}})
*/


function registro() {
    let nombre = document.getElementById("nombre").value
    let direccion = document.getElementById("direccion").value
    let telefono = document.getElementById("telefono").value
    let password = document.getElementById("password").value
    let metodo_pago = document.getElementById("metodo_pago").value 




    let usuario = [nombre, direccion, telefono, password, metodo_pago]

    for (let index = 0; index < usuario.length; index++) {
        console.log(usuario[index])
        
    };
    console.log(usuario)

}


function productos() {
    let id_producto = document.getElementById("id_producto").value
    let nombre = document.getElementById("nombre").value
    let precio = document.getElementById("precio").value
    let categoria = document.getElementById("categoria").value

    let addProducto = [id_producto, nombre, precio, categoria]

    for (let index = 0; index < addProducto.length; index++) {
        console.log(addProducto[index])
        
    };
    console.log(addProducto)


}


function login() {
    let correoElectronico = document.getElementById("correoElectronico").value
    let passwordg = document.getElementById("passwordg").value

    let addlogin = [correoElectronico,passwordg]

    for (let index = 0; index < addlogin.length; index++) {
        console.log(addlogin[index])
        
    };
    console.log(addlogin)
}
