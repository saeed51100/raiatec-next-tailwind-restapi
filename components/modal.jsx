// components/modal.jsx
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import ListOfPost from "components/list-of-opst";

export default function SidebarModal({ open, onClose }) {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50 lg:hidden" onClose={onClose}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80"/>
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="relative ml-0 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute right-full top-0 flex w-16 justify-center pt-5">
                                        <button type="button" className="-m-2.5 p-2.5"
                                                onClick={() => setSidebarOpen(false)}>
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </Transition.Child>
                                {/* Sidebar component, swap this element with another sidebar if you like */}
                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                                    <div className="flex h-16 shrink-0 items-center">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <ListOfPost/>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Dialog>
        </Transition.Root>
    );
}
