import {
    Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { usePaymentInputs } from "react-payment-inputs";

const BillingInfo = (props) => {
    const {setTab} = props
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs();
    const [cardNumber,setCardNumber] = useState()
    const handleChangeCardNumber = (e)=>{
        setCardNumber(e.target.value)
    }
  return (
    <form>
      <Flex marginTop={["76px"]} direction={["column"]} rowGap={["47px"]}>
        <FormControl>
          <FormLabel
            display={"flex"}
            columnGap={["10px"]}
            fontSize={["20"]}
            fontWeight={[700]}
          >
            Name on Card
            <Image src="/svgs/asteriks.svg" />
          </FormLabel>
          <Input
            fontSize={["20px"]}
            background={"white"}
            height={["64px"]}
            border={"1px solid #4E598C"}
          />
        </FormControl>

        {/*Email  */}

        <FormControl>
          <FormLabel
            display={"flex"}
            columnGap={["10px"]}
            fontSize={["20"]}
            fontWeight={[700]}
          >
            Card Type
            <Image src="/svgs/asteriks.svg" />
          </FormLabel>
          <Select
            fontSize={["20px"]}
            background={"white"}
            height={["64px"]}
            border={"1px solid #4E598C"}
          >
            <option>Mastercard</option>
            <option>Verve</option>
            <option>Visa</option>
          </Select>
        </FormControl>

        {/* Card Details */}

          <Flex
          justifyContent={["space-between"]}
          >
            <FormControl
             maxWidth={["301px"]}
            >
              <FormLabel
                display={"flex"}
                columnGap={["10px"]}
                fontSize={["20"]}
                fontWeight={[700]}
              >
                Card Details
                <Image src="/svgs/asteriks.svg" />
              </FormLabel>
              <Input
              {...getCardNumberProps({ onChange: handleChangeCardNumber })}
                fontSize={["20px"]}
                maxWidth={["391px"]}
                background={"white"}
                height={["64px"]}
                border={"1px solid #4E598C"}
              />
            </FormControl>
            <FormControl
             maxWidth={["150px"]}
            >
              <FormLabel

                display={"flex"}
                columnGap={["5px"]}
                fontSize={["20"]}
                fontWeight={[700]}
              >
                Expiry date
                <Image src="/svgs/asteriks.svg" />
              </FormLabel>
              <Input
              {...getExpiryDateProps()}
                fontSize={["20px"]}
                background={"white"}
                height={["64px"]}
                maxWidth={["132px"]}
                border={"1px solid #4E598C"}
              />
            </FormControl>
            <FormControl
             maxWidth={["104px"]}
            >
              <FormLabel
                display={"flex"}
                columnGap={["10px"]}
                fontSize={["20"]}
                fontWeight={[700]}
              >
                CVV
                <Image src="/svgs/asteriks.svg" />
              </FormLabel>
              <Input
              {...getCVCProps()} 
                fontSize={["20px"]}
                maxWidth={["104px"]}
                background={"white"}
                height={["64px"]}
                border={"1px solid #4E598C"}
              />
            </FormControl>
          </Flex>
        </Flex>
        <Flex columnGap={["78px"]} paddingBottom={["111px"]} marginTop={["80px"]}>
        {/* NExt Button */}
        <Button
          height={["58px"]}
          onClick={()=>{setTab(2)}}
          _active={{ opacity: 0.3 }}
          _hover={{ opacity: 0.7 }}
          width={["238px"]}
          borderRadius={["10px"]}
          color={["#F7F7FF"]}
          background={`linear-gradient(180deg, #F2C94C 0%, #F2994A 100%);`}
        >
          Next
        </Button>

        <Button
          background={"none"}
          height={["58px"]}
          _active={{ opacity: 0.3 }}
          _hover={{ opacity: 0.7 }}
          color={"#4E598C"}
        >
          Cancel Payment
        </Button>
      </Flex>
    </form>
  );
};

export default BillingInfo;
