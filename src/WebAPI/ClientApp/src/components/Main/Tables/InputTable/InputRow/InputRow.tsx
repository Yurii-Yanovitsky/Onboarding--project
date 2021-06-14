import { Component } from "react";
import { City } from "../../../../../models/City";
import InputCell from "./InputCell/InputCell";

type Props = {
    id: string,
    className?: string,
    onChange(id: string, city: City): void
}

type State = {
    city: City
}

class InputRow extends Component<Props, State>{
    id: string;
    className?: string;
    onChange: (id: string, city: City) => void;

    constructor(props: Props) {
        super(props)

        this.id = props.id;
        this.className = props.className;
        this.onChange = props.onChange;

        this.state = {
            city: new City('', 0, 0)
        }
    }

    handleChangeRow(fieldName: string, value: string) {

        let newCity: City = Object.assign({}, this.state.city)
        newCity[fieldName] = value;
        this.setState({ city: newCity });

        for (const key in newCity) {

            if (!newCity[key]) {
                return;
            }
        }

        this.onChange(this.id, newCity);
    }

    render() {
        return (
            <div className={this.className} >
                <form role='form'>
                    <InputCell fieldName="name" type='text' className='cell' onChange={this.handleChangeRow.bind(this)} />
                    <InputCell fieldName="x" type='number' className='cell' onChange={this.handleChangeRow.bind(this)} />
                    <InputCell fieldName="y" type='number' className='cell' onChange={this.handleChangeRow.bind(this)} />
                </form>
            </div >
        )
    }
}

export default InputRow;