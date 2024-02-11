import { useEffect } from "react";

function Title() {
  useEffect(() => {
    // mount
    let intervel = setInterval(() => {
      console.log("Fetching API....");
    }, 2000);

    //unmount
    return () => {
      console.log("Unmounted");
      clearInterval(intervel);
    };
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
}

export default Title;
