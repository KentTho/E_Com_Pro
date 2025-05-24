"use client"
import { Search } from 'lucide-react';




const SearchBar = () => {




    const handleSearch = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;


    }

    return (
        <form onSubmit={handleSearch}
            className="px-2.5 py-0 w-[40px] h-[40px] hover:w-[220px] bg-white shadow-md border border-gray-300 rounded-full flex group items-center transition-all duration-300"
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
                className="outline-none text-[16px] bg-transparent w-full text-black font-normal px-3"
            />
        </form>
    )
}

export default SearchBar