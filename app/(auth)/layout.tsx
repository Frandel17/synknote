import { PropsWithChildren } from "react"


export default function Layout({ children }: PropsWithChildren) {

    return (
        // {children}
        <div className="w-screen h-screen flex bg-[#181818] flex-col items-center  lg:flex-row justify-center transition-all duration-600">
            <div className="lg:w-[60%] lg:h-screen  lg:p-5  lg:bg-[#181818] text-center">

                <div className="lg:h-full
                                flex flex-col  
                                lg:p-16 
                                p-5
                                rounded-lg 
                                bg-none
                                lg:bg-[url('/fondo.jpg')]
                                lg:bg-cover
                                lg:bg-center">

                    <div className="w-50 hidden lg:block transition-all duration-600">
                        <img src="logo2.png" alt="SynkNote logo" />
                    </div>
                    <div className="w-auto lg:text-start">
                        <h1 className=" inline-block text-white  text-3xl lg:text-5xl font-bold tracking-wide lg:mb-32 transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(233,86,59,1)]">SynkNote</h1>
                        <p className=" 2xl:text-2xl  text-white font-thin hidden lg:inline-block">This is an encrypted messaging application in which messages are automatically deleted at regular intervals, ensuring that no trace of the conversations remains.</p>


                    </div>
                </div>
            </div>
            {children}
        </div>
    )

}

