# Proyecto Air

## App Flashcards

[Notion del proyecto](https://www.notion.so/hifrontendcafe/App-Flashcards-07ae6131573945cdae60bd0cab81bd64)

---

### Documentos importantes

- [Cronograma CMYK 5](https://www.notion.so/hifrontendcafe/Cronograma-CMYK-5-a07d7a873d884b5daa0299f948612e1c)
- [Handbook CMYK](https://servicedsgnclub.notion.site/servicedsgnclub/Handbook-CMYK-5-05e7d829e637488e92bda596d2ae365d)
- [Documentos y herramientas propuestas](https://hifrontendcafe.notion.site/Documentos-tiles-0f06b1283c2443e3a8edec08eaf2c8fc)
- [CMYK - Starter propuesto](https://github.com/rolivencia/cmyk-5-starter)
- [Estructura de carpetas](https://github.com/frontendcafe/air-flashcards/edit/main-feature/6-add-folder-structure-doc/README.md#estructura-de-carpetas)
- [Variables de ambiente](https://github.com/frontendcafe/air-flashcards/edit/main-feature/6-add-folder-structure-doc/README.md#Variables-de-ambiente)
- [Contribuir al proyecto](https://github.com/frontendcafe/air-flashcards/edit/main-feature/6-add-folder-structure-doc/README.md#Contribuir-al-proyecto)

---
# **Estructura de carpetas**
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

## ¿Cómo sé si lo que estoy haciendo va en un módulo aparte o en shared?
Una manera fácil de saber si tu código se comporta como un módulo, es ver si tiene funciones o características que se llaman entre sí para cumplir un propósito. Por ejemplo, el module de Firebase no es un módulo que tenga una vista, pero sí tiene una lógica que necesita tener una capa de abstracción para que los otros módulos puedan acceder a sus funcionalidades fácilmente.
En shared principalmente deberían ir componentes, funciones, constantes etc. Que se comportan a nivel de la aplicación y se necesiten en varios módulos a la vez.

Lo ideal si tienes una funcion o componente que veas que se requiera en otro módulo es que muevas esa función a shared, ya que no deberíamos tener imports entre módulos, osea que el módulo de Home no importe nada del Modulo de Login  

---

# **Variables de ambiente**

Crea un archivo `.env` en el root del proyecto, y agrega los siguientes valores para poder conectarte a Firebase:

```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

Podrás encontrar esto también en el archivo `.env.example`. Para encontrar los valores que debes reemplazar por `...` debes acceder a [este enlace](https://console.firebase.google.com/u/1/project/air-flashcards/settings/general/web:M2IzYmYxNWQtOWRmNy00NGVmLWFlYmItYTk4NTk4YTUyMmQ3)

---

# **Contribuir al Proyecto**

Para contribuir al proyecto, lo ideal es basarse en el siguiente paso a paso:

### **1) Issue**

Este es el punto de partida de cualquier tarea. Ingresa al [board del proyecto](https://github.com/orgs/frontendcafe/projects/2), y asígnate el issue que vayas a realizar. Lo ideal es que sea uno que se encuentre en la columna TODO. Chequea que tenga una descripción clara y apropiada, y un scope bien definido para que cuando hagas los cambios, tanto vos como quien revise tu Pull Request sepa _cuál_ es el objetivo y _qué_ debe aprobar o no aprobar. Si el issue no existe, podés crearlo bajo estos mismos requisitos. Por último, pasá este issue que te asignaste a la columna In Progress.

### **2) Creá una branch**

Deberás pararte en tu branch main, habiendo pulleado los últimos cambios de esa rama, y desde allí, crear una nueva siguiendo la siguiente convención:
`(Rama-padre)-(Tipo)/(Numero de la issue)-(Descripcion corta)`

- `Rama-padre`: La rama que originó la rama que estas creando.  
- `Tipo `: El propocito de la rama, pueden ser: `fix`, `feature`, `docs`, `tests`, `release`
- `Numero de la issue`: Numero de la issue.    
- `Descripcion corta`: Una descripcion corta sobre de que va a ser la rama

Ejemplo:
- `main-fix/39-page-loadings`
- `main-feature/2-add-firebase-module`
- `main-test/49-date-picker-tests`    

### **3) A medida que avances, haz commits**

Los commits son el historial de un proyecto. Indican _qué_ se hizo a lo largo del tiempo, y tener buenos commits, nos permite tener un mejor control sobre la historia de nuestro código, permitiéndonos volver al pasado y recuperar cambios, volver hacia atrás si algo salió mal en alguno de ellos, y muchas otras ventajas. Al ser el historial del proyecto, también serán el historial de tu Pull Request, así que tratalos con cariño. Además, permiten al reviewer al leerlos, entender cuál fue el proceso mental que siguió el autor para desarrollar ese Pull Request.
Para crear commits bonitos, sigue esta convención a la hora de elegirles un mensaje:

```
  <type>[scope]: <description>

  [optional body]
```

Por ejemplo: `feat(RegisterForm): add prop submitLabel to show in submit button`

Puedes incluso ser más específico aclarando exactamente dónde se encuentra el directorio y archivo que modificaste, pero eso dejaría tu commit muy largo, y la idea es que sean algo fácil de leer y entender.
Más info sobre [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)

### **4) Creá un Pull Request**

Puedes crear el Pull Request tanto cuando empieces a codear como al terminar, aunque te recomendamos hacerlo al inicio para poder ir viendo cómo vas avanzando y hacerte comentarios que puedan ahorrarte tiempo. Si lo haces de esta manera, no olvides poner al inicio del nombre del PR [WIP] (Work In Progress), para indicar que aún no está listo para ser revisado. Luego, nómbralo siguiendo la siguiente convención:

`[Rama a mergear] [Tipo] [Pequeña descripcion]`

- Tipo: El proposito del pull request, pueden ser: [FIX], [FEATURE], [DOCS], [RELEASE], [TESTS], [WIP]
- Rama a mergear: La rama a la que se le hace el pull request (Usualmente seria main, ya que los cambios se enviarian a esa rama)
- Pequeña descripcion: Una pequeña descripcion general de los cambios

Ejemplo:
- `[MAIN][FIX] Change primary color`
- `[MAIN][FEATURE] Add Log out button`

Responde y debate con tus compañeros las consultas que hagan sobre tu código, y está atento para revisar también los que suben los otros participantes para dar tu feedback. Es PR es el momento en el que chequeamos que lo que llega a `main` es correcto y hubo personas que validaron esos cambios. Es un momento de enorme aprendizaje así que te recomendamos aprovecharlo.
Haz los cambios que hayan considerado necesarios en los comentarios, y luego espera que te lo aprueben al menos dos personas para finalmente, mergear. La idea es que los PR no se traben mucho tiempo para evitar [Merge Conflicts](https://css-tricks.com/merge-conflicts-what-they-are-and-how-to-deal-with-them/).
