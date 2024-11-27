import React, { createContext, useState, useContext, useReducer } from 'react';

type Action = { type: 'login' } | { type: 'logout' } 
type Dispatch = (action: Action) => void
type LoginProviderProps = { children: React.ReactNode }

const LoginContext = createContext<{loginStatus: boolean; changeLogin: Dispatch} | undefined>(undefined);

function loginReducer(loginstatus: boolean, action: Action) {
    switch (action.type) {
        case 'login': {
            return true
        }
        case 'logout': {
            return false
        }
        default: {
            throw new Error("Unhandled action type: ${action.type}")
        }
    }
}

export function LoginProvider({ children }: LoginProviderProps) {
    const [loginStatus, changeLogin] = useReducer(loginReducer, false)

    const value = { loginStatus, changeLogin }
    return (
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    )
}

export function useLogin() {
    const context = useContext(LoginContext)

    if (context === undefined) {
        throw new Error('useLogin must be used within a LoginProvider')
    }

    return context
}