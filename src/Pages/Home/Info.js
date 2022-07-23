import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phn from '../../assets/icons/phone.svg'

const info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5  '>

            <InfoCard cardTitle="Ours Locations" bgclass="bg-gradient-to-r from-secondary to-primary " img={marker}></InfoCard>
            <InfoCard cardTitle="Opening Hours" bgclass="bg-info-content" img={clock}></InfoCard>
            <InfoCard cardTitle="Contact US" bgclass="bg-gradient-to-r from-secondary to-primary " img={phn}></InfoCard>

        </div>
    );
};

export default info;