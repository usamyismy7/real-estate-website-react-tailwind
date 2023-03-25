import React, { useState } from 'react'
import image from '../../assets/islamabad.jpg'

function Home() {
    const [isOpen2, setOpen2] = useState(false);
    const handleDropDown2 = () => {
        setOpen2(!isOpen2);
    };
    return (
        <>
            {/** HERO SECTION */}
            <section style={{ height: 760 }}>
                <div className='flex justify-center -z-10 overflow-hidden absolute bg-white'>
                    <img className='object-none object-bottom' src={image} alt="wallpaper" />
                </div>
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12">
                    <p className="mb-8 text-lg text-gray-900 lg:text-3xl sm:px-16 xl:px-48 font-semibold">Search properties for sale in Pakistan</p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 w-32">
                            BUY
                        </a>
                        <a href="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-32">
                            SELL
                        </a>
                        <a href="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-32">
                            PROJECTS
                        </a>
                    </div>
                    <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">

                        <form>
                            <div className="flex">
                                <div id="1st-dropdown">
                                    <button id="dropdown-button1" data-dropdown-toggle="dropdown1" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">Islamabad</button>
                                </div>
                                <div id="2nd-dropdown">
                                    <button id="dropdown-button2" data-dropdown-toggle="dropdown2" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button" onClick={handleDropDown2}>Currency <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                                    <div id="dropdown2" className={`absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${isOpen2 ? "block" : "hidden"}`}>
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button2">
                                            <li>
                                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pakistan (PKR)</button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Canada (CAD)</button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">United States (USD)</button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">United Kingdom (GBP)</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="relative w-full">
                                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Location" required />
                                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/** PROJECTS SECTION */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Projects</h1>
                            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Islamabad, B-17</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">54 Lakh to 2.5 Crore, Ideas One</h2>
                                <p class="leading-relaxed text-base">Shops, Flats</p>
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Gadap Town, Surjani Town</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">44 Lakh to 1 Crore, Aziz Skyline</h2>
                                <p class="leading-relaxed text-base">Flats</p>
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Tariq Ismail Road, Lahore</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">2.5 Crore, Eastern Homes</h2>
                                <p class="leading-relaxed text-base">Houses</p>
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">GT Road, Islamabad</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">66 Lakh to 90 Lakh, NORA Residences</h2>
                                <p class="leading-relaxed text-base">Flats</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/** NEWS SECTION */}
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">News</h1>
                            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                    <div class="-my-8 divide-y-2 divide-gray-100">
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span class="font-semibold title-font text-gray-700">DHA Multan opens much-awaited Pakistan Square</span>
                                <span class="mt-1 text-gray-500 text-sm">MARCH 25, 2023</span>
                            </div>
                            <div class="md:flex-grow">
                                <p class="leading-relaxed">Multan: The Defence Housing Authority (DHA) Multan inaugurated the much-awaited Pakistan Square on March 23, …</p>
                                <a class="text-indigo-500 inline-flex items-center mt-4" href="/">Learn More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span class="font-semibold title-font text-gray-700">Jauhar Chowrangi’s Zia Moheyddin flyover opens to traffic</span>
                                <span class="mt-1 text-gray-500 text-sm">MARCH 25, 2023</span>
                            </div>
                            <div class="md:flex-grow">
                                <p class="leading-relaxed">Karachi: Foreign Minister (FM) Bilawal Bhutto Zardari inaugurated the Zia Moheyddin Flyover at Jauhar Chowrangi …</p>
                                <a class="text-indigo-500 inline-flex items-center mt-4" href="/">Learn More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span class="font-semibold title-font text-gray-700">CDA to identify buildings damaged by earthquake</span>
                                <span class="text-sm text-gray-500">MARCH 24, 2023</span>
                            </div>
                            <div class="md:flex-grow">
                                <p class="leading-relaxed">Islamabad: The Capital Development Authority (CDA) Chairman Noor-ul-Amin Mengal has directed the officials of the …</p>
                                <a class="text-indigo-500 inline-flex items-center mt-4" href="/">Learn More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/** BLOG SECTION */}
            <section class="text-gray-600 body-font bg-white dark:bg-gray-900">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Blogs</h1>
                            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden" href="/">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">REAL ESTATE TRENDS - 4 MIN READ</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">FBR’s Amnesty Scheme: Your Last Chance to Secure Ace Property Assets in LHR Without Disclosing Income Source</h2>
                                <p class="mt-1">The FBR’s amnesty scheme that assisted builders and buyers immensely is approaching its final days. The potential investors have to hurry before the time runs out.</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden" href="/">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">REAL ESTATE TRENDS - 3 MIN READ</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Canal Valley Daska Property Sales Meetup – Invest in Your Dream Property</h2>
                                <p class="mt-1">The Canal Valley Daska Property Sales Meetup brings a fantastic opportunity for you to get in-depth details about Canal Valley Daska that makes it the region’s best place …</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden" href="/">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">PROPERTY - 3 MIN READ</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Taking A Closer Look at the Inventory and Pricing Plan of Madison Square, Lahore</h2>
                                <p class="mt-1">The 25-storeyy high mixed-use project Madison Square claims a prominent spot on Mehmood Kasuri Road in Gulberg 3. It features high-in-demand commercial outlets and hotel suites. These units …</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden" href="/">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">LAWS & TAXES - 13 MIN READ</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">A Guide to Calculating Your Zakat for 2023</h2>
                                <p class="mt-1">Here is the step-by-step process that will help you understand how to calculate Zakat on gold and all your other assets for one lunar year.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/** FORUMS SECTION */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Forums</h1>
                            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/3">
                            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">Buying Property</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">11k Topics | 2 New Topics</p>
                                    <a class="mt-3 text-indigo-500 inline-flex items-center" href="/">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">Renting Property</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">556 Topics | 2 New Topics</p>
                                    <a class="mt-3 text-indigo-500 inline-flex items-center" href="/">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/** TESTIMONIAL SECTION */}
            <section className="bg-white text-gray-600 body-font dark:bg-gray-900">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center dark:text-white">Testimonials</h1>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-100 p-8 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                                <p className="leading-relaxed mb-6 dark:text-gray-400">They have better consultation experience of guiding their clients for Real Estate Properties. Very honest and reliable experience.</p>
                                <a href="/" className="inline-flex items-center">
                                    <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900 dark:text-white">Ali Usman</span>
                                        <span className="text-gray-500 text-sm dark:text-gray-400">Islamabad, Pakistan</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-100 p-8 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                                <p className="leading-relaxed mb-6 dark:text-gray-400">Jaazi Enterprises have affordable discounted rates and they always sell valuable properties.</p>
                                <a href="/" className="inline-flex items-center">
                                    <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900 dark:text-white">Shahzaib Malik</span>
                                        <span className="text-gray-500 text-sm dark:text-gray-400">Islamabad, Pakistan</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/** CONTACT SECTION */}
            <section className="bg-white text-gray-600 body-font relative dark:bg-gray-900">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">Contact Us</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-400">If you have any queries, please let us know!</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none rounded text-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                                >Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home