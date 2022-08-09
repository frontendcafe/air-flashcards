# Proyecto Air

## App Flashcards

[Notion del proyecto](https://www.notion.so/hifrontendcafe/App-Flashcards-07ae6131573945cdae60bd0cab81bd64)

### Documentos importantes

- [Cronograma CMYK 5](https://www.notion.so/hifrontendcafe/Cronograma-CMYK-5-a07d7a873d884b5daa0299f948612e1c)
- [Handbook CMYK](https://servicedsgnclub.notion.site/servicedsgnclub/Handbook-CMYK-5-05e7d829e637488e92bda596d2ae365d)
- [Documentos y herramientas propuestas](https://hifrontendcafe.notion.site/Documentos-tiles-0f06b1283c2443e3a8edec08eaf2c8fc)
- [CMYK - Starter propuesto](https://github.com/rolivencia/cmyk-5-starter)
- [Variables de ambiente](https://github.com/frontendcafe/air-flashcards/edit/main-feature/6-add-folder-structure-doc/README.md#Variables-de-ambiente)
- [Como nombrar los Pull request](https://github.com/frontendcafe/air-flashcards/edit/main-feature/23-pr-and-branch-convetions/README.md#como-nombrar-los-pull-requests)
# Variables de ambiente

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

# Como nombrar los pull requests
[Rama a mergear] [Tipo] [Pequeña descripcion]

Tipo: El proposito del pull request, pueden ser: [FIX], [FEATURE], [DOCS], [RELEASE]
Rama a mergear: La rama a la que se le hace el pull request (Usualmente seria main, ya que los cambios se enviarian a esa rama)
Pequeña descripcion: Una pequeña descripcion general de los cambios
