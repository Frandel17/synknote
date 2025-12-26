import { Providers } from "@/src/providers/providers"
import { PropsWithChildren } from "react"


export default function Layout({ children }: PropsWithChildren) {

    return (
        <>

            <Providers>{children}</Providers>
        </>
    )

}

