const sotez = require('sotez');
const provider = "http://localhost:18731";

sotez.node.setProvider(provider);

sotez.node.query('/chains/main/blocks/head')
  .then(response => console.log(response));
