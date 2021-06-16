import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { useRouter } from 'next/router'
import { formatUser } from '../../lib/auth'
import { useEffect } from 'react';
import firebase from '../../lib/firebase';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { storeUserInfo } from '../../redux/actions/userActions';
import ProfileDropDown from './ProfileDropDown';

const NavBar = (): JSX.Element => {

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(storeUserInfo(formatUser(user)))
            } else {
                dispatch(storeUserInfo({}))
            }
        });
        return () => unsubscribe()
    }, [])

    const router = useRouter();

    const userData = useSelector((state: RootStateOrAny) => state.userInfo.userInfo);
   
    return (
        <Disclosure as="nav" className="bg-gray-800 py-3">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div>
                                <h2 onClick={() => router.push('/')} className="text-white text-2xl font-medium font-italic cursor-pointer">E-shop</h2>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button onClick={() => router.push('/cart')} className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none flex mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span>Cart</span>
                                </button>
                                {
                                    !userData.name
                                        ? (
                                            <button onClick={() => router.push('/signin')} className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none flex mx-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                <span>Login</span>
                                            </button>
                                        )
                                        : <ProfileDropDown email={userData.email}/>
                                }
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}

export default NavBar;