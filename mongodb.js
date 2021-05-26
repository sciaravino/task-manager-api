// CRUD operations
// /Users/sciaravino/mongodb/bin/mongod --dbpath=/Users/sciaravino/mongodb-data
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const  { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    } 

    const db = client.db(databaseName)
    
    db.collection('users').deleteOne({ 
        _id: new ObjectID("6054b6ebe4d6100ed96d6e49")
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    
    // db.collection('users').updateOne({ 
    //     _id: new ObjectID("6054c559d4b25f371bd44aa8") 
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // const updatePromise = db.collection('users').updateOne({ 
    //     _id: new ObjectID("6054c559d4b25f371bd44aa8") 
    // }, {
    //     $set: {
    //         name: 'Elise',
    //         age: 14
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("6054c559d4b25f371bd44aa8") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 24 }).toArray((error, users) => {
    //     console.log(users)
    // })



    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Sal',
    //     age: 24
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Sal',
    //         age: 24
    //     }, {
    //         name: 'Pete',
    //         age: 21
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users')
    //     }

    //     console.log(result.ops)
    // })
})
