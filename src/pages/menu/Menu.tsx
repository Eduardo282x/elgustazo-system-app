import { CustomBtnMenu } from '../../components/customButtons/CustomBtnMenu'

export const Menu = () => {
    return (
        <div className='flex flex-col items-center pt-24 justify-start w-full h-screen'>
            <h1 className=' text-red-600 font-bold text-4xl my-8'>Menu El gustazo</h1>
            <div className="flex flex-col items-center gap-5 w-full">
                <CustomBtnMenu icon={"tomar"} title={"Tomar Pedido"} redirect={'/pedidos'}></CustomBtnMenu>
                <CustomBtnMenu icon={"menu"} title={"Menu"} redirect={'/'}></CustomBtnMenu>
            </div>
        </div>
    )
}
