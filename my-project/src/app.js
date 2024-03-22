import { El } from "./shared/El.js";

export function App() {
    return El({
        element:'nav',
        children:[
            El({
                element:'img',
                className:'hidden'
            }),
            El({
                element:'i',
                className:'hidden fa-solid fa-bars'
            }),
            El({
                element:'div',
                className:'backdrop-brightness-50 w-screen h-screen fixed top-0'
            }),
            El({
                element:'div',
                className:'z-10 relative bg-slate-200 py-4 px-16 h-screen',
                children:[
                    El({
                        element:'div',
                        className:"text-left text-3xl",
                        children:[
                            El({
                                element:'i',
                                className:'fa-solid fa-xmark cursor-pointer'
                            }),
                        ]
                    }),
                    El({
                        element:'ul',
                        className:'flex flex-col gap-y-3',
                        children:[
                            El({
                                element:'li',
                                className:"hover:text-blue-400 cursor-pointer",
                                innerHTML:'درباره ما'
                            }),
                            El({
                                element:'li',
                                className:"hover:text-blue-400 cursor-pointer",
                                innerHTML:'بلاگ'
                            }),
                            El({
                                element:'li',
                                className:"hover:text-blue-400 cursor-pointer",
                                innerHTML:'سوالات متداول'
                            }),
                            El({
                                element:'li',
                                className:"hover:text-blue-400 cursor-pointer",
                                innerHTML:'موقعیت شغلی'
                            }),
                            El({
                                element:'li',
                                className:"hover:text-blue-400 cursor-pointer",
                                innerHTML:'بلوجونیور'
                            })
                        ]
                    }),
                    El({
                        element:'div',
                        className:'flex justify-center items-center gap-3 mt-20',
                        children:[
                            El({
                                element:'span',
                                className:'text-lg bg-slate-500 text-white px-3 py-2 rounded-full cursor-pointer hover:bg-blue-500',
                                children:[
                                    El({
                                        element:'i',
                                        className:'fa-brands fa-twitter'
                                    })
                                ]
                            }),
                            El({
                                element:'span',
                                className:'text-lg bg-slate-500 text-white px-3 py-2 rounded-full cursor-pointer hover:bg-blue-500',
                                children:[
                                    El({
                                        element:'i',
                                        className:'fa-brands fa-instagram'
                                    })
                                ]
                            }),
                            El({
                                element:'span',
                                className:'text-lg bg-slate-500 text-white px-3 py-2 rounded-full cursor-pointer hover:bg-blue-500',
                                children:[
                                    El({
                                        element:'i',
                                        className:'fa-brands fa-linkedin'
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    })
}