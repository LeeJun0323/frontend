import React from "react";

const Button3 = ({ onClick, children }) => {
  return (
    <div>
      <button className="p-4 bg-orange-500" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

const PlayButton = ({ moviename }) => {
  return (
    <div>
      <Button3 onClick={() => alert(`Playing ${moviename}`)}>Play</Button3>
    </div>
  );
};

const UploadButton = () => {
  return (
    <div>
      <Button3 onClick={() => alert(`Uploading!`)}>Upload Image</Button3>
    </div>
  );
};
const Toolbar = () => {
  return (
    <div>
      <PlayButton moviename={"나오유씨미"} />
      <UploadButton />
    </div>
  );
};

export default Toolbar;
