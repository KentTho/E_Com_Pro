import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type SelectContextType = {
    value: string;
    setValue: (value: string) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
};

const SelectContext = createContext<SelectContextType | undefined>(undefined);

function useSelectContext() {
    const ctx = useContext(SelectContext);
    if (!ctx) throw new Error("Select components must be used within a <Select />");
    return ctx;
}

export interface SelectProps {
    value: string;
    onValueChange: (value: string) => void;
    children: ReactNode;
    className?: string; // 👈 Thêm dòng này
}


export function Select({ value, onValueChange, children, className }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        onValueChange(value);
    }, [value, onValueChange]);

    return (
        <SelectContext.Provider value={{ value, setValue: onValueChange, isOpen, setIsOpen }}>
            <div className={`relative inline-block w-full ${className ?? ""}`}>
                {children}
            </div>
        </SelectContext.Provider>
    );
}

interface SelectTriggerProps {
    children: ReactNode;
    className?: string;
}

export function SelectTrigger({ children, className }: SelectTriggerProps) {
    const ctx = useSelectContext();

    return (
        <button
            type="button"
            className={className}
            onClick={() => ctx.setIsOpen(!ctx.isOpen)}
            aria-haspopup="listbox"
            aria-expanded={ctx.isOpen}
        >
            {children}
        </button>
    );
}

interface SelectValueProps {
    placeholder?: string;
}

export function SelectValue({ placeholder }: SelectValueProps) {
    const ctx = useSelectContext();
    return <span>{(ctx.value as string) || placeholder}</span>; // 👈 ép kiểu an toàn
}


interface SelectContentProps {
    children: ReactNode;
}

export function SelectContent({ children }: SelectContentProps) {
    const ctx = useSelectContext();
    if (!ctx.isOpen) return null;

    return (
        <ul
            className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-md border border-gray-300 bg-white shadow-lg"
            role="listbox"
        >
            {children}
        </ul>
    );
}

interface SelectItemProps {
    value: string;
    children: ReactNode;
}

export function SelectItem({ value, children }: SelectItemProps) {
    const ctx = useSelectContext();

    const isSelected = ctx.value === value;

    function handleSelect() {
        ctx.setValue(value);
        ctx.setIsOpen(false);
    }

    return (
        <li
            className={`cursor-pointer select-none px-4 py-2 hover:bg-blue-500 hover:text-white ${
                isSelected ? "bg-blue-600 text-white" : ""
            }`}
            role="option"
            aria-selected={isSelected}
            onClick={handleSelect}
        >
            {children}
        </li>
    );
}
