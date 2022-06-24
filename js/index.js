function publicity() {
    var sale = 'sale.html'
    var ventana = window.open(sale,"Nueva Ventana","status=yes, resizable=yes, top=150, left=450, width=500, height=500");

    window.setTimeout(function cerrar() {
        ventana.close();
    }, 10000);
}

window.setTimeout(publicity, 6000);