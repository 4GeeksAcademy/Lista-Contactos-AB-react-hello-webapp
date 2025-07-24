<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1> Lista de Contactos AB</h1>
    <p>Una aplicación web desarrollada en React que permite crear, editar y eliminar contactos de forma rápida e intuitiva. Diseñada como parte de un proyecto práctico para fortalecer habilidades en desarrollo front-end.</p>
  </header>

  <section class="tecnologias">
    <h2> Tecnologías utilizadas</h2>
    <ul>
      <li>React</li>
      <li>Vite</li>
      <li>JavaScript</li>
      <li>CSS</li>
    </ul>
  </section>

  <section class="arquitectura">
    <h2> Arquitectura del proyecto</h2>
    <div class="componente">
      <h3> Componente 1 - Api.jsx</h3>
      <ul>
        <li>Obtener contactos: <strong>getContacts</strong></li>
        <li>Crear contacto nuevo: <strong>crearContacto</strong></li>
        <li>Editar contacto: <strong>editarContacto</strong></li>
        <li>Eliminar contacto: <strong>eliminarContacto</strong></li>
      </ul>
      <p><em>Resultado:</em> Uso de <code>fetch</code> y actualización del estado global con <code>dispatch</code>.</p>
    </div>
    <div class="componente">
      <h3> Componente 2 - Demo.jsx</h3>
      <ul>
        <li>Uso de <code>useEffect()</code> con <code>getContacts(dispatch)</code> para cargar datos desde la API.</li>
        <li>Renderización con <code>store.contactos.map</code>.</li>
        <li>Botones para editar y eliminar.</li>
        <li>Botón "Add new contact" redirige a la vista de formulario.</li>
      </ul>
    </div>
    <div class="componente">
      <h3> Componente 3 - AddEditCharacter.jsx</h3>
      <ul>
        <li>Funcionalidad para crear y editar contacto.</li>
        <li>Uso de <code>useParams()</code> para obtener ID.</li>
        <li>Edición: carga contacto al estado local con <code>setNewContact</code>.</li>
        <li>Nuevo: limpia el formulario.</li>
        <li>Control de inputs con <code>useState</code>.</li>
        <li><code>onSubmit</code>: validación, edición o creación según el caso.</li>
      </ul>
    </div>
  </section>

  <section class="conclusion">
    <h2> Conclusión</h2>
    <ul>
      <li><strong>Hooks:</strong> useState, useEffect, useParams, useNavigate</li>
      <li>Enviar datos a una API con fetch</li>
      <li>Manejo de estado global con store + dispatch</li>
      <li>Reutilización de formularios para crear/editar</li>
      <li>Diferenciar entre crear y editar según URL</li>
      <li>Separación de lógica: <code>api.jsx</code>, <code>store.js</code>, componentes visuales</li>
    </ul>
  </section>

  <footer>
    <p>📄 Resumen realizado por <strong>Anderson Bernal</strong></p>
  </footer>
</body>
</html>

