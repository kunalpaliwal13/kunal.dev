
import { Card } from "./ui/card";

const timelineEvents = [
  {
    year: "2003",
    title: "Born in India",
    description: "Started my journey in Kota, India"
  },
  {
    year: "2021",
    title: "Started my B.tech",
    description: "Wrote my first line of code in Python"
  },
  {
    year: " July 2023",
    title: "Actually started exploring the dev community",
    description: "Participated in my first hackathon and completed 100 days of code"
  },
  {
    year: "2023",
    title: "Got my first internship",
    description: "Landed my first Data Analyst internship at Preprod Corp"
  },
];

export const Timeline = () => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <div key={event.year} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
            <div className="w-1/2 px-4"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
            </div>
            <Card className="w-1/2 px-4 py-3 glass animate-fade-in">
              <div className="pixel-text text-sm mb-2">{event.year}</div>
              <h3 className="font-semibold mb-1">{event.title}</h3>
              <p className="text-sm text-muted-foreground">{event.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
