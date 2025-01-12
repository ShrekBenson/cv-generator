const userDefaultData = {
  personal: {
    name: 'Diego Antonio',
    lastname: 'Angel Rodriguez',
    email: 'diego@email.com',
    phone: '1278459635'
  },
  education: [
    {
      id: crypto.randomUUID(),
      school: 'Technological University of Mexico',
      location: 'Guadalajara, Jal. Mex.',
      degree: 'Bachelor',
      major: 'Software Development',
      startDate: '2022-01-01',
      endDate: '2025-12-01',
    },
  ],
  work: [
    {
      id: crypto.randomUUID(),
      employer: 'Oracle',
      location: 'Guadalajara, Jal. Mex.',
      position: 'Data Analyst',
      startDate: '2021-10-08',
      endDate: '2023-04-03',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, ad? Nisi omnis illum optio asperiores explicabo ut cupiditate saepe blanditiis praesentium. Sunt eius non dolore odit, incidunt veritatis nostrum corrupti?',
      tasks: [
        {
          id: crypto.randomUUID(),
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum tenetur sit maiores labore, ad magni animi doloremque nobis sunt delectus aspernatur non quisquam ullam dignissimos. Cupiditate dolor voluptatum dolores sint.'
        },
        {
          id: crypto.randomUUID(),
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, praesentium voluptatibus doloribus facilis saepe magni animi fugit corrupti temporibus, nulla odit sit, dolor autem obcaecati. Dolorum amet adipisci earum officia.'          
        },
        {
          id: crypto.randomUUID(),
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, ipsum asperiores commodi nam eligendi sint ullam est officiis cum optio, soluta sit recusandae inventore? Asperiores vero placeat molestiae recusandae corrupti.'
        }
      ]
    },
  ]
}

export default userDefaultData;