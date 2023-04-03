/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {title: 'Pulp Fiction', author: 'Quentin Tarantino'},
    {title: 'The Godfather', author: 'Francis Ford Coppola'},
    {title: 'The Silence of the Lambs', author: 'Jonathan Demme'},
    {title: 'Schindlers List', author: 'Steven Spielberg'},
    {title: 'Forrest Gump', author: 'Robert Zemeckis'},
    {title: 'The Lord of the Rings: The Return of the King', author: 'Peter Jackson'},
    {title: 'No Country for Old Men', author: 'Joel and Ethan Coen'},
    {title: 'The Hurt Locker', author: 'Kathryn Bigelow'},
    {title: 'The Kings Speech', author: 'Tom Hooper'},
    {title: 'Argo', author: 'Ben Affleck'}
  ]);
};
