const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLSchema,
GraphQLID,
GraphQLInt,
GraphQLList
 } = graphql;

// dummy data

var books = [ {name: "Ragland reads", genre:"Fantasy", id:"1", authorID: "3"},
  {name: "Ragland 2", genre:"Science", id:"2", authorID: "2"},
  {name: "33 reads", genre:"Fox", id:"3", authorID: "1"}
]

var authors = [
  {name:"Ragland Asir", age:"22", id:"1"},
  {name:"Ragland 2", age:"2", id:"2"},
  {name:"Writer Ragland ", age:"32", id:"3"}
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {type: AuthorType, resolve(parent, args){
      return _.find(authors, {id: parent.authorID});
    }}
  })
});

// Fields are wrapped in function to prevent not defined error catch 22
// explanation ar 1:24:55 https://youtu.be/ed8SzALpx1Q

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books:
    {
      type: new GraphQLList(BookType),
      resolve(parent, args){
        return _.filter(books, {authorID:parent.id})
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from DB
        return _.find(books, {id: args.id})
      }
    },
    author :{
      type: AuthorType,
      args: {id :{ type: GraphQLID}},
      resolve(parent, args){
        return _.find(authors, {id: args.id})
      }
    },
    books : {
      type : new GraphQLList(BookType),
      resolve(parent, args){
        return books
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, arge){
        return authors;
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: {type: GraphQLString},
        id: {type: GraphQLID},
        age: {type: GraphQLInt}
      },
      resolve(parent, args){
        let newAuthor = {
          name: args.name,
          id: args.id,
          age: args.age
        };

        authors.push(newAuthor);

        return newAuthor;
      }
    }
  }
})
module.exports = new GraphQLSchema({ query: RootQuery,
mutation: Mutation
 });
