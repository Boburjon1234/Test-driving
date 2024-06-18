import React, { useState } from 'react';
import './Newcards.css';

function Newcards() {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (card) => {
        setActiveCard(card);
    };

    return (
        <div className='Newcards'>
            <div className="left-card">
                <button onClick={() => handleCardClick('sedan')}>Sedan</button>
                <button onClick={() => handleCardClick('hatchback')}>Hatchback</button>
                <button onClick={() => handleCardClick('coupe')}>Coupe</button>
                <button onClick={() => handleCardClick('ford-fusion')}>Ford Fusion</button>
                <button onClick={() => handleCardClick('pickup-truck')}>Pickup Truck</button>
                <button onClick={() => handleCardClick('luxury-car')}>Luxury Car</button>
                <button onClick={() => handleCardClick('electric-vehicle')}>Electric Vehicle</button>
                <button onClick={() => handleCardClick('hybrid-car')}>Hybrid Car</button>
            </div>
            <div className="right-card">
                {activeCard === 'sedan' && <div className="Sedan">Sedan</div>}
                {activeCard === 'hatchback' && <div className="Hatchback">Hatchback</div>}
                {activeCard === 'coupe' && <div className="Coupe">Coupe</div>}
                {activeCard === 'ford-fusion' && <div className="FordFusion">FordFusion</div>}
                {activeCard === 'pickup-truck' && <div className="PickupTruck">PickupTruck</div>}
                {activeCard === 'luxury-car' && <div className="LuxuryCar">LuxuryCar</div>}
                {activeCard === 'electric-vehicle' && <div className="ElectricVehicle">ElectricVehicle</div>}
                {activeCard === 'hybrid-car' && <div className="HybridCar">HybridCar</div>}
            </div>
        </div>
    );
}

export default Newcards;