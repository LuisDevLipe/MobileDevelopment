# Projeto 3º Período - Análise e Desenvolvimento de Sistemas

## Sobre o Desenvolvimento de Aplicativos Móveis.

O desenvolvimento de aplicativos móveis é uma área em constante evolução, com novas tecnologias e abordagens surgindo regularmente. Existem três principais abordagens para o desenvolvimento de aplicativos móveis: nativo, híbrido e web (PWAs).

O desenvolvimento móvel requer um nível de conhecimento mais especializado, soluções mobile requerem uma quantidade maior de desenvolvedores, estes são especializados nos desenvolvimento de diferentes plataformas (Android e iOS).
O desenvolvimento de aplicativos nativos é complexa, custosa e possui um grande "overhead" no planejamento tanto financeiro quanto do ciclo de vida do aplicativo.

Aplicativos nativos são rápidos, extremamente performáticos possuindo acesso direto aos recursos do dispositivos e leves. Em contrapartida, o aplicativo híbrido têm um ciclo de vida mais rápido, novas atualizações surgem com mais frequência e o custo de desenvolvimento é reduzido.

Entretanto, devemos levantar as limitações e as desvantagens de cada tecnologia, assim como os benefícios que  cada uma pode oferecer. O desenvolvimento híbrido feito de maneira incorrreta pode levar a uma péssima experiência do usuário, aplicativos lentos, pesados e com desempenho insatisfatório.

## Sobre o Projeto.

### Roadmap

#### Entrega Preliminar.

-   [x] Criação de wireframes.

-   [x] Documentação do Design escolhido e tomadas de decisão.

-   [x] Definição da API.

-   [x] Documentação dos critérios de escolha da api.

-   [x] Apresentar um apk instalado em dispositivo móvel utilizando o Ionic.

-   [ ] Atualização da plataforma de projetos ( fase de iniciação e planjemento ).

-   [ ] Apresentação em slideshow do conteúdo desenvolvido e dos insights obtidos.

# Wireframe

A escolha do design é um passo importante, pois ele define como o usuário será recebido e como o mesmo poderá interagir com a aplicação. Uma boa escolha de design cativa o cliente e atrai o seu interesse para explorar as funcionalidades. O design precisa ser coerente com os serviços oferecidos pela aplicação.

O primeiro design oferece uma interface voltada para o e-commerce, e é uma boa interface, porém não adere a ideia do projeto. Escolhemos uma api informativa que fornece dados de campeonatos, partidas e jogadores de futebol. A proposta do projeto é fornecer informações sobre o futebol e não vender produtos relacionados a ele. Já o segundo design focado em card informativos, é mais coerente pois proporciona ao usário blocos de informações que podem ser explorados, revelando novas informações e funcionalidades.

Portanto, dos designs apresentados podemos dizer que o segundo apresenta uma conexão maior e mais coesa com a proposta do projeto. A escolha do mesmo foi principalmente impulsionada pela escolha da api. Visto que, a o design é voltado para a apresentação de informações e dessa forma será mais propício para utilização na aplicação já que a api escolhida fornece dados em tempo real sobre o futebol.

[Wireframe escolhido](https://www.figma.com/design/8w1FQAyWoI9W8ZJiUuh3VZ/Wireframe-Mobile-2?node-id=0-1&t=Kpxm1eMkuq3NiR30-1)

## Escolha da API.

<!-- [Documentação da API](./API/README.md) -->

As api's são serviços externos, nas arquiteturas modernas é comum encontrar a utilização de diversas api's em um único projeto. Elas forncem uma forma de agregar informações e funcionalidades a uma aplicação sem necessariamente passar pelo processo de desenvolvimento de servidores e bancos de dados.
Nosso projeto consiste em um aplicativo informativo, fornece dados de futebol, estatísticas, tabelas de campeonatos, informações sobre jogadores e mais. Com esse conceito em mente buscamos uma api que fosse capaz de nos fornecer dados estáticos e em tempo real, que houvesse suporte a paginação e que fosse composta por dados dinâmicos como imagens, vídeos e listas.


Enquanto filtramos entre diversas api's disponíveis encontramos uma API brasileira que inclusive gostaríamos de ter utilizado, mas não conseguimos permissão para acesso.
Durante a pesquisa encontramos diversas api's pagas e pouquíssimas gratuitas. 
Das api's gratuitas a grande maioria não oferecia suporte a dados brasileiros ou não cumpriam 100% os requisitos do projeto. 
No final, a api escolhida foi a [Football Data](https://www.football-data.org/). É uma API de dados de futebol que fornece informações sobre ligas, times, jogadores e estatísticas de partidas. Possui endpoints para acessar listas de campeonatos, partidas encerradas e em andamento, assim como detalhes de campeonatos, times e jogadores.
A API é gratuita para uso com opções pagas para acesso a dados mais específicos e séries históricas. 

Ao escolhermos uma api que se encaixa na concepção do projeto o desenvolvedor ganha um aumento de produtiviade durante o ciclo de vida da aplicação e também facilidade para implementar novas funcionalidades. Além disso, o utilizador se beneficiará com uma aplicação concisa e com atualizações regulares, o que contribuirá com a experiência do usuário.
A escolha correta da api também evita a aglomeração de serviços utilizados em uma única/múltiplas funcionaliade(s), o que pode trazer um aumento de complexidade no código e dificuldade de manutenção.

Requisitos funcionais da API.

1. Informações dinâmicas que atualizam periodicamente.
2. Suporte a mecanismos de paginação.
3. Conteúdo dinâmico (Imagens, textos.) - tipo feed de notícias.
4. Uso gratuito.

#### Entrega Final.

## Integrantes

Luis Felipe Macedo, Lucas Augusto, Gabriel Mufalani, Gabriel Vargas.
básico

## APK.

[Link para o arquivo apk de testes da entrega pre-liminar](./Pre-liminar/APK)

## Apresentação.
