import { motion, useScroll } from "framer-motion"


export default function FigureInfo() {
    const cardVariantLeft = {
        offscreen: {
          x: "-50vw"
        },
        onscreen: {
          x: "calc(50vw - 560px)",
          rotate: -1,
          transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.6
          }
        }
    };
    
    const cardVariantRight = {
        offscreen: {
          x: "150vw"
        },
        onscreen: {
          x: "calc(50vw + 200px)",
          rotate: 1,
          transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.6
          }
        }
    };

    return (
        <div className="relative h-fit text-white bg-gradient-to-b from-[#0d1919] via-[#3e6767] to-[#7ac8c8] z-0">
            <div className="w-full h-screen">
                <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    >
                    <div className="splash" />
                    <motion.div className="card" variants={cardVariantLeft}>
                        <div className="w-[360px] h-fit bg-zinc-300 p-5 text-black rounded-sm drop-shadow-xl">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <div className="w-full h-screen">
                <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    >
                    <div className="splash" />
                    <motion.div className="card" variants={cardVariantRight}>
                        <div className="w-[360px] h-fit bg-zinc-300 p-5 text-black rounded-sm drop-shadow-xl">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <div className="w-full h-screen">
                <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    >
                    <div className="splash" />
                    <motion.div className="card" variants={cardVariantLeft}>
                        <div className="w-[360px] h-fit bg-zinc-300 p-5 text-black rounded-sm drop-shadow-xl">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}