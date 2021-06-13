import Cell from "../Cell/Cell"

type Props = {
    values: string[]
    className?: string
}

const Header = ({ values, className }: Props) => {

    function renderCells() {
        return values.map((value, index) => {
            return <Cell key={index} className='cell'>{value}</Cell>
        })
    }

    return (
        <div className={className}>
            {renderCells()}
        </div>
    )
}

export default Header;