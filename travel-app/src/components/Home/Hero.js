import beach from '../../images/beach_hero.jpeg'

function Hero() {
    return (
        <div className="hero-container container mt-4">
            <img className='hero-image' src={beach} alt='beach' width="100%" />
            <div className='hero-text container'>
                <h1 className="h1 hero-heading">Travel App</h1>
                <h2 className="h2 hero-details">Plan, Budget, and Travel Prepared</h2>
                <h2 className='h2 hero-details'>with the help of our convenient tools.</h2>
            </div>
        </div>
    )
}

export default Hero;