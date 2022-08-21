import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import AfterPayment from '../components/AfterPayment'
import BeforePayment from '../components/BeforePayment'

const HomePage = () => {
    // We would have to states here
    // which is beforePayment and after page
const [page,setPage] = useState(1)
  return (
    <Box position={'relative'}
    width={'100vw'}
    maxHeight={"100vh"}
    >
        {/* Absolute design behind the forms */}
        <Box position={'absolute'}
        width={'100%'}
        height={["100%"]}
        maxHeight={'100%'}
        background={`linear-gradient(165deg, rgba(242,201,76,0.20351890756302526) 0%, rgba(242,153,74,0.2) 65%,
        rgba(255,255,255,1) 65%, rgba(255,255,255,1) 100%)`}
        />
        {page===1&&<BeforePayment setPage={setPage} />}
        {/* Payment modal */}
        {page===2&&<AfterPayment/>}
    </Box>
  )
}

export default HomePage