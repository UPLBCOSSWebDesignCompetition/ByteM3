import React from 'react';

const Header = () => {
    return (
        <header className='top-0 z-[20] mx-auto flex w-full justify-between'> 
            <img src="/logo3.svg" alt="Logo" width={75} height={75} />
            <div className="flex-grow justify-center" style={{ borderTop: '5px solid white' }}></div>
            <img src="/menu.svg" alt="Menu" width={37} height={37}/>
            <div className='z-50 fixed top-[90px] right-[335px] cursor-pointer '>
            </div>
        </header>
    );
};

export default Header;