import { Component } from "react";
import { Constants } from "../../../../constants/constants";
import { sendRequest } from "../../../../helpers/helpers";
import { City } from "../../../../models/City";
import Header from "../Header/Header";
import Error from "../../../Error/Error"
import InputRow from "./InputRow/InputRow";
import "../Table.css";

type Props = {
    rowCount: number,
    onSubmit(data: any): void
}

type State = {
    rowCount: number,
    cities: Map<string, City>
    error: {
        hasError: boolean,
        message: string
    }
}

class InputTable extends Component<Props, State> {
    onSubmit: (data: any) => void;

    constructor(props: Props) {
        super(props)

        this.onSubmit = props.onSubmit;

        this.state = {
            cities: new Map<string, City>(),
            rowCount: props.rowCount,
            error: {
                hasError: false,
                message: ''
            }
        }
    }

    render() {
        return (
            <div className='table-wrapper'>
                <h2>Cities Input</h2>
                <div className='table' data-testid={'table'}>
                    <Header key='header' className='header' values={['City', 'X', 'Y']} />
                    {this.renderRows()}
                </div>
                <button onClick={this.submit.bind(this)}>Send</button>
                <Error hasError={this.state.error.hasError} setHaseError={(hasError) => this.setState({ error: { hasError: hasError, message: '' } })} >
                    {this.state.error.message}
                </Error>
            </div>
        )
    }

    renderRows() {
        return Array.from(new Array(this.state.rowCount), (_, index) => {

            return (
                <InputRow key={index} id={`${index}`} className='row' onChange={this.handleChange.bind(this)} />
            )
        })
    };

    handleChange(key: string, city: City) {

        const cities = new Map<string, City>(this.state.cities.entries());
        cities.set(key, city);

        this.setState({ cities: cities });
    }

    submit() {
        if (!this.state.cities.size) {
            return;
        }

        const serializedCities = JSON.stringify(Array.from(this.state.cities.values()));

        sendRequest('post', Constants.url, serializedCities)
            .then((data: City[]) => {
                if (data) {
                    this.onSubmit(data);
                }
            })
            .catch(error => this.setState({ error: { hasError: true, message: error.message } }))
    }
}

export default InputTable;