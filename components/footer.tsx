"use client";

import classNames from "classnames";
import { useState } from "react";

export default function Footer() {
  return (
    <footer>
      <div className="bg-stone500 text-darkgrey500 flex min-h-[40vh] w-full justify-between p-8">
        <div
          className={classNames(
            "flex flex-col gap-8",
            "md:grid md:grid-cols-8",
          )}
        >
          <div className={classNames("col-span-4 lg:col-span-3")}>
            <h3 className="font-[family-name:var(--font-alikeAngular)] text-[4rem]">
              Contact
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div
            className={classNames(
              "col-span-4 col-start-5 h-full",
              "lg:col-span-3 lg:col-start-6",
            )}
          >
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="image-license flex w-full items-center px-8 py-3">
        <p>All images are free to use.</p>
      </div>
    </footer>
  );
}

function ContactForm() {
  const [result, setResult] = useState();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    setResult("Sending..");
    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      `${process.env.NEXT_PUBLIC_WEB3FORMS_ACCESSKEY}`,
    );

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.sucess) {
      setResult("Thank you for your message!");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="border-darkgrey500 h-12 w-full rounded-md border-[0.09375rem] pl-3"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="border-darkgrey500 h-12 w-full rounded-md border-[0.09375rem] pl-3"
      />
      <textarea
        name="message"
        required
        className="border-darkgrey500 h-36 w-full rounded-md border-[0.09375rem] pl-3"
      />
      <button
        type="submit"
        className="bg-darkgrey500 text-stone500 h-14 w-full rounded-md"
      >
        Send message{" "}
      </button>

      {result && <div>form submitted!!!</div>}
    </form>
  );
}
