'use client'
import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const Departments = [
    { name: 'Aeronautical Engineering', description: '', href: '#', icon: ChartPieIcon },
    { name: 'Civil Engineering', description: '', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Mechanical Engineering', description: '', href: '#', icon: FingerPrintIcon },
    { name: 'Electrical & Electronics Engineering', description: '', href: '#', icon: SquaresPlusIcon },
    { name: 'Electronics & Communication Engineering', description: '', href: '#', icon: ArrowPathIcon },
    { name: 'Science & Humanities', description: '', href: '#', icon: ArrowPathIcon },
    { name: 'Artificial intelligence & machine Learning', description: '', href: '#', icon: ArrowPathIcon },
    { name: 'Computer Science & Engineering', description: '', href: '#', icon: ArrowPathIcon },
    { name: 'Mechatronics Engineering', description: '', href: '#', icon: ArrowPathIcon },
]

const Aboutus = [
    { name: 'About Us', description: 'Learn about our institution, values, and commitment to excellence', href: '#', icon: ChartPieIcon },
    { name: 'Mission ,vision & Qulity Policy', description: 'Our mission, vision, and standards drive excellence.', href: '#', icon: CursorArrowRaysIcon },
    { name: 'From The Chairmans’ Desk', description: 'A message from our Chairman on our journey and future goalss', href: '#', icon: FingerPrintIcon },
    { name: 'From The Principals Desk', description: 'Insights from our Principal on academic excellence and student success', href: '#', icon: SquaresPlusIcon },
    { name: 'About Manarul huda trust', description: 'A legacy of education and empowerment through the Manarul Huda Trust', href: '#', icon: ArrowPathIcon },
]

const Gallery = [
    { name: 'Event Gallery', description: 'Capturing moments of excellence! 📸', href: '#', icon: ChartPieIcon },
    { name: 'Spark 2024', description: 'Igniting innovation and creativity! ⚡', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Hackathon 2024', description: 'Code, build, and innovate!💻', href: '#', icon: FingerPrintIcon },
    { name: 'IEDC Bootcamp 2024', description: 'Sharpen your entrepreneurial skills! 🚀', href: '#', icon: SquaresPlusIcon },
    { name: 'Epoch 2025', description: 'Shaping the future, one step at a time! ⏳', href: '#', icon: ArrowPathIcon },
]




export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white font-inter select-none z-50">
            <nav aria-label="Global" className="mx-auto bg-white flex max-w-full items-center justify-between p-4 lg:px-8 z-50">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 -ml-4 p-0">
                        <span className="sr-only">Ace College of Engineering</span>
                        <img
                            alt=""
                            src="/logos/ACE.png"
                            className="w-auto h-[50px]"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="text-lg font-semibold text-gray-900">
                        Admission
                    </a>
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold text-gray-900">
                            About Us
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {Aboutus.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-2 text-lg hover:bg-gray-50"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>


                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold text-gray-900">
                            Departments
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {Departments.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm/6 hover:bg-gray-50"
                                    >
                                        <div className="flex size-6 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="size-4 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>


                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold text-gray-900">
                            Gallery
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {Gallery.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm/6 hover:bg-gray-50"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>


                    {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </a> */}



                </PopoverGroup>
                <div className="hidden lg:flex flex-row gap-5 lg:flex-1 lg:justify-between mx-20 items-center">
                    <div className="hidden lg:flex flex-row lg:flex-1 items-center gap-1">
                        <div className='bg-indigo-600 p-3  rounded-full h-fit'>
                            MHP
                        </div>
                        <img src='/icons/nac.png' className='w-auto h-[60px]' />
                        <img src='/icons/national.png' className='w-auto h-[50px]' />
                        </div>
                    <img src='/logos/leaf_logo (1).png' className='w-auto h-[65px] absolute top-1 right-1' />
                </div>
            </nav>








            {/* mobile sections */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Ace College of Engineering</span>
                            <img
                                alt=""
                                src="/logos/acecollage.png"
                                className="w-auto h-[40px]"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">


                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Admission
                                </a>






                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        About us
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...Aboutus].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>


                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Department
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...Departments].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>

                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Gallery
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...Gallery].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>

                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    placement
                                </a>

                            </div>
                            {/* <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div> */}
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
