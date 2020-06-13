import Template from '@/components/Template'

export default {
  components: {
    'm-template': Template,
  },
  computed: {
    getPages() {
      return this.pages.map(e => {
        e.img = this.path + e.src 
        return e
      })
    }
  },
  data() {
    return {
      path: '/img/',
      pages: [
        {
          type: 'content',
          title: 'Onde Tudo Começou',
          description: 'Quando me perguntarem o que me lembro sobre a escola, você é minha primeira opção. Começamos a conversar com você dizendo que eu sempre te olhava, bom, talvez isso fosse um sinal de que meu coração estava apaixonado, e eu nem tinha percebido. Na verdade, ali foi o começo de tudo, eu e você.',
          src: '/img/foto-sesi-2.png',
          date: '2017',
          info: {
            description: '"People fall in love in mysterious ways<br />Maybe just the touch of a hand"',
            caption: 'Ed Sheeran. Thinking Out Loud'
          }
        },
        {
          type: 'content',
          title: 'Você Me Conhece Tão Bem',
          description: 'Eu brinco que você foi um anjo na minha vida, que chegou no momento certo, na hora certa, para mudar totalmente ela para melhor. Nos piores momentos, você estava lá, mesmo não sabendo o que deveria fazer, não hesitou em ficar do meu lado e te ver ali foi o último sussurro de esperança, que me mudou completamente. Eu dividi com você minhas dores e você as abraçou, de forma genuína conquistou minha gratidão e meu coração.',
          src: '/img/foto-proximos.png',
          date: '2017 - Pra Sempre',
          info: {
            description: '"Pull me close and I\'ll hold you tight<br />Don\'t be scared \'cause I\'m on your side"',
            caption: 'Jonas Brothers. Hesitate'
          }
        },
        {
          type: 'content',
          title: 'Você é Para Mim',
          description: 'Você me traz um misto de emoções que não consigo explicar em simples linhas de texto, não vou negar, te elogiar está sendo uma tarefa árdua, pois não me contento em dizer o óbvio, mas ao tentar explicar o inexplicável me acabo em você. Você é o nascer do sol em uma noite escura. Você é um soneto em um amontoado de palavras. Você me fez ver a verdade no amor, que é o sorriso que te dou quando me sorri também. No final, falar de você vai além de um simples, elogio. ',
          src: '/img/foto-qualidades-2.png',
          date: 'Perdi as Contas...',
          info: {
            description: '"Baby, you are bringing out a different kind of me<br />There\'s no safety net that\'s underneath, I\'m free<br />Fallin\' all in...you"',
            caption: 'Shawn Mendes. Fallin\' All In You'
          }
        },
        {
          type: 'content',
          title: 'Gabi',
          description: 'Eu quero te dizer tanta coisa, que há tempos segue preso na garganta, até este momento. Eu quero poder te chamar de amor, de olhar para o lado e ver nossas mãos entrelaçadas, mas não por um breve momento, e sim para sempre. Quando penso em você sinto como se meu corpo estivesse nas nuvens, voando para um destino incerto, mas contente em aproveitar cada segundo de euforia. A sua magia me contagia, de modo a me fazer sonhar com o que eu mais quero, e o que eu mais quero é você. Hoje eu grito: Eu te amo. E que amanhã eu faça acontecer.',
          src: '/img/ilu-love.svg',
          date: 'De sempre, para sempre',
          info: {
            description: '"Darling, just hold my hand<br />Be my girl, I\'ll be your man<br />I see my future in your eyes"',
            caption: 'Ed Sheeran. Perfect'
          }
        },
      ]
    }
  }
}