export function fetchReducer(state: any, { type, payload }: {
    type: any;
    payload: any;
}): any;
export function formatDate(dte: any, lang: any): any;
export function mapCurrent(day: any, current: any, lang: any): {
    date: any;
    description: any;
    icon: any;
    temperature: {
        current: any;
        min: any;
        max: any;
    };
    wind: any;
    humidity: any;
};
export function mapForecast(forecast: any, lang: any): {
    date: any;
    description: any;
    icon: any;
    temperature: {
        min: any;
        max: any;
    };
    wind: any;
    humidity: any;
}[];
export function mapData(daysData: any, current: any, lang: any): {
    location: any;
    forecast: {
        date: any;
        description: any;
        icon: any;
        temperature: {
            min: any;
            max: any;
        };
        wind: any;
        humidity: any;
    }[];
    current: {
        date: any;
        description: any;
        icon: any;
        temperature: {
            current: any;
            min: any;
            max: any;
        };
        wind: any;
        humidity: any;
    };
};
export default useWeatherBit;
declare function useWeatherBit(options: any): {
    data: any;
    isLoading: any;
    errorMessage: any;
    fetchData: () => Promise<void>;
};
