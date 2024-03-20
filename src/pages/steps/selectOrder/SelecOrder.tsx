import { IconButton, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { CardFoods } from '../../cardFoods/CardFoods';

export const SelecOrder = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full'>

        <p className=' text-[#1976d2] font-bold text-2xl'>Seleccionar Pedido</p>

        <div className="flex items-center justify-center w-full my-8">
            <TextField label="Pedido" variant="outlined" className='w-[90%]' />
            <IconButton color='primary'>
                <AddIcon />
            </IconButton>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 w-[95%] h-[40rem] overflow-y-auto">
            <CardFoods></CardFoods>
            <CardFoods></CardFoods>
            <CardFoods></CardFoods>
            <CardFoods></CardFoods>
            <CardFoods></CardFoods>
            <CardFoods></CardFoods>
            <CardFoods></CardFoods>
            <CardFoods></CardFoods>
            <CardFoods></CardFoods>
            <CardFoods></CardFoods>
            <CardFoods></CardFoods>
            <CardFoods></CardFoods>
            <CardFoods></CardFoods>
            <CardFoods></CardFoods>
            <CardFoods></CardFoods>
            <CardFoods></CardFoods>
        </div>

    </div>
    )
}
