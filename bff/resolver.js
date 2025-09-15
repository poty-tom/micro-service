export const resolvers = {
    Query: {
        book: async (parent, args, context) => books[args.id-1],
        books: async (parent, args, context) => books,
    }
}

const books = [
    {
        id: 1, 
        title: "朝",
        author: "morning",
        price: 1000
    },
];