<img src="./static/omnistack.png" align="center"></img>
<h1 align="center">Omnistack Project</h1>

<p align="center">
  <a aria-label="Node version" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="React version" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16120-november-14-2019">
    <img src="https://img.shields.io/badge/react-16.12.0-informational?logo=react"></img>
  </a>
  <a aria-label="Expo version" href="https://www.npmjs.com/package/expo-cli/v/3.11.5">
    <img src="https://img.shields.io/badge/expo--CLI-3.11.5-informational?logo=expo"></img>
  </a>
  <a aria-label="Challenges" href="DESAFIOS.md">
  	<img src="https://img.shields.io/badge/desafios-OK-blueviolet"></img>
  </a>
  <a aria-label="Finished" href="https://rocketseat.com.br/week-10/aulas#4">
    <img src="https://img.shields.io/badge/OmniStack-done-green?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
  </a>
</p>

## Installation
Setup the connection with MongoDB, using your connection string. More info 
<a aria-label="MongoDB" href="https://docs.mongodb.com/guides/server/drivers/">MongoDB Docs</a>
In your terminal run:

```bash
cd api
yarn install
yarn dev
```
To setup and start **frontend** application run:

```bash
cd web-app
```
```
yarn install
yarn start
```
```
npm install
npm start
```

To teste in **mobile**, first put your server address in this file `src/services/api.js`, then run:

```bash
yarn global add install expo-cli
cd mobile
```
```
yarn install
yarn start
```
```
npm install
npm start
```

## Api
Veja em [backend/README.md](./backend) para informações sobre o Backend e arquitetura.

## Web
Veja em [frontend/README.md](./frontend) para informações sobre o Frontend e os padrões. O Frontend desenvolvido no Dia 3 (com o [desafio](DESAFIOS.md) feito) ficou assim:

<img align="center" src="./static/frontend.gif"></img>

## Mobile
O App Mobile (React Native) desenvolvido no Dia 4 e aprimorado no Dia 5 com Sockets (+ o [desafio](DESAFIOS.md) feito) ficou assim:

<img align="center" src="./static/mobile.gif?v=2"></img>

## Imnsonia 
Para testar a API do DevRadar, baixe e instale o [Insomnia](https://insomnia.rest/download/) e em seguida clique na Workspace → `Import/Export` →  
`Import Data` → `From File` → e selecione o arquivo ` 	Insomnia_export.json` deste repositório. Assim que terminar, o resultado ficará assim:  

<img align="center" src="./static/insomnia.png"></img>

## License

[MIT](./LICENSE) &copy; [Rocketseat](https://rocketseat.com.br/)
