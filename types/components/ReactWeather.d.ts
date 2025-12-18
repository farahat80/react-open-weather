export default ReactWeather;
declare function ReactWeather({ unitsLabels, showForecast, lang, data, locationLabel, isLoading, errorMessage, theme, }: {
    unitsLabels: any;
    showForecast: any;
    lang: any;
    data: any;
    locationLabel: any;
    isLoading: any;
    errorMessage: any;
    theme: any;
}): any;
declare namespace ReactWeather {
    namespace propTypes {
        const data: any;
        const isLoading: any;
        const errorMessage: any;
        const unitsLabels: any;
        const showForecast: any;
        const lang: any;
        const locationLabel: any;
        const theme: any;
    }
    namespace defaultProps {
        const data_1: any;
        export { data_1 as data };
        const locationLabel_1: string;
        export { locationLabel_1 as locationLabel };
        const errorMessage_1: any;
        export { errorMessage_1 as errorMessage };
        const isLoading_1: boolean;
        export { isLoading_1 as isLoading };
        export namespace unitsLabels_1 {
            const temperature: string;
            const windSpeed: string;
        }
        export { unitsLabels_1 as unitsLabels };
        const showForecast_1: boolean;
        export { showForecast_1 as showForecast };
        const lang_1: string;
        export { lang_1 as lang };
        export { defaultTheme as theme };
    }
}
import defaultTheme from "../defaultTheme";
