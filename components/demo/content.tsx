import React, { useEffect } from "react";
import { initViewer, loadModel } from "./utils.js"


export const  Content = () => {

  useEffect(() => {
    const urn = "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXBzLWNvZGVwZW4tYmFja2VuZC8wMV9yYWNfYmFzaWNfc2FtcGxlX3Byb2plY3QucnZ0";
    const init = async () => {
      const viewer = await initViewer(document.getElementById('SDKViewer'), { extensions: ['Autodesk.DocumentBrowser'] });
      loadModel(viewer, urn);
    };
    init();
  }, []);

  return (
    <div>
        <div className="h-full lg:px-6">
            <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
                <div className="mt-6 gap-6 flex flex-col w-full">
                  {/* Card Section Top */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold">Simple Demo</h3>
                  </div>
                  {/* End Card Section Top */}
                </div>
            </div>
      </div>
      <div className="h-full lg:px-6">
        <div id="SDKViewer" className="forgeViewer"></div>
      </div>
   </div>);
};



