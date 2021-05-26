function Input(props: any) {
    const { id, lable, testid } = props;
    return (
        <div>
            <label htmlFor={id}>{lable}</label>
            <input id={id} data-testid={testid} type="number" />
        </div>
    )
}

export default Input;