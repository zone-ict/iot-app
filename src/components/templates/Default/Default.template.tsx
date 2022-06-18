import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function DefaultTemplate({ children, ...props }: Props) {
  // We're making a generic component that extends a basic div element, so it should be able to accept div props
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <main {...props}>{children}</main>;
}
