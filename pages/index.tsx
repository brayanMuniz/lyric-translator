import { useState } from "react";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const [file, setFile] = useState("");

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFile(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Todo: Call API
    setFile(""); // ? Proper way to set file to empty ? 
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* ? What type of files shoudl I allow ? */}
        <input type="file" value={file} onChange={handleFileChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Home;
