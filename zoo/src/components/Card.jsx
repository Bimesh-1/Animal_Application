
import { Link } from 'react-router-dom';
import './css/card.css';

const Card = ({ name, likes, removeCard, addLikes, removeLikes }) => {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <img src={`https://source.unsplash.com/400x400/?${name}`} />
            <button onClick={removeLikes}>
                <span className="material-symbols-outlined">heart_minus</span>
            </button>
            <p>{likes}</p>
            <button onClick={removeCard}>
                <span className="material-symbols-outlined">cancel</span>
            </button>
            <button onClick={addLikes}>
                <span className="material-symbols-outlined">heart_plus</span>
            </button>

            <Link to={name}>See more</Link>
        </div >
    );
};

export default Card;