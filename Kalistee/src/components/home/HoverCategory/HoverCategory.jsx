import React from 'react';

const HoverCategory = () => {

    return (
        <div className="flex justify-center align-middle gap-2 my-20" >
            <div className="column  border-black border-[2px] rounded-lg">
                <img
                    src="https://ik.imagekit.io/Jivan/Skin2.svg?updatedAt=1736438300506"
                    alt="Skin"
                    onMouseOver={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/Jivan/Skin.svg?updatedAt=1736438308853')}
                    onMouseOut={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/Jivan/Skin2.svg?updatedAt=1736438300506')}
                    className='rounded-lg'
                />
            </div>
            <div className="column  border-black border-2 rounded-lg">
                <img
                    src="https://ik.imagekit.io/Jivan/Hair2.svg?updatedAt=1736438299635"
                    alt="Hair"
                    onMouseOver={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/Jivan/Hair.svg?updatedAt=1736438309775')}
                    onMouseOut={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/Jivan/Hair2.svg?updatedAt=1736438299635')}
                    className='rounded-lg'
                />
            </div>
            <div className="column  border-black border-2 rounded-lg">
                <img
                    src="https://ik.imagekit.io/Jivan/Gum2.svg?updatedAt=1736438299815"
                    alt="Gummies"
                    onMouseOver={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/Jivan/Gum.svg?updatedAt=1736438309450')}
                    onMouseOut={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/Jivan/Gum2.svg?updatedAt=1736438299815')}
                    className='rounded-lg'
                />
            </div>
        </div>
    );
};

export default HoverCategory;
