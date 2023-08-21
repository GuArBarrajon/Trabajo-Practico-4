const templates ={
    vacio:``,
    informe:`
        <div class="articleFlex" id="informe">
            <section>
                <article>
                    <h2>{{texto[0]}}</h2>
                    <h3>{{texto[1]}}</h3>
                    <span class="sectionGrid">
                        <a class="boton" href="Informe/Informe.docx">{{boton[0]}}</a>
                        <a class="boton" href="descargas.html">{{boton[1]}}</a>
                    </span>
                </article>
            </section>
        </div>
    `,
    codigo:`
        <div class="articleFlex" id="codigo">
        <section>
                <article>
                    <h2>{{texto[0]}}</h2>
                    <h3>{{texto[1]}}</h3>
                    <span class="sectionGrid">
                        <a class="boton" href="https://github.com/GuArBarrajon/Trabajo-Practico-4" target="_blank">{{boton[0]}}</a>
                        <a class="boton" href="descargas.html">{{boton[1]}}</a>
                    </span>
                </article>
            </section>
        </div>
    `,
    video1:`
        <div class="articleFlex" id="video1">
            <section>
                <article>
                    <h2>{{texto[0]}}</h2>
                    <h3>{{texto[1]}}</h3>
                    <span class="sectionGrid">
                        <a class="boton" href="Videos/video1.mp4" target="_blank">{{boton[0]}}</a>
                        <a class="boton" href="descargas.html">{{boton[1]}}</a>
                    </span>
                </article>
            </section>
        </div>
    `,
    video2:`
        <div class="articleFlex" id="video2">
            <section>
                <article>
                    <h2>{{texto[0]}}</h2>
                    <h3>{{texto[1]}}</h3>
                    <span class="sectionGrid">
                        <a class="boton" href="Videos/video2.mp4" target="_blank">{{boton[0]}}</a>
                        <a class="boton" href="descargas.html">{{boton[1]}}</a>
                    </span>
                </article>
            </section>
        </div>
    `, 
    video3:`
        <div class="articleFlex" id="video3">
            <section>
                <article>
                    <h2>{{texto[0]}}</h2>
                    <h3>{{texto[1]}}</h3>
                    <span class="sectionGrid">
                        <a class="boton" href="Videos/video3.mp4" target="_blank">{{boton[0]}}</a>
                        <a class="boton" href="descargas.html">{{boton[1]}}</a>
                    </span>
                </article>
            </section>
        </div>
    `
}

var app = new Vue({
    el: "#app",
    data: {
        view : 'vacio',
    },
    components: {
        informe: {
            data: function(){
                return{
                    texto: ["Usted está a punto de descargar un archivo", "Está seguro?"],
                    boton: ["Sí", "No"]
                }
            },
            props: [], //parametros
            template: templates.informe
        },
        codigo: {
            data: function(){
                return{
                    texto: ["Usted será dirigido a Github", "Desea continuar?"],
                    boton: ["Sí", "No"]     
                }
            },
            props: [], //parametros
            template: templates.codigo
        },
        video1: {
            data: function(){
                return{
                    texto: ["Primer video", "Javascript en menúes, footer y banners. Vue.js en SPA"],
                    boton: ["Ver", "NO"]
                }
            },
            props: [], //parametros
            template: templates.video1
        },
        video2: {
            data: function(){
                return{
                    texto: ["Segundo video", "Carrito con Javascript"],
                    boton: ["Ver", "NO"]
                }
            },
            props: [], //parametros
            template: templates.video2
        },
        video3: {
            data: function(){
                return{
                    texto: ["Tercer video", "PHP en el envío de formularios y detalles del informe"],
                    boton: ["Ver", "NO"]
                }
            },
            props: [], //parametros
            template: templates.video3
        }
    }
    

})