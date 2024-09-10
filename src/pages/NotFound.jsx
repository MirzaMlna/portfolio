import { Image } from "react-bootstrap";

const NotFound = () => {
  return (
    <section className="vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <Image src="./404.png" fluid />
      </div>
    </section>
  );
};

export default NotFound;
