import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig(function (_a) {
    var command = _a.command;
    return ({
        plugins: [react()],
        // Use '/' for dev server, './' for production build (works locally and on GitHub Pages)
        base: command === 'serve' ? '/' : './',
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        build: {
            outDir: 'dist',
            assetsDir: 'assets',
            sourcemap: false,
            minify: 'esbuild',
            rollupOptions: {
                output: {
                    manualChunks: {
                        vendor: ['react', 'react-dom', 'framer-motion', 'react-router-dom'],
                    },
                },
            },
        },
    });
});
