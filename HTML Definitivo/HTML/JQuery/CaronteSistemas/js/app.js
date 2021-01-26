let doc = $(document);
/* al cargar la pagina completa en RAM del ordenador/movil se ejecuta la funcion iniciar() */
doc.ready(iniciar);


function iniciar(){
    console.log ('documento iniciando');/* debug */
    $("main").load("html/home.html");
    let opcion = $("header #header-content nav a").on('click', mostrarMenu);
    let home = $("header #home").on('click', mostrarMenu);
    let navicon = $("header #navicon").on('click', mostrarNavPrincipal);
}
function mostrarNavPrincipal(){
    console.log('navicon')
    $("header #header-content nav").slideToggle();
}
function mostrarMenu(){

    $(this).addClass("active")
    let id = $(this).attr('id');
    let ruta = "html/"+id+".html";
    $("main").load(ruta);


}

function cargar(){
    let id = $(this).attr('id');
    let estilo = '<link rel="stylesheet" type="text/css" href="css/'+id+'.css">';
    $("head").children().last().remove();
    $("head").append(estilo);
    console.log(estilo);
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    
    let ruta = "html/"+id+".html";
    console.log(ruta);
    $("main section").load(ruta);

}