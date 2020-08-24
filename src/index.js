const tmi = require('tmi.js');
require('dotenv').config();

// Definir opções de configuração
const opts = {
  identity: {
    username: process.env.NOME_DO_BOT,
    password: process.env.O_TOKEN_DO_PASSO_4,
  },
  channels: [process.env.NOME_DO_CANAL_QUE_O_BOT_VAI_FICAR],
};

// Cria um cliente tmi com  nossas opções
const client = new tmi.client(opts);
// intercepta mensagem do chat
function mensagemChegou(alvo, contexto, mensagem, ehBot) {
  if (ehBot) {
    return;
  } // se for mensagens do nosso bot ele não faz nada

  // remove espaço em branco da mensagem para verificar o comando
  const nomeDoComando = mensagem.trim();
  // checando o nosso comando
  if (nomeDoComando === '!comandoUM') {
    client.say(alvo, `Rodando o comando ${nomeDoComando}`);
  } else if (nomeDoComando === '!comandoDOIS') {
    client.say(alvo, `Rodando o comando ${nomeDoComando}`);
  } else {
    console.log(`* Não conheço o comando ${nomeDoComando}`);
  }
}

function entrouNoChatDaTwitch(endereco, porta) {
  console.log(`* Bot entrou no endereço ${endereco}:${porta}`);
}

// Registra nossas funções
client.on('message', mensagemChegou);
client.on('connected', entrouNoChatDaTwitch);

// Connecta na Twitch:
client.connect();
