import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-xl text-secondary font-bold"> {name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]} </span>
                        : <span className='text-red-500'> Try another Date</span>

                }</p>
                <p> {slots.length}  {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div class="card-actions justify-center">

                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        class="btn btn-sm btn-secondary uppercase text-white">Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;