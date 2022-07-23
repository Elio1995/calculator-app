const Screen = (props) => {
  return (
    <div className="flex justify-end text-4xl p-5 rounded-xl">
      <span className="truncate text-white">{props.data}</span>
    </div>
  );
};

export default Screen;
