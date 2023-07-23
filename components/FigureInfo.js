import { motion, useScroll } from "framer-motion"
import useWidth from "./hooks/useWidth";


export default function FigureInfo() {
    const screenWidth = useWidth();

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

    const cardVariantLeftMobile = {
        offscreen: {
          x: "-50vw"
        },
        onscreen: {
          x: "calc(50vw - 150px)",
          rotate: -1,
          transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.6
          }
        }
    };
    
    const cardVariantRightMobile = {
        offscreen: {
          x: "150vw"
        },
        onscreen: {
          x: "calc(50vw - 150px)",
          rotate: 1,
          transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.6
          }
        }
    };

    const leftCard = screenWidth > 1023 ? cardVariantLeft : cardVariantLeftMobile;
    const rightCard = screenWidth > 1023 ? cardVariantRight : cardVariantRightMobile;

    return (
        <>
            <motion.div
                className="card-container mt-[80px] mb-[80px]"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                >
                <div className="splash" />
                <motion.div className="card" variants={leftCard}>
                    <div className="relative w-[300px] h-fit bg-zinc-300 p-5 text-black rounded-sm drop-shadow-xl z-20 md:w-[360px]">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                className="card-container mt-[80px] mb-[80px]"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                >
                <div className="splash" />
                <motion.div className="card" variants={rightCard}>
                    <div className="relative w-[300px] h-fit bg-zinc-300 p-5 text-black rounded-sm drop-shadow-xl z-20 md:w-[360px]">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                className="card-container mt-[80px] mb-[80px]"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                >
                <div className="splash" />
                <motion.div className="card" variants={leftCard}>
                    <div className="relative w-[300px] h-fit bg-zinc-300 p-5 text-black rounded-sm drop-shadow-xl z-20 md:w-[360px]">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </div>
                </motion.div>
                </motion.div>
        </>
    )
}