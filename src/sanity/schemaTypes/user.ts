const Userschema = {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'object',
        fields: [
          { name: 'street', type: 'string', title: 'Street' },
          { name: 'city', type: 'string', title: 'City' },
          { name: 'postalCode', type: 'string', title: 'Postal Code' },
        ],
      },
    ],
  };

  export default Userschema
  