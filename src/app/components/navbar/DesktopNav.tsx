"use client";

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/app/components/ui/navigation-menu";
import {Button} from "@/app/components/ui/button";

const DesktopNav = () => {
    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center space-x-2 text-sm font-medium">
                <NavigationMenuItem>
                    <Link
                        href="/"
                        className="px-4 py-1 rounded-full transition-colors hover:bg-black hover:text-white text-muted-foreground"
                    >
                        Home
                    </Link>
                </NavigationMenuItem>
                {["Shop", "About"].map((item) => (
                    <NavigationMenuItem key={item}>
                        <Link
                            href={`/${item.toLowerCase()}`}
                            className="px-4 py-1 rounded-full transition-colors hover:bg-black hover:text-white text-muted-foreground"
                        >
                            {item}
                        </Link>
                    </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                    <Link
                        href="/contact"
                        >
                        <Button
                            className="rounded-full px-4 py-1 h-auto text-sm bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                            Contact
                        </Button>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default DesktopNav;
