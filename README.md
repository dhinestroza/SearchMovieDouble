# Movie Search App - Technical Documentation

## Descripción del Proyecto

Este proyecto es una aplicación web desarrollada con **Angular**, donde los usuarios pueden buscar información sobre películas utilizando la API gratuita de **OMDb**. La aplicación proporciona una interfaz atractiva y eficiente, con funcionalidades como la búsqueda de películas, visualización de detalles y manejo adecuado de errores y estados.

## Tecnologías y Herramientas

- **Angular**: Framework principal para la creación de la aplicación.
- **RxJS**: Para manejar los estados reactivos y las solicitudes HTTP.
- **Signals**: Mecanismo de Angular para la gestión de estados reactivamente de manera más sencilla.
- **TailwindCSS**: Framework de CSS para el diseño.
- **OMDb API**: API externa utilizada para obtener la información de las películas.
- **HTTP Interceptors**: Mecanismo de Angular para capturar errores globalmente.
- **Docker**: Para crear y ejecutar la aplicación en un contenedor.

## Estructura del Proyecto

La estructura del proyecto sigue una arquitectura modular y está organizada en las siguientes carpetas:

src/
│
├── app/
│   ├── core/                  # Lógica central del proyecto (interceptores, servicios)
│   │   └── services/          # Carpeta que contiene el servicio para consumir la API
│   │   └── interceptors/      # Carpeta con el interceptor para manejar errores
│   │
│   ├── features/              # Funcionalidades principales de la aplicación
│   │   └── movie/             # Funcionalidad relacionada con la búsqueda y detalle de películas
│   │       └── movie-detail/  # Componente que muestra los detalles de una película
│   │
│   ├── models/                # Modelos de datos para la respuesta de la API
│   │   └── movie.ts           # Modelo para la película
│   │   └── searchMovie.ts     # Modelo para los resultados de búsqueda
│   │
│   ├── shared/                # Componentes compartidos en la aplicación
│   │   └── components/        # Componentes reutilizables en la UI
│   │       └── card-movie/    # Componente que representa la tarjeta de una película
│   │       └── footer/        # Componente del pie de página
│   │       └── header/        # Componente del encabezado
│   │
│   └── environments/          # Configuración del entorno (API URL y API Key)
│
└── Dockerfile                 # Archivo para crear una imagen Docker

## Crear Imagen y Contenedor de Docker (correr en la terminal)
-  crear la imagen con el siguiente comando 
   **docker build -t double-partners . 
- Ejecutar el contenedor Docker
   **docker run -p 4210:4200 double-partners

## Pruebas Unitarias 
ServiceService
should handle a network error when getting a movie by id (HTTP 500)
should be created
should update the list of movies with the data received
should return data on successful reques
should handle errors when making the request
should get the movie by id correctly
should start with the empty movie list

 ** correr el comando ng test
