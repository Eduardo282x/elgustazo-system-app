import './cardFood.css';

export const CardFoods = () => {
    return (
        <div className="flex flex-col items-center justify-between py-8 px-6 w-[40%] h-[15rem] bg-gray-300 rounded-xl cursor-pointer">
            <div className="imgFood"></div>
            <div className="flex items-center justify-between w-full">
                <p>Hamburguesa de Pollo</p>
                <p>Precio: 4,00$</p>
            </div>
        </div>
    )
}
