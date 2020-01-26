const { GraphQLServer } = require('graphql-yoga'); // pour créer le serveur, on importe le package.
const Mutation = require('./resolvers/Mutation'); // j'importe mes Mutation resolvers
const Query = require('./resolvers/Query'); // j'importe mes Query resolvers
const db = require('./db'); // YogaServer intéragit avec la db

// Creates the GraphQL Yoga Server using a whole bunch of other app under the hood.
// Ce qu'on appelle RESOLVERS ce sont les actions que peuvent lancer le SAV suite à l'appel : soit mutation resolvers soit query resolvers.
// La nomenclature d'utilisation par le front via React.JS est définie dans le SCHEMA, un peu à la manière d'un formulaire dont on doit respecter le format/nomenclature.
// Le détail exact des resolvers/actions une fois appelées est définie dans Mutation.js et Query.js

function createServer() {
	return new GraphQLServer({
		typeDefs                  : 'src/schema.graphql',
		resolvers                 : {
			Mutation,
			Query
		},
		resolverValidationOptions : {
			requireResolversForResolveType : false
		},
		context                   : (req) => ({ ...req, db })
	});
}

module.exports = createServer;
