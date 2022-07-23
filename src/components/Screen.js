const Screen = (props) => {
  return (
    <div className="flex justify-end h-20 text-4xl p-5 rounded-xl">
      <span className="truncate text-white font-black">{props.data}</span>
    </div>
  );
};

export default Screen;
