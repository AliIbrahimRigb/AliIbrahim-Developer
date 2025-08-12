import { useEffect, useRef, useState} from "react";

export default function Haeder() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Handd = useRef(null);
  useEffect(() => {
    const Hand = () => {
      setIsMobile(window.innerWidth > 540);
    };
    Hand();

    window.addEventListener("resize", Hand);
    return () => {
      window.removeEventListener("resize", Hand);
    };
  });
  const [itemHeader, setItemHeader] = useState([
    "Feactures",
    "pricing",
    "help",
    "Blog",
    "About su",
  ]);
  return (
    <section>
      <div className="continer pt-5">
        <div className="text-[#f1f1f1] items-center font-medium flex justify-around">
          <div>
            <h1>AliIbrahim</h1>
          </div>
          {isMobile ? (
            <div className="flex flex-row items-center justify-evenly gap-7">
              <ul className="flex gap-9 mr-6 ">
                {itemHeader.map((item) => (
                  <li className="relative group-after:content-[''] after:absolute after:block after:top-7 after:left-0 after:w-full after:h-1 after:bg-red-600 after:opacity-0 after:transition-opacity group-hover:after:opacity-100 hover:after:text-cyan-500">{item}</li>
                ))}
              </ul>
              <div className="flex flex-row gap-4 text-black font-medium ">
                <button className="bg-[#e9dcff] px-5 py-2 rounded-xl">
                  Log in
                </button>
                <button className="bg-[#e9dcff] px-5 rounded-xl ">
                  Sign un
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* زر الموبايل منيو */}
              <div className="flex flex-row gap-4 text-black font-medium ">
                <button className="bg-[#e9dcff] px-5 py-2 rounded-xl">
                  Log in
                </button>
                <button className="bg-[#e9dcff] px-5 rounded-xl ">
                  Sign un
                </button>
              </div>
              <button ref={Handd} onClick={() => setIsMenuOpen(!isMenuOpen) }>
                ☰
              </button>

              {/* المينيو تظهر تحت الزر لما يضغط */}

              {isMenuOpen && (
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "black",
                    top: "60px",
                    left: "4%",

                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    padding: "1rem",
                    borderRadius: "5px",
                    height:'100vh'
                  }}
                >
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      alignItems: "center",
                    }}
                  >
                    {itemHeader.map((item, index) => (
                      <li
                        key={index}
                        style={{ padding: "0.5rem 0", fontSize: "1.5em" }}
                        className="text-white hover:text-black hover:bg-[#e9dcff] w-[50vh] hover:rounded-[15px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
