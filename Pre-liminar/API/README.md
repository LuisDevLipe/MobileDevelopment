# Escolha da API.

API's são intefaces que oferecem serviços para aplicações sejam elas mobile, web ou desktop. Comumente as apis ficam responsáveis por receber requisições HTTP, e retornar uma resposta para o cliente. Exemplo.

Uma aplicação web que geras imagens aleatórias, envia uma requisição para uma api específica. Essa api por sua vez é responsável por buscar os dados em um banco de dados, e responder para o cliente com uma imagem aleatória.

Sempre que uma aplicação web precisa de informações em um banco de dados, faz-se necessário entrar em contato com uma api, que fornece essa interface, para que a aplicação tenha acesso as informações armazenadas no banco de dados.

Para o projeto do 3º semestre utilizaremos um api gratuita que nos forneça, dados como imagens e textos, e possua mecanismo de paginação. Além do mais, api precisa fornecer dados dinâmicos que sejam atualizados periodicamente. Os textos e imagens disponibilizados através das requisições, precisam ser dispostos na aplicação em formato de feed.

## Opções de API pesquisadas.

1. [Dummyjson](https://dummyjson.com/docs).

- Esta api é capaz de fornecer dados estáticos entre as seguintes categorias: Produtos de ecommerce(Vestuário, Alimentos, Esportes e etc...)
- Além do mais, esta api também é capaz de fornecer: Publicações, comentários, uma lista de tarefas, frases famosas e receitas culinárias.

É uma api versátil que cobre todos os requisitos do projeto, exceto atualização periódica, pois a mesma trata de dados estáticos.
Ainda assim, esta api é útil.

2. [Dados Abertos da Câmara dos deputados](https://dadosabertos.camara.leg.br/swagger/api.html).

- É uma api com dados dos parlamentares, líderes, grupos, blocos, órgãos e mais importante proposições, eventos e votos nos projetos.
- É possível verificar o que acontece na câmara dos deputados, o que está sendo votado, e quem está votando. E muito mais...

3. [API's do Banco Central](https://dadosabertos.bcb.gov.br/).

- O Banco central possui uma gama de serviços de dados disponibilizados gratuitamente, esses serviços vão desde datasets á api's.
- Algumas api's que chama atenção são:

  1. [dolar-americano-usd-todos-os-boletins-diarios](https://dadosabertos.bcb.gov.br/dataset/dolar-americano-usd-todos-os-boletins-diarios)

  2. [Índice de Atividade Econômica do Banco Central - IBC-Br](https://dadosabertos.bcb.gov.br/dataset/24363-indice-de-atividade-economica-do-banco-central---ibc-br)

  3. [Estatísticas do PIX](https://dadosabertos.bcb.gov.br/dataset/pix)

  - Essa api fornece informações sobre:
  - Quantidade de chaves por participante.
  - Quantidade de transações por município.
  - Estatísticas de transações PIX.

  4. [ Estatísticas de Meios de Pagamentos ](https://dadosabertos.bcb.gov.br/dataset/estatisticas-meios-pagamentos)

  - Essa api contém diversas estatísticas relacionadas aos seguintes MEIOS DE PAGAMENTO:

    1. Instrumentos de periodicidade mensal, com atualização 17 dias após o final do mês de referência:

    Pix (fonte: SPI e documento 1201)
    TED (fonte: CIP-SITRAF e STR)
    Boletos (fonte: CIP-SILOC)
    DOC e TEC (fonte: CIP-SILOC)
    Cheque (fonte: Compe)

    2. Instrumentos de periodicidade trimestral, com atualização 2 meses após o final do trimestre de referência:

    Cartões de crédito, débito e pré-pagos (fonte: documentos 6308 e 6334)
    Pagamentos de convênio, saques, transferências intrabancárias e débito direto (fonte: documento 6209)
    Volumetria das transações intrabancárias (fonte: documento 6209)
    Estabelecimentos credenciados (fonte: documento 6334)
    Volumetria por canal de acesso e produto (fonte: documento 6209)
    Quantidade de ATMs (fonte: documento 6209)
    Tarifas de intercâmbio (TIC) e taxas de desconto (MDR) - (fonte: documento 6334)
    Terminais POS/PDV
    Programas de recompensa e fidelidade

5. [API do Spotify](https://developer.spotify.com/documentation/web-api)

- Recuperar dados do seu artista, álbum ou programa favorito
- Pesquisar conteúdo no Spotify
- Controlar e interagir com a reprodução, tocar e retomar, avançar posição ou acessar sua fila
- Gerenciar sua biblioteca pessoal, criando novas playlists e adicionando suas músicas favoritas
- Acessar recursos de áudio e análises
- Obter recomendações personalizadas
- Visualizar histórico de reprodução
- Seguir e gerenciar artistas
- Salvar álbuns na biblioteca
- Controlar reprodução em diferentes dispositivos
- Acessar lançamentos e charts
- Gerenciar perfil de usuário

Mais:

1. [API de dados da Saúde](https://servicos-datasus.saude.gov.br/)
2. [API de dados do IBGE](https://servicodados.ibge.gov.br/api/docs/)


6. [Futebol ao vivo](https://www.api-futebol.com.br/)

- API Futebol fornece dados dos principais campeonatos de futebol do Brasil e do mundo.

- Dados dos jogos ao vivo, gols, escalações, estatísticas das equipes, atletas, tabelas, artilharia e mais.

- Todos os dados estão disponíveis no formato JSON.
