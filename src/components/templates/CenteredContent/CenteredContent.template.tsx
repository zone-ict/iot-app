import React from 'react';
import tw, { styled } from 'twin.macro';

const Container = styled.main`
  ${tw`w-full flex justify-center`}
`;

const Content = styled.div`
  ${tw`w-full sm:max-w-md lg:max-w-xl xl:max-w-2xl flex flex-col`}
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function CenteredContent({ children, ...props }: Props) {
  return (
    // We're making a generic component that extends a basic div element, so it should be able to accept div props
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container {...props}>
      <Content>{children}</Content>
    </Container>
  );
}
