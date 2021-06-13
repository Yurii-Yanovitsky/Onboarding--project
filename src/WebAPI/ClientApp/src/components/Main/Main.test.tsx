import { fireEvent, screen, waitFor, render, act } from "@testing-library/react"
import { City } from "../../models/City";
import Main from "./Main";
import { server } from '../../mocks/server/server';

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('inputTable data is shown in outputTable', () => {
    it('should succeed', async () => {

        const cities: City[] = [
            { name: 'Kharkiv', x: 177, y: 178 },
            { name: 'Kiev', x: 180, y: 124 },
            { name: 'Lviv', x: 210, y: 120 }
        ];

        const { getAllByRole, getByText, findByText } = render(<Main />);

        const forms: HTMLFormElement[] = getAllByRole('form') as HTMLFormElement[]

        for (let i = 0; i < cities.length; i++) {

            const inputs: HTMLCollectionOf<HTMLInputElement> = forms[i].elements as HTMLCollectionOf<HTMLInputElement>

            fireEvent.change(inputs[0], { target: { value: cities[i].name } })
            fireEvent.change(inputs[1], { target: { value: cities[i].x } })
            fireEvent.change(inputs[2], { target: { value: cities[i].y } })
        }

        const btn = getByText(/send/i);

        screen.debug();

        fireEvent.click(btn)

        for (let i = 0; i < cities.length; i++) {

            expect(await findByText(cities[i].name)).toBeInTheDocument();
            expect(await findByText(cities[i].x)).toBeInTheDocument();
            expect(await findByText(cities[i].y)).toBeInTheDocument();
        }

        screen.debug();
    })
})