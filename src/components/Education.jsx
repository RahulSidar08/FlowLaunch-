import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { education } from "@/lib/data/education";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section
      id="education"
      className="w-full mx-auto flex flex-col px-4 sm:px-6 md:px-10 lg:px-20 space-y-10"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">Education</h2>

      <div className="space-y-8">
        {education.map((item, index) => (
          <Card
            key={item.id}
            className="relative overflow-hidden border-l-4 border-l-primary"
          >
            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Icon */}
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">{item.degree}</h3>
                  <p className="text-primary font-medium text-sm sm:text-base">
                    {item.institution}
                  </p>
                  <div className="mt-1 text-sm text-muted-foreground">
                    <span>{item.location}</span> • <span>{item.period}</span>
                  </div>

                  <p className="mt-4 mb-6 text-sm sm:text-base">{item.description}</p>

                  <div>
                    <h4 className="font-semibold text-sm uppercase text-muted-foreground flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4" />
                      Achievements
                    </h4>
                    <ul className="grid gap-y-1 gap-x-4 sm:grid-cols-1 md:grid-cols-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
