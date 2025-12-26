export const RegisterForm = () => {

    return (
        <div className=" lg:w-[40%] 
                         lg:h-screen 
                         bg-[#212121]
                         flex 
                         flex-col 
                         justify-center 
                         items-center 
                         rounded-[10px] 
                         lg:rounded-none">

            <div className="w-70 
                            sm:w-90 
                            lg:w-95 
                            2xl:w-105  
                            p-2  
                            transition-all 
                            duration-600">

                <h1 className=" text-white
                                 text-[20px] 
                                 lg:text-[38px] 
                                 font-bold
                                 text-center 
                                 transition-all
                                 duration-600 ">Create an account
                </h1>

                <h2 className="text-white/40 
                                text-[13px] 
                                lg:text-[18px] 
                                text-center 
                                mb-15 
                                transition-all 
                                duration-600">{`It's quick and easy`}.
                </h2>

                <form action="#" className="flex 
                                            flex-col 
                                            gap-5">
                    <label htmlFor="name" className="sr-only ">Name</label>
                    <input type="text" name="name" id="" placeholder="Name" required className="w-auto 
                                                                                                 p-2.5 
                                                                                                 border-b
                                                                                                 border-white/30 
                                                                                                  outline-none
                                                                                                  focus:border-white/80
                                                                                                  focus:bg-white/30 
                                                                                                  rounded-[10px]
                                                                                                  placeholder:text-white/50
                                                                                                  text-white
                                                                                                  transition-all
                                                                                                  duration-500 
                                                                                                  text-[12px] 
                                                                                                  lg:text-[16px]"
                    />

                    <label htmlFor="email" className="sr-only ">Email</label>
                    <input type="email" name="email" id="" placeholder="Email" required className="w-auto 
                                                                                                     p-2.5 
                                                                                                     border-b
                                                                                                     border-white/30 
                                                                                                     outline-none
                                                                                                     focus:border-white/80
                                                                                                     focus:bg-white/30 
                                                                                                     rounded-[10px]
                                                                                                     placeholder:text-white/50
                                                                                                     text-white
                                                                                                     transition-all 
                                                                                                     duration-500 
                                                                                                     text-[12px] 
                                                                                                     lg:text-[16px]"
                    />

                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" name="password" id="" placeholder="Password" required className="w-auto 
                                                                                                             p-2.5 
                                                                                                             border-b
                                                                                                             border-white/30 
                                                                                                             outline-none
                                                                                                             focus:border-white/80
                                                                                                             focus:bg-white/30 
                                                                                                             rounded-[10px]
                                                                                                             placeholder:text-white/50
                                                                                                             text-white
                                                                                                             transition-all 
                                                                                                             duration-500 
                                                                                                             text-[12px] 
                                                                                                             lg:text-[16px]"
                    />

                    <label htmlFor="password" className="sr-only">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="" placeholder="Confirm Password" required className="w-auto 
                                                                                                                             p-2.5 
                                                                                                                             border-b
                                                                                                                             border-white/30 
                                                                                                                             outline-none
                                                                                                                             focus:border-white/80
                                                                                                                             focus:bg-white/30 
                                                                                                                             rounded-[10px]
                                                                                                                             placeholder:text-white/50
                                                                                                                             text-white 
                                                                                                                             transition-all 
                                                                                                                             duration-500 
                                                                                                                             text-[12px] 
                                                                                                                             lg:text-[16px]"
                    />

                    <button type="submit" className="bg-[#db4437] 
                                                        w-auto 
                                                        p-2.5 
                                                        mt-5 
                                                        text-[12px] 
                                                        lg:text-[16px]
                                                         text-white/90 
                                                        font-medium 
                                                        rounded-[10px] 
                                                        cursor-pointer">Register</button>

                    <a href="#" className="mx-auto text-[10px] lg:text-[14px] text-white">Do you already have an account?</a>
                </form>
            </div>

        </div>
    )

}