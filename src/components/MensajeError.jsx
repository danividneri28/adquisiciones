import React from 'react'

const MensajeError = ({ children }) => {
    return (
        <div className="text-start text-customRed font-bold uppercase text-sm">
            { children }
        </div>
    )
}

export default MensajeError