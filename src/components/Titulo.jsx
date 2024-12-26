import React from 'react'

const Titulo = ({ text, className = '' }) => {
    return (
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#703040] ${className}`}>
            {text}
        </h1>
    )
}

export default Titulo