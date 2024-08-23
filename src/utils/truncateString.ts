interface ContentProps {
  content: string;
}

export const TruncateString = ({content}: ContentProps) => {
  const max_num = 200
  return content.slice(0, max_num) + '...';
}
