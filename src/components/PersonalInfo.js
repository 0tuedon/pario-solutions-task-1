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
import React from "react";
import PropTypes from "prop-types";
import { statesInNigeria } from "../utils/stateData";

const PersonalInfo = (props) => {
    const {setTab} = props
  return (
    <form>
      <Flex marginTop={["76px"]} direction={["column"]} rowGap={["47px"]}>
        <FormControl>
          <FormLabel fontSize={["20"]} fontWeight={[700]}>
            Name
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
            Email Address
            <Image src="/svgs/asteriks.svg" />
          </FormLabel>
          <FormHelperText
            marginBottom={["24px"]}
            color={"#817E9E"}
            fontSize={["16px"]}
          >
            The purchase reciept would be sent to this address
          </FormHelperText>
          <Input
            fontSize={["20px"]}
            background={"white"}
            height={["64px"]}
            border={"1px solid #4E598C"}
          />
        </FormControl>
        {/* f */}

        <FormControl>
          <FormLabel fontSize={["20"]} fontWeight={[700]}>
            Address 1
          </FormLabel>
          <Input
            fontSize={["20px"]}
            background={"white"}
            height={["64px"]}
            border={"1px solid #4E598C"}
          />
        </FormControl>

        {/* Address */}
        <FormControl>
          <FormLabel fontSize={["20"]} fontWeight={[700]}>
            Address 2
          </FormLabel>
          <Input
            fontSize={["20px"]}
            background={"white"}
            height={["64px"]}
            border={"1px solid #4E598C"}
          />
        </FormControl>

        {/* Flex for Local goverement */}
        <Flex justifyContent={["space-between"]}>
          <FormControl maxWidth={["420px"]}>
            <FormLabel fontSize={["20"]} fontWeight={[700]}>
              Local Government
            </FormLabel>
            <Input
              maxWidth={["420px"]}
              fontSize={["20px"]}
              background={"white"}
              height={["64px"]}
              border={"1px solid #4E598C"}
            />
          </FormControl>

          <FormControl maxWidth={["260px"]}>
            <FormLabel fontSize={["20"]} fontWeight={[700]}>
              State
            </FormLabel>
            <Select
              fontSize={["20px"]}
              background={"white"}
              maxWidth={["260px"]}
              height={["64px"]}
              border={"1px solid #4E598C"}
            >
              {statesInNigeria.map((data) => (
                <option value={data} key={data}>
                  {data}
                </option>
              ))}
            </Select>
          </FormControl>
        </Flex>
      </Flex>
      <Flex columnGap={["78px"]} paddingBottom={["111px"]} marginTop={["80px"]}>
        {/* NExt Button */}
        <Button
          height={["58px"]}
          onClick={()=>{setTab(1)}}
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

PersonalInfo.propTypes = {
  setTab: PropTypes.func.isRequired,
  tab:PropTypes.number
};
export default PersonalInfo;
