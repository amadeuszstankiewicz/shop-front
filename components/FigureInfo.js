import { motion, useScroll } from "framer-motion"
import useWidth from "./hooks/useWidth";

import DecorationImage from "./utils/DecorationImage";

export default function FigureInfo() {
    const screenWidth = useWidth();

    const cardVariantLeft = {
        offscreen: {
          x: "-150vw"
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
          x: "-150vw"
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
                    <div className="text-center mb-3">
                      <strong>Embark on Epic Adventures with Exquisite DnD Figurines!</strong>
                    </div>
                    <p>
                      Step into the mystical world of Dungeons and Dragons with our handcrafted figurines. Each figurine is meticulously crafted to bring your favorite characters to life, capturing every detail and essence of their personalities. Whether you&apos;re a seasoned adventurer or a new player, these figurines are the perfect companions for your tabletop campaigns. From fierce dragons to brave heroes, our collection offers an array of choices to enhance your gaming experience. Unleash your imagination and add a touch of magic to your tabletop adventures with our premium DnD figurines!
                    </p>
                  
                    <DecorationImage
                      x={300} y={22} 
                      w={150} h={150} 
                      content="amulet_2.png"
                    />
                    <DecorationImage
                      x={250} y={105} 
                      w={150} h={150} 
                      content="axe_2.png"
                      />
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
                    <div className="text-center mb-3">
                      <strong>Unparalleled Quality, Unmatched Collectibles!</strong>
                    </div>
                    <p>
                      At Fantasy Figurines, we take pride in curating the finest DnD figurines from renowned artists and manufacturers. Our commitment to quality ensures that each piece is a work of art worthy of display in any collector&apos;s showcase. Each figurine is made from premium materials, carefully painted with stunning attention to detail, and packaged securely to reach you in pristine condition. These figurines not only enhance your gaming sessions but also become cherished collectibles that stand the test of time. Discover the joy of owning masterfully crafted DnD figurines that will impress both you and your fellow adventurers!
                    </p>
                    <DecorationImage
                      x={-125} y={10} 
                      w={150} h={150} 
                      content="amulet_3.png"
                      />
                    <DecorationImage
                      x={-200} y={85} 
                      w={150} h={150} 
                      content="potion_1.png"
                      />
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
                    <div className="text-center mb-3">
                      <strong>The Perfect Gift for DnD Enthusiasts!</strong>
                    </div>
                    <p>
                      Looking for a gift that will delight any Dungeons and Dragons enthusiast? Our DnD figurines make unforgettable presents for birthdays, holidays, or any special occasion. Give the gift of imagination and adventure, letting your loved ones bring their favorite characters to life on the tabletop. Whether they&apos;re a dungeon master or a devoted player, these figurines will be treasured additions to their collection. With our diverse selection, finding the perfect figurine for your recipient has never been easier. Get ready to witness their eyes light up with joy when they unwrap the magic of our DnD figurines!
                    </p>
                    <DecorationImage
                      x={310} y={10} 
                      w={150} h={150} 
                      content="shield_1.png"
                      />
                    <DecorationImage
                      x={195} y={75} 
                      w={150} h={150} 
                      content="helmet_1.png"
                      />
                  </div>
                </motion.div>
            </motion.div>
        </>
    )
}