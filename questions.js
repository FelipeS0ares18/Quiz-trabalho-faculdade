export default [
    {
      question: "Qual é a função da camada de aplicação?",
      answers: [
        { option: " A - Fazer com que programas diferentes tenham interoperabilidade.", correct: false },
        { option: " B - Garantir que o destino de envio está pronto para receber.", correct: false },
        { option: " C - Permitir meios de aumentar a segurança, como autenticação de dispositivos.", correct: false },
        { option: " D - Definir os padrões de comunicações entre os dispositivos.", correct: false },
        { option: " E - Todas as alternativas acima", correct: true },

      ],
    },
    {
      question: "Qual o protocolo da camada de transporte utilizado em situações onde não se pode haver perda de pacotes e entrega integral dos dados:",
      answers: [
        { option: " A - HTTPS ", correct: false },
        { option: " B - UDP", correct: false },
        { option: " C - IMAP", correct: false },
        { option: " D - TCP", correct: true },
        { option: " E - SSH", correct: false },
      ],
    },
    {
      question: "Qual dos serviços da camada de transporte é responsável por dividir uma mensagem de dados em segmentos menores durante a transmissão e, em seguida, reagrupar novamente no destino para reconstruir a mensagem original",
      answers: [
        { option: " A - Multiplexação", correct: false },
        { option: " B - Controle de congestionamento", correct: false },
        { option: " C - Controle de fluxo", correct: false },
        { option: " D - Segmentação e reagrupação de dados", correct: true },
      ],
    },
    {
      question: "Qual das 7 camadas do modelo OSI é a camada de rede?",
      answers: [
        { option: " A - Segunda camada", correct: false },
        { option: " B - Terceira camada", correct: true },
        { option: " C - Sétima camada", correct: false },
        { option: " D - Quinta camada", correct: false },
      ],
    },
  ];