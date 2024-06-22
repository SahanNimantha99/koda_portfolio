const Hero3 = () => {
  return (
    <div className="text-center" style={{ margin: "3vw" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "6vw",
          marginBottom: "4vw",
        }}
      >
        <p
          style={{
            color: "#7A2FF4",
            fontSize: "1vw",
            fontWeight: "bold",
            marginBottom: "1vw",
          }}
        >
          OUR SERVICES
        </p>

        <h1 style={{ color: "black", fontSize: "3vw", fontWeight: "bold" }}>
          Transforming Ideas into Reality
        </h1>
      </div>

      <div className="flex justify-center space-x-4">
        {/* Card 1 */}
        <div className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md w-full md:w-1/3 h-96">
          <div className="h-1/2 w-full overflow-hidden transition-all duration-500 group-hover:absolute group-hover:inset-0 group-hover:h-full relative rounded-lg">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-100 rounded-t-lg"
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Service One"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black transition-all duration-500 group-hover:from-black/50 group-hover:via-black/50 group-hover:to-black/50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:opacity-100 opacity-0 text-white">
              <h1 className="text-2xl font-bold mb-2">Mobile Applications</h1>
              <p className="text-sm">
                Empower your business with cutting-edge mobile apps designed to
                drive engagement and deliver seamless user experiences across
                all devices. Our innovative solutions ensure your app stands out
                in the crowded marketplace, providing intuitive navigation and
                robust functionality that keeps users coming back.
              </p>
              <button className="px-4 py-2 bg-white text-black rounded-lg mt-6">
                Show Projects
              </button>
            </div>
          </div>
          <div className="h-1/2 text-bottom mt-20 transition-opacity duration-700 group-hover:opacity-0">
            <p className="text-3xl font-bold">15+ Mobile Apps</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md w-full md:w-1/3 h-96">
          {/* Content for Card 2 */}
          <div className="h-1/2 w-full overflow-hidden transition-all duration-500 group-hover:absolute group-hover:inset-0 group-hover:h-full relative rounded-lg">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-100 rounded-t-lg"
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Service One"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black transition-all duration-500 group-hover:from-black/50 group-hover:via-black/50 group-hover:to-black/50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:opacity-100 opacity-0 text-white">
              <h1 className="text-2xl font-bold mb-2">Mobile Applications</h1>
              <p className="text-sm">
                Empower your business with cutting-edge mobile apps designed to
                drive engagement and deliver seamless user experiences across
                all devices. Our innovative solutions ensure your app stands out
                in the crowded marketplace, providing intuitive navigation and
                robust functionality that keeps users coming back.
              </p>
              <button className="px-4 py-2 bg-white text-black rounded-lg mt-6">
                Show Projects
              </button>
            </div>
          </div>
          <div className="h-1/2 text-bottom mt-20 transition-opacity duration-700 group-hover:opacity-0">
            <p className="text-3xl font-bold">15+ Mobile Apps</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md w-full md:w-1/3 h-96">
          {/* Content for Card 3 */}
          <div className="h-1/2 w-full overflow-hidden transition-all duration-500 group-hover:absolute group-hover:inset-0 group-hover:h-full relative rounded-lg">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-100 rounded-t-lg"
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Service One"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black transition-all duration-500 group-hover:from-black/50 group-hover:via-black/50 group-hover:to-black/50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:opacity-100 opacity-0 text-white">
              <h1 className="text-2xl font-bold mb-2">Mobile Applications</h1>
              <p className="text-sm">
                Empower your business with cutting-edge mobile apps designed to
                drive engagement and deliver seamless user experiences across
                all devices. Our innovative solutions ensure your app stands out
                in the crowded marketplace, providing intuitive navigation and
                robust functionality that keeps users coming back.
              </p>
              <button className="px-4 py-2 bg-white text-black rounded-lg mt-6">
                Show Projects
              </button>
            </div>
          </div>
          <div className="h-1/2 text-bottom mt-20 transition-opacity duration-700 group-hover:opacity-0">
            <p className="text-3xl font-bold">15+ Mobile Apps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
