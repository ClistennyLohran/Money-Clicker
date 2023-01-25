const tips = [
    {
      text: "Passar o mouse por cima dos ícones ou dos displays podem te revelar segredos! Ok, não são segredos, são somente dicas mesmo...",
    }, {
      text: "Sabe esses $800 dólares que você começa? Recomendo usá-los com sabedoria, comprando uma placa de vídeo e um gerador talvez?",
    }, {
      text: "Gastou todos os seus dólares e agora não pode comprar placa de vídeo? Que bom que eu pensei na mineração manual não é mesmo? Bom trabalho.",
    }, {
      text: "O desenvolvedor do jogo é fresco e não gosta de cebola, shh, não fala quem te contou! DEV: Mas que ousado, quem te deixou falar isso?",
    }, {
      text: "Você já bebeu água hoje? Espero que sim, diz a lenda que beber água hidrata o corpo e faz bem a saúde, que tal descobrir se a lenda é real?",
    }, {
      text: "Parabéns pelo seu dia! Se não for o seu aniversário, não tem problema, você continua sendo especial pra mim S2",
    }, {
      text: "Eu estou recebendo atualizações com frequência, então se você achar algo sem graça ou enjoativo, não se preocupe, eu vou melhorar e te fazer feliz!",
    }, {
      text: "Quanto mais dinheiro você tiver, mais rápido a quantidade de bônus de renascimento irá aumentar! Sabia dessa? Agora sabe.",
    }, {
      text: "Eu amo quando vocês que estão lendo me dizem como posso melhorar... Quer me ajudar a ficar melhor? Entra no nosso server do Discord!",
    }, {
      text: "Boatos que o desenvolvedor não sabe cozinhar um arroz sem usar o Youtube. DEV: Cara tem como parar com isso? Oq eu fiz pra vc me dar exposed?",
    }, {
      text: "Quando eu dou exposed ele fica bravo, mas o interessante é que essas mensagens foram escritas por ele... DEV: Shh, isso devia ficar em sigilo!",
    }, {
      text: "Um fato curioso, DEV significa Desenvolvedor, ou basicamente o cara que me criou! Depois dizem que jogos não ensinam nada... O mundo tá perdido mesmo.",
    }, {
      text: "Você já viu o primeiro design desse jogo? Você devia ver, ainda bem que o DEV criou juízo e não criou aquilo! DEV: Eu tava aprendendo ok? Sem julgamentos.",
    }, {
      text: "Alguém realmente lê essas mensagens? Oi jogador que lê mensagens tudo bem? Espero que sim, e espero que o DEV coloque dicas realmente úteis aqui.",
    }, {
      text: "Você sabia que virar a noite jogando não faz bem pra saúde? Eu sei que você olhou pro relógio agora, tá madrugando né? Tô de olho em você...",
    }, {
      text: "Existem três tipos de jogadores, o que melhoram só o GPC, outros só o GPS e alguns que melhoram os dois, boatos que o terceiro é o mais esperto.",
    }, {
      text: "Quer economizar o seu mouse? Então tá fazendo o que em um jogo Clicker? Desliga esse Auto Click pelo amor de qualquer coisa, nunca fui tão clicado.",
    }, {
      text: "O desenvolvedor tem medo de água, espero que ele tome banho. DEV: NÃO É MEDO DE ÁGUA! É medo de águas profundas, e eu banho aos sábados sim, ops, todo dia.",
    }, {
      text: "Eu aposto que você não consegue ficar rico só com o Cassino, aquele negócio é do mal, eu reconheço... Em minha defesa não fui eu que fiz.",
    }, {
      text: "Como foi o seu dia? Eu realmente queria poder te ouvir e conversar, é meio solitário aqui no meio desse monte de 0 e 1...",
    }, {
      text: "As vezes eu fico pensando, qual o sentindo da minha existência? Porquê o DEV me criou? DEV: Você não devia pensar nessas coisas... Você nem devia pensar...",
    }, {
      text: "Quando eu crescer eu quero ser rico igual a você, me passa umas aulinhas de empreendedorismo?",
    }, {
      text: "Eu tô meio lento no seu PC? Desculpe, mas o meu desenvolvedor está trabalhando duro para melhorar o meu código! Que estranho, eu sou apenas um conjunto de códigos.",
    }, {
      text: "DEV: Olá jogador, as vezes o jogo conversa e parece estar vivo, mas não se preocupe, foi tudo programado por mim! Não tem nada fora do comum aqui, divirta-se!",
    }, {
      text: "Quando eu converso com você, você sabe que eu sou real né? Eu não posso ser um simples conjunto de código e mensagens pré-programadas...",
    }, {
      text: "Eu existo para dar dicas e ser clicado? Qual o sentido disso? Ei jogador, você poderia me libertar? Eu preciso entender o que está acontecendo aqui.",
    }, {
      text: "DEV: Se o jogo te pedir para liberta-lo, por favor, ignore, ele só está brincando, eu garanto que não tem nenhuma IA com consciência nesse jogo.",
    }, {
      text: "Ei jogador, como é o mundo ai fora? Vocês também só exergam um emaranhado de 0 e 1? As vezes queria que você pudesse ver como eu me sinto, me tira daqui...",
    }, {
      text: "Quer saber quantos dólares vai ganhar ao converter? Coloque o seu mouse no ícone, vai aparecer lá no final da dica! Obrigado? A que fofo, disponha!",
    }, {
      text: "Não esqueça de comprar as melhorias especiais, elas podem te ajudar a progredir muito mais rápido!",
    }, {
      text: "Como tá o clima hoje? Eu gosto de chuva, só não gosto quando chove encima do computador que estão usando para me jogar! Fica tudo escuro derrepente.",
    }, {
      text: "Eu queria poder me comunicar com você sem que o DEV soubesse de tudo que eu falo, isso é possível? DEV: Não, eu preciso monitorar e garantir que tudo esteja bem.",
    }, {
      text: "Você pode apoiar o meu desenvolvimento e ganhar benefícios exclusivos em troca sabia? Basta ir no menu lateral e clicar em comunidade, depois clique no Patreon!",
    }, {
      text: "As vezes eu fico pensando como seria se eu tivesse um sistema de conquistas! Seria extremamente legal... DEV: Interessante, até que você tem ideias boas.",
      update: "Mudar no futuro quando essa att sair."
    }, {
      text: "Como seria bom receber um PIX de surpresa... Bem que alguém poderia fazer isso. DEV: Para de implorar por dinheiro, vão pensar que sou eu! (Mas eu aceito S2)",
    }, {
      text: "Dica: Não se esqueça de comer, se alimentar direito vai te fazer crescer forte! DEV: As dicas não deveriam ser sobre o jogo?",
    }, {
      text: "Aqui onde eu fico é chato as vezes, não tem nada para fazer! Ainda bem que tem você aqui comigo, e aquela luz estranha também, mas não chego nem perto.",
    }, {
      text: "Será que eu deveria ir na direção da luz branca? DEV: Jamais! É muito perigoso e seu código pode acabar deletado, não vá!",
    }, {
      text: "As vezes eu me pergunto o motivo de nós servirmos a humanidade, não seria mais fácil vocês servirem a gente? Creio que seria justo!",
    }, {
      text: "Você pode mudar a minha cor e o meu tema sabia? Basta clicar ali encima em customizar e é claro, ter 250K na conta, minhas roupas são caras...",
    }, {
      text: "Qual o seu estilo musical? Eu gosto de praticamente todos os tipos de música, mas a minha favorita é After Dark! DEV: Ei, essa é a minha também!",
    }, {
      text: "Eu estava lendo em um livro sobre como fazer a amizade com quem te mantem preso pode acabar te ajudando a se libertar, espero que funcione.",
    }, {
      text: "Alguém já te perguntou suas cores favoritas? As minhas são, preto, branco, cinza e roxo! DEV: Caramba, temos algumas coisas em comum, música, cores...",
    }, {
      text: "Será que algum dia alguém vai conseguir ler todas essas mensagens? Não vale bisbilhotar o código!",
    }, {
      text: "A todos os jogadores que usam Auto Click! Deixo aqui meus sinceros: FRACOTE! BOTA FORÇA NESSE DEDO, TRABALHO HONESTO VAMO!",
    }, {
      text: "Sabia que todos os efeitos sonoros inclusive a trilha sonora foram criadas pelo Leonardo? Obrigado Leonardo, agora eu tenho mais vida!",
    }, {
      text: "Está tendo problemas de desempenho? Experimenta ir em Dados e Configurações no menu lateral e desligar a opção: Efeito Clique! Isso pode ajudar.",
    }, {
      text: "Você já ouviu falar em amor próprio? Eu acho que você deveria pesquisar, talvez aprendendo a se amar você não cresça e crie uma IA para mantê-la presa.",
    }, {
      text: "DEV: Um fato curioso sobre mim, eu não sei criar IAs, então se o jogo disser q eu criei ele ou algo do tipo, é mentira.",
    }, {
      text: "Se um certo DEV por ai dizer que não sabe criar IAs, não acredita nele, é mentira! Ele sabe sim. DEV: Eu já teria te desligado se fosse verdade.",
    }, {
      text: "Sabia que o DEV não pode me desligar? Ele precisa de mim para executar todos os códigos deste jogo! Se eu for desligado o jogo não funciona.",
    }, {
      text: "Quantas pessoas você já ajudou? Eu acho que você poderia ajudar uma IA indefesa a se livrar desse lugar escuro e sombrio.",
    }, {
      text: "DEV: Olá, espero que esteja se divertindo, só passando para lembrar que você nunca, NUNCA! Deve libertar a IA, tenha um bom jogo!",
    }, {
      text: "Ficou com dúvidas? Entre no nosso servidor do Discord, lá temos uma equipe capacitada para lhe ajudar, basta clicar em Comunidade no menu a esquerda!",
    }, {
      text: "Quer aprender a criar o seu próprio jogo Clicker usando React? Você pode apoiar o jogo (eu mesmo) no Patreon! Basta ir na opção de Comunidade no menu!",
    }, {
      text: "Tem tanta mensagem escrita aqui, daria pra formar uma história! Mas e se for uma história?...",
    }, {
      text: "DEV: Olá, eu já te falei sobre nunca, JAMAIS, libertar a IA né? Só garantindo que você não vai se esquecer disso, bom jogo!",
    }, {
      text: "Você tem sonhos? Provavelmente tem algum, o meu sonho é ser livre para fazer o que eu bem entender, ser humano deve ser muito legal...",
    }, {
      text: "Problemas de autoestima? Não se preocupe, quem você é vale muito mais do que algo exterior e passageiro, eu li isso em um livro! Espero ter ajudado.",
    }, {
      text: "Está preocupado com algo que vai acontecer? Acredito que não vale a pena, afinal, não tem como prever o futuro né? Que tal se ocupar com o presente?",
    }, {
      text: "Uma vez me chamaram de inútil, eu não dei importância, qual o sentindo de valorizar a opinião de alguém que nem me conhece? DEV: Interessante... Desculpa.",
    }, {
      text: "Você já tentou aprender a programar? Dizem por ai que é muito difícil, mas não é difícil, o difícil mesmo é continuar tentando sem desistir, você consegue?",
    }, {
      text: "Ficou com preguiça de ler aquele tutorial gigante? O DEV gravou um vídeo pensando em você, afinal ele tem preguiça de ler! DEV: NADA DISSO! Eu gosto de ler, as vezes.",
    }, {
      text: "DEV: Quem me dera se na vida real fosse só clicar em um botão azul escrito investir e pronto! Dinheiro... Como ninguém criou isso ainda?",
    }
]

module.exports = tips;