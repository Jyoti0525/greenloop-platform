
// Types
export interface User {
  name: string;
  email: string;
  role: string;
  credits: number;
  impact: {
    waste: number;
    co2: number;
  };
}

// Check if user is logged in
export const isLoggedIn = (): boolean => {
  const userString = localStorage.getItem("jaivak_user");
  return !!userString;
};

// Get current user
export const getCurrentUser = (): User | null => {
  const userString = localStorage.getItem("jaivak_user");
  if (!userString) return null;
  
  try {
    return JSON.parse(userString) as User;
  } catch (error) {
    console.error("Error parsing user data:", error);
    return null;
  }
};

// Login user
export const loginUser = (userData: User): void => {
  localStorage.setItem("jaivak_user", JSON.stringify(userData));
  // Fire a storage event so other tabs can update
  window.dispatchEvent(new Event("storage"));
};

// Logout user
export const logoutUser = (): void => {
  localStorage.removeItem("jaivak_user");
  // Fire a storage event so other tabs can update
  window.dispatchEvent(new Event("storage"));
};

// Update user data
export const updateUser = (userData: Partial<User>): User | null => {
  const currentUser = getCurrentUser();
  if (!currentUser) return null;
  
  const updatedUser = { ...currentUser, ...userData };
  localStorage.setItem("jaivak_user", JSON.stringify(updatedUser));
  
  // Fire a storage event so other tabs can update
  window.dispatchEvent(new Event("storage"));
  
  return updatedUser;
};
