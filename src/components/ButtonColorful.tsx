import React from 'react';
import { cn } from "../lib/utils";
import { ArrowUpRight } from "lucide-react";
import { Link } from 'react-router-dom';

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    href?: string;
}

export function ButtonColorful({
    className,
    label = "Explore Components",
    href,
    ...props
}: ButtonColorfulProps) {
    const content = (
        <>
            {/* Gradient background effect */}
            <div
                className={cn(
                    "absolute inset-0",
                    "bg-gradient-to-r from-red-600 via-red-500 to-red-400",
                    "opacity-40 group-hover:opacity-80",
                    "blur transition-opacity duration-500"
                )}
            />
            
            {/* Moving border line effect */}
            <div className="absolute inset-0 overflow-hidden rounded-md pointer-events-none">
                <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#ffffff_100%)]" />
                <div className="absolute inset-[1px] bg-omnia-red rounded-[5px]" />
            </div>

            {/* Content */}
            <div className="relative flex items-center justify-center gap-2 z-10">
                <span className="text-white font-heading tracking-wider uppercase text-sm">{label}</span>
                <ArrowUpRight className="w-4 h-4 text-white/90" />
            </div>
        </>
    );

    const baseClassName = cn(
        "relative h-12 px-8 overflow-hidden inline-flex items-center justify-center rounded-md",
        "bg-omnia-red",
        "transition-all duration-200",
        "group hover:scale-105",
        className
    );

    if (href) {
        return (
            <Link to={href} className={baseClassName}>
                {content}
            </Link>
        );
    }

    return (
        <button
            className={baseClassName}
            {...props}
        >
            {content}
        </button>
    );
}
