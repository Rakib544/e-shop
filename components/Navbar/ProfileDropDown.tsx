import React from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react'
import { handleSignOut } from '../../lib/auth';
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const adminOption = [
    {
        link: '/addproduct',
        text: 'Add Product'
    },
    {
        link: '/allProducts',
        text: 'Manage Products'
    },
    {
        link: '/allorders',
        text: 'All Orders'
    }
]

const userOption = [
    {
        link: '/userOrders',
        text: 'User Order'
    }
]
type Props = {
    email: string
}

const ProfileDropDown = ({ email }: Props): JSX.Element => {
    const [adminList, setAdminList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/allAdmins')
            .then(res => res.json())
            .then(data => setAdminList(data))
    }, [])

    const isAdmin = adminList.find(admin => admin.data.email === email);

    return (
        <Menu as="div" className="ml-3 relative">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </Menu.Button>
                    </div>
                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                            {isAdmin
                                ? (
                                    <>
                                        {
                                            adminOption?.map(option => (
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link href={option.link}>
                                                            <a
                                                                className={classNames(
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                                                )}
                                                            >
                                                                {option.text}
                                                            </a>
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            ))
                                        }
                                    </>
                                )
                                : (
                                    <>
                                        {
                                            userOption?.map(option => (
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link href={option.link}>
                                                            <a
                                                                className={classNames(
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                                                )}
                                                            >
                                                                {option.text}
                                                            </a>
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            ))
                                        }
                                    </>
                                )
                            }
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block w-full text-left px-4 py-2 text-sm text-gray-700'
                                        )}
                                        onClick={handleSignOut}
                                    >
                                        Sign out
                                    </button>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
};

export default ProfileDropDown;