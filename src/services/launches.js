const API_URL = 'https://api.spacexdata.com/v3';

export async function getAllLaunches(){
    try {
        const response = await fetch(`${API_URL}/launches`);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error)
    }
}

export async function getLunchByFlightNumber(fligthNumber){
    try {
        const response = await fetch(`${API_URL}/launches/${fligthNumber}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}