# __\_Mongo DB Integration__

- Created the Atlas Cloud Account
    - Using Free Tier (500 mbs free space)
    - Hosted by AWS in Virginia (There's an option in São Paulo in Google Cloud)
- Added dependencies:
    - mongodb - Native MongoDB driver
    - .env - For dealing with Mongo Connection String which is available in the Cloud Atlas
- Added example file to the project
    - I added an example file in this mongodb folder. This structure will change soon, so it's just a working example of the connection, insertion and retrieval of documents.

# TODO:
- __Abstraction Layer__ for the MongoDB connection and model classes
- __Promisify MongoDB Methods__ so we can use them with Async and Await
- __Paginate Results__ retrieval queries


> Add any items as you guys feel necessary.