import Container from "../Container";

const Navbar = () => {
  return (
    <div className="fixed bg-white w-full z-10 shadow-sm">
      <div
        className="
            py-4 border-b-[1px]
        "
      >
        <Container>Roomie</Container>
      </div>
    </div>
  );
};

export default Navbar;
