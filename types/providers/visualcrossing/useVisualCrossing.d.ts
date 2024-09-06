export function formatDate(dte: any, lang: any, tz: any): any;
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
export function mapForecast(days: any, lang: any): {
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
export function mapData(weatherData: any, lang: any): {
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
export default useVisualCrossing;
declare function useVisualCrossing(options: any): {
    data: any;
    isLoading: any;
    errorMessage: any;
    fetchData: () => Promise<void>;
};
