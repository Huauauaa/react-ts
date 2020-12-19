export interface TsxDemoProps {
  name?: string;
}

export default function TsxDemo(props: TsxDemoProps) {
  const { name } = props;
  return <p>{name || 'TsxDemo'}</p>;
}
