import { List } from './list.js';

export function filterGen(gen, dataTemp) {
    const dataFilt = dataTemp.filter((movie) => {
        if ([...movie.genres].filter((item) => item === gen).length > 0) {
            return movie
        }
    });
    List(dataFilt)
}