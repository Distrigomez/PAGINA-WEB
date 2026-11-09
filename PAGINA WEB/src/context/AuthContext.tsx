import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'emprendedor' | 'salon' | 'tienda' | 'detal';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  roleLabel: string;
  city: string;
  phone: string;
  createdAt: string;
  isWholesaleVerified: boolean;
}

interface SavedQuote {
  id: string;
  date: string;
  itemsCount: number;
  totalUnits: number;
  mode: 'mayor' | 'detal';
  summary: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  signup: (data: {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    city: string;
    phone: string;
  }) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  savedQuotes: SavedQuote[];
  saveQuoteToHistory: (quote: Omit<SavedQuote, 'id' | 'date'>) => void;
  isAuthModalOpen: boolean;
  openAuthModal: (initialMode?: 'login' | 'signup') => void;
  closeAuthModal: () => void;
  authModalMode: 'login' | 'signup';
  setAuthModalMode: (mode: 'login' | 'signup') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_STORAGE_USERS_KEY = 'distrigomez_registered_users';
const LOCAL_STORAGE_SESSION_KEY = 'distrigomez_active_session';
const LOCAL_STORAGE_QUOTES_KEY = 'distrigomez_saved_quotes';

// Seed demo users for immediate testing
const DEFAULT_DEMO_USERS: Record<string, { passHash: string; profile: UserProfile }> = {
  'mayorista@distrigomez.com': {
    passHash: 'distri123',
    profile: {
      id: 'usr_demo_1',
      name: 'Salón de Belleza Glamour',
      email: 'mayorista@distrigomez.com',
      role: 'salon',
      roleLabel: 'Peluquería / Salón Mayorista',
      city: 'Barranquilla, Atlántico',
      phone: '315 123 4567',
      createdAt: '2026-01-15',
      isWholesaleVerified: true
    }
  },
  'emprendedora@distrigomez.com': {
    passHash: 'distri123',
    profile: {
      id: 'usr_demo_2',
      name: 'Carolina M. Emprendedora',
      email: 'emprendedora@distrigomez.com',
      role: 'emprendedor',
      roleLabel: 'Distribuidora Independiente',
      city: 'Valledupar, Cesar',
      phone: '310 987 6543',
      createdAt: '2026-02-01',
      isWholesaleVerified: true
    }
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [savedQuotes, setSavedQuotes] = useState<SavedQuote[]>([]);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup'>('login');

  // Initialize stored users and session
  useEffect(() => {
    try {
      const storedUsers = localStorage.getItem(LOCAL_STORAGE_USERS_KEY);
      if (!storedUsers) {
        localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(DEFAULT_DEMO_USERS));
      }

      const activeSession = localStorage.getItem(LOCAL_STORAGE_SESSION_KEY);
      if (activeSession) {
        const parsed = JSON.parse(activeSession);
        setUser(parsed);
      }

      const storedQuotes = localStorage.getItem(LOCAL_STORAGE_QUOTES_KEY);
      if (storedQuotes) {
        setSavedQuotes(JSON.parse(storedQuotes));
      }
    } catch (e) {
      console.error('Failed to load auth session:', e);
    }
  }, []);

  const login = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    const storedUsersRaw = localStorage.getItem(LOCAL_STORAGE_USERS_KEY);
    const usersDb = storedUsersRaw ? JSON.parse(storedUsersRaw) : DEFAULT_DEMO_USERS;

    const account = usersDb[cleanEmail];
    if (!account) {
      return { success: false, error: 'No existe una cuenta registrada con este correo electrónico.' };
    }

    if (account.passHash !== pass) {
      return { success: false, error: 'Contraseña incorrecta. Por favor verifícala e intenta nuevamente.' };
    }

    setUser(account.profile);
    localStorage.setItem(LOCAL_STORAGE_SESSION_KEY, JSON.stringify(account.profile));
    setIsAuthModalOpen(false);
    return { success: true };
  };

  const signup = async (data: {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    city: string;
    phone: string;
  }): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = data.email.trim().toLowerCase();

    if (data.password.length < 6) {
      return { success: false, error: 'La contraseña debe tener al menos 6 caracteres.' };
    }

    const storedUsersRaw = localStorage.getItem(LOCAL_STORAGE_USERS_KEY);
    const usersDb = storedUsersRaw ? JSON.parse(storedUsersRaw) : { ...DEFAULT_DEMO_USERS };

    if (usersDb[cleanEmail]) {
      return { success: false, error: 'Ya existe una cuenta con este correo electrónico. Por favor inicia sesión.' };
    }

    const roleLabels: Record<UserRole, string> = {
      emprendedor: 'Emprendedor Independiente',
      salon: 'Peluquería / Salón de Belleza',
      tienda: 'Tienda de Cosméticos',
      detal: 'Cliente Detal'
    };

    const newProfile: UserProfile = {
      id: `usr_${Date.now()}`,
      name: data.name.trim(),
      email: cleanEmail,
      role: data.role,
      roleLabel: roleLabels[data.role],
      city: data.city.trim(),
      phone: data.phone.trim(),
      createdAt: new Date().toISOString().split('T')[0],
      isWholesaleVerified: data.role !== 'detal'
    };

    usersDb[cleanEmail] = {
      passHash: data.password,
      profile: newProfile
    };

    localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(usersDb));
    setUser(newProfile);
    localStorage.setItem(LOCAL_STORAGE_SESSION_KEY, JSON.stringify(newProfile));
    setIsAuthModalOpen(false);

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_SESSION_KEY);
  };

  const saveQuoteToHistory = (quote: Omit<SavedQuote, 'id' | 'date'>) => {
    const newQuote: SavedQuote = {
      ...quote,
      id: `cot_${Date.now()}`,
      date: new Date().toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setSavedQuotes((prev) => {
      const updated = [newQuote, ...prev].slice(0, 20); // keep last 20
      localStorage.setItem(LOCAL_STORAGE_QUOTES_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const openAuthModal = (initialMode: 'login' | 'signup' = 'login') => {
    setAuthModalMode(initialMode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        savedQuotes,
        saveQuoteToHistory,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        authModalMode,
        setAuthModalMode
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
