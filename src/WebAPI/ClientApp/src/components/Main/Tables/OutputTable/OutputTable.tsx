import { Component } from "react";
import { City } from "../../../../models/City";
import OutputRow from "./OutputRow/OutputRow";
import Header from "../Header/Header";
import "../Table.css";

type Props = {
    cities: City[]
}

class OutputTable extends Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    renderRows() {
        return this.props.cities.map((city, index) => {
            return <OutputRow key={index} id={`${index}`} value={city} />
        })
    }

    render() {
        return (
            <div className='table-wrapper'>
                <h2>Cities Output</h2>
                <div className='table'>
                    <Header key='header' className='header' values={['City', 'X', 'Y']} />
                    {this.renderRows()}
                </div>
            </div >
        )
    }
}

export default OutputTable;