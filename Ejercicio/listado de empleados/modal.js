const cartas = document.querySelectorAll('.carta'); 



function listado(){

    const boton = document.querySelector(".boton-cerrar");

    for (let i = 0; i < cartas.length; i++){


    cartas[i].addEventListener("click" , () =>{

        //alert(`Soy la carta ${(i + 1)}`)
        let nombre = document.querySelectorAll(".nombre")[i].firstChild.nodeValue;
        let telefono = document.querySelectorAll(".telefono")[i].firstChild.nodeValue;
        let correo = document.querySelectorAll(".correo")[i].firstChild.nodeValue;
        let puesto = document.querySelectorAll(".puesto")[i].firstChild.nodeValue;
        let fechanacimiento = document.querySelectorAll(".fechanacimiento")[i].firstChild.nodeValue;
        let fecharegistro = document.querySelectorAll(".fecharegistro")[i].firstChild.nodeValue;
        let responsabilidades = document.querySelectorAll(".responsabilidades")[i].firstChild.nodeValue;

        let mostrarNombre = document.querySelector(".mostrar-nombre");
        let mostrarTelefono = document.querySelector(".mostrar-telefono");
        let mostrarCorreo = document.querySelector(".mostrar-correo");
        let mostrarPuesto = document.querySelector(".mostrar-puesto");
        let mostrarFechanacimiento = document.querySelector(".mostrar-fechanacimiento");
        let mostrarFecharegistro = document.querySelector(".mostrar-fecharegistro");
        let mostrarResponsabilidades = document.querySelector(".mostrar-responsabilidades");

        //alert(nombre + telefono + correo + puesto + fechanacimiento + fecharegistro + responsabilidades);

        mostrarNombre.append(nombre);
        mostrarTelefono.append(telefono);
        mostrarCorreo.append(correo);
        mostrarPuesto.append(puesto);
        mostrarFechanacimiento.append(fechanacimiento);
        mostrarFecharegistro.append(fecharegistro);
        mostrarResponsabilidades.append(responsabilidades);

       //modal.append(mostrarNombre + mostrarTelefono + mostrarCorreo + mostrarPuesto + mostrarFechanacimiento + mostrarFecharegistro + mostrarResponsabilidades)

        boton.addEventListener("click" , function(){

            mostrarNombre.innerHTML = "";
            mostrarTelefono.innerHTML = "";
            mostrarCorreo.innerHTML = "";
            mostrarPuesto.innerHTML = "";
            mostrarFechanacimiento.innerHTML = "";
            mostrarFecharegistro.innerHTML = "";
            mostrarResponsabilidades.innerHTML = "";

        })

    })

}

}
listado();