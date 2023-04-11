export const Button = ({label, color, onClick}) => (
    <button onClick={onClick} className={color}>{label}</button>
);
