// Test user credentials for different roles
export const testUsers = {
  student: {
    email: "student@test.com",
    password: "student123",
    role: "student",
    fullName: "John Student"
  },
  teacher: {
    email: "teacher@test.com", 
    password: "teacher123",
    role: "teacher",
    fullName: "Jane Teacher"
  },
  admin: {
    email: "admin@test.com",
    password: "admin123", 
    role: "admin",
    fullName: "Admin User"
  }
} as const;

// Instructions for users
export const testAccountInstructions = `
## Test User Accounts

You can login with these pre-configured accounts:

**Student Account:**
- Email: student@test.com
- Password: student123

**Teacher Account:**
- Email: teacher@test.com
- Password: teacher123

**Admin Account:**
- Email: admin@test.com
- Password: admin123

Each role has access to different dashboard features based on their permissions.
`;