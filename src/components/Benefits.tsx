import { site } from "../content/site";
import { LineIcon } from "./LineIcon";

export function Benefits() {
  return (
    <section className="benefits section--tight" aria-label="Priekšrocības">
      <div className="wrap">
        <ul className="benefits__list">
          {site.benefits.map((item) => (
            <li className="benefit" key={item.id} data-status={item.status}>
              <span className="benefit__icon">
                <LineIcon name={item.icon} />
              </span>
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
