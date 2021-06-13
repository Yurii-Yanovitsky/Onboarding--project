import { Component } from 'react';
import InputTable from './Tables/InputTable/InputTable';
import OutputTable from './Tables/OutputTable/OutputTable';
import { City } from "../../models/City";

type State = {
    cities: City[]
}

class Main extends Component<any, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            cities: []
        }
    }

    handleSubmit(data: City[]) {
        this.setState({ cities: [...this.state.cities, ...data] });
    }

    render() {
        return (
            <div>
                <InputTable key='inputTable' rowCount={5} onSubmit={this.handleSubmit.bind(this)} />
                <OutputTable key='outTable' cities={this.state.cities} />
            </div>
        )
    }
}

export default Main
