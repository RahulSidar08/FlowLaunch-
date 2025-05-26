import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Extras() {
  return (
    <section className="space-y-6 w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10">
      <h1 className="text-xl sm:text-2xl font-bold">Extras</h1>

      {/* Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm sm:text-base">
            <li>Secure a full-time SDE role</li>
            <li>Contribute to open-source projects</li>
            <li>Master DevOps and cloud deployment</li>
          </ul>
        </CardContent>
      </Card>

      {/* Hobbies */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Hobbies</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm sm:text-base">
            <li>Playing cricket and football</li>
            <li>Exploring the stock market</li>
            <li>Reading tech blogs</li>
          </ul>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm sm:text-base">
            <li>NPTEL - Social Networks by IIT Madras</li>
            <li>NPTEL - Privacy & Security in Online Social Media by IIIT Hyderabad</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
