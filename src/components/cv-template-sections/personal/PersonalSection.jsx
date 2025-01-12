import "./personal.css";

export default function PersonalSection({ data }) {
  return (
    <section className="personal-info">
      <h1 className="personal-info__name">
        {!data.name && !data.lastname
          ? "[Name]"
          : data.name.concat(" ", data.lastname)}
      </h1>
      <div className="personal-info__contact">
        <p>
          Phone: {data.phone ? data.phone : "[Phone number]"}
        </p>
        <p>
          email: {data.email ? data.email : "[Email address]"}
        </p>
      </div>
    </section>
  );
}
