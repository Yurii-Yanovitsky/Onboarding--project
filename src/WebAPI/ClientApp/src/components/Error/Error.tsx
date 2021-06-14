import s from './Error.module.css';

type Props = {
    hasError: boolean
    children?: string
    setHaseError: (hasError: boolean) => void
}

const Error = ({ hasError, children, setHaseError }: Props) => {

    return hasError ? (
        <div className={s.error}>
            <div className={s.errorContent}>
                {children}
                <button className={s.closeBtn} onClick={() => setHaseError(false)}>Close</button>
            </div>
        </div>
    )
        : <div></div>
}

export default Error;