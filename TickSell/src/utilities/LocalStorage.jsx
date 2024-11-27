const users = [
  { "name": "User1", "email": "user1@domain.com", "password": "123" },
  { "name": "User2", "email": "user2@domain.com", "password": "123" },
  { "name": "User3", "email": "user3@domain.com", "password": "123" },
  { "name": "User4", "email": "user4@domain.com", "password": "123" },
  { "name": "User5", "email": "user5@domain.com", "password": "123" }
];

export const setLocalStrg = () => {
    localStorage.setItem('users',JSON.stringify(users))
}
export const getLocalStrg = () => {
    const users = JSON.parse(localStorage.getItem('users'))
    return { users }
}
