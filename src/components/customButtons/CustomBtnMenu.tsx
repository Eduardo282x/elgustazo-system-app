import { CustomBtn } from "../../interfaces/customBtn.interface"
import MenuIcon from '@mui/icons-material/Menu';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './customBtn.css'
import { Link } from "react-router-dom";

export const CustomBtnMenu: React.FC<CustomBtn> = ({ icon, title, redirect }) => {
    const setIcon = (icon: string) => {
        if (icon == 'menu') return <MenuIcon fontSize="large" />
        if (icon == 'tomar') return <PanToolAltIcon fontSize="large" />
    }

    return (
        <Link to={redirect} className="customBtn flex items-center justify-between w-[70%] px-8 py-4 cursor-pointer bg-[#dc261b] rounded-lg  transition-all duration-200 hover:bg-[#ff0101]">
            <div className="flex items-center justify-start gap-5 text-3xl">
                {setIcon(icon)}
                {title}
            </div>

            <div className="animationArrow">
                <ArrowForwardIosIcon />
            </div>
        </Link>
    )
}
