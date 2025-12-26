import Link from "next/link"

export default function RegisterComponent() {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left side - Branding */}
            <div className="hidden lg:flex flex-col justify-between bg-black p-12 relative overflow-hidden">
                {/* Logo and Title */}
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-12">
                        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                            <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="url(#gradient)" />
                            <defs>
                                <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
                                    <stop offset="0%" stopColor="#10b981" />
                                    <stop offset="100%" stopColor="#06b6d4" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <h1 className="text-white text-2xl font-semibold tracking-tight">CryptoVault</h1>
                    </div>

                    <h2 className="text-5xl font-bold text-white mb-6 leading-tight">Start your crypto journey</h2>

                    <p className="text-zinc-400 text-base leading-relaxed max-w-md font-light">
                        Join millions of users worldwide. Trade, store, and manage your digital assets with confidence.
                    </p>
                </div>

                {/* Decorative grid pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
              linear-gradient(to right, rgb(16 185 129 / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(16 185 129 / 0.1) 1px, transparent 1px)
            `,
                            backgroundSize: "60px 60px",
                        }}
                    />
                </div>

                {/* Decorative gradient orbs */}
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
            </div>

            {/* Right side - Register Form */}
            <div className="flex items-center justify-center p-8 bg-zinc-950">
                <div className="w-full max-w-md space-y-8">
                    <div className="space-y-3">
                        <h2 className="text-4xl font-bold text-white tracking-tight">Create account</h2>
                        <p className="text-zinc-500 text-sm">
                            Already have an account?{" "}
                            <Link href="/login" className="text-emerald-400 hover:text-emerald-300 font-medium">
                                Sign in
                            </Link>
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Full name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full h-12 px-4 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Email address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full h-12 px-4 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Password</label>
                            <input
                                type="password"
                                placeholder="Create a strong password"
                                className="w-full h-12 px-4 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Confirm password</label>
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                className="w-full h-12 px-4 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                            />
                        </div>

                        <button className="w-full h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-semibold text-sm rounded-lg transition-all shadow-lg shadow-emerald-500/20">
                            Create account
                        </button>

                        <p className="text-xs text-zinc-600 text-center leading-relaxed">
                            By creating an account, you agree to our{" "}
                            <Link href="#" className="text-zinc-500 hover:text-zinc-400 underline underline-offset-2">
                                Terms
                            </Link>{" "}
                            and{" "}
                            <Link href="#" className="text-zinc-500 hover:text-zinc-400 underline underline-offset-2">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
