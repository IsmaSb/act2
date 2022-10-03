var json = [
    {
        nombre: "Ismael", apellido: "Sabalza", tipo_documento: "cc", numero_documento: 1001996198, departamento: "Atlantico", ciudad: "Barranquilla", direccion: "Calle 84 # 34-15", telefono: 3004624458, correo: "isabalza@gmail.com"
    },
    {
        nombre: "Cristiano", apellido: "Ronaldo", tipo_documento: "cc", numero_documento: 172175958, departamento: "Atlantico", ciudad: "Malambo", direccion: "Calle 2 # 5b-56", telefono: 3007002836, correo: "elbicho@gmail.com"
    },
    {
        nombre: "Juan", apellido: "Perez", tipo_documento: "ti", numero_documento: 10029838872, departamento: "Atlantico", ciudad: "Barranquilla", direccion: "Calle 84 # 34-15", telefono: 3057595948, correo: "jperez@outlook.com"
    }
]

const listar = () => {
    let tbody = document.getElementById('tusuarios')
    let tablallena = ""

    for (let i = 0; i < json.length; i++) {
        tablallena += "<tr><td>" + json[i].nombre + "</td><td>" + json[i].apellido + "</td><td>" + json[i].tipo_documento + "</td><td>" + json[i].numero_documento + "</td></tr>" + json[i].departamento + "</td></tr>" + json[i].ciudad + "</td></tr>" + json[i].direccion + "</td></tr>" + json[i].telefono + "</td></tr>" + json[i].email + "</td></tr>"
    }
    tbody.innerHTML = tablallena
}

const registrar=()=>{
    
    const nombre=document.getElementById("nombre").value
    const apellido=document.getElementById("apellido").value
    const tipodoc = document.getElementById("tipo").value
    const documento = parseInt(document.getElementById("documento").value)
    const departamento = document.getElementById("departamento").value
    const ciudad = document.getElementById("ciudad").value
    const direccion=document.getElementById("direccion").value
    const telefono = parseInt(document.getElementById("telefono").value)
    const correo = document.getElementById("correo").value  
    if (!nombre.trim()) {
        alert("Ingrese el nombre")
        return
    }
    if (!apellido.trim()) {
        alert("Ingrese el apellido")
        return
    }
    if (tipodoc == "Seleccione el tipo de documento") {
        alert('Seleccione su tipo de documento')
        return
    }
    if (!documento) {
        alert('Ingrese el numero de documento')
        return
    }
    if (!departamento.trim()) {
        alert('Ingrese el departamento')
        return
    }
    if (!ciudad.trim()) {
        alert('Ingrese la ciudad')
        return
    }
    if (!direccion.trim()) {
        alert("Ingrese la direccion")
        return
    }
    if (!telefono) {
        alert('Ingrese el numero de telefono')
        return
    }
    if (!correo.trim()) {
        alert('Ingrese el correo electronico')
        return
    }
    for (let i = 0; i < json.length; i++) {
        const elemento = json[i]
        if (elemento.numero_documento == documento) {
            alert('El usuario con este numero de documento ya se encuentra ingresado')
            return
        }
    }      
    let tbody=document.getElementById("tusuarios")
    tbody.innerHTML+="<tr><td>"+nombre+"</td><td>"+apellido+"</td><td>"+tipodoc+"</td><td>"+documento+"</td><td>"+departamento+"</td><td>"+ciudad+"</td><td>"+direccion+"</td></tr>"+telefono+"</td><td>"+correo+"</td><td>";
    const nuevo={nombre:nombre,apellido:apellido,tipodoc:tipodoc,documento:documento,departamento:departamento,ciudad:ciudad,direccion:direccion,telefono:telefono,correo:correo}
    json.push(nuevo)
}