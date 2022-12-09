export default WeatherIcon;
declare function WeatherIcon({ title, path, size, viewBox, color }: {
    title: any;
    path: any;
    size: any;
    viewBox: any;
    color: any;
}): any;
declare namespace WeatherIcon {
    namespace propTypes {
        const path: any;
        const title: any;
        const viewBox: any;
        const color: any;
        const size: any;
    }
    namespace defaultProps {
        const color_1: string;
        export { color_1 as color };
        const size_1: number;
        export { size_1 as size };
        const viewBox_1: string;
        export { viewBox_1 as viewBox };
    }
}
