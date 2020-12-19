interface Props {
  name?: string;
}

export default function TsxDemo(props: Props) {
  const { name } = props;
  return <p>{name || 'TsxDemo'}</p>;
}
