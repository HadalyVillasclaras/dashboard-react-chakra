import { Input, Text, Box, Textarea, Select, Button, useDisclosure, WrapItem, Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption } from '@chakra-ui/react'
import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Book } from '../../../../../src/books/domain/Book';
import { useCreateBook } from '../hooks/useCreateBook';
import { useUpdateBook } from '../hooks/useUpdateBook';
import  languages  from '../../../../../src/shared/dictionaries/Languages.json';
import  countries  from '../../../../../src/shared/dictionaries/Countries.json';
import { Categories } from '../../../../../src/books/domain/Category';
import { ToastContext } from '../../../shared/contexts/toast/ToastContext';


interface Props {
  currentBook?: any;
  setIsSaveButtonDisabled?: (disabled: boolean) => void;
  isEdit: boolean;
}

export const BooksUpdateCreateForm = ({ currentBook, isEdit, setIsSaveButtonDisabled }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [book, setBook] = useState<any>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const {setToastOptions} = useContext(ToastContext);

  function setToast() {
    setToastOptions(
      {
        title: 'toast',
        description: '',
        status: 'success',
        isClosable: true,
        position: 'top',
        variants: 'solid'
      }
    );
  }

  async function submitForm() {
    event?.preventDefault();
    // setIsSaveButtonDisabled(true);

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries());
      isEdit
        ? updateBook(data)
        : createBook(data)
    }
    setTimeout(() => {
      setIsSaveButtonDisabled(false);
    }, 3000);
  }

  async function updateBook(data: any) {
    let updatedBookInfo: Book = formDataToBookObject(data);
    await useUpdateBook(book.id, updatedBookInfo)
      .then(({ book, pagination }) => {
        setBook(book);
        // setToastSuccessMessage("Book updated successfully");

        navigateToBookDetail(book.id);


      }).catch((error) => {
        // setToastErrorMessage(error.response.data.error.message);
      });
  }

  async function createBook(data: any) {
    let newBookInfo: Book = formDataToBookObject(data);
    await useCreateBook(newBookInfo)
      .then(({ book, pagination }) => {
        setBook(book);
        navigateToBookDetail(book.id);
        // setToastSuccessMessage("Book created successfully");
      }).catch(error => {
        // setToastErrorMessage(error.response.data.error.message);
      })
  }

  function formDataToBookObject(formData: any) {
    let newBook: Book = {
      title: formData.title,
      subtitle: formData.subtitle,
      author: formData.author,
      year: Number(formData.year),
      category: formData.category,
      language: formData.language,
      country: formData.country,
      pages: Number(formData.pages),
      price: Number(formData.price),
      link: formData.link,
      status: formData.status,
      isbn: formData.isbn,
      description: formData.description,
    }

    return newBook
  }

  function navigateToBookDetail(bookId: number) {
    setTimeout(() => {
      navigate(`/books/detail/${bookId}`);
    }, 3000);
  }

  useEffect(() => {
    isEdit
      ? setBook(currentBook)
      : setBook({})
  }, []);
  return (
    <>
      {
        book !== undefined &&
        <form ref={formRef} >
          <Button  onClick={() => setToast()}>click</Button>
          <button type="submit" onClick={() => submitForm()}>Submit form</button>
          <Box as="header">
            <Text as="h2">Title book</Text>
          </Box>
          <Box as='section'>
            <Text as="h5">Title</Text>
            <Input type='text' name="title" defaultValue={book?.title} />
          </Box>
          <Box as='section'>
            <Text as="h5">Subtitle</Text>
            <Input type='text' name="subtitle" defaultValue={isEdit ? book?.subtitle : ""} />
          </Box>
          <Box as='section'>
            <Text as="h5">Author</Text>
            <Input type='text' name="author" defaultValue={isEdit ? book?.author : ""} />
          </Box>
          <Box as='section'>
            <Text as="h5">Year</Text>
            <Input type='number' name="year" defaultValue={isEdit ? book?.year : ""} />
          </Box>
          <Box as='section'>
            <Text as="h5">Category</Text>
            <Select name="category" defaultValue={book?.category}>
              {
                Categories.map((category, key) => {
                  return (
                    <option key={key} value={category}>
                      {category}
                    </option>
                  )
                })
              }
            </Select>
          </Box>
          <Box as='section'>
            <Text as="h5">Language</Text>
            <Select name="language" defaultValue={isEdit ? book?.language : ""}>
              {
                languages.map((language, key) => {
                  return (
                    <option key={key} value={language.code}>
                      {language.name}
                    </option>
                  )
                })
              }
            </Select>
          </Box>
          <Box as='section'>
            <Text as="h5">Country</Text>
            <Select name="country" defaultValue={isEdit ? book?.country : ""}>
              {
                countries.map((country, key) => {
                  return (
                    <option key={key} value={country.code}>
                      {country.name}
                    </option>
                  )
                })
              }
            </Select>
          </Box>
          <Box as='section'>
            <Text as="h5">Pages</Text>
            <Input type='number' name="pages" defaultValue={isEdit ? book?.pages : ""} />
          </Box>
          <Box as='section'>
            <Text as="h5">Price</Text>
            <Input type="number" name="price" defaultValue={isEdit ? book?.price : ""} />
          </Box>
          <Box as='section'>
            <Text as="h5">Link</Text>
            <Input type="text" name="link" defaultValue={isEdit ? book?.link : ""} />
          </Box>
          <Box as='section'>
            <Text as="h5">Status</Text>
            <Input type="text" name="status" defaultValue={isEdit ? book?.status : ""} />
          </Box>
          <Box as='section'>
            <Text as="h5">Isbn</Text>
            <Input type="text" name="isbn" defaultValue={isEdit ? book?.isbn : ""} />
          </Box>
          <Box as='section'>
            <Text as="h5">Description</Text>
            <Textarea name="description" defaultValue={isEdit ? book?.description : ""} />
          </Box>
        </form>
      }
    </>
  )
}
