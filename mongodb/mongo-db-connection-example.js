/**
 * EXAMPLE:
 * This is an example of a connection using the native mongodb client
 * TODO: Create abstraction layer
 * TODO: Promisify these methods if a promisified version is not available
 * TODO: Create pagination for these methods
 */

require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const mongoConnectionString = process.env['DB_CONNECTION_STRING'];

const dbname = 'mock';

const client = new MongoClient(mongoConnectionString, { useNewUrlParser: true });

client.connect(function (err) {
    assert.equal(null, err);
    console.log('Conected successfully to the server');

    const db = client.db(dbname);

    /**
     * TODO: Add an abstraction layer for this example
     * The method bellow has already been called and added the 10 elements to the collection mock.heroes
     */
    // addDocuments(db, (res) => {
    //     console.log('all good.');
    // });

    // findAll(db, () => {
    //     console.log('all is good');
    // });


    /**
     * SORTED ALPHABETICALLY, SKIPING FIRST THREE RECORDS, NOT ENCAPSULATED IN METHOD.
     * TODO: Create abstraction layer
     */
    db.collection('heroes').find({}).sort({name: 1}).skip(3).toArray((err, docs) => {
        console.log(docs);
    });


    client.close();
});

function addDocuments(db, callback) {
    const collection = db.collection('heroes');
    collection.insertMany([
        { name: 'Kratos', origin: 'God of War Series' },
        { name: 'Aloy', origin: 'Horizon Zero Dawn' },
        { name: 'Delsin', origin: 'Infamous: Second Son' },
        { name: 'Geralt', origin: 'The Witcher' },
        { name: 'Spyro', origin: 'Spyro' },
        { name: 'Natan Drake', origin: 'Uncharted Series' },
        { name: 'Bowser', origin: 'Super Mario Series' },
        { name: 'Marcus Fenix', origin: 'Gears of War Series' },
        { name: 'Link', origin: 'Zelda Series' },
        { name: 'John Marston', origin: 'Red Dead Redemption' }
    ], function (err, res) {
        assert.equal(err, null);
        assert.equal(10, res.result.n);
        assert.equal(10, res.ops.length);
        console.log(`Inserted ${res.result.n} documents into the ${collection.name}['heroes'] collection`);
        callback(res);
    });
}

function findAll(db, callback) {
    const collection = db.collection('heroes');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log('found the following records');
        console.log(docs);
        callback(docs);
    });
}