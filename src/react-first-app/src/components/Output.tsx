function Output(props: any) {
    const { id, text, testid } = props;
    return (
        <div id={id} data-testid={testid}>
            {text}
        </div>
    )
}

export default Output;