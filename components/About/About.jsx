import {SectionTitle} from '../SectionTitle/SectionTitle.jsx';
import {Member} from "../Member/Member";
import members from "../../config/members";
import {useRouter} from "next/router";

export const About = () => {
  const router = useRouter();

  const handleMore = (el) => {
    router.push(el.route)
  }

  return (<>
      <div className="about section" id="onas">
        <SectionTitle title="O nas" subtitle="Kim jesteśmy?"/>
        <div className="container">
          <div className="about__team">
            {members.map(el => <Member
              key={el.id}
              member={el}
              handleMore={() => handleMore(el)}
            />)}
          </div>
        </div>
      </div>
    </>
  );
};
