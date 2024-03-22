import { IconButton, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { CardFoods } from '../../cardFoods/CardFoods';

export const SelecOrder = () => {

    const optionsFoods: number[] = Array.from({length: 20}, (_, index) => index);

    console.log(optionsFoods);
    

    return (
        <div className='flex flex-col items-center justify-center w-full'>

        <p className=' text-[#f4b726] font-bold text-2xl'>Seleccionar Pedido</p>

        <div className="flex items-center justify-center w-full my-8">
            <TextField label="Pedido" variant="outlined" className='w-[90%]' />
            <IconButton color='primary'>
                <AddIcon />
            </IconButton>
        </div>

        <div className="flex flex-wrap items-center justify-around bg-[#ebebeb] rounded-md shadow-2xl gap-5 w-[95%] h-[40rem] overflow-y-auto overflow-x-hidden py-4 px-1">
            {optionsFoods.map((element: number) => (
                <CardFoods key={element}></CardFoods>
            ))}
        </div>

    </div>
    )
}
