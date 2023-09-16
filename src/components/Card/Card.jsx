import { BsBook } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Card = ({ card,handleSelectedCard }) => {
    const { name, cover, credit_time_hours, body, price } = card;

    return (
        <div className="space-y-3 bg-white p-4 rounded-lg">
            <img src={cover} alt="" />
            <h2 className="text-xl font-semibold">{name}</h2>
            <p>{body}</p>
            <div className="flex justify-between items-center">
                <p>$ Price : {price}</p>
                <div className='flex justify-between items-center'>
                <span><BsBook></BsBook></span>
                <p className='ml-2'> Credit : {credit_time_hours} hr</p>
                </div>
                
            </div>
            <button onClick={()=>handleSelectedCard(card)} className="text-white bg-indigo-500 w-full p-2 rounded">Select</button>
        </div>
    );
};
Card.propTypes={
    card:PropTypes.object.isRequired,
    handleSelectedCard:PropTypes.func
}
export default Card;