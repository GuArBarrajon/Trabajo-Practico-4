//función para hacer que la pestaña actual tenga un formato distinto
function ventanaActiva(nombrePagina) {
  let urlPagina = window.document.URL; //se asigna el url de la página actual a un variable
    if (urlPagina.includes(nombrePagina)) {
    //se compara para ver si el url contiene el string del parámetro recibido
        return "nav-menu-link-active";
    }
}

/*Declaración del encabezado, pie de página y publicidad como strings para luego cargarlos con JS. 
El encabezado contiene la función interpolada para que agregue la clase que da formato a la pestaña actual*/
const encabezado = `            <nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid" id="header">
    <h1>PC<span>C</span>enter</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" id="toggle"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link ${ventanaActiva("index")}" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${ventanaActiva("productos")}" href="productos.html">Productos</a>
            </li>        
            <li class="nav-item">
                <a class="nav-link ${ventanaActiva("servicios")}" href="servicios.html">Servicios</a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${ventanaActiva("usuario")}" href="usuario.html">Usuario</a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${ventanaActiva("contacto")}" href="contacto.html">Contacto</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="descargas.html" target="_blank">Descargas</a>
            </li>
        </ul>
    </div>
</div>
</nav>`;

const pieDePagina = `            <div class="redes">
<a href="https://www.facebook.com/pccenterargentina/?locale=es_LA" target="_blank" title="Facebook"><i class="fa-brands fa-square-facebook"></i></a>
<a href="http://www.twitter.com/pccenterweb?lang=es" target="_blank" title="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
<a href="http://www.instagram.com/pccentercomputers/?hl=es" target="_blank" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
</div>
<div id="copyright">
<p>Copyright © 2023 - PCCenter - Todos los derechos reservados</p>
</div>`;

const promociones = `                <div class="promociones">
<ul class="marcas">
    <li><img src="imagenes/logo1.png" alt="marca" class="logo"></li>
    <li><img src="imagenes/logo2.png" alt="marca" class="logo"></li>
    <li><img src="imagenes/logo3.png" alt="marca" class="logo"></li>
    <li><img src="imagenes/logo4.png" alt="marca" class="logo"></li>
    <li><img src="imagenes/logo5.png" alt="marca" class="logo"></li>
    <li><img src="imagenes/logo6.png" alt="marca" class="logo"></li>
    <li><img src="imagenes/logo7.png" alt="marca" class="logo"></li>
    <li><img src="imagenes/logo8.png" alt="marca" class="logo"></li>
    <li><img src="imagenes/logo9.png" alt="marca" class="logo"></li>
    <li><img src="imagenes/logo10.png" alt="marca" class="logo"></li>
</ul>
</div>
<div class="d-flex">
<div id="carouselExampleSlidesOnly" class="carousel slide col-4" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="imagenes/memoria.png" class="d-block w-100 logo" alt="Memoria">
        </div>
        <div class="carousel-item">
            <img src="imagenes/fuente.png" class="d-block w-100 logo" alt="Fuente">
        </div>
        <div class="carousel-item">
            <img src="imagenes/placa.png" class="d-block w-100 logo" alt="Placa de video">
        </div>
    </div>
</div>
<div id="carouselExampleSlidesOnly" class="carousel slide col-4" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="imagenes/teclado.png" class="d-block w-100 logo" alt="Teclado">
        </div>
        <div class="carousel-item">
            <img src="imagenes/mouse.png" class="d-block w-100 logo" alt="Mouse">
        </div>
        <div class="carousel-item">
            <img src="imagenes/cooler.png" class="d-block w-100 logo" alt="Cooler">
        </div>
    </div>
</div>
<div id="carouselExampleSlidesOnly" class="carousel slide col-4" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="imagenes/parlantes.png" class="d-block w-100 logo" alt="Parlantes">
        </div>
        <div class="carousel-item">
            <img src="imagenes/monitor.png" class="d-block w-100 logo" alt="Monitor">
        </div>
        <div class="carousel-item">
            <img src="imagenes/auriculares.png" class="d-block w-100 logo" alt="Auriculares">
        </div>
    </div>
</div>
</div>`;

//Se asignan los strings con declaraciones html anteriores a su respectivo contenedor dentro del documento html
document.getElementById("cabeza").innerHTML = encabezado;
document.getElementById("pie").innerHTML = pieDePagina;
document.getElementById("promos").innerHTML = promociones;
