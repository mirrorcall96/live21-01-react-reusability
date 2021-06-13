import {TagWrapper,Emoji,Name,GoToGithub} from './styles'

const InstructorTag = (props) => {
  // Create the InstructorTag component here
  let instructor = props;
  return <><TagWrapper onClick={() => window.open(`https://github.com/${instructor.github}`)}>
    <Emoji>{instructor.emoji}</Emoji>
    <Name>{instructor.name}</Name>
    <GoToGithub>Go to GitHub</GoToGithub>
  </TagWrapper></>
};

export default InstructorTag;
