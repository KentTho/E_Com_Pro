import {
    Layers,
    Users,
    ShoppingCart,
    TrendingUp,
    Bell,
    BarChart,
    Shield,
    Printer,
} from "lucide-react";

export const features = [
    {
        icon: Printer,
        title: "Product Management",
        description: "Add, edit, delete, and track product details in the inventory.",
        href: "/feature/products",
    },
    {
        icon: Layers,
        title: "Category Management",
        description: "Classify products into categories for easier searching.",
        href: "/feature/categories",
    },
    {
        icon: Users,
        title: "Supplier Management",
        description: "Track supplier information, contracts, and transaction history.",
        href: "/feature/suppliers",
    },
    {
        icon: ShoppingCart,
        title: "Order Management",
        description: "Process customer orders and track delivery status.",
        href: "/feature/orders",
    },
    {
        icon: TrendingUp,
        title: "Inventory Tracking",
        description: "Update product quantity and receive alerts when stock is low.",
        href: "/feature/inventory",
    },
    {
        icon: BarChart,
        title: "Sales Reports",
        description: "Analyze revenue, profit, and sales trends.",
        href: "/feature/analytics",
    },
    {
        icon: Shield,
        title: "Access Control",
        description: "Assign roles for users: admin, staff, and customers.",
        href: "/feature/security",
    },
    {
        icon: Bell,
        title: "Automated Notifications",
        description: "Receive alerts for orders, inventory, and important events.",
        href: "/feature/notifications",
    },
];
