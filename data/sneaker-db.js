const sneakers = [
    {name: 'Air Jordan 1 - Royal', owned: true},
    {name: 'Air Jordan 1 - Black Toe', owned: false},
    {name: 'Air Jordan 3 - Black Cement', owned: true,}
];

module.exports = {
    getAll: () => {
        return sneakers;
    }
};