import Link from 'next/link';
import SectionTitle from '../../components/SectionTitle';
import Image from 'next/image';
import clienteAxios from '../../api/axios';
import { useState, useEffect } from 'react';

const TeamSection = (props) => {
  const [team, setTeam] = useState([]);


  // useEffect para consultar la API
  useEffect(() => {
    // query a la api
    const consultarApi = async () => {
      try {
        const teamConsulta = await clienteAxios.get('/team');
        setTeam(teamConsulta.data);
      } catch (error) {
        console.log(error);
      }
    };

    consultarApi();
  }, []);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-team-section section-padding">
      <div className="container">
        <SectionTitle topTitle={'Parejas a casarse'} MainTitle={'Envia ragalos a la pareja deseada'} />
        <div className="wpo-team-wrap">
          <div className="row">
            {team.slice(0,8).map((teamMember, tm) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={tm}>
                <div className="wpo-team-item">
                  <div className="wpo-team-img">
                    <img src={`https://back.traveleroweddings.com/uploads/${teamMember._id}`} alt="" width={300} height={300} />
                  </div>
                  <div className="wpo-team-text">
                    <h3>
                      <Link onClick={ClickHandler} href='/matrimonio/[slug]' as={`/matrimonio/${teamMember.slug}`}>
                        {teamMember.name}
                      </Link>
                    </h3>
                    <span>{teamMember.title}</span>
                    <ul></ul>
                    <Link onClick={ClickHandler} className="theme-btn" href="http://localhost:3030/">
                      <i className=""></i> Regalar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
