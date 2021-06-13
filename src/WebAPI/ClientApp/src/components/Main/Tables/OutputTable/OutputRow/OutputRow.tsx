import { City } from "../../../../../models/City";
import Cell from "../../Cell/Cell";

type Props = {
    id: string,
    value: City
}

const OutputRow = ({ id, value }: Props) => {

    function renderCells() {
        const cells = [];

        for (const key in value) {

            if (key === 'id') {
                continue;
            }

            cells.push(<Cell key={key} className='cell'>{`${value[key]}`}</Cell>)
        }

        return cells
    }

    return (
        <div key={id} className='row'>
            {renderCells()}
        </div>
    )
};

export default OutputRow;