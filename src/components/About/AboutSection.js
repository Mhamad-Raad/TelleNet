import LineSeperator from '.././UI/LineSeperator';

const AboutSection = () => {
  return <section className="flex flex-col gap-[10px]">
    <h2 className="ml-[20px] text-textColor text-[28px] font-black">Get to Know Us</h2>
    <LineSeperator />
    
    <div className="flex px-[10px] gap-[25px]">
      <p>
        <span className="font-bold">TelleNet<sub>Pro</sub></span> is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. We are driven by the excitement of building technologies, inventing products, and providing services that change lives. We embrace new ways of doing things, make decisions quickly, and are not afraid to fail. We have the scope and capabilities of a large company, and the spirit and heart of a small one.
      </p>
    </div>
  </section>;
};

export default AboutSection;
