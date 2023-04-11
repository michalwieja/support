import {useEffect, useRef} from "react";
import {gsap} from 'gsap';


export const Modal = ({content, handleClose, visible}) => {
    const ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: .2 });
    }, []);

    useEffect(() => {
        if (!visible) {
            gsap.to(ref.current, { opacity: 0, duration: .2, onComplete: handleClose });
        }
    }, [visible]);
    const handleClick = (e) => {
        e.stopPropagation()
        handleClose()
    }


    return (
        <div className='modal' ref={ref}>
            <div className="modal-overlay" onClick={handleClose}>
                <div className="modal-wrapper" onClick={e=>e.stopPropagation()}>
                    <div className="modal-header">
                        <div className='modal-close-icon' onClick={handleClose}>&times;</div>
                    </div>
                    <div className="modal-content">
                        <div>foto</div>
                        <div>{content?.name}</div>
                        <div>{content?.desc}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}