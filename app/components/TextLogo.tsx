import React from 'react';

const TextLogo = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-pulse">
                <svg className="h-16 w-16" viewBox="0 0 24 24">
                    <path className="text-gray-900 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 2 L12 22 M4 12 L20 12" />
                </svg>
            </div>
            <h1 className="ml-2 text-2xl font-bold text-gray-900 animate-bounce">Logo</h1>
        </div>
    );
};

export default TextLogo;
