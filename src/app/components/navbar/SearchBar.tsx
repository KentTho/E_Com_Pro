"use client"
import { Search } from 'lucide-react';
import {useRouter} from "next/navigation";




const SearchBar = () => {


    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;


    if(name){
        router.push(`/list?name=${name}`)
    }
    }

    return (
        <form
            onSubmit={handleSearch}
            className="group px-2.5 py-0 w-[40px] h-[40px] bg-white shadow-md border border-gray-300 rounded-full flex items-center transition-all duration-300 hover:w-[220px]"
        >
            <button
                type="submit"
                className="flex items-center justify-center text-gray-600 group-hover:text-blue-600 transition duration-300 ease-in-out transform group-hover:scale-110"
            >
                <Search className="w-[18px] h-[18px]" />
            </button>
            <input
                name="name"
                type="text"
                placeholder="Search..."
                className="ml-2 opacity-0 w-0 group-hover:opacity-100 group-hover:w-full transition-all duration-300 outline-none text-[16px] bg-transparent text-black font-normal"
            />
        </form>

    )
}

export default SearchBar