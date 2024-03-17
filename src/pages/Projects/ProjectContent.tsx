import React from "react";

const ProjectContent = ({
  title,
  challenge,
  solution,
  content,
}: {
  title?: string;
  challenge?: string;
  solution?: string;
  content?: string;
}) => {
  return (
    <section className="w-full bg-black text-white py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 lg:px-8 flex flex-col gap-4">
        <h1 className="text-lg heading-highlight font-semibold tracking-wide m-0">
          {title}
        </h1>
        {challenge && (
          <div className="text-[#ffffffb0]">
            <span className="font-semibold mr-2">Challenge :</span>
            <p className="inline">{challenge}</p>
          </div>
        )}
        {solution && (
          <div className="text-[#ffffffb0]">
            <span className="font-semibold mr-2">Solution :</span>
            <p className="inline">{solution}</p>
          </div>
        )}
        {content && (
          <div className="text-[#ffffffb0]">
            <span className="font-semibold mr-2">Outcome :</span>
            <p className="inline text-white">{content}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectContent;
