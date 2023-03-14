export const medias = (min:number, max:number) => {
    return `calc(${min}px + ${max - min} * ((10vw - 320px) / (1280 - 320)))`;
}
