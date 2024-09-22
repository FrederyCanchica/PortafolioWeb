<template>
  <header>
    <div class="logo">Fredery's Barber</div>
    
    <!-- Menú Hamburguesa -->
    <div class="burger-menu" @click="toggleMenu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>

    <!-- Navegación en móviles -->
    <ul class="nav-links" id="mobile-nav" v-if="menuOpen">
      <li><a href="#">Home</a></li>
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Agendar Cita</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </header>
    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>Transforma tu Estilo</h1>
          <p>Cortes a domicilio para todo tipo de estilos. Reserva tu cita hoy.</p>
          <button class="hero-button">Ver Servicios</button>
        </div>
      </section>

      <section class="about">
        <h2>Sobre Mí</h2>
        <p>Soy Fredery, barbero profesional con más de 5 años de experiencia. Me especializo en cortes modernos y tradicionales.</p>
      </section>
    </main>

    <footer>
      <p>&copy; 2024 Fredery's Barber. Todos los derechos reservados.</p>
    </footer>
  


</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* Aquí está tu CSS */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
}

.logo {
  color: #fff;
  font-size: 24px;
  display: center;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-size: 16px;
}

/* Estilos del menú hamburguesa */
.burger-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.burger-menu .line {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
}

#mobile-nav {
  display: none;
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #333;
  width: 200px;
  flex-direction: column;
}

#mobile-nav li {
  padding: 10px;
  text-align: center;
}

#mobile-nav li a {
  color: white;
  font-size: 18px;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .burger-menu {
    display: flex;
  }
}
</style>
