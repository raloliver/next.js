function responsive() {
  return (
    <div
      className="
        h-screen
        flex justify-center items-center
        bg-sky-500
        text-3xl md:text-4xl lg:text-6xl
        w-[90%] sm:w-[50%]
      "
    >
      <div className="sm:hidden">Mobile</div>
      <div className="hidden sm:flex">Desktop</div>
    </div>
  );
}

export default responsive;
