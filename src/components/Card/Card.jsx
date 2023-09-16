

const Card = ({card}) => {
    const {name, cover,credit_time_hours,body,price}=card;
    
    return (
        <div className="space-y-3 bg-white p-4 rounded-lg">
            <img src={cover} alt="" />
            <h2 className="text-xl font-semibold">{name}</h2>
            <p>{body}</p>
            <div className="flex justify-between items-center">
                <p>$ Price : {price}</p>
                <p> Credit : {credit_time_hours} hr</p>
            </div>
            <button className="text-white bg-indigo-500 w-full p-2 rounded">Select</button>
        </div>
    );
};

export default Card;