import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  base: '',
  build: {
    rollupOptions: {
      input: {
        bj_screen: resolve('bj_screen.html'),
        user_screen: resolve('user_screen.html'),
        //mo_user_screen: resolve('mo_user_screen.html'),
      },
    },
    minify: false, //심사 정책
    cssMinify: false,
  },
  server: {
    //host: '127.0.0.1', freecshot must use 127.0.0.1 for http - inspector auto replace host
    port: '8080',
    open: '/bj_screen.html',
  },
  plugins: [react()],
})

/*
* if you want to use https
* install vite-plugin-mkcert
* server - https: true
* plugins: [react(), mkcert()],
* */