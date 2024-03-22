import React from "react";
import DoneIcon from '@mui/icons-material/Done';
import './completed.css'

export const Completed = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-5">
            <p className="text-[#f4b726] text-2xl font-bold">Pedido completado</p>

            <div className="styleDone">

                <DoneIcon sx={{fontSize: 80}} color="primary" />
            </div>
        </div>
    );
};
