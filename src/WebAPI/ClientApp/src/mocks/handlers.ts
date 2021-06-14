import { rest } from "msw"
import { Constants } from "../constants/constants"
import { City } from "../models/City";

export const handlers = [
    rest.post<any, any>(Constants.url, (req, res, ctx) => {

        if (ValidateCitySet(req.body)) {

            return res(ctx.status(201), ctx.json(req.body));
        }

        return res(ctx.status(400), ctx.json({ Error: 'Coordinates are invalid' }));
    })
];

function ValidateCitySet(cities: City[]): Boolean {

    let counter = 1;

    for (const city of cities) {

        let leftCities = cities.slice(counter)

        if (leftCities.some((c) => Math.abs(c.x - city.x) < 0.15 || Math.abs(c.y - city.y) < 0.15)) {
            return false;
        }

        counter++;
    }

    return true;
}