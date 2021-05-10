## Antes de arrancar el programa


## Para arrancar el programa

ng serve

## Pequeña Memoria

Para empezar he creado un todo.model, que contiene un Guid, nombre:string, estado:string , fecha:string y un booleano para editar.

Dentro del html he defenido un formulario con un input type text para poner el nombre del todo y un input type date para poner la fecha del todo. Una vez le des al botón submit del formulario te llevará a la función on Submit(form : NgForm) dentro del componente donde se crea el todo y se le hace push para añadirlo dentro del array de todo.

Para editar el nombre del todo me ayudo del booleano añadido en el modelo y en el mismo td te dejará cambiarlo una vez le des al botón de editar que pondra el edit a true.

La función estadoTodo() en el componente es llamada cuando le das al fa check en la tabla, te irá cambiando el estado del todo cuando lo cambies. 
Una vez los todos pasen a estar en estado "Completado" se moverán a la segunda tabla. Ya que después de realizar el ngFor de todos, realizó un if por si el estado del todo es "Completado" no irá en la primera tabla sino en la segunda.

deleteTodo() dentro del component localiza el todo mediante la id, después detecta la posición del todo y hace splice a 1.

Por último la función sort(colName,boolean) es una función que te ordena las columnas. El booleano es para saber la manera de ordenar, dependiendo de que flecha pulses en el html.

