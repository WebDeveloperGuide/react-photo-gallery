import RightArrow from "./Icons/RightArrow";

function Header() {
  return (
    <div className="px-5">
      <h1 className="text-xl mb-1 mt-2 font-bold">Gallery</h1>
      <div className="flex text-[#6293f0]">
        <span>PAGES</span>
        <span className="mx-3">
          <RightArrow />
        </span>
        <span>GALLERY</span>
      </div>
    </div>
  );
}

export default Header;
