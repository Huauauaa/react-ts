function Child(props: any) {
  return (
    <div className="child">
      {props?.info?.text}
      {props?.name}
    </div>
  );
}

export default Child;
