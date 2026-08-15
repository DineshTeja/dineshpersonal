import Link from "next/link";
import { experiencesData, projectData, socialLinks } from "@/lib/data";

const externalLinkProps = (href: string) =>
  href.startsWith("http")
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

export default function HomePage() {
  return (
    <>
      <section>
        <p>About me:</p>
        <ul>
          <li>
            On leave from <u>Harvard</u>.
          </li>
          <li>
            From <Link href="https://www.nytimes.com/interactive/2026/05/07/travel/things-to-do-bentonville.html">the natural state</Link>.
          </li>
          <li>
            I previously built a company in <u>political software</u>.
          </li>
          <li>
            I&apos;ve worked on hardware automation, <u>government contracting</u>, and frontier voice AI models.
          </li>
          <li>
            I care about pushing the frontier on tangible things: production, physical infrastructure, legal
            frameworks, and knowledge.
          </li>
          <li>
            I love <u>movies</u> and humanity&apos;s greatest stories.
          </li>
        </ul>
      </section>

      <section>
            <span className="muted">
              &ldquo;We used to look up at the sky and wonder at our place in the stars.&rdquo;
            </span>{" "}
      </section>

      <section>
        <p>Some things I&apos;ve worked on:</p>
        <ul>
          {experiencesData.map((job) => (
            <li key={`${job.company}-${job.date}`}>
              <Link href={job.href} {...externalLinkProps(job.href)}>
                {job.company}
              </Link>{" "}
              — {job.title} ({job.date})
              <ul>
                <li>
                  {job.location}. {job.description}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <p>Some things I&apos;ve built:</p>
        <ul>
          {projectData.map((project) => (
            <li key={project.name}>
              {/* <Link href={project.href} {...externalLinkProps(project.href)}> */}
                {project.name}{" "}
              {/* </Link>{" "} */}
              — {project.tagline.charAt(0).toUpperCase() + project.tagline.slice(1)} ({project.date})
              <ul>
                {/* <li>{project.description}</li> */}
                {/* <li>{project.tags.join(", ")}</li> */}
                {/* {"links" in project && project.links?.length ? (
                  <li>
                    {project.links.map((link, index) => (
                      <span key={link.name}>
                        {index > 0 ? ", " : null}
                        <Link href={link.href} {...externalLinkProps(link.href)}>
                          {link.name}
                        </Link>
                      </span>
                    ))}
                  </li>
                ) : null} */}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <p>Elsewhere:</p>
        <ul>
          {socialLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} {...externalLinkProps(href)}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/movies">Films</Link> — A running list of the best. Reach out if you disagree.
          </li>
        </ul>
      </section>
    </>
  );
}
