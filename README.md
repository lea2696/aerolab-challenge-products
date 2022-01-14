# Documentación API

La API sólo tiene 3 endpoints:

## Productos

/api/products

## Categorias

/api/categories

## Dolar

/api/dollar

Los productos se obtienen de la Api slow suministrada. 
Para mejorar la performance con esta api utilice un cron y libreria de cache para guardar los productos casa 12 horas y que las peticiones a la api consuman de la cache debido a que los productos no cambian con frecuencia

