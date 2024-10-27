const Productschema = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title', maxLength: 96 },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: "price_id",
        title: "Stripe Price ID",
        type: "string",

      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
        options: { hotspot: true }, // Useful for cropping images
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }],
      },
      {
        name: 'variants',
        title: 'Product Variants',
        type: 'array',
        of: [
          {
            title: 'Variant',
            type: 'object',
            fields: [
              { name: 'color', title: 'Color', type: 'string' },
              { name: 'size', title: 'Size', type: 'string' },
            ],
          },
        ],
      },
      {
        name: 'inStock',
        title: 'In Stock',
        type: 'boolean',
      },
    ],
  };


  export default Productschema
  
