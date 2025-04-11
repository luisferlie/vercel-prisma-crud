'use client';  // Add this at the top

import React from 'react';
import Link from 'next/link';
import { Lobster } from 'next/font/google';  // Change the import

const lobster = Lobster({
    subsets: ["latin"],
    weight: "400",  // Change array to string
    display: 'swap',
});

function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800">
            <h3 className={`${lobster.className} text-lime-100 text-8xl`}>
                NextCRUD
            </h3>
            <ul className='flex gap-3 items-center'>
                <li>
                    <Link href="/" className="text-white hover:text-lime-100 transition-colors">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/new" className="text-white hover:text-lime-100 transition-colors">
                        New Task
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-white hover:text-lime-100 transition-colors">
                        Tasks
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="text-white hover:text-lime-100 transition-colors">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default React.memo(Navbar);
