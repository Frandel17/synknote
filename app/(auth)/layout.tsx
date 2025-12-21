import { PropsWithChildren } from "react"


export default function Layout ({children}: PropsWithChildren) {

    return (
        // {children}
        <div className="flex">
            <div className="w-[60%] h-[100vh] bg-amber-400"></div>
            {children}
            </div>
    )

}

