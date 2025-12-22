import { PropsWithChildren } from "react"


export default function Layout({ children }: PropsWithChildren) {

    return (
        // {children}
        <div className="flex">
            <div className="w-[60%] h-screen bg-[#212121] p-5">

                <div className="h-full bg-cover bg-center flex flex-col  p-16 pt-16 rounded-lg"
                    style={{ backgroundImage: "url('/fondo.jpg')" }}>

                    <div className="w-50">
                        <img src="logo2.png" alt="SynkNote logo" />
                    </div>
                    <div className="w-160 ">
                        <h1 className="  inline-block text-white  text-5xl font-bold tracking-wide mb-32 transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(233,86,59,1)]">SynkNote</h1>
                        <p className="text-2xl text-white font-thin ">This is an encrypted messaging application in which messages are automatically deleted at regular intervals, ensuring that no trace of the conversations remains.</p>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )

}

