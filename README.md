# Proyecto Air

## App Flashcards

[Notion del proyecto](https://www.notion.so/hifrontendcafe/App-Flashcards-07ae6131573945cdae60bd0cab81bd64)

### Documentos importantes

- [Cronograma CMYK 5](https://www.notion.so/hifrontendcafe/Cronograma-CMYK-5-a07d7a873d884b5daa0299f948612e1c)
- [Handbook CMYK](https://servicedsgnclub.notion.site/servicedsgnclub/Handbook-CMYK-5-05e7d829e637488e92bda596d2ae365d)
- [Documentos y herramientas propuestas](https://hifrontendcafe.notion.site/Documentos-tiles-0f06b1283c2443e3a8edec08eaf2c8fc)
- [CMYK - Starter propuesto](https://github.com/rolivencia/cmyk-5-starter)
- [Estructura de carpetas](https://github.com/frontendcafe/air-flashcards/edit/main-feature/6-add-folder-structure-doc/README.md#estructura-de-carpetas)

# Estructura de carpetas
```
src/ 
└───modules/
│   └───firebase/
|	└───auth.tsx
|	└───firebase-utils.ts
|	└───firebase-types.ts
|	└───...
│   └───Home/
|	└───components/
|	|	└───HomeForm.tsx
|	|	└───homeForm.module.css
|	└───HomeView.tsx
|	└───home-hooks.ts
|	└───home.module.css
|	└───home-utils.ts
|	└───home-types.ts
|	└───...
│   └───collections/
|	└───CollectionDetailView.tsx
|	└───CollectionUpdateView.tsx
|	└───CollectionCreateView.tsx
|	└───Collection-utils.ts
|	└───...
│   └───another-module/
|	└───components/
|	└───...
|	└───AnotherView.ts
|	└───another-store.ts
|	└───...
│   └───shared/
|	└───components/
|	|	└───buttons/
|	|	└───text/
|	|	└───forms/
|	└───SomeComponent.ts
|	└───AnotherUnclassifiedComponent.ts
|	└───assets/
|	|	└───images/
|	|	|	└───logo.png
|	|	|	└───background_main.jpg
|	|	|	└───...
 ```

## *assets* carpeta
Carpeta que contienen archivos de imagenes como: png, svg, jpg, etc

## *modules* carpeta
Carpeta principal para especificar modules

## *shared* carpeta
Carpeta para utilidades y components que se deberian compartir atraves de modulos

## *components* carpeta
Componentes de react, pueden ser especificados en `shared/components/` o `modules/<module-name>/components/`

## *\*-utils* archivo
Funciones o clases, pueden ser especificados en `shared/` o `modules/<module-name>/`

## *\*.module.css* archivo
Archivo css para especificar los estilos del componente o modulo

## ¿Como se si lo que estoy haciendo va en un modulo aparte o en shared
?Una manera fácil de saberlo si tu código se comporta como un módulo, ver si tiene funciones o características que se llaman entre sí para cumplir un propósito, por ejemplo, él module de firebase no es un módulo que tenga una vista, pero una lógica que necesita tener una capa de abstracción para que los otros módulos puedan acceder a sus funcionalidades fácilmente.
En shared principalmente deberían ir componentes, funciones, constantes etc. Que se comportan a nivel de la aplicación y se necesiten en varios módulos a la vez.

Lo ideal si tienes una funcion o componente que veas que se requiera en otro módulo es que muevas esa función a shared, ya que no deberíamos tener imports entre módulos, osea que el módulo de Home no importe nada del Modulo de Login  

