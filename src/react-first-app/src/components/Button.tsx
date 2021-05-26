function Button(props: any) {
    const { id, testid, onClick, children } = props;
    return (
        <div>
            <button id={id} data-testid={testid} onClick={onClick}>{children}</button>
        </div>
    )
}

export default Button;