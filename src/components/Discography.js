import React from "react";
import riot from "../assets/riot.webp";
import sauce from "../assets/PiperSauce.png";
import paddy from "../assets/padraig.webp";
import bottle from "../assets/tgb.webp";
import tgblogo from "../assets/tgblogo.png";

const Discography = () => {
  const albums = [
    {
      title: "Bottle Hymns",
      releaseDate: "2023-06-28",
      cover: bottle,
      description:
        "The Grinning Barrett's first full length album: 7 original songs, and 4 re-imagined traditional numbers, all with the Barretts signature mashup of bagpipes, banjo, and fiddle laid over a bedrock of blistering punk.",
      link: "https://www.thegrinningbarretts.com/product/bottle-hymns-lp-on-green-and-gold-vinyl/",
      listen: "",
    },
    {
      title: "Hope Like Hell - EP",
      releaseDate: "2022-03-17",
      cover: sauce,
      description:
        "The title track, Hope Like Hell, serves as a well-wish to good friends through trying times as well as a searing takedown of the intersection between anti-Semitism & anti-Science rhetoric currently honking its horn at maximum volume. Musically, the track combines the rhythm section interplay of Rancid with Elton John style Rock piano. The male vocal is reminiscent of Dickie Barrett while the female vocal brings a Chrissie Hynde/Joan Jett vibe to the party. The combination of male & female lead vocals on this recording is like a mash-up of Blondie & The Mighty Mighty Bosstones, yet it works. Fans of The Interrupters will get a kick out of this badass banger by the Grinning Barretts.  This album is currently only available for purchase as a digital download.",
      link: "https://thegrinningbarretts.bandcamp.com/album/h-l-h",
      listen: "",
    },
    {
      title: "The Riot - EP",
      releaseDate: "2018-08-18",
      cover: riot,
      description:
        "The 2nd EP from Van Isle Celt-Punk upstarts The Grinning Barretts. Dedicated to the good people at Riot Brewing Co. in Chemainus BC. We love you guys.",
      link: "https://www.thegrinningbarretts.com/product/the-grinning-barretts-the-riot-ep/",
      listen: "",
    },
    {
      title: "The St. Padraig's - EP",
      releaseDate: "2018-03-17",
      cover: paddy,
      description: "The first EP from The Grinning Barretts!",
      link: "https://www.thegrinningbarretts.com/product/the-grinning-barretts-the-st-padraigs-ep/",
      listen: "",
    },
    // Add more albums as needed
  ];

  return (
    <section id="discography" className="py-8 bg-medBackground dark:bg-medDarkBackground">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mt-6 mb-6 text-center text-gray-800 dark:text-primaryText">
          Aaron's Discography with:
        </h2>
        <div className="flex justify-center items-center">
          <img src={tgblogo} className="w-2/3 md:w-1/3" alt="The Grinning Barretts Logo"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 md:p-20">
          {albums.map((album, index) => (
            <div
              className="album border-2 rounded-md shadow-lg p-4 flex flex-col items-center text-center border-linkBackground dark:border-borderColor bg-medBackground dark:bg-darkBackground"
              key={index}
            >
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-primaryText">{album.title}</h3>
              <p className="text-xl text-gray-800 dark:text-secondaryText">Released: {album.releaseDate}</p>
              <img
                src={album.cover}
                alt={`Cover of ${album.title}`}
                className="w-2/3 md:w-1/3 mb-4"
              />
              <p className="mb-2 text-lg md:text-xl text-gray-800 dark:text-secondaryText">{album.description}</p>
              <div className="flex flex-col md:flex-row">
                <a
                  href={album.link}
                  className="text-lg md:text-2xl text-blue-800 dark:text-accentColor font-bold hover:underline bg-linkBackground dark:bg-borderColor p-4 md:mr-2 rounded-md mb-4 md:mb-0"
                >
                  Purchase the Album Here!
                </a>
                {album.listen && (
                  <a
                    href={album.listen}
                    className="text-lg md:text-2xl text-blue-800 dark:text-accentColor font-bold hover:underline bg-gray-200 dark:bg-borderColor p-4 md:ml-2 rounded-md"
                  >
                    Listen to the Album Here!
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discography;
