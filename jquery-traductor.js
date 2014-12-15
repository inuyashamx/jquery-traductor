/*
Autor Jose Paul Nuñez Carrillo
14 Diciembre de 2014
jpnc_18@hotmail.com
facebook @InuYashaMX
*/
(function($) {

    var Traductor = function(elem,opciones) {
        this.lenguaje = navigator.language.substring(0, 2).toLowerCase() || navigator.userLanguage.substring(0, 2).toLowerCase();
        this.opciones = opciones;
        this.$elem = $(elem);
        this.metadata = this.$elem.data('plugin-options');
    };

    Traductor.prototype = {
        defaults: {
            mi_ruta: "./",
            selector: "traducir"
        },
        iniciar: function() {
            var config = $.extend({}, this.defaults, this.opciones, this.metadata);
            var array = $("[data-" + config.selector + "]");

            $.getJSON(config.mi_ruta + this.lenguaje + ".json", function(data) {
                $(array).each(function() {
                    var key = $(this).data(config.selector);
                    $(this).html(data[key]);
                });
            });
        }
    };

    Traductor.defaults = Traductor.prototype.defaults;

    $.fn.jquery_traductor = function(options) {
        return this.each(function() {
            new Traductor(this,options).iniciar();
        });
    };

})(jQuery);



