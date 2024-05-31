# WorldGlobeThreeJS

## Option 1: Import packages with NPM

1. Install [Node.js](https://nodejs.org/). We'll need it to load manage dependencies and to run our build tool.

2. install the packages in the project's directory:

    ```
    npm install
    ```

3. Run serve to start a local server in the project's directory:

    ```
    npx serve
    ```

## Option 2: Install packages from hand

1. Install [Node.js](https://nodejs.org/). We'll need it to load manage dependencies and to run our build tool.

2. Install three.js and a build tool, Vite, using a terminal in your project folder. Vite will be used during development, but it isn't part of the final webpage. If you prefer to use another build tool, that's fine — we support modern build tools that can import ES Modules.

    ```
    # three.js
    npm install --save three
    ```

    ```
    # vite
    npm install --save-dev vite
    ```

    ```
    # orbitcontrols
    npm install three-orbitcontrols
    ```

3. From your terminal, run:

    ```
    npx vite
    ```

4. If everything went well, you'll see a URL like http://localhost:5173 appear in your terminal, and can open that URL to see your web application.
