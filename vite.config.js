import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
});


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: '/Portfolio/', // <-- this MUST match your repo name exactly
// });
