import PropTypes from 'prop-types';

const Cart = ({cart}) => {
    const {name}= cart;
    return (
        <div className='px-4'>
            <h2 className="">{name}</h2>
        </div>
    );
};
Cart.propTypes ={
    cart:PropTypes.object
}
export default Cart;