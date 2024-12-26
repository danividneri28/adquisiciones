import React from "react";
import Titulo from '../components/Titulo'
import Regresar from "./Regresar";
export default function TutorialViewer({ fileUrl, buttonText, buttonClassName }) {
  return (
    <div className="">
      <Regresar enlace="/tutoriales"/>
      <Titulo text="TUTORIAL" className="my-4"/>
      <div className="h-max">
        <iframe src={fileUrl} className="h-[96vh] w-full" title="Tutorial Viewer"></iframe>
        <a href={fileUrl} download target="_blank" rel="noopener noreferrer" className="flex justify-center">
          <button className={`bg-customRed text-white py-2 px-4 rounded mt-4 hover:bg-customRed transition ${buttonClassName}`}>
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
}