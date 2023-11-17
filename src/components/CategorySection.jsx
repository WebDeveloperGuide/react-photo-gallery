import Button from "./Button";
function CategorySection({ currentCategory, handleSelectCategory }) {
  return (
    <>
      <Button
        text={"All"}
        active={currentCategory === "all"}
        handleSelectCategory={handleSelectCategory}
      />
      <Button
        text={"Branding"}
        active={currentCategory === "branding"}
        handleSelectCategory={handleSelectCategory}
      />
      <Button
        text={"Design"}
        active={currentCategory === "design"}
        handleSelectCategory={handleSelectCategory}
      />
      <Button
        text={"Development"}
        active={currentCategory === "development"}
        handleSelectCategory={handleSelectCategory}
      />
    </>
  );
}

export default CategorySection;
