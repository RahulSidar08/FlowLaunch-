"use client";

import { useState } from "react";
import { skills } from "@/lib/data/skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { value: "all", label: "All Skills" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "tools", label: "Tools" },
    { value: "testing", label: "Testing" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills.technical
      : skills.technical.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 mx-auto space-y-8"
    >
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center sm:text-left">
          Skills & Expertise
        </h1>
        <p className="text-base sm:text-lg text-gray-600 text-center sm:text-left mb-10">
          A comprehensive overview of my technical skills, soft skills, and language proficiencies.
        </p>
      </div>

      <Tabs defaultValue="technical" className="space-y-8">
        <TabsList className="grid grid-cols-3 sm:max-w-md w-full mx-auto">
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          <TabsTrigger value="languages">Languages</TabsTrigger>
        </TabsList>

        <TabsContent value="technical" className="space-y-6">
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-6">
            {categories.map((category) => (
              <Badge
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </Badge>
            ))}
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="soft">
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {skills.soft.map((skill, index) => (
              <div
                key={index}
                className={cn(
                  "p-4 rounded-lg border flex items-center justify-center text-center h-24",
                  "hover:border-primary hover:bg-primary/5 transition-colors duration-300"
                )}
              >
                <span className="font-medium text-sm sm:text-base">{skill}</span>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="languages">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {skills.languages.map((language, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border text-center space-y-2 hover:border-primary transition-colors duration-300"
              >
                <h4 className="text-lg sm:text-xl font-bold">{language.name}</h4>
                <p className="text-sm text-muted-foreground">{language.proficiency}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
