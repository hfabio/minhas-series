It's a simple project to create, read, update and delete films and series genres 

## Acknowledgment

I'm very thankfully to [@tuliofaria](https://github.com/tuliofaria) because thanks this project I had the chance to understand and implement with success some knowledges like:
- Functional componentization in reactjs
- CRUD with reactjs
- Routes with react-router-dom
- How to use bootstrap in react projects easily
- Remember how to use axios

Interface isn't perfect cuz it's for educational purpose, not a production project.

I have a disclaimer by the way:
This project was totally Tulio's idea, and backend implementation was made by him (DB too)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### Genres list
![Genres list](https://user-images.githubusercontent.com/15989467/62274822-0012f280-b417-11e9-956a-316221c4baa0.png)
### Add new genre
![Add genre](https://user-images.githubusercontent.com/15989467/62274890-23d63880-b417-11e9-8075-6630d067cb8b.png)
### Editing a genre
![Editing genre](https://user-images.githubusercontent.com/15989467/62274973-49fbd880-b417-11e9-9295-0252123434fa.png)


## Getting started

first you need to clone this repository using this command:

```
  git clone https://github.com/hfabio/minhas-series.git
```

after this process you'll need to re-import node modules using npm install or yarn install (I prefer yarn)
```
  npm install
      OR
  yarn
```
And then download backend as a node module:
```
    npm install https://github.com/tuliofaria/minhas-series-server
        OR
    yarn add https://github.com/tuliofaria/minhas-series-server
```
Ok, all dependencies are done.
Now go to `package.json` and insert this propertiy at the end:
```
    "proxy": "http://localhost:3002/"
```
This property will make the front-end capable to access the backend easily with a port redirectionment (again, it isn't the best way to do it, cuz it's a nightmare to make one application scalable... Just for EDUCATIONAL purposes)

Then now you're ready to start editing or utilizing this project!

## Available Scripts

In the project directory, you can run:

### `node node_modules\minhas-series-server\index.js`
Runs the backend at port 3002

### `yarn start-react`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn start-server`
Runs the server.<br>
server opened on [http://localhost:3002](http://localhost:3002) 