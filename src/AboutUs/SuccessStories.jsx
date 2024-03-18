import React, { useState } from 'react';

const cards = [
    { name: 'Card 1', bio: 'This is the bio for card 1.' },
    { name: 'Card 2', bio: 'This is the bio for card 2.' },
    { name: 'Card 3', bio: 'This is the bio for card 3.' },
    { name: 'Card 4', bio: 'This is the bio for card 4.' },
    { name: 'Card 5', bio: 'This is the bio for card 5.' },
];

const SuccessStories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        const nextIndex = (currentIndex + 1) % cards.length;
        setCurrentIndex(nextIndex);
        setTimeout(() => setIsTransitioning(false), 300); // Adjust transition duration as needed
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        const prevIndex =
            currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        setTimeout(() => setIsTransitioning(false), 300); // Adjust transition duration as needed
    };

    const cardStyle = {
        transform: `translateX(calc(-${currentIndex * (100 / 3)}%))`,
        transition: 'transform 0.3s ease-in-out', // Adjust transition properties as needed
        width: `${cards.length * (100 / 3)}%`,
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex" style={cardStyle}>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="w-1/3 flex-shrink-0 flex items-center justify-center p-4 bg-gray-100 rounded-md shadow-md"
                    >
                        <h3>{card.name}</h3>
                        <p>{card.bio}</p>
                    </div>
                ))}
            </div>
            <div className="absolute inset-y-0 flex items-center">
                <button
                    type="button"
                    className="border border-red-500 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-gray-200 rounded-full"
                    
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    
                    <i className="fas fa-chevron-left"></i>
                </button>

                <button
                    type="button"
                    className="border border-red-500 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-gray-200 rounded-full"
                    onClick={handleNext}
                    disabled={currentIndex === cards.length - 3}
                >
                    <img className='size-3' src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-arrow-24.png" alt="" />
                </button>
            </div>
        </div>
    );
};

export default SuccessStories;
