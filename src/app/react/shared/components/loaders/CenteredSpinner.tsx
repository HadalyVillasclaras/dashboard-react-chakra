import { Spinner } from '@chakra-ui/react'

export const CenteredSpinner = () => {
  return (
    <div style={{ justifyContent: 'center', display: 'flex', width:"100%" }}>
      <Spinner />
    </div>
  )
}
