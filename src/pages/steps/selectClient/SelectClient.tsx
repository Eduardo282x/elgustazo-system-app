import { TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const SelectClient = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full'>

            <p className='text-[#1976d2] font-bold text-2xl mb-4'>Seleccionar Cliente</p>
            <div className="flex items-center justify-center w-full">
                <TextField label="Buscar cliente" variant="outlined" className='w-[90%]' />
                <IconButton color='primary'>
                    <AddIcon />
                </IconButton>
            </div>

        </div>
    )
}
