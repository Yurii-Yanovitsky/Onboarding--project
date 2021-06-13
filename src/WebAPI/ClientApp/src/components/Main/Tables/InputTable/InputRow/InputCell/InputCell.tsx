import { ChangeEvent, Component } from "react";

type Prop = {
    type?: string,
    fieldName?: string,
    value?: string,
    className?: string,
    onChange?(name: string, value: string): void
}

type State = {
    value?: string
}

class InputCell extends Component<Prop, State> {
    type?: string;
    fieldName?: string;
    className?: string;
    onChange?(name: string, value: string): void;

    constructor(props: Prop) {
        super(props)

        this.type = props.type;
        this.fieldName = props.fieldName;
        this.className = props.className;
        this.onChange = props.onChange;

        this.state = {
            value: props.value ?? ''
        }
    }

    handleChangeCell({ target }: ChangeEvent<HTMLInputElement>) {
        this.setState({ value: target.value });

        if (this.onChange && this.fieldName) {
            this.onChange(this.fieldName, target.value);
        }
    }

    render() {
        return (
            <div className={this.className} >
                <input type={this.type} value={this.state.value} onChange={this.handleChangeCell.bind(this)} />
            </div >
        )
    }
}

export default InputCell;