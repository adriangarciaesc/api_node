# Utilizamos una imagen oficial de Node.js 22
FROM node:22-slim

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos el archivo de configuración
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto de archivos de la aplicación
COPY . .

# Exponemos el puerto 3000
EXPOSE 3000

# Iniciamos la aplicación
CMD ["npm", "start"]