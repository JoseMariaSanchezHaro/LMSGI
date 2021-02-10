let doc = $(document);
        /* al cargar completamente la página en la RAM se ejecuta la función iniciar */
    doc.ready(iniciar);

    function iniciar() {
        
        $(main).load("htm/home.html")        
        let opcion = $("header #header-content nav a").on('click', mostrarMenu);
        let home = $("header #home").on('click', mostrarMenu)
        let navicon = $("header #navicon").on('click', mostrarNavPrincipal)

    }