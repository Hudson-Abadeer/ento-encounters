import Footer from "@/components/footer";
import Image from "next/image";
import classNames from "classnames";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Bugs } from "@/sanity.types";
// import { urlFor } from "@/sanity/lib/image";

type contentType = Bugs;

export default async function Home() {
  const bugsData = await client.fetch(
    groq`
    *[ _type == 'bugs'] {
        _createdAt,
        _id,
        _type,
        _updatedAt,
        class,
        family,
        location,
        "imageUrl": media.asset->url,
        name,
        scientificName,
        body
    }
    `
  );

  console.log(bugsData, "bugContent");

  return (
    <div
    //  className="font-[family-name:var(--font-rubik)]"
    >
      <main>
        <div className="hero bg-stone500 h-full min-h-[95vh] p-8 text-darkgrey500 text-2xl leading-[1.1] grid grid-cols-6 gap-4">
          <p
            className={classNames(
              "col-span-6",
              "sm:col-span-4",
              "lg:col-span-3"
            )}
          >
            Hello there fellow <em>entosiast</em>*!
            <br />
            Welcome to <strong>Ento Encounters</strong>, a record of insects
            I&apos;ve come across during my walks in the nature parks and
            reserves of <strong>Singapore</strong>.
          </p>
        </div>
        <div className="gallery p-8">
          <div className="grid grid-cols-3 gap-8">
            {bugsData.map((content: contentType) => {
              return <ContentBlock key={content._id} content={content} />;
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ContentBlock({ content }: { content: contentType }) {
  // const imageUrl = urlFor(Image);

  return (
    <div>
      <div className="">
        <p>Name</p>
        <p>{content.name}</p>
      </div>

      <div>
        <div className="">
          <p>Scientific Name</p>
          <p>{content.scientificName}</p>
        </div>
        <div className="">
          <p>Location</p>
          <p>{content.location}</p>
        </div>
      </div>

      {/*{content.media && (
        <Image
          className="rounded-xl aspect-square"
          src={imageUrl}
          alt="matis"
          width={500}
          height={500}
        />
      )} */}
    </div>
  );
}
