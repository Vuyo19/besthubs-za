import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const contacts = [
    {
        id: 1,
        label: '060 679 000', 
        icon: <FaPhoneAlt color="white" size={20} />
    }, 
    {
        id: 2, 
        label: 'info@besthubs.co.za',
        icon: <FaEnvelope color="white" size={20} />
    }, 
    {
        id: 3,
        label: '21 Grove Avenue, Randburg, Johannesburg',
        icon: <FaMapMarkerAlt color="white" size={20} /> 
    }
]