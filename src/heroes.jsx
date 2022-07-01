import './Hero.css';

function Hero(props) {
    return (
        <div className="hero">
            <img alt='logo' src={props.img}/>
            <h2>{props.name}</h2>
            <div className='skills'><strong>Характеристики: </strong>{props.skills}</div>
            <div className='detail'><strong>Описание: </strong> {props.detail}</div>
            
        </div>
    )
}

export default Hero;