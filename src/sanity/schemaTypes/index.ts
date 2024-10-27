import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import category from './category'
import order from './order'
import user from './user'
import heroimage from './heroimage'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, order, user, heroimage],
}
