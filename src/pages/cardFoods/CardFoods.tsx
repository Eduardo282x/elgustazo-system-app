import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./cardFood.css";

export const CardFoods = () => {
    return (
        <div className="flex flex-col items-center justify-between shadow-2xl py-4 px-6 w-[14rem] h-[14rem] bg-[#fff] rounded-xl cursor-pointer relative">
            <div className="imgFood"></div>
            
            <div className="flex flex-col items-start justify-between w-full">
                <p className="font-bold">Hamburguesa de Pollo</p>
                <p className="font-bold text-[18px] text-[#ffdb27]">4,00$</p>
            </div>

            <div className="btnAdd">
                <IconButton>
                    <AddIcon sx={{color: '#000'}}/>
                </IconButton>
            </div>
        </div>
    );
};
