const secoes = [
    {
      id: 1,
      titulo: 'Insira alguns dados básicos',
      entradaTexto: [
        {
          id: 1,
          label: 'Name',
          placeholder: 'Write your complete name'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Write a valid email'
        },
        {
          id: 3,
          type: 'password',
          label: 'Insert your password',
          placeholder: 'Insert your password',
          secureTextEntry: true,
        },
        {
          id: 4,
          type: 'password',
          label: 'Confirm your password',
          placeholder: 'Write your password',
          secureTextEntry: true,
        }
      ],
      checkbox: []
    },
    {
      id: 2,
      titulo: 'Agora, mais alguns dados sobre você:',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Insira seu CEP'
        },
        {
          id: 2,
          label: 'Endereço',
          placeholder: 'Insira seu endereço'
        },
        {
          id: 3,
          label: 'Número',
          placeholder: 'Insira seu número'
        },
        {
          id: 4,
          label: 'Complemento',
          placeholder: 'Insira seu complemento'
        },
        {
          id: 5,
          label: 'Telefone',
          placeholder: '(00) 00000-0000'          
        },
      ],
      checkbox: []
    },
    {
      id: 3,
      titulo: 'Para finalizar, quais são os seus planos?',
      entradaTexto: [],      
      checkbox: [
        {
          id: 1,
          value: 'Sulamerica'
        },
        {
          id: 2,
          value: 'Unimed'
        },
        {
          id: 3,
          value: 'Bradesco'
        },
        {
          id: 4,
          value: 'Amil'
        },
        {
          id: 5,
          value: 'Biosaúde'
        },
        {
          id: 6,
          value: 'Biovida'
        },
        {
          id: 7,
          value: 'Outros'
        },
        {
          id: 8,
          value: 'Não tenho plano'
        }
      ]
    }
  ]
  
  export { secoes }