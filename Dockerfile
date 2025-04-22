# Usar la imagen oficial de Nginx
FROM nginx:alpine

# Copiar la página HTML al contenedor
COPY index.html /usr/share/nginx/html/index.html

# Exponer el puerto 80 para acceder a la página web
EXPOSE 80
