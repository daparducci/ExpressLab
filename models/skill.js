const skills = [
    {skill: 'HTML5'},
    {skill: 'CSS'},
    {skill: 'Javascript'},
    {skill: 'Node.js'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    skills.splice(id, 1);
}
function create(skill) {
    skills.push(skill);
}

function getOne(id) {
    return skills[id];
}

function getAll() {
    return skills;
}
