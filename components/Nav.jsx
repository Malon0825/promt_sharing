"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { signIn, signOut, useSession, getProvider } from 'next-auth/react';


const Nav = () => {
    const isUserLogIn = true;
    const [providers, setProviders] = useState(null);
    const [toggleDropDown, setToggleDropDown] = useState(false);

    
    useEffect(() => {
        const setProviders = async () => {
            const response = await getProvider();
            setProviders(response);
        }
        
        setProviders();
    }, [])
    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2">
                <Image 
                    src="/assets/images/logo.svg"
                    alt="Promptopia Logo"
                    width={30}
                    height={30}
                    className="object-contain"/>
                <p className="logo_text">Promtopia</p>
            </Link>
            {/* Desktop Navigation View */}
            <div className="sm:flex hidden">
                {isUserLogIn ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt"
                            className="black_btn">
                            Create Post
                        </Link>
                        <button className="outline_btn"
                            type="button"
                            onClick={ signOut }>
                            Sign Out
                        </button>
                        <Link href="/profile" className="flex gap-2">
                            <Image 
                                src="/assets/images/logo.svg"
                                alt="Profile"
                                width={37}
                                height={37}
                                className="rounded-full"/>
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers && 
                        Object.values(providers).map((provider) => (
                            <button 
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="black_btn">
                                Sign In
                            </button>
                        ))}
                    </>
                )}
            </div>

            {/* Mobile Navigation View */}

            <div className="sm:hidden flex relative">
                {isUserLogIn ? (
                    <div className="flex">
                         <Image
                            src="/assets/images/logo.svg"
                            alt="Profile"
                            width={37}
                            height={37}
                            className="rounded-full" 
                            onClick={() => setToggleDropDown((prev) => !prev)}/>                           
                    </div>
                ) : (
                    <>
                    {providers && 
                    Object.values(providers).map((provider) => (
                        <button 
                            type="button"
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                            className="black_btn">
                            Sign In
                        </button>
                    ))}
                </>  
                )}
            </div>
        </nav>
    )
}

export default Nav