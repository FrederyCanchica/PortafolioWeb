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
        <img src="path-to-your-photo.jpg" alt="Fredery Canchica" class="profile-pic" />
        <p>I am Fredery Canchica (@fcan_357), a passionate developer skilled in Python, Vue.js, and an eternal learner of web development and cybersecurity. I love exploring new technologies and using them to solve real-world problems.</p>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
      <h2>Projects</h2>
      <div class="project-list">
        <div class="project-item" v-for="project in projects" :key="project.id">
          <router-link :to="project.link">
          <img :src="project.image" :alt="project.title" />
        </router-link>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>      
        <TetrisGame />
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
      <p>Find me on <a href="www.linkedin.com/in/FrederyCanchica-Sec-Dev">LinkedIn</a> | <a href="https://github.com/FrederyCanchica">GitHub</a></p>
    </footer>
  </div>
</template>
<script>
import TetrisGame from '@/components/TetrisGame.vue';

export default {
  components: {
    TetrisGame
  },
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
          image: "path-to-project1-image.jpg",
          link: "#"
        },
        {
          id: 2,
          title: "Project 2",
          description: "A security-focused web app developed with modern best practices.",
          image: "path-to-project2-image.jpg",
          link: "#"
        },
        {
          id: 3,
          title: "Tetris Game",
          description: "A classic Tetris game implemented in Python using Pygame. View the source code on GitHub or download it to run locally.",
          image: "/icons/TetrisGame.jpg", // Asegúrate de tener esta imagen en la carpeta de assets
          link: "/tetris"
        },
      ],
      skills: [
        { name: "Python", icon: "/icons/learnpython.org.ico" },
        { name: "Vue.js", icon: "/icons/favicon.ico" },
        { name: "HTML", icon: "icons/iconoHTML.webp" },
        { name: "JavaScript", icon: "icons/IconoJS.png" },
        { name: "GitHub", icon: "icons/IconoGH.png" },
        { name: "Linux", icon: "icons/IconoLinux.png" },

      ],
    };
  },
};
</script>
|
<style scoped>
/* General Styles */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #1b3a4b;
  color: white;
}

/* Hero Section */
.hero {
  background-color: #1b3a4b;
  padding: 100px 20px;
  text-align: center;
  color: white;
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
  background-color: #ff6f61;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: #ff8361;
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
  background-color: #f5f5f5;
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
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
}
.project-item img {
  width: 100%;
  border-radius: 10px;
}

/* Skills Section */
.skills {
  padding: 50px 20px;
  background-color: #2ecc71;
  text-align: center;
}

.skills-carousel {
  overflow: hidden; /* Para ocultar íconos fuera del área visible */
}

.skills-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap; /* Evitar el salto de línea, mantiene en fila */
  gap: 20px;
  animation: scroll 10s linear infinite; /* Animación de carrusel */
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease; /* Suaviza la transición del hover */
}

.skill-item img {
  width: 60px;
  margin-bottom: 10px;
  transition: transform 1s ease; /* Suaviza la maximización al hacer hover */
}

/* Efecto de hover: Aumenta el tamaño del ícono y pausa el carrusel */
.skills-carousel:hover .skills-list {
  animation-play-state: paused; /* Pausa el carrusel al hacer hover en el contenedor */
}

.skill-item:hover {
  transform: scale(1.2); /* Maximiza el ícono al pasar el ratón */
}

/* Animación para el carrusel */
@keyframes scroll {
  0% {
    transform: translateX(-0); /* Inicia en la posición inicial */
  }
  50% {
    transform: translateX(100%); /* Mueve el carrusel por la mitad del contenido */
  }
}
/* Footer */
.footer {
  background-color: #1b3a4b;
  padding: 20px;
  text-align: center;
  color: white;
}
.footer a {
  color: #ff6f61;
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline;
}
</style>
