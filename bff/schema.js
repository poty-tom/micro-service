export const typeDefs = `#graphql

type Book {
    id: Int
    title: String
    author: String
    price: Int
}

type Query {
    book(id: Int): Book
    books: [Book]
}
`