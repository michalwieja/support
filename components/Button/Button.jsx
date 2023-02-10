export const Button = ({
  label,
  color
}) => {
  return (
    <button className={color}>{label}</button>
  );
};
