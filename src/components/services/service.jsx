import React, { useState } from 'react';

const Service = () => {
    const [selectedRadio, setSelectedRadio] = useState('btnradio1');
    const [expandedService, setExpandedService] = useState('service1');

    const handleRadioChange = (event) => {
        const selectedBtn = event.target.id;
        setSelectedRadio(selectedBtn);

        const selectedService = selectedBtn.replace('btnradio', 'service');
        setExpandedService(selectedService);
    };

    return (
        <>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    autoComplete="off"
                    checked={selectedRadio === 'btnradio1'}
                    data-bs-toggle="collapse"
                    aria-controls="service1"
                    onChange={handleRadioChange}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                    Service 1
                </label>

                <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autoComplete="off"
                    checked={selectedRadio === 'btnradio2'}
                    data-bs-toggle="collapse"
                    aria-controls="service2"
                    onChange={handleRadioChange}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">
                    Service 2
                </label>

                <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio3"
                    autoComplete="off"
                    checked={selectedRadio === 'btnradio3'}
                    data-bs-toggle="collapse"
                    aria-controls="service3"
                    onChange={handleRadioChange}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio3">
                    Service 3
                </label>

                <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio4"
                    autoComplete="off"
                    checked={selectedRadio === 'btnradio4'}
                    data-bs-toggle="collapse"
                    aria-controls="service4"
                    onChange={handleRadioChange}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio4">
                    Service 4
                </label>

                <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio5"
                    autoComplete="off"
                    checked={selectedRadio === 'btnradio5'}
                    data-bs-toggle="collapse"
                    aria-controls="service5"
                    onChange={handleRadioChange}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio5">
                    Service 5
                </label>

                <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio6"
                    autoComplete="off"
                    checked={selectedRadio === 'btnradio6'}
                    data-bs-toggle="collapse"
                    aria-controls="service6"
                    onChange={handleRadioChange}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio6">
                    Service 6
                </label>
            </div>
            <div className={`collapse${expandedService === 'service1' ? ' show' : ''}`} id="service1">
                <div className="card card-body">Service 1 Info</div>
            </div>
            <div className={`collapse${expandedService === 'service2' ? ' show' : ''}`} id="service2">
                <div className="card card-body">Service 2 Info</div>
            </div>
            <div className={`collapse${expandedService === 'service3' ? ' show' : ''}`} id="service3">
                <div className="card card-body">Service 3 Info</div>
            </div>
            <div className={`collapse${expandedService === 'service4' ? ' show' : ''}`} id="service4">
                <div className="card card-body">Service 4 Info</div>
            </div>
            <div className={`collapse${expandedService === 'service5' ? ' show' : ''}`} id="service5">
                <div className="card card-body">Service 5 Info</div>
            </div>
            <div className={`collapse${expandedService === 'service6' ? ' show' : ''}`} id="service6">
                <div className="card card-body">Service 6 Info</div>
            </div>
        </>
    );
};

export default Service;
