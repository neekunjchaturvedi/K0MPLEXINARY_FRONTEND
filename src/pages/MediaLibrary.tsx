import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Link as LinkIcon, Trash2 } from "lucide-react";
import { useState } from "react";

const mediaFiles = [
  {
    id: 1,
    name: "summer-vacation.jpg",
    size: "2.4 MB",
    date: "2025-01-15",
    type: "image",
  },
  {
    id: 2,
    name: "product-demo.mp4",
    size: "15.8 MB",
    date: "2025-01-14",
    type: "video",
  },
  {
    id: 3,
    name: "logo-design.png",
    size: "890 KB",
    date: "2025-01-13",
    type: "image",
  },
  {
    id: 4,
    name: "team-photo.jpg",
    size: "3.2 MB",
    date: "2025-01-12",
    type: "image",
  },
  {
    id: 5,
    name: "tutorial-video.mp4",
    size: "22.1 MB",
    date: "2025-01-11",
    type: "video",
  },
  {
    id: 6,
    name: "banner-ad.png",
    size: "1.5 MB",
    date: "2025-01-10",
    type: "image",
  },
];

const MediaLibrary = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <DashboardLayout>
      {/* 👇 Add margin-left to offset sidebar and make it responsive */}
      <div className="p-8 ml-3 md:ml-64 transition-all duration-300 sm:ml-0 sm:p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Media Library</h1>
          <p className="text-muted-foreground">
            Browse and manage all your uploaded media files.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mediaFiles.map((file) => (
            <Card
              key={file.id}
              className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredId(file.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-video bg-secondary/50 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-muted-foreground">
                    {file.type === "image" ? "🖼️" : "🎬"}
                  </div>
                </div>

                {hoveredId === file.id && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-2 animate-fade-in">
                    <Button size="sm" variant="secondary">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary">
                      <LinkIcon className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="font-medium truncate mb-1">{file.name}</div>
                <div className="text-sm text-muted-foreground flex justify-between">
                  <span>{file.size}</span>
                  <span>{file.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MediaLibrary;
