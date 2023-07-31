import {usePosts} from "api/usePosts";
import Sidebar from "../components/sidebar";
import MenuTop from "../components/menu-top";


export default function Layout({ children }) {
    const {isLoading, isError} = usePosts(); // Use the custom hook
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading posts.</div>;
    }

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div>
                <MenuTop/>

                <Sidebar/>

                <div className="lg:pr-72">

                    <main className="py-10">
                        <div className="px-4 sm:px-6 lg:px-8">
                            {/*Your content */}

                            <main>{children}</main>

                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}




