
src
  assets
  modules
    courses
      application
        (usecases)
      domain
        Course
        CourseRepository
      infrastructure
        MySqlCourseRepository
  sections
    courses
      CourseCard.tsx
      CourseCard.module.scss
    shared
    App.tsx
    index.tsx

  

  view -> component -> usecase -> repository <--------diferentes implementaciones (fetch, localstorage, etc. (infrastructure))

  ojo !!application no conoce infrastructure, pero si conoce la repoInterface del domain.

los componentes (react) no son algo 100% puro, esta acoplado a infrastrucura, pero se puede tratar como application

propuesta codely:
App.tsx (infrastructure)
index.tsx (infrastructure)
assets
  styles
    sakura.scss
modules
  courses
    application (application)
      (usecases)
    domain (domain)
      Course
      CourseRepository
    infrastructure (infrastructure)
      MySqlCourseRepository
react-app-env.d.ts
sections (application)
  courses 
    CourseCard.tsx 
    CourseCard.module.scss 
    CourseContext 
    useCourseForm
  shared

ojo tmb meten los hooks en section (?)

separar la app entre ui y modules (logica de negocio) es luchar contra el framework

!!! considerar componentes y hooks de React como parte de la capa de aplicación es un error conceptual que viola lo que plantea esta arquitectura, ya que en lugar de hacer la aplicación escalable del lado de la UI permitiendo cambiar la librería de Resct a Vue o a Svelte (agnóstico del franework) se está acoplando al mismo

propuesta user:
root
  app
    ui
    hooks
    services
  modules
    auth
    courses

----

los fetch no se hacen en componentes, mejor en servicios

patron repository
desacoplar logica de la persistencia de datos
-CourseRepoInterfaz
Diversas implementaciones para esa interfaz
-localstorage
-fetch

tienen en comun que tocan entrada y salida de datos

// el contexto implementa el repository, y al contexto le llega el repo desde la parte mas alta de la app, es decir, App.tsx. asi si tenemos que cambiar el origen (ya sea fetch, local storage etc) solo lo cambiamos de ese punto. app.tsx es por tanto  100% infrastructura por esto. 


Validaciones
validar en 2 puntos
anteds ed hacer el save del repo, - validar que cumple reglas de negocio
y en la ui mientras el user escribe u optimistic ui feedbacks (validacion tiempo real)


ui
https://github.com/CodelyTV/frontend-hexagonal_architecture-course/tree/main/02-first_use_case/3-validations
useEffect(() => {
	const isTitleValid = isCourseTitleValid(formData.title);
	const isImageUrlValid = isCourseImageUrlValid(formData.imageUrl);

	setErrors({
		title: isTitleValid
			? ""
			: `Title must be between ${TITLE_MIN_LENGTH} and ${TITLE_MAX_LENGTH} characters`,
		imageUrl: isImageUrlValid ? "" : "Image url is not valid",
	});
}, [formData]);
cada vezque cambia formdata se validan los inputs

SRP en el contexto
¿No se estaría añadiendo demasiada responsabilidad al contexto? ¿No sería más correcto que el contexto diese acceso a los casos de uso y que los componentes sean quienes los ejecuten?
Roberto B.
4 months ago
Estaba pensando lo mismo! ese contexto, crece, crece y segura creciendo. Peor si seria una app de verdad

0
 Reply