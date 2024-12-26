import React, { useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "./grapesjs.scss";
const Grapes = () => {
  const editor = useRef(null);

  useEffect(() => {
    if (!editor.current) {
      editor.current = grapesjs.init({
        // stylePrefix: "editor_container ",
        container: "#gjs",
        noticeOnUnload: true,
        fromElement: true,
        height: "100vh",
        width: "auto",
        storageManager: false,
        // panels: { defaults: [] },
        blockManager: {
          // appendTo: "#blocks",
          blocks: [
            {
              id: "section", // id is mandatory
              label: "<b>Section</b>", // You can use HTML/SVG inside labels
              category: "Basic",
              attributes: { class: "gjs-block-section fa fa-puzzle-piece" },
              content: `<section>
                <h1>This is a simple title</h1>
                <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
              </section>`,
            },
            {
              id: "text",
              label: "Text",
              category: "Basic",
              content: '<div data-gjs-type="text">Insert your text here</div>',
            },
            {
              id: "image",
              label: "Image",
              category: "Basic",
              // Select the component once it's dropped
              select: true,
              // You can pass components as a JSON instead of a simple HTML string,
              // in this case we also use a defined component type `image`
              content: { type: "image" },
              // This triggers `active` event on dropped components and the `image`
              // reacts by opening the AssetManager
              activate: true,
            },
          ],
        },
      });
    }
  }, []);

  return (
    <div id="gjs">
      <h1>Hello World Component!</h1>
      {/* <div id="blocks"></div> */}
    </div>
  );
};

export default Grapes;
