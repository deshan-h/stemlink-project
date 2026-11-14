import { ClerkProvider } from '@clerk/react'
import { replace, useNavigate } from 'react-router-dom';

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
    throw new Error("set VITE_CLERK_PUBLISHABLE_KEY in your env")
}

function ClerkAuthProvider({ children }) {
    const navigate = useNavigate();

    return (
        <ClerkProvider publishableKey={publishableKey}
            routerPush={(to) => navigate(to)}
            routerReplace={(to) => navigate(to, { replace: true })}
            signInUrl="/login"
            signUpUrl="/sign-up"
            signInFallbackRedirectUrl="/"
            signUpFallbackRedirectUrl="/"
            afterSignOutUrl="/login"
        >
            {children}
        </ClerkProvider>
    )
}

export default ClerkAuthProvider