import { Address } from './address';

export interface People {
    id: string;
    name: string;
    email: string;
    profilePicture: string;
    userId: string;
    canDrive: boolean;
    seats: number;
    isHost?: boolean;
    location: {
        address: Address;
        latlng: {
            lat: double;
            lng: double;
        };
    };
}
