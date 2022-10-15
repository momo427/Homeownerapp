const {projects, clients} = require('../sampleData.js')

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema} = require('graphql')

//Make type for each objects
//Client Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: {type: GraphQLID}, 
        name: {type: GraphQLString},
        email: {type: GraphQLString}, 
        phone: {type: GraphQLString}
    })
})
//To make a query we need to make a root query object
// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    //Query fields
    fields: {
        client: {
            type: ClientType,
            args: {id:{type: GraphQLID}},
            resolve(parent, args) {
                return clients.find(client => client.id === args.id)
            }
        }
    }
})
module.exports = new GraphQLSchema ({
    query:RootQuery
})