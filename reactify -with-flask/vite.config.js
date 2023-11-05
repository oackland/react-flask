"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    server: {
        proxy: {
            '/api/weather': {
                target: 'https://api.openweathermap.org/data/2.5/weather',
                changeOrigin: true,
                rewrite: function (path) {
                    return path.replace(/^\/api\/weather/, '') +
                        '&units=metric&appid=38d147031dc4e997fc0b84ac609f3f86';
                },
            },
            '/server': {
                target: 'http://127.0.0.1:5000',
                changeOrigin: true,
                rewrite: function (path) { return path.replace(/^\/server/, ''); },
            },
            '/api/ipinfo': {
                target: 'https://ipinfo.io/',
                changeOrigin: true,
                rewrite: function (path) { return path.replace(/^\/api\/ipinfo/, '') + '?token=750577926759b7'; },
            },
        },
    },
});
