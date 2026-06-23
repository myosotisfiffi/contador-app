
import style from "./Heading.module.css"

type HeadsProps = {
    children: React.ReactNode;
}

export function Heading({children}: HeadsProps) {
    return (
        <h1 className={style.heading}>
            {children}
        </h1>
    );
    }