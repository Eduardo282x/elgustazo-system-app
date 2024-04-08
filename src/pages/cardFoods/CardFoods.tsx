import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import "./cardFood.css";

export const CardFoods = () => {
    const [selected, setSelected] = useState(false);
    const [classCircle, setClassCircle] = useState('btnAdd');

    const setIcon = (add: boolean) => {
        if (add == true) return <CloseIcon sx={{color: '#000'}}/>
        if (add == false) return <AddIcon sx={{color: '#000'}}/>
    }

    const changeIcon = () => {
        
        const valueIcon = selected;
        setClassCircle(!valueIcon ? 'btnAdd btnClose' : 'btnAdd');
        setSelected(!valueIcon);
    }

    return (
        <div onClick={changeIcon} className="flex flex-col items-center justify-between shadow-2xl py-4 px-6 w-[14rem] h-[14rem] bg-[#fff] rounded-xl cursor-pointer relative">
            <div className="imgFood"></div>
            
            <div className="flex flex-col items-start justify-between w-full">
                <p className="font-bold">Hamburguesa de Pollo</p>
                <p className="font-bold text-[18px] text-[#ffdb27]">4,00$</p>
            </div>

            <div className={classCircle}>
                <IconButton>
                    {setIcon(selected)}
                </IconButton>
            </div>
        </div>
    );
};
