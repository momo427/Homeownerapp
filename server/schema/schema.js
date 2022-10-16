const {projects, clients} = require('../sampleData.js')

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList} = require('graphql')

//Mongoose Models
const Project = require('../models/Project');
const Client = require('../models/Client');
//Make type for each objects
//Client Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    //Query fields which returns objects
    fields: () => ({
        id: {type: GraphQLID}, 
        name: {type: GraphQLString},
        email: {type: GraphQLString}, 
        phone: {type: GraphQLString}
    }),
});

//Project Type
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    //Query fields which returns objects
    fields: () => ({
        id: {type: GraphQLID}, 
        name: {type: GraphQLString},
        description: {type: GraphQLString}, 
        status: {type: GraphQLString},
        client: {
            type: ClientType,
            resolve(parent, args) {
                return clients.findById(parent.clientId);
            }
        }
    }),
});
//To make a query by ID we need to make a root query object
// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        //get all clients
        clients:{
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                return Client.find();
            },
        },
        //return client based on ID
        client: {
            type: ClientType,
            args: {id:{type: GraphQLID}},
            resolve(parent, args) {
                return Client.findById(args.id);
            },
        },
        //return all projects
        projects:{
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return Project.find();
            },
        },
        //return project based on ID
        project: {
            type: ProjectType,
            args: {id:{type: GraphQLID}},
            resolve(parent, args) {
                return Project.findById(args.id);
            },
        },
    },
});


//To be able to use this we need to export this as a GraphQLSchema
module.exports = new GraphQLSchema ({
    query:RootQuery
})