import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5'
import { IoMailSharp } from 'react-icons/io5'
import { VscTwitter } from 'react-icons/vsc';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto px-20 w-full container">
                <div className="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Company</h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/" className=" hover:underline">About Us</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Contact Us</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Jobs</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Help & Support</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Advertise</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Connect</h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Blog</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">News</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Forum</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Expo</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Real Estate Agents</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Add Property</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Head Office</h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/" className="hover:underline"><IoLocationSharp />Sector F-8, Islamabad, Pakistan</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline"><FaPhoneAlt />0800-ESTATE (378283)</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline"><IoMailSharp />jaazi-enterprises@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Jaazi Enterprises™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                        <a href="/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <FaFacebookF />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <FaInstagram />
                            <span className="sr-only">Instagram page</span>
                        </a>
                        <a href="/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <VscTwitter />
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <FaYoutube />
                            <span className="sr-only">Youtube</span>
                        </a>
                        <a href="/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <FaLinkedin />
                            <span className="sr-only">LinkedIn page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
