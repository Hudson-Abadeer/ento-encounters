import Footer from "@/components/footer";
import Image from "next/image";
import classNames from "classnames";

const data = [
  {
    id: "1",
    name: "",
    scientificName: "",
    location: "",
    imageUrl: "",
    alt: "",
    notes: "",
  },
  {
    id: "2",
    name: "",
    scientificName: "",
    location: "",
    imageUrl: "",
    alt: "",
    notes: "",
  },
  {
    id: "3",
    name: "",
    scientificName: "",
    location: "",
    imageUrl: "",
    alt: "",
    notes: "",
  },
];

export default function Home() {
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
            {data.map((block) => {
              return <ImageBlock key={block.id} />;
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ImageBlock() {
  return (
    <div>
      <div className="">dfwefew</div>
      <Image
        className="rounded-xl aspect-square"
        src="/images/mantis.jpeg"
        alt="matis"
        width={500}
        height={500}
      />
    </div>
  );
}
