// C'est le SAV qui connecte l'entrepot IKEA avec les livreurs.

const { Prisma } = require('prisma-binding');

const db = new Prisma({
	typeDefs : 'src/generated/prisma.graphql', // tells what queries and mutations exist and can be included in schema.graphql
	endpoint : process.env.PRISMA_ENDPOINT, // tells what URL gives access to the database
	secret   : process.env.PRISMA_SECRET, // password granting access to the database
	debug    : false
});

module.exports = db;
