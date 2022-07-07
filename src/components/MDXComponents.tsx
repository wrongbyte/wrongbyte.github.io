import { CodeBlock, rainbow, dracula } from 'react-code-blocks';
import { useTheme } from 'next-themes';

interface CodeProps extends React.ComponentPropsWithoutRef<'code'> {
  className?: string;
}

interface aProps extends React.ComponentPropsWithoutRef<'a'> {
  href?: string;
}

export const Code = (props: CodeProps) => {
  const { theme } = useTheme();

  if (!props.className) return <span className="code">{props.children}</span>;

  return (
    <div className="codeBlock">
      <CodeBlock
        text={props.children}
        language={props.className.split('-')[1]}
        theme={theme === 'light' ? rainbow : dracula}
      />
    </div>
  );
};

export const A = (props: aProps) => {
  return (
    <a className="article-link" href={props.href}>
      {props.children}
    </a>
  );
};
