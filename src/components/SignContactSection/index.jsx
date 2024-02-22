import { IoPersonAddSharp } from "react-icons/io5";

export const SignContactSection = () => {
  return (
    <section>
      <div className="container">
        <div>
          <h3 className="title two">Adicione os seus contatos:</h3>
          <button className="btn">
            <IoPersonAddSharp size={21} />
          </button>
        </div>
      </div>
    </section>
  );
};
