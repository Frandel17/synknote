import dayjs from "dayjs";

interface MessageData {
    id: string,
    profile: string,
    username: string,
    message: string,
    createdAt: Date,
    expired: Date
}

export default function ChatComponent() {
    const messages: Array<MessageData> = [
        // {
        //     username: 'Delgadillo',
        //     createdAt: new Date(),
        //     expired: new Date(),
        //     id: '1',
        //     profile: 'https://api.dicebear.com/7.x/identicon/svg?seed=%20jodlkmolfdsdsdkdaddasjojo2100',
        //     message: 'Probando esto'
        // },

        // {
        //     username: 'Frandel',
        //     createdAt: new Date(),
        //     expired: new Date(),
        //     id: '2',
        //     profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27hb0joZf1HqijK4K-QlUVP-mNPg9Y0sAiw&s',
        //     message: 'Prueba 1.0'
        // },

        // {
        //     username: 'Kenedy',
        //     createdAt: new Date(),
        //     expired: new Date(),
        //     id: '3',
        //     profile: 'https://api.dicebear.com/7.x/identicon/svg?seed=%20jodlkmolfdsdsdkdaddasjojo2100',
        //     message: ' todo comienza a tener sentido. Es importante cometer errores, porque cada fallo enseña algo nuevo y fortalece la lógica. Practicar todos los días, aunque sea poco tiempo, marca una gran diferencia. Leer código de otras personas también ayuda a mejorar. Con dedicación, cualquier persona puede desarrollar habilidades técnicas sólidas y abrir nuevas oportunidades laborales en el mundo digital. La constancia y la curiosidad impulsan el crecimiento profesional y personal a largo plazo sostenible real.'
        // }


    ];

    return (
        <div className="bg-[#212121] h-screen px-2 py-5 sm:p-10 relative transition-all duration-300">

            <div
                className="w-auto h-full relative bg-center bg-cover rounded-[10px] overflow-hidden lg:w-[70%] lg:mx-auto"
                style={{ backgroundImage: "url('/fondoH.jpg')" }}
            >


                <div className="absolute inset-0 bg-black/90"></div>

                <div className="relative z-10 w-auto h-full">

                    <header className="w-full bg-[#0D1011] flex justify-center sm:justify-between items-center px-8 border-[0.5px] border-b-gray-700 transition-all duration-300">

                        <div className="flex items-center gap-2 ">
                            <img src="/logo2.png" alt="" className="w-10 h-10" />

                            <div className="leading-none my-3">
                                <h1 className="text-white">anonymous_chat</h1>
                                <p className="text-[#696D73] text-[13px]">0 online</p>
                            </div>
                        </div>

                        <div className="hidden sm:block transition-all duration-300">
                            <h2 className="text-[#6A7075]">Simulate massage</h2>
                        </div>
                    </header>


                    {messages.length === 0 ? (
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="text-center flex flex-col items-center">
                                <img
                                    src="/ftm.gif"
                                    alt=""
                                    className="w-30 sm:w-50 transition-all duration-300"
                                />
                                <h2 className="text-white font-bold text-[15px] sm:text-[20px] transition-all duration-300">
                                    Welcome to Anonymous Chat!
                                </h2>
                                <p className="text-[#696D73] sm:text-[16px] text-[12px] transition-all duration-300">
                                    Messages self-destruct in 5 minutes
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-auto absolute py-5 px-3 sm:px-10 transition-all duration-300">
                            {messages.map(message => (
                                <div key={message.id}>
                                    <div className="flex gap-2 sm:gap-5 my-3">
                                        <img
                                            src={message.profile}
                                            alt=""
                                            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full transition-all duration-300"
                                        />

                                        <div>
                                            <div className="flex gap-2 items-center">
                                                <h2 className="text-white font-bold text-[13px] sm:text-[16px] transition-all duration-300">
                                                    {message.username}
                                                </h2>
                                                <h3 className="text-[#696D73] text-[10px] sm:text-[14px] font-medium transition-all duration-300">
                                                    {dayjs(message.createdAt).format('hh:mm A')}
                                                </h3>
                                                <p className="bg-[#09271C] text-[#03A75B] px-2 rounded-[5px] text-[10px] sm:text-[16px] transition-all duration-300">
                                                    2s
                                                </p>
                                            </div>

                                            <p className="text-[#f2f2f2] text-[11px] sm:text-[14px] transition-all duration-300">
                                                {message.message}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}




                    <div className="bg-[#0D1011] p-5 absolute bottom-0 w-full flex gap-3 border-[0.5px] border-t-gray-700 ">

                        <input
                            type="text"
                            className="focus:outline-none text-[10px] sm:text-[13px] text-[#7B8186] border-2 border-[#7B8186] p-2 w-full rounded-[10px] focus:border-[#07643C] transition-all duration-300"
                            placeholder="Message @hidden_alpha. The messages will be deleted in 5 minutes."
                        />

                        <button className="px-5 rounded-[10px] bg-[#085232] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>




        </div>
    )
}
