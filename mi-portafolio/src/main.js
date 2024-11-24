import { createApp } from 'vue';
import App from '@/App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from '@/router'; // Importa el router
import '@/assets/styles/swiper.css';

// Crea la aplicación Vue
const app = createApp(App);

// Usa el router en la aplicación
app.use(router);

// Monta la aplicación en el elemento con el id "app"
app.mount('#app');
