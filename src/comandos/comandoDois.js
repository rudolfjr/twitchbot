const comando = (client, alvo, nomeDoComando) => {
  client.say(alvo, `Rodando o comando ${nomeDoComando}`);
};

module.exports = comando;
