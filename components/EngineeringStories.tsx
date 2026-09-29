import { engineeringStories } from "@/data/stories";
import type { Locale } from "@/data/content";

function faDigits(value: string) {
  return value.replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
}

export default function EngineeringStories({ locale }: { locale: Locale }) {
  const stories = engineeringStories[locale];

  return (
    <section className="storyRail">
      {stories.map((story, i) => (
        <article className={i % 2 ? "storySection storyReverse" : "storySection"} key={story.title}>
          <div className="shell storyGrid">
            <div className="storyCopy">
              <span className="kicker">{story.eyebrow}</span>
              <h2>{story.title}</h2>
              <p>{story.body}</p>
              <div className="storyPoints">
                {story.points.map((point, index) => (
                  <div className="storyPoint" key={point}>
                    <span>{locale === "fa" ? faDigits(String(index + 1).padStart(2, "0")) : String(index + 1).padStart(2, "0")}</span>
                    <strong>{point}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="storyVisual">
              <img src={story.image} alt="" />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
