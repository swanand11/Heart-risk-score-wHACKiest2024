import React from "react";
import { motion } from "framer-motion";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import image from "../../assets/logoOP.png";
import { useTheme } from "../Themecontext";
import { FaSignOutAlt } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Navbar.css";

function NavMenu() {
    const { theme, toggleTheme } = useTheme(); // Access theme and toggle function
    const navigate = useNavigate();
    const auth = getAuth(); // Firebase authentication
    const user = auth.currentUser; // Get the current user

    const healthComponents = [
        {
            title: "Dashboard",
            href: user ? "/dashboard" : "/login",
            description: "Monitor your ECG and heart health in real-time.",
        },
        { title: "Upload Data", href: "/dashboard", description: "Upload your ECG data for analysis." },
        { title: "Reports", href: "/dashboard", description: "View diagnostic reports and risk predictions." },
        { title: "Resources", href: "resources", description: "Learn about heart health and ECG monitoring." },
    ];

    const gettingStartedComponents = [
        { title: "Introduction", href: "/", description: "Learn how to get started with the platform." },
        { title: "Setup Devices", href: "#setup", description: "Connect and configure your ECG monitoring devices." },
        { title: "User Guide", href: "/#guide", description: "Step-by-step instructions for using all features." },
        { title: "Support", href: "/#support", description: "Get help with technical and platform issues." },
    ];

    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("Successfully logged out!");
            navigate("/login"); 
        } catch (error) {
            console.error("Error during logout:", error.message);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-slate-900">
            <div
                className="container flex items-center px-3 py-1 mx-auto"
                style={{ fontFamily: "var(--mc-typography-font-family-sans)", justifyContent: "space-around" }}
            >
                <span className=" we flex items-center font-bold text-gray-800 dark:text-white mr-40">
                    <img src={image} alt="logo" viewBox="0 0 300 300" width="70" height="65" />
                    <h1 className="text-3xl"><a href="/">KARDIA</a></h1>
                </span>
                <div className="wa flex items-center space-x-4">
                    <NavigationMenu>
                        <NavigationMenuList className="flex space-x-4">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="nav-items">Getting Started</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <motion.ul
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
                                    >
                                        {gettingStartedComponents.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </motion.ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="nav-items">Health Tools</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <motion.ul
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="grid w-[350px] gap-2 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                                    >
                                        {healthComponents.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </motion.ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Show Logout if user is logged in, otherwise Login */}
                    {user ? (
                        <Button
                            variant="link"
                            onClick={handleLogout}
                            className="flex items-center space-x-2 nav-items px-4 py-2 text-sm font-medium text-black dark:text-white"
                        >
                            <FaSignOutAlt className="w-5 h-5" />
                            <span>Logout</span>
                        </Button>
                    ) : (
                        <Link to="/login">
                            <Button
                                variant="link"
                                className="nav-items px-4 py-2 text-sm font-medium text-black dark:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-user w-6 h-6"
                                >
                                    <path className="image" d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle className="image" cx="12" cy="7" r="4" />
                                </svg>
                                Login
                            </Button>
                        </Link>
                    )}

                    <button
                        onClick={toggleTheme}
                        className="px-4 py-2 text-sm font-medium flex items-center"
                    >
                        {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </button>
                </div>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <NavigationMenuLink asChild>
            <a
                ref={ref}
                className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    className
                )}
                {...props}
            >
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">{children}</p>
            </a>
        </NavigationMenuLink>
    );
});
ListItem.displayName = "ListItem";

export default NavMenu;
