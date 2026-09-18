import { site } from "../content/site";
import { MediaImage } from "./MediaImage";
import { Reveal } from "./Reveal";

export function Team() {
  return (
    <section className="team section" id="komanda">
      <div className="wrap team__layout">
        <Reveal className="section-copy" as="div">
          <h2>{site.team.title}</h2>
          <p className="lede" data-status={site.team.introStatus}>
            {site.team.intro}
          </p>
        </Reveal>

        <div className="team__grid">
          {site.team.members.map((member, index) => (
            <Reveal as="article" key={member.id} delay={index * 60}>
              <figure className="portrait" data-status={member.status}>
                <div className="portrait__frame">
                  <MediaImage
                    image={member.photo}
                    sizes="(min-width: 900px) 18vw, 45vw"
                  />
                </div>
                <figcaption>
                  <h3>{member.name}</h3>
                  <p>{member.specialty}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
