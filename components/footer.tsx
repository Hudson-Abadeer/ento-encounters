export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between w-full h-[60vh] bg-stone500 text-darkgrey500 p-8">
        <div>
          <h3 className="font-[family-name:var(--font-alikeAngular)] text-[4rem]">
            Contact
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>form here</div>
      </div>
      <div className="image-license w-full flex items-center px-8 py-3">
        <p>All images are free to use.</p>
      </div>
    </footer>
  );
}
