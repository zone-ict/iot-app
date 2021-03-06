import tw from 'twin.macro';

const HeadingOne = tw.h1`text-4xl font-bold text-black`;
const HeadingTwo = tw.h2`text-3xl font-bold text-black`;
const HeadingThree = tw.h3`text-2xl font-bold text-black`;
const HeadingFour = tw.h4`text-xl font-bold text-black`;
const HeadingFive = tw.h5`text-lg font-bold text-black`;
const Body = tw.div`text-base text-black`;

export default Object.assign(Body, {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
});
