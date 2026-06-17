    import { usersData as users } from '../mockData/users.js';
  
  export function normalizeEmail(email) {
    return email.trim().toLowerCase();
  }
  
  export function findByEmail(email) {
    const normalized = normalizeEmail(email);
    return users.find((u) => u.email === normalized);
  }
  
  export function emailExists(email) {
    return Boolean(findByEmail(email));
  }
  
  export function createUser({ name, email, passwordHash }) {
    const user = {
      id: users.length + 1,
      name: name.trim(),
      email: normalizeEmail(email),
      password: passwordHash,
    };
    users.push(user);
    return user;
  }

  