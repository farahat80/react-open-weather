export function formatDate(dte: any, lang: any): any;
export function mapCurrent(day: any, lang: any): {
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
export function mapData(forecastData: any, todayData: any, lang: any): {
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
};
export const SUCCESS: "SUCCESS";
export const FAILURE: "FAILURE";
export function fetchReducer(state: any, { type, payload }: {
    type: any;
    payload: any;
}): any;
export default useOpenWeather;
declare function useOpenWeather(options: any): {
    data: any;
    isLoading: any;
    errorMessage: any;
    fetchData: () => Promise<void>;
};
