interface Weather {
    id: number; 
    main: string; 
    description: string; 
    icon: string; 
}

interface Main {
    temp: number; 
    temp_min: number; 
    temp_max: number; 
    pressure: number; 
    humidity: number; 
}

interface Sys {
    pod: 'd' | 'n';
}

interface Wind {
    speed: number;
    deg: number;
    gust?: number; 
}

export interface WeatherData {
    clouds: {
        all: number; 
    };
    dt: number;
    dt_txt: string; 
    main: Main;
    pop: number; 
    sys: Sys;
    visibility: number; 
    weather: Weather[];
    wind: Wind; 
}