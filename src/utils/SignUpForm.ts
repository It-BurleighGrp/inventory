const secoes = [
  {
    id: 1,
    titulo: 'Input some data from you',
    entradaTexto: [
      {
        id: 1,
        label: 'Name',
        placeholder: 'Write your complete name',
      },
      {
        id: 2,
        label: 'Email',
        placeholder: 'Write a valid email',
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
      },
    ],
    checkbox: [],
  },
  {
    id: 2,
    titulo: 'Now, more data about you:',
    entradaTexto: [
      {
        id: 1,
        label: 'Birthday Date',
        placeholder: 'Insert your birthday date',
      },
      {
        id: 2,
        label: 'Phone',
        placeholder: '(00) 00000-0000',
      },
      {
        id: 3,
        label: 'Role',
        placeholder: 'Insert your role',
      },
      {
        id: 4,
        label: 'Photo',
        type: 'image',
        placeholder: 'Insira seu complemento',
      },
    ],
    checkbox: [],
  },
]

export { secoes }
