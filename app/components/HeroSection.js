function MainHero(){
    return(
        <div className="hero-section">
            <div className="container flex flex-col items-center justify-center h-full">
                <h1 className="text-8xl font-bebas text-white">Sustainable Development Goals</h1>
                <p className="text-2xl text-white">The 17 Goals to Transform Our World</p>
            </div>
        </div>
    );
}

export default function HeroSection(){
    return(
        <div className="hero-main">
            <MainHero />
        </div>
    );
}