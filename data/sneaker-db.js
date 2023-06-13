const sneakers = [
    {sneaker: 'Air Jordan 1 - Royal', owned: true},
    {sneaker: 'Air Jordan 1 - Black Toe', owned: false},
    {sneaker: 'Air Jordan 3 - Black Cement', owned: true,}
];

module.exports = {
    getAll: () => {
        return sneakers;
    }
};