"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("@apollo/server");
var standalone_1 = require("@apollo/server/standalone");
var schema_js_1 = require("../schema.js");
var resolver_js_1 = require("../resolver.js");
var server = new server_1.ApolloServer({
    typeDefs: schema_js_1.typeDefs,
    resolvers: resolver_js_1.resolvers,
});
var url = (await (0, standalone_1.startStandaloneServer)(server, {
    listen: { port: 4000 },
})).url;
console.log("\uD83D\uDE80  Server ready at: ".concat(url));
