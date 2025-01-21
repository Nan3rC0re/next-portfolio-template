import React from "react";
import { experience } from "./data";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="section">
      <p className="section-header">Experience</p>
      <div className="flex flex-col gap-8">
        {experience.map((experiences, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <div className="relative border rounded-sm bg-neutral-400 overflow-hidden aspect-square w-8">
                <Image
                  src={experiences.logo}
                  alt="My headshot/profile image"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-title">{experiences.title}</p>
            </div>
            <div className="flex justify-between items-center ">
              <p className="company-name">{experiences.company}</p>
              <div
                className={`${
                  // As long as the word current is included in the date property, you will see the highlighted date.
                  experiences.date?.includes("Current")
                    ? "current-date"
                    : "text-muted-foreground"
                }`}
              >
                {experiences.date?.includes("Current") && (
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                )}
                {experiences.date}
              </div>
            </div>
            <p>{experiences.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
