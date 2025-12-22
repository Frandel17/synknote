
export const LoginForm = () => {

    return (
        <div className="bg-[#212121] w-[40%] flex flex-col justify-center items-center">



            <div className="w-100">
                <h1 className=" text-white  text-[38px] font-bold ">Welcome Back!</h1>
                <p className="mb-10 text-[15px] text-white/80">Don`t have an account? <a href="#" className="text-white/50 underline">Create a new account now,</a> it`s FREE! Takes less than a minute.</p>
                <form action="#" className="flex flex-col gap-5">
                    <label htmlFor="email" className="sr-only ">Email</label>
                    <input type="email" name="email" id="" placeholder="Email" required className="w-auto p-2.5 border-b border-white/30 outline-none focus:border-white/80 focus:bg-white/30 rounded-[10px] placeholder:text-white/50 text-white transition-all duration-500" />

                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" name="password" id="" placeholder="Password" required className="w-auto p-2.5 border-b border-white/30 outline-none focus:border-white/80 focus:bg-white/30 rounded-[10px] placeholder:text-white/50 text-white transition-all duration-500" />

                    <button type="submit" className="bg-[#db4437] w-auto p-2.5 mt-5 text-[16px] text-white/90 font-medium rounded-[10px] cursor-pointer">Login Now</button>
                    <p className="mx-auto text-[15px] text-white/80">Forget your password <a href="#" className="text-white/50 underline">Click here</a></p>
                </form>
            </div>

        </div>
    )

}