import {SectionTitle} from '../SectionTitle/SectionTitle.jsx';
import {useState} from 'react';
import {Member} from "../Member/Member";
import {Modal} from "../Modal/Modal";
import members from "../../config/members";
import {Transition} from "react-transition-group";

export const About = () => {
    const [modalContent, setModalContent] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)

    const handleMore = (el) => {
        setModalContent(null)
        setModalVisible(true)
        setModalContent(el)
    }

    return (<>
            <Transition
                in={modalVisible}
                timeout={200}
                mountOnEnter
                unmountOnExit
            >
                <Modal content={modalContent} handleClose={() => setModalVisible(false)} visible={modalVisible}/>
            </Transition>
            <div className="about section" id="onas">
                <SectionTitle title="O nas" subtitle="Kim jesteśmy?"/>
                <div className="container">
                    <div className="about__team">
                        {members.map(el => <Member
                            key={el.id}
                            name={el.name}
                            desc={el.quote}
                            color='blue'
                            handleMore={() => handleMore(el)}
                        />)}
                    </div>
                </div>
            </div>
        </>
    );
};
