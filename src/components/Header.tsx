import { useTheme } from "@/context/ThemeProvider"
import { Moon, Sun } from "lucide-react"
import { Link } from "react-router-dom"
import CitySearch from "./CitySearch"

const Header = () => {

    const { theme, setTheme } = useTheme()
    const isDark = theme === "dark"

  return (
    <header className="sticky top-0 z-50 w-full py-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">   
        <div className="mx-auto flex h-16 items-center justify-between px-8 sm:px-16 md:px-14 lg:px-16 ">
            <Link to={"/"} className="flex items-center justify-center">
                <img src="react.svg" className="logo" alt="logo" />
                <div className="flex flex-col items-start ml-2">
                    <span className="text-base sm:text-lg font-bold">WEATHER APP</span>
                    <span className="text-sm sm:text-base">By Belcadi Oussama</span>
                </div>
            </Link>

            <div className="flex gap-4">
                {/* SEARCH */}
                <CitySearch />
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