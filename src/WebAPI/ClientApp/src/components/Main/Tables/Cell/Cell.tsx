type Props = {
    className: string,
    children?: string;
}

const Cell = ({ children, className }: Props) => {
    return (
        <div className={className} >
            {children}
        </div >
    )
}

export default Cell;