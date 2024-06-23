import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
    interface Session {
        user: User;
    }

    interface User {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        isAdmin: boolean,
    }

}

declare module 'next-auth/jwt' {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        user: User;
    }

    interface User {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        isAdmin: boolean,
    }
}