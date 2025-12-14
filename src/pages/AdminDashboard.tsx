import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { 
  LogOut, 
  Trash2, 
  Download, 
  RefreshCw,
  Package,
  Users,
  Mail,
  Calendar,
  ArrowLeft
} from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

interface Inquiry {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  company_name: string;
  product: string;
  quantity: string;
  message: string | null;
  created_at: string;
}

const AdminDashboard = () => {
  const { user, isAdmin, isLoading: authLoading, signOut } = useAuth();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [user, isAdmin, authLoading, navigate]);

  const fetchInquiries = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error fetching inquiries",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setInquiries(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (user && isAdmin) {
      fetchInquiries();
    }
  }, [user, isAdmin]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this inquiry?")) return;

    const { error } = await supabase
      .from("inquiries")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        title: "Error deleting inquiry",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Inquiry deleted",
        description: "The inquiry has been removed.",
      });
      setInquiries(inquiries.filter((i) => i.id !== id));
    }
  };

  const handleExportCSV = () => {
    if (inquiries.length === 0) {
      toast({
        title: "No data to export",
        description: "There are no inquiries to export.",
        variant: "destructive",
      });
      return;
    }

    const headers = ["Name", "Company", "Email", "Phone", "Product", "Quantity", "Message", "Date"];
    const csvData = inquiries.map((i) => [
      i.full_name,
      i.company_name,
      i.email,
      i.phone,
      i.product,
      i.quantity,
      i.message || "",
      format(new Date(i.created_at), "yyyy-MM-dd HH:mm"),
    ]);

    const csvContent = [headers, ...csvData]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `inquiries-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: "Export successful",
      description: "Inquiries have been exported to CSV.",
    });
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <RefreshCw className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Website
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="font-display text-xl font-bold text-foreground">
                Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground hidden sm:block">
                {user.email}
              </span>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Stats Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{inquiries.length}</p>
                <p className="text-sm text-muted-foreground">Total Inquiries</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {inquiries.filter((i) => 
                    new Date(i.created_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                  ).length}
                </p>
                <p className="text-sm text-muted-foreground">This Week</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {new Set(inquiries.map((i) => i.company_name)).size}
                </p>
                <p className="text-sm text-muted-foreground">Unique Companies</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {new Set(inquiries.map((i) => i.product)).size}
                </p>
                <p className="text-sm text-muted-foreground">Products Requested</p>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiries Table */}
        <div className="rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between p-5 border-b border-border">
            <h2 className="font-display text-lg font-semibold text-foreground">
              All Inquiries
            </h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={fetchInquiries} disabled={isLoading}>
                <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              <Button variant="outline" size="sm" onClick={handleExportCSV}>
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-[60px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8">
                      <RefreshCw className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
                    </TableCell>
                  </TableRow>
                ) : inquiries.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                      No inquiries yet.
                    </TableCell>
                  </TableRow>
                ) : (
                  inquiries.map((inquiry) => (
                    <TableRow key={inquiry.id}>
                      <TableCell className="font-medium">{inquiry.full_name}</TableCell>
                      <TableCell>{inquiry.company_name}</TableCell>
                      <TableCell>{inquiry.product}</TableCell>
                      <TableCell>{inquiry.quantity}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>{inquiry.email}</p>
                          <p className="text-muted-foreground">{inquiry.phone}</p>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-[200px] truncate">
                        {inquiry.message || "-"}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {format(new Date(inquiry.created_at), "MMM d, yyyy")}
                        <br />
                        {format(new Date(inquiry.created_at), "h:mm a")}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(inquiry.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
