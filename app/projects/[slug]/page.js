import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export function generateStaticParams() {
  return projects.filter((p) => p.slug).map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="project-detail">
       <BeforeAfterSlider
          beforeImage={project.beforeImage}
          afterImage={project.afterImage}
        />
      {project.beforeImage && project.afterImage ? (
        <BeforeAfterSlider
          beforeImage={project.beforeImage}
          afterImage={project.afterImage}
        />
      ) : (
        <div style={{ position: "relative", width: "100%" }}>
          <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={900}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      )}

      <h1>{project.title}</h1>
      <p className="meta">
        {project.category
          .split("-")
          .map((w) => w[0].toUpperCase() + w.slice(1))
          .join(" ")}
      </p>
      <p>{project.description}</p>
    </main>
  );
}