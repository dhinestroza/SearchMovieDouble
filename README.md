<<<<<<< HEAD
<<<<<<< HEAD
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
=======
# DoubleVPartners

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
>>>>>>> 278e9ef (initial commit)
=======
# SearchMovieDouble
>>>>>>> 6b4c0190a71d10c85038169b0e346803349671a0
