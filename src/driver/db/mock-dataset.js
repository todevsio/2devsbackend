/**
 * DON'T PANIC! 
 * THIS IS JUST A MOCK. WE ARE GOING TO ENCRYPT AND HASH PASSWORDS AS WELL AS CONNECT TO THE ACTUAL DATABASE
 * 
 */

module.exports = {
    users: [
        { id: 1, username: 'gm50x', password: '123456', role: 'admin', specialty: 'Node JS' },
        { id: 2, username: 'bbmelo', password: '123456', role: 'admin', specialty: '.NET' },
        { id: 3, username: 'vitorbraz', password: '123456', role: 'admin', specialty: 'Back-End' },
        { id: 4, username: 'allan', password: '123456', role: 'admin', specialty: 'Front-End' },
        { id: 5, username: 'boa_morte', password: '123456', role: 'admin', specialty: 'Quality' },
    ],
    roles: [
        { id: 1, desc: 'Admin' },
        { id: 2, desc: 'Author' },
        { id: 3, desc: 'Reader' }

    ],
    articles: [
        { id: 1, title: 'Foo', content: 'Foo is just a test word use by many developers', author: 'gm50x' },
        { id: 2, title: 'Bar', content: 'Bar is just a test word use by many developers', author: 'gm50x' },
        { id: 3, title: 'Bin', content: 'Bin is just a test word use by many developers', author: 'gm50x' },
        { id: 4, title: 'Baz', content: 'Baz is just a test word use by many developers', author: 'gm50x' },
        { id: 5, title: 'Fizz', content: 'Fizz is just a test word use by many developers', author: 'gm50x' },
        { id: 6, title: 'Buzz', content: 'Buzz is just a test word use by many developers', author: 'gm50x' },
    ]
}