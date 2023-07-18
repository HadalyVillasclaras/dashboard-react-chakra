import { Input, Text, Box, Textarea, Select, Button, useDisclosure, WrapItem, Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { Book } from '../../../../../core/books/models/book.model';
import { useCreateBook } from '../hooks/useCreateBook';
import { useUpdateBook } from '../hooks/useUpdateBook';

interface Props {
  currentBook?: any;
  setIsSaveButtonDisabled: (disabled: boolean) => void;
  isEdit: boolean;
}

export const BooksUpdateCreateForm = ({ currentBook, isEdit, setIsSaveButtonDisabled }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [book, setBook] = useState<any>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function submitForm() {
    console.log('hey');
    setIsSaveButtonDisabled(true);
    if (formRef.current) {
      const formData = serialize(formRef.current, { hash: true, empty: true });
      isEdit
        ? updateBook(formData)
        : createBook(formData)
    }
    setTimeout(() => {
      setIsSaveButtonDisabled(false);
    }, 3000);
  }

  async function updateBook(formData: any) {
    let newBookInfo: Book = formDataToBookObject(formData);
    await useUpdateBook(book.id, newBookInfo)
      .then(updatedBook => {
        setBook(updatedBook);
        // setToastSuccessMessage("Book updated successfully");
      }).catch((error) => {
        // setToastErrorMessage(error.response.data.error.message);
      });
  }

  async function createBook(formData: any) {
    let newBookInfo: Book = formDataToBookObject(formData);
    await useCreateBook(newBookInfo)
      .then(newBook => {
        setBook(newBook);
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
      year: formData.year,
      category: formData.category,
      language: formData.language,
      country: formData.country,
      pages: formData.pages,
      price: formData.price,
      link: formData.link,
      status: formData.status,
      isbn: formData.isbn,
      description: formData.description,
      url: formData.url
    }

    return newBook
  }

  console.log(book);
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
          <button type="reset">Reset form</button><br />
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
            <Input type="text" name="category" defaultValue={book?.category} />
          </Box>
          <Box as='section'>
            <Text as="h5">Language</Text>
            <Input type="text" name="language" defaultValue={isEdit ? book?.language : ""} />
          </Box>
          <Box as='section'>
            <Text as="h5">Country</Text>
            <Input type="text" name="country" defaultValue={isEdit ? book?.country : ""} />
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
          <Box as='section'>
            <Text as="h5">Url</Text>
            <Input type="text" name="url" defaultValue={isEdit ? book?.url : ""} />
          </Box>

        </form>
      }
    </>
  )
}
