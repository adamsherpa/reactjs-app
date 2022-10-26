## Todo

- Webpack
- React Router
- React Components

Youtube [link](https://www.youtube.com/watch?v=u6gSSpfsoOQ) time 1:09:09

## Shell cmds

]

```shell
pnpm init
pnpm add -D @tsconfig/create-react-app @types/react @types/react-dom react react-dom vite typescript typescript-language-server
pnpm add -D @vitejs/plugin-react
pnpm add bootstrap
```

## Initialize typescript config

```shell
tsc init
```

## vite.config.js

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0"
  }
});
export {
  vite_config_default as default
};
```

## Added a line to tsconfig.json

```json
"types": ["vite/client"]
```

## Added Edge Dev Tools

  .vscode > launch.json

```json
{
    "configurations": [
        {
            "type": "pwa-msedge",
            "name": "Launch Microsoft Edge",
            "request": "launch",
            "runtimeArgs": [
                "--remote-debugging-port=9222"
            ],
            "url": "http://localhost:5173",
            "presentation": {
                "hidden": true
            }
        },
        {
            "type": "pwa-msedge",
            "name": "Launch Microsoft Edge in headless mode",
            "request": "launch",
            "runtimeArgs": [
                "--headless",
                "--remote-debugging-port=9222"
            ],
            "url": "http://localhost:5173",
            "presentation": {
                "hidden": true
            }
        },
        {
            "type": "vscode-edge-devtools.debug",
            "name": "Open Edge DevTools",
            "request": "attach",
            "url": "http://localhost:5173",
            "presentation": {
                "hidden": true
            }
        }
    ],
    "compounds": [
        {
            "name": "Launch Edge Headless and attach DevTools",
            "configurations": [
                "Launch Microsoft Edge in headless mode",
                "Open Edge DevTools"
            ]
        },
        {
            "name": "Launch Edge and attach DevTools",
            "configurations": [
                "Launch Microsoft Edge",
                "Open Edge DevTools"
            ]
        }
    ]
}
```
