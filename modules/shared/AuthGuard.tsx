import React, { ReactElement, ReactNode, useEffect, useState } from "react"
import { getAuth } from "@firebase/auth"
import Router from "next/router"

interface AuthGuardProps {
   children: JSX.Element;
   redirectUrl: string;
   authenticationType: string; 
}

const auth = getAuth()

export const AuthGuard = ({ children, redirectUrl, authenticationType }: AuthGuardProps): JSX.Element | null => {

    const [isLoading, setIsLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setIsLoading(false)
            setIsAuthenticated(!!user)
        })

        return () => {      
            unsubscribe()
        }
    } , [])

    if (isLoading) {    
        return null
    }
    
    if (!isAuthenticated && authenticationType == "requiresAuthentication") {
        Router.push(redirectUrl)
    } else if (isAuthenticated && authenticationType == "redirectIfAuthenticated") {
        Router.push(redirectUrl)        
    }

    return children
}
