let i = 0;
exports.sample = function (req, res) {
    res.status(200).json({ foo: 'bar', fizz: 'buzz', index: i++ });
};