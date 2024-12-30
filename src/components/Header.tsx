import { useTheme } from "@/context/ThemeProvider"
import { Moon, Sun } from "lucide-react"
import { Link } from "react-router-dom"

const Header = () => {

    const { theme, setTheme } = useTheme()
    const isDark = theme === "dark"

  return (
    <header className="sticky top-0 z-50 w-full py-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">   
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link to={"/"}>
                <img src={isDark ? "/vite.svg" : "/vite.svg"} alt="logo" className="h-14" />
            </Link>

            <div>
                {/* SEARCH */}
                {/* THEME TOGGLE */}
                <div onClick={() => setTheme(isDark ? "light" : "dark")}
                    className={`
                        flex items-center cursor-pointer transition-transform duration-500
                        ${isDark ? "rotate-180" : "rotate-0"}
                    `}
                >
                    { isDark 
                    ? (<Sun className="h-8 w-10 text-white rotate-0 transition-all" />)
                    : (<Moon className="h-8 w-10 text-black rotate-0 transition-all fill-black" />) 
                    }
                </div>
            </div>
        </div>
    </header>  
  )
}

export default Header