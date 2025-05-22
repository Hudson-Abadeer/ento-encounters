import Footer from "@/components/footer";
import classNames from "classnames";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Bugs } from "@/sanity.types";
import Image from "next/image";
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
    `,
  );

  console.log(bugsData, "bugContent");

  return (
    <div
    //  className="font-[family-name:var(--font-rubik)]"
    >
      <main>
        <div className="hero bg-stone500 text-darkgrey500 grid h-full min-h-[95vh] grid-cols-6 gap-4 p-8 text-2xl leading-[1.1]">
          <p
            className={classNames(
              "col-span-6",
              "sm:col-span-4",
              "lg:col-span-3",
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
    <div className="relative h-full w-full">
      <div className="text-layer absolute top-0 left-0 flex h-full flex-col justify-between p-4 uppercase">
        <div>
          <p className="text-xs">Name</p>
          <p className="text-5xl leading-11 font-bold tracking-tight">
            {content.name}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 last:pb-0 [&>div]:pb-4">
            <div>
              <p className="text-xs">Scientific Name</p>
              <p className="text-3xl leading-7 font-bold tracking-tight">
                {content.scientificName}
              </p>
            </div>
            <div>
              <p className="text-xs">Location</p>
              <p className="text-3xl leading-7 font-bold tracking-tight">
                {content.scientificName}
              </p>
            </div>
            <div>
              <p className="text-xs">Notes</p>
              <p className="text-xs leading-6 tracking-tight capitalize not-even:font-bold">
                {content.scientificName}
              </p>
            </div>
          </div>
          {/* <div className="">
          <p>Family</p>
          <p>{content.family?.map()}</p>
        </div> */}
          {/* {content.location && (
            <div className="">
              <p className="text-xs">Location</p>
              {content.location.map((loc) => {
                console.log(loc, "LOCK");
                return <p key={loc._key}></p>;
              })}
            </div>
          )} */}
        </div>
      </div>

      <Image
        className="rounded-lg"
        src="/images/mantis2.png"
        alt=""
        width={500}
        height={500}
      />

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
