/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';


const Carts = ({ selectedCard, remaining, totalExpenseHour }) => {

    return (
        <div className='w-1/4 ml-8 bg-white p-2 rounded-lg'>
            <div>
                <h4 className="text-indigo-500 font-bold border-b-2 p-4">Credit Hour Remaining {remaining} hr </h4>
                
                <h3 className="text-2xl mb-2 font-semibold p-4">Course Name</h3>
                {
                    selectedCard.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                    ></Cart>)
                }
            </div>
            <div className='mt-2'>
            <h4 className='font-semibold border-t-2 p-4'>Total Expense Time : {totalExpenseHour}</h4>
            </div>
        </div>
    );
};
Carts.propTypes = {
    carts: PropTypes.object
}
export default Carts;