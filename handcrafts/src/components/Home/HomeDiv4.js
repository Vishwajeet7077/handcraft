import React from "react";
import { useState, useEffect } from "react";
import '../styles/homediv4.css';
import axios from "axios";
import ServiceCards from "./serviceDiv";

const ServicesMeta = process.env.REACT_APP_SERVICES_API;
function HomeDiv4() {

    // const ServicesMeta = "http://localhost:1030/services";

    const [serviceDiv, setServiceDiv] = useState([]);

    useEffect(() => {
        axios.get(ServicesMeta)
            .then((response) => {
                setServiceDiv(response.data);
            })
            .catch((error) => {
                console.log("Home Div 4",error);
            });
    }, []);

    const toUpperCase = (str) => {
        return str.toUpperCase();
    };
    return (
        <div>{
            serviceDiv.map((item) => (
                <div className="max-h-max border-2 border-slate-400 m-3 p-4  rounded-lg grid-col-3 " key={item.id}>
                    <h1 className="font-semibold  ml-10 font-playwrite-fr-moderne">{toUpperCase(item.id)}</h1>
                    <div className="items-center max-h-max flex w-full justify-center">
                        <ServiceCards serviceName={item.id} />
                    </div>
                </div>
            ))
        }
        </div>

    );
}

export default HomeDiv4;