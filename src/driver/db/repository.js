/**
 * TODO: Implement this repository class, should connect with MongoDB Atlas...
 */


module.exports = class Repository {
    constructor(db) {
        this.db = db
    }

    connect(repo) {
        return this.db[repo]
    }
}