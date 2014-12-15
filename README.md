jquery-traductor
================

Es un plugin para traducir textos que detecta el lenguaje del explorador del usuario y carga automaticamente un archivo json para reemplazar llaves en los HTML, para ello debes seguir los siguientes pasos:

PASO 1: Descarga el plugin y situa estas lineas al final de tu documentos antes que termine body

```javascript
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="jquery-traductor.js"></script>
<script>
  (function() {
    $("body").jquery_traductor();
  })();
</script>
```

PASO 2: CREA LOS ELEMENTOS HTML EN TU PAGINA WEB Y AÑADELE EL ATRIBUTO data-traducir:

<div data-traducir="texto1">English TEXT 1</div>
<p data-traducir="texto2">English TEXT 2</p>
<h1 data-traducir="texto3">English TEXT 3</h1>

PASO 3: ASEGURATE DE CREAR EL ARCHIVO .json anteponiendo los 2 primeros caracteres del lenguaje en el nombre por ejemplo:

es.json <-- para español
en.json <--- para ingles
Etc...

PASO 4: DEBES IR ALIMENTANDO TU ARCHIVO JSON DE ACUERDO A LAS LLAVES QUE DECLARASTE EN EL PASO 2 

{
    "texto1": "Texto en español 1",
    "texto2": "Texto en español 2",
    "texto3": "Texto en español 3"
}

PASO 5. FIN

NOTAS:
Si deseas poner los archivos en un directorio especifico, por ejemplo lenguajes, puedes declarar la ruta:

<script>
  (function() {
    $("body").jquery_traductor({
      mi_ruta: "lenguajes/"
    });
  })();
</script>

O si no quieres usar data-traducir puedes cambiarlo tambien con el parametro "selector", por ejemplo si quieres que se llame data-translate

<script>
  (function() {
    $("body").jquery_traductor({
      selector: "translate"
    });
  })();
</script>
