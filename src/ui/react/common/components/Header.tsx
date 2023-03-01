import { QuestionIcon } from '@chakra-ui/icons';
import { Box, Button, ListItem,  UnorderedList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Box as='header' id='header-bo' display='flex' flexDirection='row' justifyContent='space-between'>
    <Link to="/"><h1>Logo</h1></Link>
    <UnorderedList display='flex' justifyContent='center' alignContent='center' flexWrap='wrap' gap='1rem' >
        <ListItem display='flex' alignContent='cente'>
                <Button variant='link'>
                    <a href="#"> 
                        <QuestionIcon mr='0.3rem'/>
                         Help
                    </a>
                </Button>
                <span> </span>
        </ListItem>
        <ListItem>
            <p>Logout</p>
        </ListItem>
    </UnorderedList>
</Box>
  )
}
