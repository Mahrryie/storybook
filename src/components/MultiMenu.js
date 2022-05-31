import React from 'react';

const MultiMenu = ({item, menu, onClick, isSubOpen = false}) => {
    console.log('menu', menu)
    return (
        <div className={isSubOpen ? 'main-navigation-menu-multi sub-opened' : 'main-navigation-menu-multi'}>
            <p className='title' onClick={onClick}>
                <span>{item.title}</span>
                <svg className='icon-chevron-svg' width='26' height='14' viewBox='0 0 26 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M24 2L13 12L2 2' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>
</svg>

            </p>
            <div className='sub-links-container'>
                {menu.get(item).map((item) => {
                    return (
                        <a href={item.link?.uri} key={item.title} className='link'>{item.title}</a>
                    );
                })}
            </div>
        </div>
    );
};

export default MultiMenu;
