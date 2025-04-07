# Usa a imagem mínima do Nginx
FROM nginx:alpine

# Remove a página padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia seu index.html para a pasta do Nginx
COPY index.html /usr/share/nginx/html/index.html

# Expõe a porta padrão
EXPOSE 80

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]
