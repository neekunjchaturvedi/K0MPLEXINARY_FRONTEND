import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Image, HardDrive, TrendingUp } from "lucide-react";

const stats = [
  { icon: Image, label: "Total Files", value: "1,234", change: "+12%" },
  { icon: HardDrive, label: "Storage Used", value: "45.2 GB", change: "+8%" },
  { icon: Upload, label: "Uploads Today", value: "23", change: "+15%" },
  { icon: TrendingUp, label: "Bandwidth", value: "2.1 TB", change: "+5%" },
];

const recentUploads = [
  { name: "summer-vacation.jpg", size: "2.4 MB", date: "2 hours ago" },
  { name: "product-demo.mp4", size: "15.8 MB", date: "5 hours ago" },
  { name: "logo-design.png", size: "890 KB", date: "1 day ago" },
  { name: "presentation.pdf", size: "5.2 MB", date: "2 days ago" },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* 👇 Add margin-left to offset the fixed sidebar */}
      <div className="p-8 md:ml-64 ml-2  transition-all duration-300">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's your media overview.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="h-8 w-8 text-muted-foreground" />
                  <span className="text-sm text-green-600 font-medium">
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Uploads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUploads.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <div>
                    <div className="font-medium">{file.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {file.size}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {file.date}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
