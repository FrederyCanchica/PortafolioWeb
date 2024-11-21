<template>
  <title>Fredery Canchica </title>

  <div class="portfolio">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <p>{{ description }}</p>
        <a href="#projects" class="btn btn-glow">
          <span class="glow"></span>
          View My Work
        </a>
      </div>
    </section>

    <!-- About Me Section -->
    <section class="about">
      <h2>About Me</h2>
      <br>
      <div class="about-content">
        <!-- <i class="bi bi-terminal"></i> -->
        <!-- <img src="path-to-your-photo.jpg" alt="Fredery Canchica" class="profile-pic" /> -->
        <p>I am Fredery Canchica (@fcan_357), a passionate developer skilled in Python, Vue.js, and an eternal learner of web development and cybersecurity. I love exploring new technologies and using them to solve real-world problems.</p>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
      <h2>Projects</h2>
      <br>
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
    <br>
    <!-- Footer Section -->
    <div class="content-wrapper">
        <!-- Contenido de la página -->
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
        { name: "HTML", icon: "/icons/iconoHTML.webp" },
        { name: "JavaScript", icon: "/icons/IconoJS.png" },
        { name: "GitHub", icon: "/icons/iconoGH.png" },
        { name: "Linux", icon: "/icons/IconoLinux.png" },
      ],
      animationDuration: 10, 
    };
  },
  mounted() {
    const glowButton = document.querySelector('.btn-glow');
    
    // Verificar si el botón existe en el DOM antes de añadir eventos
    if (glowButton) {
      glowButton.addEventListener('mouseenter', this.addGlow);
      glowButton.addEventListener('mousemove', this.drawGlow);
      glowButton.addEventListener('mouseleave', this.removeGlow);
    }
  },
  beforeUnmount() { // En Vue 2, antes de desmontar el componente
    const glowButton = document.querySelector('.btn-glow');
    
    // Remover los eventos para evitar fugas de memoria
    if (glowButton) {
      glowButton.removeEventListener('mouseenter', this.addGlow);
      glowButton.removeEventListener('mousemove', this.drawGlow);
      glowButton.removeEventListener('mouseleave', this.removeGlow);
    }
  },
  methods: {
    addGlow() {
      // Evitar agregar múltiples elementos .glow
      if (!document.querySelector('.btn-glow .glow')) {
        const glow = document.createElement('span'); // Crear un span para el efecto glow
        glow.classList.add('glow');
        document.querySelector('.btn-glow').appendChild(glow);
      }
    },
    drawGlow(e) {
      const glow = document.querySelector('.btn-glow .glow');
      if (glow) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - glow.offsetWidth / 2;
        const y = e.clientY - rect.top - glow.offsetHeight / 2;
        glow.style.transform = `translate(${x}px, ${y}px)`;
      }
    },
    removeGlow() {
      const glow = document.querySelector('.btn-glow .glow');
      if (glow) glow.remove();
    }
  }
};
</script>

<style scoped>

/* General Styles */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #1c1d22;
  color: rgb(240, 0, 0);
}

.about{
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #031930; /* about fondo*/
  color: rgb(255, 255, 255); /* letras del segundo fondo */
}

/* Hero Section */
.hero {
  background-color: #1c1d22; /* primer fondo */
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
/*Boton viewmywork*/ 
.btn.btn-glow {
  
  top: calc(50% - 20px);
  left: calc(50% - 120px);
  display: inline-block;
  padding: 12px 32px;
  min-width: 240px;
  text-decoration: none;
  overflow: hidden;
  font-weight: 700;
  font-size: 18px;
  background: #000;
  border: 0;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 6px 12px -2px rgba(233, 91, 9, 0.212);
}
.btn.btn-glow span:not(.glow) {
  position: relative;
  z-index: 1;
}
.btn.btn-glow:hover {
  color: #fff;
}
.btn.btn-glow:focus {
  outline: none;
  box-shadow: 0 0px 20px 20px rgba(241, 242, 245, 0.2);
}
.btn.btn-glow:active {
  transform: translateY(1px);
}
.glow {
  display: none; /* Oculto inicialmente */
  height: 160px;
  width: 160px;
  background: radial-gradient(circle closest-side, #7c5ae8, transparent);
  position: absolute;
  border-radius: 100%;
  top: -80px;
  left: -80px;
  pointer-events: none; /* Evita que interfiera con eventos del ratón */
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
  background-color: #ffffff;
  color: rgb(8b4944);
  text-align: center;
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.project-item {
  background-color: rgb(1c1d22); /* Fondo de los proyectos */
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
  background-color: #031930;
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
  background-color: #1c1d22;
  padding: 20px;
  text-align: center;
  color: rgb(255, 249, 249);
  margin-top: auto;
  height: 9vh;
}
.footer a {
  color: #ff6f61;
  text-decoration: none;
}
.content-wrapper {
  flex: 1; /* Permite que el contenido principal ocupe el espacio restante */
  display: flex;
  flex-direction: column;
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
