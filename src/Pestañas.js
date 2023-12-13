import React from 'react';
import pollo1 from './bn.png';
import pollo2 from './mm.png';
import pollo3 from './nm.png';
import logo from './sd.png'
import cpro0 from './pro0.jpg'
import cpro1 from './pro1.jpg'
import cpro2 from './pro2.jpg'
import Lwha from './lwha.jpeg'
import Lface from './Lface.png'
import Lins from './Lisn.jpeg'
import Ltw from './Ltw.png'
import jk from './jk.png';
import gh from './gh.png';
import kl from './kl.png';
import vb from './vb.png';
import xc from './xc.png';
import zx from './zx.png';
import des from './des.jpeg'
import promo1 from './promo1.png'
import promo2 from './promo2.png'
import promo3 from './promo3.png'
import promo4 from './promo4.png'
import pedido1 from './pedido1.png'
import pedido2 from './pedido2.png'
import pedido3 from './pedido3.png'
import pedido4 from './pedido4.png'
import pedido5 from './pedido5.png'
import pedido6 from './pedido6.png'
import pedido7 from './pedido7.png'




export const Pestañas = () => {
  return (
    <div className='pestañas'><ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">INICIO</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"> MENU </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">PROMOCIONES</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="diseño" data-bs-toggle="tab" data-bs-target="#contact-tab-pane1" type="button" role="tab" aria-controls="diseño" aria-selected="false">SUCURSALES</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="realizar" data-bs-toggle="tab" data-bs-target="#contact-tab-pane2" type="button" role="tab" aria-controls="realizar" aria-selected="false">PEDIDOS</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contactos" data-bs-toggle="tab" data-bs-target="#contact-tab-pane3" type="button" role="tab" aria-controls="contactos" aria-selected="false">CONTACTOS</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="creditos" data-bs-toggle="tab" data-bs-target="#contact-tab-pane4" type="button" role="tab" aria-controls="creditos" aria-selected="false">CREDITOS</button>
            </li>
            </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">

                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <br/><div id='bienvenida'>
                        <h4>"Siéntete como en tu casa porque has llegado a un lugar donde compartir es lo importante"</h4><br/>
                    </div>
                        <div id='algunas'></div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <center><img src={cpro0} alt=""/></center>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>El mejor pollo de Bolivia</h5>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <center><img src={cpro1} alt="" /></center>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>El mejor pollo de Bolivia</h5>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <center><img src={cpro2} alt="" /></center>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>El mejor pollo de Bolivia</h5>
                                    </div>
                                </div>
                            </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                                </button>
                            </div>

                                <br/><center><h5>BUSCANOS EN NUESTRAS REDES SOCIALES</h5></center>
                            <div id='redes'>
                                <a href='https://polloscopacabana.com/contactanos/'><img src={Lwha} alt="" /></a>......
                                <a href='https://www.facebook.com/PollosCopacabanaoficial/?locale=es_LA'><img src={Lface} alt="" /></a>......
                                <a href='https://www.instagram.com/pollos_copacabana/?hl=es-la'><img src={Lins} alt="" /></a>.....
                                <a href='https://twitter.com/pollitocopa?lang=es'><img src={Ltw} alt="" /></a>
                            </div>  
                            <div id="credits">
                                <p>&copy; 2023 Restaurantes | Desarrollado por GERSON ARGOLLO MAGNE</p>
                            </div>

                        </div>
                        <br/><div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                            <div id='catimagen'>
                                <h5>¡HOY QUIERO!</h5><br/>
                                ..........<a href='https://pedidos.polloscopacabana.com/#section4SS'><img src={jk} alt="" /></a>..........
                                <a href='https://pedidos.polloscopacabana.com/#section1SS'><img src={gh} alt="" /></a>..........
                                <a href='https://pedidos.polloscopacabana.com/#section5SS'><img src={kl} alt="" /></a>

                            </div>
                            <br/><div id='catimagen'>
                                <h5>¡HOY QUIERO!</h5><br/>
                                ..........<a href='https://polloscopacabana.com/heladeria/la-paz/'><img src={vb} alt="" /></a>..........
                                <a href='https://pedidos.polloscopacabana.com/#section6SS'><img src={xc} alt="" /></a>..........
                                <a href='https://polloscopacabana.com/cafeteria/la-paz/'><img src={zx} alt="" /></a>

                            </div><br/>
                    
                            <br/><div class="card" >
                                    <div class="card-body">
                                        <h5 class="card-title">¡DESCARGA TU MENU AQUI!</h5>
                                        <a href="https://polloscopacabana.com/docs/settings/pcmenu-cuatriptico-lpcompressed.pdf" class="btn btn-primary">Descargar</a>
                                    </div>
                            </div>
                                

                        

                            <br/><div id="credits">
                                <p>&copy; 2023 Restaurantes | Desarrollado por GERSON ARGOLLO MAGNE</p>
                            </div>

                         </div>

                        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                            <img src={promo1} class="d-block w-100" alt=""/>
                                            </div>
                                            <div class="carousel-item">
                                            <img src={promo2} class="d-block w-100" alt=""/>
                                            </div>
                                            <div class="carousel-item">
                                            <img src={promo3} class="d-block w-100" alt=""/>
                                            </div>
                                            <div class="carousel-item">
                                            <img src={promo4} class="d-block w-100" alt=""/>
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                            <div id="credits">
                                <p>&copy; 2023 Restaurantes | Desarrollado por GERSON ARGOLLO MAGNE</p>
                            </div>

                        </div>
        
                        <div class="tab-pane fade" id="contact-tab-pane1" role="tabpanel" aria-labelledby="diseño" tabindex="0">
                                <p>
                                    <h2>SUCURSALES 
                                        LA PAZ
                                    </h2>
                                </p>
                                <div id="carouselExample" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <center><img src={logo} alt="" /></center>
                                        </div>
                                        <div class="carousel-item">
                                            <center><img src={logo} alt="" /></center>
                                        </div>
                                        <div class="carousel-item">
                                            <center><img src={logo} alt="" /></center>
                                        </div>
                                        <div class="carousel-item">
                                            <center><img src={logo} alt="" /></center>
                                        </div>
                                    </div>
                                    
                            
                                <div class="accordion" id="accordionPanelsStayOpenExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                Sucural 1: SOCABAYA
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                            <div class="accordion-body">
                                                <strong>DIRECCION: </strong>
                                                <ul>
                                                        C. Potosí No. 1106 esq. Socabaya Zona Central
                                                        Telf. Pedidos: 240 6262 - 240 8702
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                Sucural 2: EL PRADO
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                            <div class="accordion-body">
                                                <strong>DIRECCION: </strong>
                                                <ul>
                                                    Av. 16 de Julio No. 1854 Zona Central
                                                    Telf. Pedidos: 231 2804 - 231 7474
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                Sucural 3: MEGACENTER
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                            <div class="accordion-body">
                                                <strong>DIRECCION: </strong>
                                                <ul>
                                                    Av. 16 de Julio No. 1854 Zona Central
                                                    Telf. Pedidos: 231 2804 - 231 7474
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                Sucural 4: MULTICINE
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                            <div class="accordion-body">
                                                <strong>DIRECCION: </strong>
                                                <ul>
                                                    Av. Arce No. 2631 Zona Central
                                                    Telf. Pedidos: 211 1009 - 211 1019
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                Sucural 5: CALACOTO
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                            <div class="accordion-body">
                                                <strong>DIRECCION: </strong>
                                                <ul>
                                                    Av. Ballivián No. 1326 Zona Calacoto
                                                    Telf. Pedidos: 279 2444 - 279 4163
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                Sucural 6: MIRAFLORES
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                            <div class="accordion-body">
                                                <strong>DIRECCION: </strong>
                                                <ul>
                                                        Av. Saavedra No. 1706 Zona Miraflores
                                                        Telf. Pedidos: 222 6120 - 222 6122
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="credits">
                                    <p>&copy; 2023 Restaurantes | Desarrollado por GERSON ARGOLLO MAGNE</p>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
        
                        <div class="tab-pane fade" id="contact-tab-pane2" role="tabpanel" aria-labelledby="realizar" tabindex="0">
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action list-group-item-primary"><button class="list-group-item list-group-item-action list-group-item-primary" type="submit" onclick="">
                                COMBO 1/4 DE POLLO
                                <ul>
                                    <img src={pedido1} class="img-fluid" alt="Descripción de la imagen"/>
                                    <li>1/4 de pollo surtido</li>
                                    <li>Papas tamaño personal</li>
                                    <li>Gaseosa 350ml</li>
                                </ul>
                                Precio: 34 bs.
                                </button></a>
                                <a href="#" class="list-group-item list-group-item-action list-group-item-secondary"><button class="list-group-item list-group-item-action list-group-item-secondary" type="submit" onclick="" >
                                COMBO TRIO
                                <ul>
                                    <img src={pedido2} class="img-fluid" alt="Descripción de la imagen"/>
                                    <li>3 presas de pollo surtidas</li>
                                    <li>Papas tamaño mediano</li>
                                    <li>Gaseosa 470ml</li>

                                </ul>
                                Precio: 49 bs.
                                </button></a>
                                <a href="#" class="list-group-item list-group-item-action list-group-item-success"><button class="list-group-item list-group-item-action list-group-item-success" type="submit" onclick="">
                                COMBO ESPECIAL
                                <ul>
                                    <img src={pedido3} class="img-fluid" alt="Descripción de la imagen"/>
                                    <li>4 presas de pollo surtidas</li>
                                    <li>Papas tamaño mediano</li>
                                    <li>Gaseosa 470ml</li>
                                </ul>
                                Precio: 61 bs.
                                </button></a>
                                <a href="#" class="list-group-item list-group-item-action list-group-item-danger"><button class="list-group-item list-group-item-action list-group-item-danger" type="submit" onclick="">
                                COMBO COPALITOS
                                <ul>
                                    <img src={pedido4} class="img-fluid" alt="Descripción de la imagen"/>
                                    <li>6 fletitos de pollo</li>
                                    <li>Papas tamaño mediano</li>
                                    <li>Gaseosa 470ml</li>
                                </ul>
                                Precio: 45 bs.
                                </button></a>
                                <a href="#" class="list-group-item list-group-item-action list-group-item-warning">< button class="list-group-item list-group-item-action list-group-item-warning" type="submit" onclick="">
                                COMBO PIPOCAS DE POLLO
                                <ul>
                                    <img src={pedido5} class="img-fluid" alt="Descripción de la imagen"/>
                                    <li>Acompañado de papas fritas y</li>
                                    <li>Gaseosas a eleccion</li>
                            
                                </ul>
                                Precio: 37 bs.
                                </button></a>
                                <a href="#" class="list-group-item list-group-item-action list-group-item-info"><button class="list-group-item list-group-item-action list-group-item-info" type="submit" onclick="">
                                WRAP CON ESPINACA Y TOCINO
                                <ul>
                                    <img src={pedido6} class="img-fluid" alt="Descripción de la imagen"/>
                                    <li>Acompañado de papas fritas y</li>
                                    <li>Gaseosas a eleccion</li>
                                </ul>
                                Precio: 30 bs.
                                </button></a>
                                <a href="#" class="list-group-item list-group-item-action list-group-item-light"><button class="list-group-item list-group-item-action list-group-item-light" type="submit" onclick="">
                                WRAP CON COPALITOS
                                <ul>
                                    <img src={pedido7} class="img-fluid" alt="Descripción de la imagen"/>
                                    <li>Acompañado de papas fritas y</li>
                                    <li>Gaseosas a eleccion</li>
                                </ul>
                                Precio: 30 bs.
                                    </button></a>
                                
                        </div>
                        
                        <form>
                                <div class="mb-3">
                                    <label for="">Ingrese su Nombre: </label>
                                    <input type="text" name="nombre" id="nombre" /> <br /><br />
                                    <label for="">Ingrese su numero de Telefono: </label>
                                    <input type="text" name="numero" id="numero" /><br /><br />
                                    <label for="exampleInputEmail1" class="form-label" >Ingrese un Correo Electronico: </label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">Solo se permite correo electronico, no olvide el "@".</div>
                                </div>
                                <div class="mb-3">
                                    <label for="">Ingrese los Digitos de su Tarjeta de Pago: </label>
                                    <input type="text" name="tarjeta" id="tarjeta" /><br /><br />
                                    <label for="exampleInputPassword1" class="form-label">Contraseña: </label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Confirmar Pago</label>
                                </div>
                                ____<button type="submit" class="btn btn-primary" onclick="">COMPRAR</button>
                                <div class="alert alert-success" role="alert" id='gracias'>
                                    <h4 class="alert-heading">GRACIAS POR SU COMPRA!</h4>
                                    <p>En unos instantes nos comunicamos con usted.</p>
                                    <hr />
                                    <p class="mb-0"> SIEMPRE ESTAMOS A TU DISPOSICION</p>
                                </div>
                        </form>
                        <div id="credits">
                            <p>&copy; 2023 Restaurantes | Desarrollado por GERSON ARGOLLO MAGNE</p>
                        </div>
                </div>

                <div class="tab-pane fade" id="contact-tab-pane3" role="tabpanel" aria-labelledby="contactos" tabindex="0">
                        <p>¡Qué alegría verte aquí! Bienvenido a nuestra comunidad de personas interesantes!</p>

                        <div class="list-group">
                                <a href="https://www.facebook.com/PollosCopacabanaoficial/?locale=es_LA" class="list-group-item list-group-item-action">SIGUENOS EN NUESTRA PAGINA DE FACEBOOK: <img src={Lface} alt="" /></a>
                                <a href="https://twitter.com/pollitocopa?lang=es" class="list-group-item list-group-item-action">SIGUENOS EN NUESTRA PAGINA DE TWITER: <img src={Ltw} alt="" /></a>
                                <a href="https://www.instagram.com/pollos_copacabana/?hl=es-la" class="list-group-item list-group-item-action">SIGUENOS EN NUESTRA PAGINA DE INSTAGRAM: <img src={Lins} alt="" /></a>
                                <a href="https://polloscopacabana.com/contactanos/" class="list-group-item list-group-item-action">CONTASTESE AL WAHTSAPP CON UNO DE NOSOTROS: <img src={Lwha} alt="" /></a>
                                <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">o contactese directamente de telefono al: 2138278436</a>
                        </div>
                        <p>
                            Agradecemos tu tiempo al explorar nuestra 
                            lista de contactos. La conexión es un puente 
                            fundamental en nuestro camino hacia el crecimiento 
                            y el éxito, y confiamos en que estas conexiones te sean 
                            valiosas. Recuerda que esta lista es dinámica y está en constante
                            crecimiento, al igual que las oportunidades que se desprenden
                            de cada interacción. Mantente conectado, sigue construyendo
                            relaciones significativas y descubre el poder que se encuentra 
                            en la red que hemos tejido juntos. ¡Hasta la próxima conexión!
                        </p>
                        <div id="credits">
                            <p>&copy; 2023 Restaurantes | Desarrollado por GERSON ARGOLLO MAGNE</p>
                        </div>  
                </div>
                    <div class="tab-pane fade" id="contact-tab-pane4" role="tabpanel" aria-labelledby="creditos" tabindex="0">
                
                        <div id='maq'>
                            <span id='span1'>Creditos: GERSON ARGOLLO MAGNE</span>
                            <span id='span1'>CI: 13314757 lp</span>
                            <span id='span1'>Materia: PROGRAMACION WEB II</span>
                            <span id='span1'>Paralelo: "A"</span>
                        </div>
                        <div id='vid'>
                            <iframe width="560" height="315" src="https://www.youtube.com/watch?v=fs65alXP2XA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div id="credits">
                            <p>&copy; 2023 Restaurantes | Desarrollado por GERSON ARGOLLO MAGNE</p>
                        </div>
                    </div>
            </div>
    </div>
         

  )
}
export default Pestañas;