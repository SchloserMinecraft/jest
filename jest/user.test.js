

const { addUser, getUser, getActiveUserCount } = require('./user');

describe('User Management', () => {
  beforeEach(() => {
    
    users = [];
  });

  test('Deve adicionar um usuário corretamente', () => {
    const user = { username: 'john_doe', name: 'John Doe' };
    addUser(user);

    
    expect(getUser('john_doe')).toEqual(user);
  });

  test('Deve recuperar as informações do usuário corretamente', () => {
    const user = { username: 'jane_doe', name: 'Jane Doe' };
    addUser(user);

    const retrievedUser = getUser('jane_doe');
    expect(retrievedUser).toEqual(user);
  });

  test('Deve atualizar o número total de usuários ativos corretamente', () => {
    expect(getActiveUserCount()).toBe(2); // Há dois usuarios já adicionados antes, não esquecer disso

    addUser({ username: 'user1', name: 'User One' });
    expect(getActiveUserCount()).toBe(3); 

    addUser({ username: 'user2', name: 'User Two' });
    expect(getActiveUserCount()).toBe(4);
  });
});
