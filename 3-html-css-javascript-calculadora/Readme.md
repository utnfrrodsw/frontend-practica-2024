## Html

Se necesita armar el diseño de un documento html respetando el siguiente diseño:

#### 1. Crear la estructura básica de un documento html. El título del documento debe ser: "Calculadora"
#### 2. Agregar un elemento div con un ancho de 300px y alto de 250px, y un padding de 30px, y un borde de 3px color 808080 y redondeado a 20px. Centrado en pantalla
#### 3. Agregar un input de tipo texto. Tiene que tener un ancho de 100%, un padding de 10px, un margen superior e inferior de 20px y automático a los lados. Utilizar la propiedad box-sizing para acomodar la caja de texto al ancho del contenido del contenedor (https://css-tricks.com/box-sizing)
#### 4. En el input anterior, el tamaño de la fuente debe ser de 18px y alineado a la derecha.
#### 5. Colocar botones en pantalla con la siguiente disposición:
    7 - 8 - 9 - X
    4 - 5 - 6 - %
    1 - 2 - 3 - -
    0 - . - = - +
    C
#### 6. Cada fila de botones debe tener los siguientes estilos:
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 10px;
#### 7. Cada botón debe tener un ancho de 40px y un alto de 30px, borde redondeado a 5px. Cuando nos posicionamos con el mouse encima del botón el cursor tiene que ser "pointer". Cada botón debe ocupar todo el espacio disponible que pueda dentro de la fila de botones donde se encuentre (usar flex)
#### 8. Colocar un atributo id único a cada botón de operación
#### 9. Utilizar document.addEventListener para vincular un manejador de eventos a cada botón de operación. Cada evento debe manejar la acción que corresponda y modificar el contenido del input principal de la calculadora.
#### 10. Cada número debe escribir su valor en pantalla al ser presionado, leer la propiedad textContent para obtener el valor del bo´ton numérico. El bóton = debe resolver la expresión actual en pantalla usando la función eval;
