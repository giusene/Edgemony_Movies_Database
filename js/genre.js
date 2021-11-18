import { List } from './list.js';

export function filterGen(gen, dataTemp) {
    const dataFilt = dataTemp.filter((movie) => movie.genre === gen);
    List(dataFilt)
}