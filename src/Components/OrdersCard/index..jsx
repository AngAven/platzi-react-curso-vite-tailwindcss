import {ChevronRightIcon} from "@heroicons/react/24/solid/index.js";

// eslint-disable-next-line react/prop-types
const OrdersCard = ({date, totalPrice, totalProducts}) => {
    return (
        <div className={'flex items-center overscroll-y-auto border-black w-80 p-4 border-2 rounded-lg mb-4'}>
            <div className={'flex justify-between w-full'}>
                <p className={'flex flex-col'}>
                    <span className={'font-light'}>{new Date(date).toLocaleDateString()}</span>
                    <span className={'font-light'}>{totalProducts} articles</span>
                </p>
                <p className={'flex items-center gap-6'}>
                    <span className={'font-medium text-2xl'}>${totalPrice}</span>
                    <ChevronRightIcon className={'h-6 w-6 text-black cursor-pointer'}/>
                </p>
            </div>
        </div>
    );
};

export {OrdersCard};