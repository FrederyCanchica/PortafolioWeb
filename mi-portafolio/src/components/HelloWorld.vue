<template>
  <div class="portfolio">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <p>{{ description }}</p>
        <a href="#projects" class="btn">View My Work</a>
      </div>
    </section>

    <!-- About Me Section -->
    <section class="about">
      <h2>About Me</h2>
      <div class="about-content">
        <i class="bi bi-terminal"></i>
        <!-- <img src="path-to-your-photo.jpg" alt="Fredery Canchica" class="profile-pic" /> -->
        <p>I am Fredery Canchica (@fcan_357), a passionate developer skilled in Python, Vue.js, and an eternal learner of web development and cybersecurity. I love exploring new technologies and using them to solve real-world problems.</p>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
  <h2>Projects</h2>
  <div class="project-list">
    <div class="project-item" v-for="project in projects" :key="project.id">
      <a :href="project.link" target="_blank" rel="noopener noreferrer">
        <img :src="project.image" :alt="project.title" />
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </a>
    </div>      
  </div>
</section>

    <!-- Skills Section -->
    <section class="skills">
      <h2>Skills</h2>
      <div class="skills-carousel">
        <div class="skills-list">
          <div class="skill-item" v-for="skill in skills" :key="skill.name">
            <img :src="skill.icon" :alt="skill.name" />
            <p>{{ skill.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <p>© 2024 Fredery Canchica. All Rights Reserved.</p>
      <p>Find me on  
        <a href="https://www.linkedin.com/in/FrederyCanchica-Sec-Dev" target="_blank">
          <i class="bi bi-linkedin"></i>
        </a> 
        <a href="https://github.com/FrederyCanchica" target="_blank">
          <i class="bi bi-github"></i>
        </a>
        <a href="https://www.youtube.com/@FrederyCanchica" target="_blank">
          <i class="bi bi-youtube"></i>
        </a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Fredery Canchica",
      subtitle: "Developer & Cybersecurity Enthusiast",
      description: "I specialize in Python, Vue.js, and security. I build dynamic, secure, and scalable solutions.",
      projects: [
        {
          id: 1,
          title: "Project 1",
          description: "A project showcasing Vue.js and Python integration.",
          image: "/icons/web-scraping.jpg",
          link: "#"
        },
        {
          id: 2,
          title: "Barberia Movil",
          description: "Este proyecto está enfocado en la agenda de citas para servicios de Estética y belleza a domicilio en Madrid.",
          image: "/icons/barberbackground.jpg",
          link: "/BarberMobile"
        },
        {
          id: 3,
          title: "Tetris Game",
          description: "A classic Tetris game implemented in Python using Pygame. View the source code on GitHub or download it to run locally.",
          image: "/icons/TetrisGame.jpg",
          link: "/tetris"
        },
      ],
      skills: [
        { name: "Python", icon: "/icons/learnpython.org.ico" },
        { name: "Vue.js", icon: "/icons/favicon.ico" },
        { name: "HTML", icon: "icons/iconoHTML.webp" },
        { name: "JavaScript", icon: "icons/IconoJS.png" },
        { name: "GitHub", icon: "icons/iconoGH.png"},
        { name: "Linux", icon: "icons/IconoLinux.png" },
      ],
      animationDuration: 10, 
    };
  },
};
</script>

<style scoped>
.bi-terminal {
  display: inline-flex; /* Para que se ajuste al contenido */
  align-items: center; /* Centrar verticalmente */
  justify-content: center; /* Centrar horizontalmente */
  width: 21px; /* Ajustar el ancho */
  height: 20px; /* Ajustar la altura */
  font-size: 24px; /* Ajustar el tamaño del ícono */
  color: rgb(36, 36, 36); /* Cambiar el color de la estrella */
  background-color: #8d8888; /* Fondo blanco */
  background-size: cover; /* Asegura que el fondo cubra el área */
}
/* General Styles */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #000000;
  color: rgb(240, 0, 0);
}

.about{
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #8d8888; /* about fondo*/
  color: rgb(255, 255, 255); /* letras del segundo fondo */
}

/* Hero Section */
.hero {
  background-color: #000000; /* primer fondo */
  padding: 100px 20px;
  text-align: center;
  color: rgb(255, 255, 255);/* letras del primer fondo */
}
.hero-content h1 {
  font-size: 3em;
  margin-bottom: 10px;
}
.hero-content h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
}
.hero-content p {
  font-size: 1.2em;
  margin-bottom: 30px;
}
.btn {
  background-color: #5eff00;
  color: rgb(0, 0, 0); /* Letras del boton de view my work */
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: #f50000;
  color: white;
}

/* About Section */
.about {
  padding: 50px 20px;
  text-align: center;
}
.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-pic {
  border-radius: 50%;
  width: 150px;
  margin-bottom: 20px;
}

/* Projects Section */
.projects {
  padding: 50px 20px;
  background-color: #ff5100;
  color: black;
  text-align: center;
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.project-item {
  background-color: rgb(255, 255, 255); /* Fondo de los proyectos */
  border-radius: 10px;
  padding: 20px;
  width: 300px;
}

.project-item img {
  width: 100%;
  border-radius: 10px;
}

/* Estilo para los enlaces */
.project-item a {
  text-decoration: none; /* Elimina el subrayado */
  color: inherit; /* Mantiene el color del texto del padre */
}


/* Skills Section */
.skills {
  padding: 50px 20px;
  background-color: #577763;
  text-align: center;
  color: whitesmoke;
}

.skills-carousel {
  overflow: hidden; /* Para ocultar íconos fuera del área visible */
  position: relative;
  width: 100%;
}

.skills-list {
  display: flex;
  gap: 50px; /* Espacio entre habilidades */
  animation: scroll 120s linear infinite; /* Animación de carrusel */
  width: calc(100% * 2); /* Duplicar el ancho total para que la animación parezca continua */
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.10s ease; /* Suaviza la transición del hover */
  padding: 20px; /* Agrega un padding extra */
}

.skill-item img {
  width: 50px;
  margin-bottom: 50px;
  transition: transform 5s ease; /* Suaviza la maximización al hacer hover */
}

.skills-carousel:hover .skills-list {
  animation-play-state: paused; /* Pausa el carrusel al hacer hover en el contenedor */
}

.skill-item:hover {
  transform: scale(1.2); /* Maximiza el ícono al pasar el ratón */
}

@keyframes scroll {
  0% {
    transform: translateX(-100); /* Inicia en la posición inicial */
  }
  100% {
    transform: translateX(100%); /* Mueve el carrusel completamente a la izquierda */
  }
}



/* Footer */
.footer {
  background-color: #fafafa;
  padding: 20px;
  text-align: center;
  color: rgb(0, 0, 0);
}
.footer a {
  color: #ff6f61;
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline;
}
a i {
  font-size: 24px; /* Tamaño de los íconos */
  color: #0077b5;  /* Color para LinkedIn (azul) */
}

a i.fa-github {
  color: black; /* Color para GitHub (negro) */
}

a {
  margin-right: 10px; /* Espacio entre los íconos */
}
</style>
