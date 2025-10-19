import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const UploadPage = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      toast.error("Please select files to upload");
      return;
    }

    setUploading(true);
    setProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          toast.success("Files uploaded successfully!");
          setSelectedFiles([]);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  return (
    <DashboardLayout>
      <div className="p-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Upload Media</h1>
          <p className="text-muted-foreground">Upload images, videos, and other media files.</p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-2xl p-12 cursor-pointer hover:border-primary transition-colors"
            >
              <Upload className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-lg font-medium mb-2">Drag and drop files here</p>
              <p className="text-sm text-muted-foreground mb-4">or click to browse</p>
              <input
                id="file-upload"
                type="file"
                multiple
                className="hidden"
                onChange={handleFileSelect}
                accept="image/*,video/*"
              />
            </label>

            {selectedFiles.length > 0 && (
              <div className="mt-6 space-y-3">
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg"
                  >
                    <div>
                      <div className="font-medium">{file.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFile(index)}
                      disabled={uploading}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {uploading && (
              <div className="mt-6">
                <Progress value={progress} className="mb-2" />
                <p className="text-sm text-center text-muted-foreground">{progress}% complete</p>
              </div>
            )}

            <div className="mt-6 flex gap-3">
              <Button onClick={handleUpload} disabled={uploading || selectedFiles.length === 0} className="flex-1 bg-black">
                {uploading ? "Uploading..." : "Upload Files"}
              </Button>
              <Button
                onClick={() => setSelectedFiles([])}
                className="bg-black"
                disabled={uploading || selectedFiles.length === 0}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default UploadPage;
