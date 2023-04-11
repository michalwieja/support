import {Button} from "../Button/Button";

export const Member = ({name, desc, handleMore, color})=> (
    <div className="about__member">
        <div className="circle"></div>
        <div className="name">{name}</div>
        <div className="desc">{desc}</div>
        <div className="more">
            <Button onClick={handleMore} label='Więcej' color={color} />
        </div>
    </div>
)