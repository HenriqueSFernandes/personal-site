import { ExternalLink, Github, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomButton from "../buttons/custom-button";

interface ProjectCardProps {
  name: string;
  description: string;
  teamSize: number;
  github: string;
  demo?: string | null;
}

export default function ProjectCard({
  name,
  description,
  teamSize,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-xl text-primary">{name}</CardTitle>
          <Badge
            variant="secondary"
            className="flex items-center gap-1 shrink-0"
          >
            <Users className="h-3 w-3" />
            {teamSize}
          </Badge>
        </div>
        <CardDescription className="text-foreground/70 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-2">
          <CustomButton
            icon={<Github />}
            label="GitHub"
            href={github}
            linkType="external"
            variant="primary"
          />

          {demo && (
            <CustomButton
              icon={<ExternalLink />}
              label="Demo"
              href={demo}
              linkType="external"
              variant="outline"
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
