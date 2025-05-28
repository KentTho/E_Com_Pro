"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/app/components/ui/sheet";
import { Menu } from "lucide-react";
import NavbarIcon from "@/app/components/navbar/NavbarIcon";
import MoblieNavIcon from "@/app/components/navbar/moblienav/MoblieNavIcon";


const MobileNav = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full p-0 bg-white shadow-xl">
                <SheetHeader className="border-b p-4 bg-white shadow-xl">
                    <SheetTitle className="text-left">Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col py-4 items-center justify-center">
                    <Link href="/" className="px-4 py-2 text-lg font-medium hover:bg-accent" onClick={() => setOpen((prev) => !prev)}>
                        Home
                    </Link>
                    <Link href="/about" className="px-4 py-2 text-lg font-medium hover:bg-accent" onClick={() => setOpen(false)}>About</Link>
                    <Link href="/pricing" className="px-4 py-2 text-lg font-medium hover:bg-accent" onClick={() => setOpen(false)}>Pricing</Link>
                    <Link href="/contact" className="px-4 py-2 text-lg font-medium hover:bg-accent" onClick={() => setOpen(false)}>Contact</Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
                    <div className="grid gap-2">
                        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
                            <MoblieNavIcon />
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
