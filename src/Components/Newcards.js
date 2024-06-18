import React, { useState } from 'react';
import './Newcards.css';
import Malibu from "../assets/Sedan/Chevrolet Malibu.jpeg"
import Fusion from "../assets/Sedan/Ford Fusion.jpeg"
import Honda from "../assets/Sedan/Honda Accord.jpeg"
import Sonata from "../assets/Sedan/Hyundai Sonata.jpeg"
import Optima from "../assets/Sedan/Kia Optima.jpeg"
import Mazda6 from "../assets/Sedan/Mazda6.jpeg"
import Altima from "../assets/Sedan/Nissan Altima.jpeg"
import Subaru from "../assets/Sedan/Subaru Legacy.jpeg"
import Toyota from "../assets/Sedan/Toyota Camry.jpeg"
import Volkswagen from "../assets/Sedan/Volkswagen Passat.jpeg"
import next from "../assets/next.png"

import Golf from "../assets/Hatchback/download (10).jpeg"
import Ford from "../assets/Hatchback/download.jpeg"
import Honda1 from "../assets/Hatchback/download (1).jpeg"
import Toyota1 from "../assets/Hatchback/download (2).jpeg"
import Mazda3 from "../assets/Hatchback/download (3).jpeg"
import Hyundai from "../assets/Hatchback/download (4).jpeg"
import KiaRio from "../assets/Hatchback/download (5).jpeg"
import Spark from "../assets/Hatchback/download (6).jpeg"
import Cooper from "../assets/Hatchback/download (7).jpeg"
import Subaru1 from "../assets/Hatchback/download (8).jpeg"



function Newcards() {
    const [activeCard, setActiveCard] = useState('sedan');

    const handleCardClick = (card) => {
        setActiveCard(card);
    };

    const Hatchback = [
        { img: Golf, name: 'Volkswagen Golf', fuel: 'benzin and gibrid' },
        { img: Ford, name: 'Ford Focus', fuel: 'benzin and gibrid' },
        { img: Honda1, name: 'Honda Civic Hatchback', fuel: 'benzin and gibrid' },
        { img: Toyota1, name: 'Toyota Yaris', fuel: 'benzin and gibrid' },
        { img: Mazda3, name: 'Mazda3 Hatchback', fuel: 'benzin and gibrid' },
        { img: Hyundai, name: 'Hyundai i30', fuel: 'benzin and gibrid' },
        { img: KiaRio, name: 'Kia Rio Hatchback', fuel: 'benzin and gibrid' },
        { img: Spark, name: 'Chevrolet Spark:', fuel: 'benzin and gibrid' },
        { img: Cooper, name: 'Mini Cooper', fuel: 'benzin and gibrid' },
        { img: Subaru1, name: 'Subaru Impreza Hatchback:', fuel: 'benzin and gibrid' },
    ]


    const Sedan = [
        { img: Malibu, name: 'Chevrolet Malibu', fuel: 'benzin and gibrid' },
        { img: Fusion, name: 'Ford Fusion', fuel: 'benzin and gibrid' },
        { img: Honda, name: 'Honda Accord', fuel: 'benzin and gibrid' },
        { img: Sonata, name: 'Hyundai Sonata', fuel: 'benzin and gibrid' },
        { img: Optima, name: 'Kia Optima', fuel: 'benzin and gibrid' },
        { img: Mazda6, name: 'Mazda6', fuel: 'benzin and gibrid' },
        { img: Altima, name: 'Nissan Altima', fuel: 'benzin and gibrid' },
        { img: Subaru, name: 'Subaru Legacy', fuel: 'benzin and gibrid' },
        { img: Toyota, name: 'Toyota Camry', fuel: 'benzin and gibrid' },
        { img: Volkswagen, name: 'Volkswagen', fuel: 'benzin and gibrid' },
    ]

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
                {activeCard === 'sedan' && <div className="Sedan">
                    <div className="sedan-cart">
                        {
                            Sedan.map((item, index) => (
                                <div key={index} className="sedans">
                                    <img src={item.img} alt={item.name} />
                                    <h2>{item.name}</h2>
                                    <span>{item.fuel}</span>
                                    <button>Explore <img src={next} alt="..." /></button>
                                </div>
                            ))
                        }
                    </div>
                </div>}
                {activeCard === 'hatchback' && <div className="Hatchback">
                    <div className="hatchback-card">
                        {
                            Hatchback.map((item, index) => (
                                <div key={index} className="hatchbacks">
                                    <img src={item.img} alt={item.name} />
                                    <h2>{item.name}</h2>
                                    <span>{item.fuel}</span>
                                    <button>Explore <img src={next} alt="..." /></button>
                                </div>
                            ))
                        }
                    </div>
                    </div>}
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